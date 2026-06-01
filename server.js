const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFile } = require("child_process");

loadLocalEnv();

const PORT = Number(process.env.PORT || 5233);
const root = __dirname;
const defaultWorkspaceRoot = path.join(os.homedir(), "Documents", "Codex", "Workspace");
const workspaceRoot = path.resolve(process.env.WORKSPACE_ROOT || defaultWorkspaceRoot);
const captureDir = path.join(os.tmpdir(), "brand-kit-studio-captures");
const profileDir = path.join(root, "data", "profiles");
const chromeCandidates = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium"
];

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8"
};

function loadLocalEnv() {
  const envPath = path.join(__dirname, ".env.local");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [rawKey, ...rest] = trimmed.split("=");
    const key = rawKey.trim();
    let value = rest.join("=").trim();
    if (!key || process.env[key]) continue;
    value = value.replace(/^['"]|['"]$/g, "");
    process.env[key] = value;
  }
}

function openAIStatus() {
  return {
    ok: true,
    configured: Boolean(process.env.OPENAI_API_KEY),
    model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-2",
    quality: process.env.OPENAI_IMAGE_QUALITY || "high"
  };
}

function designScoutStatus() {
  const provider = process.env.DESIGN_SCOUT_PROVIDER || "builtin";
  const httpUrl = process.env.DESIGN_SCOUT_HTTP_URL || "";
  if (provider === "designmd-cli") {
    return {
      ok: true,
      provider,
      configured: Boolean(process.env.DESIGNMD_API_KEY),
      mode: "live-cli"
    };
  }
  return {
    ok: true,
    provider,
    configured: provider !== "builtin" && Boolean(httpUrl),
    mode: provider !== "builtin" && httpUrl ? "live-http" : "builtin"
  };
}

async function openAIConfig(req, res) {
  try {
    const body = await readJsonBody(req);
    const apiKey = String(body.apiKey || process.env.OPENAI_API_KEY || "").trim();
    const model = String(body.model || "gpt-image-2").trim();
    const quality = String(body.quality || "high").trim();

    if (!apiKey) throw new Error("Paste an OpenAI API key first.");
    if (!apiKey.startsWith("sk-")) throw new Error("That does not look like an OpenAI API key.");

    const envPath = path.join(root, ".env.local");
    const content = [
      `OPENAI_API_KEY=${apiKey}`,
      `OPENAI_IMAGE_MODEL=${model}`,
      `OPENAI_IMAGE_QUALITY=${quality}`,
      ""
    ].join("\n");

    fs.writeFileSync(envPath, content, { mode: 0o600 });
    process.env.OPENAI_API_KEY = apiKey;
    process.env.OPENAI_IMAGE_MODEL = model;
    process.env.OPENAI_IMAGE_QUALITY = quality;

    console.log(`OpenAI image generation configured locally with ${model}.`);
    json(res, 200, openAIStatus());
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const clean = decoded === "/" ? "/index.html" : decoded;
  const resolved = path.normalize(path.join(root, clean));
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024 * 64) {
        req.destroy();
        reject(new Error("Request body too large."));
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON."));
      }
    });
    req.on("error", reject);
  });
}

function json(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

async function postJson(url, payload, token = "") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    },
    body: JSON.stringify(payload)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error?.message || result.error || `Design scout provider failed with HTTP ${response.status}.`);
  }
  return result;
}

function normalizeScoutReferences(result) {
  const rows = Array.isArray(result.results) ? result.results
    : Array.isArray(result.references) ? result.references
      : [];
  return rows.slice(0, 6).map((item, index) => ({
    title: item.title || item.companyName || item.company || item.name || `Reference ${index + 1}`,
    url: item.pageUrl || item.url || item.imageUrl || "",
    description: item.visionDescription || item.description || item.summary || "",
    category: item.category || "",
    tags: Array.isArray(item.tags) ? item.tags.slice(0, 6) : []
  }));
}

function normalizeDesignMdResults(rows, query = "") {
  const queryWords = String(query || "").toLowerCase().split(/[^a-z0-9-]+/).filter((word) => word.length > 2);
  const scored = (Array.isArray(rows) ? rows : []).map((item, index) => {
    const text = [
      item.name,
      item.description,
      ...(Array.isArray(item.tags) ? item.tags : [])
    ].join(" ").toLowerCase();
    const tagScore = Array.isArray(item.tags) ? item.tags.filter((tag) => queryWords.includes(String(tag).toLowerCase())).length * 5 : 0;
    const wordScore = queryWords.filter((word) => text.includes(word)).length;
    const popularityScore = Math.min(Number(item.download_count || 0) / 500, 4) + Math.min(Number(item.like_count || 0), 5) / 2;
    return { item, score: tagScore + wordScore + popularityScore - index * 0.01 };
  }).sort((a, b) => b.score - a.score);

  return scored.slice(0, 6).map(({ item }, index) => ({
    title: item.name || item.slug || `DESIGNmd reference ${index + 1}`,
    url: item.url || "",
    description: item.description || "",
    category: item.license ? `License: ${item.license}` : "",
    tags: Array.isArray(item.tags) ? item.tags.slice(0, 6) : [],
    colors: Array.isArray(item.preview_colors) ? item.preview_colors.slice(0, 8) : [],
    downloads: item.download_count,
    likes: item.like_count
  }));
}

function designMdTagsForQuery(query) {
  const text = String(query || "").toLowerCase();
  const tags = [];
  const pairs = [
    ["glass", "glassmorphism"],
    ["glassmorphism", "glassmorphism"],
    ["premium", "premium"],
    ["luxury", "luxury"],
    ["modern", "modern"],
    ["clean", "clean"],
    ["minimal", "minimal"],
    ["light", "light"],
    ["dark", "dark"],
    ["dashboard", "dashboard"],
    ["saas", "saas"],
    ["education", "education"],
    ["learning", "education"],
    ["mobile", "mobile-app"],
    ["landing", "landing-page"],
    ["editorial", "editorial"],
    ["fintech", "fintech"],
    ["developer", "devtools"],
    ["playful", "playful"]
  ];
  for (const [needle, tag] of pairs) {
    if (text.includes(needle) && !tags.includes(tag)) tags.push(tag);
  }
  if (!tags.length) tags.push("clean", "modern");
  return tags.slice(0, 3);
}

async function callDesignMdScout(query) {
  const env = {
    ...process.env,
    DESIGNMD_API_KEY: process.env.DESIGNMD_API_KEY || "",
    DESIGNMD_API_URL: process.env.DESIGNMD_API_URL || "https://designmd.ai/api/v1"
  };
  const tags = designMdTagsForQuery(query);
  const args = ["--yes", "designmd", "search", query, "--limit", "6", "--sort", "trending", "--json"];
  for (const tag of tags) args.push("--tag", tag);
  let output = await execFileText("npx", args, {
    env,
    timeout: 25000,
    maxBuffer: 1024 * 1024 * 4
  });
  let rows = JSON.parse(output || "[]");

  if (!Array.isArray(rows) || rows.length === 0) {
    output = await execFileText("npx", ["--yes", "designmd", "search", query, "--limit", "6", "--sort", "trending", "--json"], {
      env,
      timeout: 25000,
      maxBuffer: 1024 * 1024 * 4
    });
    rows = JSON.parse(output || "[]");
  }

  for (const fallbackQuery of [...tags, "saas", "clean"]) {
    if (Array.isArray(rows) && rows.length > 0) break;
    output = await execFileText("npx", ["--yes", "designmd", "search", fallbackQuery, "--limit", "6", "--sort", "trending", "--json"], {
      env,
      timeout: 25000,
      maxBuffer: 1024 * 1024 * 4
    });
    rows = JSON.parse(output || "[]");
  }

  return normalizeDesignMdResults(rows, query);
}

async function designScout(req, res) {
  let fallback = {};
  try {
    const body = await readJsonBody(req);
    const query = String(body.query || "").trim();
    fallback = body.fallback && typeof body.fallback === "object" ? body.fallback : {};
    const provider = process.env.DESIGN_SCOUT_PROVIDER || "builtin";
    const url = process.env.DESIGN_SCOUT_HTTP_URL || "";
    const token = process.env.DESIGN_SCOUT_HTTP_TOKEN || "";

    if (!query) throw new Error("Design Scout needs a reference query.");

    if (provider === "designmd-cli") {
      const references = await callDesignMdScout(query);
      json(res, 200, {
        ok: true,
        mode: references.length ? "live-cli" : "builtin",
        provider,
        configured: Boolean(process.env.DESIGNMD_API_KEY),
        references,
        fallback,
        note: references.length ? "" : "DESIGNmd returned no references; using built-in Auto Design Scout."
      });
      return;
    }

    if (provider === "builtin" || !url) {
      json(res, 200, {
        ok: true,
        mode: "builtin",
        provider,
        configured: false,
        references: [],
        fallback,
        note: "Using built-in Auto Design Scout. Configure DESIGN_SCOUT_HTTP_URL to enrich this with live references."
      });
      return;
    }

    const result = await postJson(url, {
      query,
      platform: "desktop",
      limit: 8,
      project: body.project || {},
      fallback
    }, token);

    json(res, 200, {
      ok: true,
      mode: "live-http",
      provider,
      configured: true,
      references: normalizeScoutReferences(result),
      rawCount: Array.isArray(result.results) ? result.results.length : undefined,
      fallback
    });
  } catch (error) {
    json(res, 200, {
      ok: true,
      mode: "fallback",
      provider: process.env.DESIGN_SCOUT_PROVIDER || "builtin",
      configured: false,
      references: [],
      fallback,
      warning: error.message
    });
  }
}

function isAllowedLocalUrl(value) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }

  const host = parsed.hostname.toLowerCase();
  const protocolAllowed = parsed.protocol === "http:" || parsed.protocol === "https:";
  const hostAllowed = host === "localhost" || host === "127.0.0.1" || host === "::1";
  return protocolAllowed && hostAllowed;
}

function findChrome() {
  return chromeCandidates.find((candidate) => fs.existsSync(candidate));
}

function cleanupCaptureFiles(file, userDataDir) {
  fs.rm(file, { force: true }, () => {});
  fs.rm(userDataDir, { recursive: true, force: true }, () => {});
}

function assertLocalUrlReachable(value) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(value);
    const client = parsed.protocol === "https:" ? https : http;
    const request = client.request(parsed, { method: "GET", timeout: 5000 }, (response) => {
      response.resume();
      if (response.statusCode && response.statusCode < 500) {
        resolve();
        return;
      }
      reject(new Error(`Local preview responded with HTTP ${response.statusCode || "error"}.`));
    });
    request.on("timeout", () => {
      request.destroy(new Error("Local preview timed out."));
    });
    request.on("error", () => {
      reject(new Error("Local preview URL is not reachable. Start the target app, then try again."));
    });
    request.end();
  });
}

function execFileText(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    execFile(command, args, options, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(String(stdout || ""));
    });
  });
}

function slugifyName(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readTextIfExists(filePath, maxChars = 12000) {
  try {
    if (!fs.existsSync(filePath)) return "";
    return fs.readFileSync(filePath, "utf8").slice(0, maxChars);
  } catch {
    return "";
  }
}

function findFileMatch(rootDir, matcher, options = {}) {
  const maxDepth = options.maxDepth ?? 4;
  const ignore = new Set(["node_modules", ".git", "dist", "build", ".next", ".vercel", "coverage", "data"]);
  function walk(dir, depth) {
    if (depth > maxDepth) return "";
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return "";
    }
    for (const entry of entries) {
      if (ignore.has(entry.name)) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isFile() && matcher(entry.name, fullPath)) return fullPath;
      if (entry.isDirectory()) {
        const found = walk(fullPath, depth + 1);
        if (found) return found;
      }
    }
    return "";
  }
  return walk(rootDir, 0);
}

function projectArchetype(text) {
  const lower = text.toLowerCase();
  if (/univenture/.test(lower)) return "Consumer AI studio";
  const tradingSignals = [
    /profitpilot/,
    /trading/,
    /crypto/,
    /paper trading/,
    /live money/,
    /wallet/,
    /positions/,
    /p\/l/,
    /strategy tournament/,
    /market radar/,
    /copy watch/
  ].filter((pattern) => pattern.test(lower)).length;
  if (tradingSignals >= 3 || /ai-crypto-trading-assistant|#\s*profitpilot|profitpilot project document/.test(lower)) return "Proof-first trading command center";
  if (/consumer ai|venture studio|unicorn|apps|portfolio/.test(lower)) return "Consumer AI studio";
  if (/real estate|realtor|broker|referral|lead exchange|client handoff/.test(lower)) return "Trust-first marketplace";
  if (/romance|publishing|kindle|reader-facing imprint|novel|manuscript/.test(lower)) return "Editorial/luxury brand";
  if (/video|ad|ugc|creative|storyboard|youtube/.test(lower)) return "Creative production tool";
  if (/command|dashboard|os|automation|analytics|operator/.test(lower)) return "Operator dashboard";
  if (/wellness|fitness|health|nutrition|glow|kid|learning|education/.test(lower)) return "Consumer/wellness product";
  return "General product";
}

function strategicBrandBoost(projectName) {
  const lower = projectName.toLowerCase();
  if (lower.includes("univenture")) return [50, "new strategic studio brand"];
  if (lower.includes("ai-crypto") || lower.includes("profitpilot")) return [44, "active proof-first trading command center"];
  if (lower === "lingolead" || lower.includes("lingo")) return [42, "active public marketplace brand"];
  if (lower.includes("romance-empire")) return [38, "active publishing/imprint brand system"];
  if (lower.includes("smart-video")) return [32, "active visual creative tool"];
  if (lower.includes("youtube-strategy")) return [28, "active content strategy product"];
  if (lower.includes("zen-awake")) return [24, "consumer-facing app brand"];
  if (lower.includes("kidwiz")) return [22, "consumer education app"];
  if (lower.includes("nutrigazm")) return [20, "public consumer/commerce brand"];
  if (lower.includes("offer-os")) return [18, "commercial product surface"];
  if (lower.includes("spiral-combat-command-center")) return [16, "active operator command center"];
  return [0, ""];
}

function humanizeProjectName(value) {
  return String(value || "")
    .replace(/^@[^/]+\//, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function parseJsonSafely(text) {
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

function workspaceRegistryText() {
  return readTextIfExists(path.join(workspaceRoot, "PROJECT_REGISTRY.md"), 80000);
}

function localUrlForProject(projectName, registryText = workspaceRegistryText()) {
  const slug = slugifyName(projectName);
  if (!slug || !registryText) return "";
  const lines = registryText.split(/\r?\n/);
  for (const line of lines) {
    if (!slugifyName(line).includes(slug)) continue;
    const match = line.match(/https?:\/\/(?:127\.0\.0\.1|localhost|\[?::1\]?):\d+[^\s|)]*/i);
    if (match) return match[0].replace(/[`,;.)]+$/g, "");
  }
  return "";
}

function readProjectSources(projectPath) {
  const packageText = readTextIfExists(path.join(projectPath, "package.json"), 10000);
  return {
    name: path.basename(projectPath),
    packageText,
    packageJson: parseJsonSafely(packageText),
    readme: readTextIfExists(path.join(projectPath, "README.md"), 18000),
    projectDoc: readTextIfExists(path.join(projectPath, "docs", "PROJECT.md"), 24000),
    agents: readTextIfExists(path.join(projectPath, "AGENTS.md"), 10000),
    designMd: readTextIfExists(path.join(projectPath, "DESIGN.md"), 14000),
    brandGuide: readTextIfExists(path.join(projectPath, "docs", "brand", "BRAND_GUIDE.md"), 14000)
  };
}

function firstMarkdownHeading(...texts) {
  for (const text of texts) {
    const match = String(text || "").match(/^#\s+(.+)$/m);
    if (match?.[1]) return match[1].replace(/[`*_]/g, "").trim();
  }
  return "";
}

function cleanProjectTitle(value) {
  return String(value || "")
    .replace(/\s+-\s+Project$/i, "")
    .replace(/\s+Project\s+Document$/i, "")
    .trim();
}

function deriveProjectTitle(sources) {
  const packageName = sources.packageJson?.displayName || sources.packageJson?.productName || sources.packageJson?.name || "";
  return cleanProjectTitle(firstMarkdownHeading(sources.projectDoc, sources.readme)
    || (packageName ? humanizeProjectName(packageName) : "")
    || humanizeProjectName(sources.name));
}

function compactParagraph(text, maxChars = 950) {
  const cleaned = String(text || "")
    .replace(/```[\s\S]*?```/g, "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^#{1,6}\s+/, "").replace(/^[-*]\s+/, "").trim())
    .filter((line) => line && !line.startsWith("|") && !/^[-=]{3,}$/.test(line))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, maxChars).trim();
}

function extractSection(text, headings, maxChars = 900) {
  const source = String(text || "");
  if (!source) return "";
  const escaped = headings.map((heading) => heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const pattern = new RegExp(`^#{1,4}\\s*(?:${escaped})\\s*$`, "im");
  const match = source.match(pattern);
  if (!match || match.index === undefined) return "";
  const start = match.index + match[0].length;
  const rest = source.slice(start);
  const nextHeading = rest.search(/^#{1,4}\s+/m);
  return compactParagraph(nextHeading >= 0 ? rest.slice(0, nextHeading) : rest, maxChars);
}

function archetypeGuidance(archetype) {
  if (archetype === "Trust-first marketplace") {
    return {
      audience: "Customers, partners, and operators who need a clear, trustworthy exchange flow with low confusion and strong handoff confidence.",
      problem: "The product needs to make a sensitive exchange feel protected, legible, and credible without becoming cold or generic.",
      feeling: "Clear, trustworthy, modern, human, high-contrast, calm, practical, and polished.",
      references: ["Marketplaces with strong trust cues", "Real estate/referral products", "Secure workflow dashboards"],
      voice: ["clear", "trustworthy", "direct", "calm", "operator-friendly", "human"],
      visuals: ["Light-first interface with deep green or ink anchors.", "Warm human photography where it supports trust.", "Rounded but restrained icons for protection, handoff, messages, and review.", "Strong contrast for all CTAs and labels.", "Avoid generic blue SaaS sameness and vague stock-technology visuals."]
    };
  }
  if (archetype === "Editorial/luxury brand") {
    return {
      audience: "Readers, buyers, fans, operators, and creative collaborators who respond to premium editorial packaging and emotionally specific positioning.",
      problem: "The brand needs to feel desirable and commercially clear while staying honest about readiness, quality gates, and what is actually live.",
      feeling: "Premium, editorial, cinematic, intimate, controlled, emotionally precise, and modern.",
      references: ["Premium publishing imprints", "Editorial commerce", "BookTok and reader-facing visual systems"],
      voice: ["cinematic", "precise", "premium", "intimate", "commercially clear", "not cheesy"],
      visuals: ["Elegant serif display type paired with clean UI sans.", "Warm paper, ink, wine, charcoal, soft metallic, or restrained accent systems.", "Book/social assets that prioritize readability at small sizes.", "Avoid cheap fantasy, cluttered ornament, fake traction, and generic romance cliches."]
    };
  }
  if (archetype === "Creative production tool") {
    return {
      audience: "Creators, operators, and growth teams who need fast visual decision-making without losing quality control.",
      problem: "The product needs to turn complex creative production into a confident, repeatable workflow without looking like a toy generator.",
      feeling: "Energetic, visual, sharp, creator-grade, modern, efficient, and experiment-ready.",
      references: ["Creative command centers", "Ad production tools", "Modern video and asset review workflows"],
      voice: ["sharp", "creative", "practical", "fast", "quality-aware", "operator-friendly"],
      visuals: ["High-signal preview surfaces.", "Action-oriented accent color balanced by neutral work surfaces.", "Gallery, storyboard, and comparison layouts.", "Avoid generic dark AI lab styling and low-contrast neon clutter."]
    };
  }
  if (archetype === "Proof-first trading command center") {
    return {
      audience: "The owner/operator, future trading assistants, and reviewers who need to understand paper proof, live blockers, risk caps, and what the system is allowed to do next.",
      problem: "The brand must make ambitious trading automation feel controlled, evidence-led, and trustworthy without implying guaranteed profit or live-money autopilot.",
      feeling: "Calm, sharp, proof-first, financially serious, controlled, modern, high-signal, and beginner-readable.",
      references: ["Trading command centers", "Fintech risk dashboards", "Quant research notebooks", "Automation readiness consoles"],
      voice: ["proof-first", "plain-English", "risk-aware", "calm", "commercially sharp", "never hypey"],
      visuals: ["Dark or light command-center surfaces with strong contrast and explicit state labels.", "Use green carefully for verified proof, not vague profit promises.", "Charts, paper-lab cards, risk gates, and blocker panels should be more prominent than decoration.", "Avoid casino visuals, meme-coin chaos, guaranteed-profit language, and generic crypto neon."]
    };
  }
  if (archetype === "Operator dashboard") {
    return {
      audience: "Operators, assistants, founders, and internal teams who need reliable workflows, status clarity, and safe execution.",
      problem: "The product needs to make complex work feel controlled, auditable, and easy to operate without becoming visually dull.",
      feeling: "Calm, structured, credible, efficient, clear, trustworthy, and premium.",
      references: ["Command centers", "Admin dashboards", "Workflow orchestration tools"],
      voice: ["clear", "measured", "useful", "honest", "operator-grade", "low-hype"],
      visuals: ["Dense but organized layouts.", "Status chips, checklists, timeline logic, and strong hierarchy.", "Quiet neutrals with one decisive action color.", "Avoid oversized marketing sections inside operational screens."]
    };
  }
  if (archetype === "Consumer/wellness product") {
    return {
      audience: "Consumers who need a friendly, polished, motivating product that feels safe and easy to return to.",
      problem: "The product needs emotional warmth and clarity without drifting into childish, generic, or medically overconfident claims.",
      feeling: "Warm, clear, optimistic, modern, supportive, human, and trustworthy.",
      references: ["Premium consumer apps", "Wellness onboarding", "Habit and learning products"],
      voice: ["warm", "simple", "encouraging", "honest", "clear", "not clinical"],
      visuals: ["Light backgrounds, generous spacing, friendly illustration or photography, and accessible contrast.", "Soft color moments balanced by readable text.", "Avoid medical claims, childish colors, and generic wellness gradients."]
    };
  }
  return {
    audience: "Users, customers, operators, and stakeholders who need a clear promise, polished product experience, and consistent visual system.",
    problem: "The product needs a stronger source of truth for brand, UI, assets, and future implementation decisions.",
    feeling: "Modern, clear, polished, trustworthy, practical, and distinctive.",
    references: ["Modern product websites", "Clean app dashboards", "Brand systems with strong implementation rules"],
    voice: ["clear", "useful", "modern", "confident", "honest", "practical"],
    visuals: ["Light-first interface with strong contrast.", "Distinctive but restrained accent palette.", "Logo and social assets that work at small sizes.", "Avoid generic SaaS sameness and overdecorated UI."]
  };
}

function colorsForArchetype(archetype) {
  if (archetype === "Trust-first marketplace") {
    return [
      ["Forest Key", "#17382D"],
      ["Verified Green", "#23745A"],
      ["Action Blue", "#1675EE"],
      ["Copper Handoff", "#B86632"],
      ["Paper Glass", "#EEF5F8"],
      ["Ink", "#1F2730"]
    ];
  }
  if (archetype === "Editorial/luxury brand") {
    return [
      ["Ink Black", "#171219"],
      ["Deep Wine", "#7C1838"],
      ["Ivory Paper", "#FFF8EF"],
      ["Antique Gold", "#B9893F"],
      ["Muted Rose", "#C96F7F"],
      ["Soft Smoke", "#75656D"]
    ];
  }
  if (archetype === "Creative production tool") {
    return [
      ["Graphite", "#171A21"],
      ["Electric Blue", "#246BFE"],
      ["Signal Coral", "#FF6B4A"],
      ["Studio Mint", "#4FD1A5"],
      ["Canvas", "#F6F7FB"],
      ["Slate", "#586174"]
    ];
  }
  if (archetype === "Proof-first trading command center") {
    return [
      ["Command Ink", "#101820"],
      ["Proof Green", "#19A66A"],
      ["Signal Blue", "#3A7AFE"],
      ["Risk Amber", "#D49A2A"],
      ["Ledger Mist", "#EEF4F1"],
      ["Hot Wallet Red", "#D94C45"]
    ];
  }
  if (archetype === "Operator dashboard") {
    return [
      ["Command Ink", "#16202A"],
      ["Signal Blue", "#2457D6"],
      ["Calm Green", "#2F7D5C"],
      ["Warm Amber", "#C58A2A"],
      ["Cloud", "#F3F6F8"],
      ["Steel", "#687282"]
    ];
  }
  if (archetype === "Consumer/wellness product") {
    return [
      ["Deep Leaf", "#1F4B3A"],
      ["Fresh Mint", "#7BDCB5"],
      ["Sky", "#6BB7F2"],
      ["Soft Peach", "#F3A683"],
      ["Warm White", "#FFFBF5"],
      ["Charcoal", "#27313A"]
    ];
  }
  return [
    ["Deep Ink", "#18202B"],
    ["Primary Accent", "#4C6FFF"],
    ["Fresh Mint", "#38CFA2"],
    ["Warm Gold", "#C99A3D"],
    ["Cloud", "#F5F7FB"],
    ["Slate", "#5F6C7B"]
  ];
}

function directionsForArchetype(archetype, title) {
  const baseColors = colorsForArchetype(archetype);
  if (archetype === "Proof-first trading command center") {
    return [
      {
        label: "Proof Console",
        headline: "Proof first. Live money later.",
        copy: `${title} becomes a calm trading command center where paper proof, blockers, risk caps, and next allowed actions are visually impossible to miss.`,
        promise: "Help the operator understand what the system knows, what it is testing, and why live execution is still gated.",
        traits: ["proof-first", "controlled", "credible", "financially serious", "high-signal", "beginner-readable"],
        colors: baseColors,
        fonts: { heading: "Sharp modern sans such as Geist, Inter Tight, Satoshi, or system UI", body: "Inter, Geist, Source Sans 3, or system UI" },
        voice: ["calm", "evidence-led", "plain-English", "risk-aware", "never hypey"]
      },
      {
        label: "Autopilot Readiness",
        headline: "A guarded path from paper edge to tiny-live proof.",
        copy: "A more automation-forward direction that makes the autonomy ladder visible: learning, paper edge, tiny-live review, and constrained autopilot readiness.",
        promise: "Turn trading automation into a supervised graduation system with clear gates and rollback language.",
        traits: ["automation-first", "guarded", "measurable", "operator-grade", "strategic", "trustworthy"],
        colors: [["Night Graph", "#0D1320"], ["Readiness Blue", "#3A7AFE"], ["Verified Green", "#20B981"], ["Paper Gold", "#C9972B"], ["Console Mist", "#F3F7FA"], ["Stop Red", "#D94C45"]],
        fonts: { heading: "Confident dashboard sans such as Geist, IBM Plex Sans, Inter Tight, or system UI", body: "Inter, IBM Plex Sans, Source Sans 3, or system UI" },
        voice: ["direct", "guardrailed", "measured", "automation-aware", "honest about blockers"]
      },
      {
        label: "Market Lab",
        headline: "Signals, experiments, and outcomes in one cockpit.",
        copy: "A research-lab direction for strategy discovery, paper experiments, and outcome learning. It is more analytical and less brand-polished, best if the product should feel like a serious trading lab.",
        promise: "Make every signal test, paper save, and closed outcome feed the next better decision.",
        traits: ["analytical", "experimental", "sharp", "data-rich", "transparent", "disciplined"],
        colors: [["Graphite", "#141A22"], ["Chart Cyan", "#28B8D8"], ["Edge Green", "#19A66A"], ["Amber Flag", "#D49A2A"], ["Notebook", "#F6F2EA"], ["Slate", "#617080"]],
        fonts: { heading: "Technical but readable sans such as IBM Plex Sans, Geist, Inter Tight, or system UI", body: "Inter, IBM Plex Sans, Source Sans 3, or system UI" },
        voice: ["analytical", "transparent", "experiment-led", "specific", "low-hype"]
      }
    ];
  }
  if (archetype === "Consumer AI studio") {
    return [
      {
        label: "Luminous Venture",
        headline: "AI-native apps, published with taste.",
        copy: `${title} feels light, premium, optimistic, and consumer-tech focused. It uses subtle unicorn/rare-signal cues without becoming childish or crypto-coded.`,
        promise: "Turn focused consumer problems into rare, useful AI-native apps with brand potential.",
        traits: ["light-first", "premium", "playful", "consumer-tech", "trustworthy", "magical"],
        colors: [["Pearl", "#FFFDF8"], ["Deep Ink", "#1E2330"], ["Rare Violet", "#7C5CFF"], ["Sky Cyan", "#47C7F4"], ["Soft Pink", "#F7A8C7"], ["Signal Gold", "#D7A83F"]],
        fonts: { heading: "Modern rounded display such as Satoshi, Avenir Next, Plus Jakarta Sans, or system UI", body: "Inter, Source Sans 3, Geist, or system UI" },
        voice: ["optimistic", "tasteful", "clear", "magical but not childish", "consumer-focused"]
      },
      {
        label: "App Constellation",
        headline: "Focused ideas become memorable apps.",
        copy: "A portfolio-universe direction with app tiles, orbit lines, soft glass, and bright clarity. Best when the studio needs to show a machine for many future app brands.",
        promise: "Build a visible system for discovering, shaping, publishing, and learning from consumer apps.",
        traits: ["portfolio", "systematic", "bright", "creative", "scalable", "modern"],
        colors: [["Warm White", "#FFFCF6"], ["Orbit Ink", "#202638"], ["Electric Blue", "#246BFE"], ["Mint", "#65D6B2"], ["Lavender Mist", "#EDE8FF"], ["Soft Gold", "#D7B66F"]],
        fonts: { heading: "Rounded geometric sans such as Circular, Satoshi, Avenir Next, or system UI", body: "Inter, Geist, Source Sans 3, or system UI" },
        voice: ["strategic", "bright", "specific", "founder-grade", "low-hype"]
      },
      {
        label: "Rare Signal",
        headline: "One sharp idea. One useful app. One rare outcome.",
        copy: "A cleaner, more premium direction that uses signal marks, luminous edges, and restrained color moments. Best when the studio should feel selective rather than playful.",
        promise: "Separate true consumer-product potential from noise.",
        traits: ["selective", "premium", "minimal", "rare", "credible", "high-upside"],
        colors: [["Pearl Cloud", "#F9FAFF"], ["Soft Charcoal", "#222733"], ["Signal Violet", "#6747F5"], ["Rare Cyan", "#29B8D8"], ["Warm Pink", "#F08DAE"], ["Pale Gold", "#D8BC6D"]],
        fonts: { heading: "Confident modern sans such as Neue Haas Grotesk, Satoshi, Inter Tight, or system UI", body: "Inter, Geist, Source Sans 3, or system UI" },
        voice: ["confident", "selective", "clear", "premium", "trustworthy"]
      }
    ];
  }

  return [
    {
      label: archetype === "Trust-first marketplace" ? "Protected Exchange" : archetype === "Editorial/luxury brand" ? "Cinematic Editorial" : archetype === "Creative production tool" ? "Signal Studio" : archetype === "Operator dashboard" ? "Command Calm" : "Clear Modern",
      headline: archetypeGuidance(archetype).feeling.split(",").slice(0, 3).join(",") + ".",
      copy: `A strongest-fit direction for ${title}: it emphasizes the product's core trust, visual clarity, and implementation discipline before adding decoration.`,
      promise: archetypeGuidance(archetype).problem,
      traits: archetypeGuidance(archetype).voice,
      colors: baseColors,
      fonts: { heading: "Confident modern sans or editorial display selected to match the product category", body: "Inter, Geist, Source Sans 3, Avenir Next, or system UI" },
      voice: archetypeGuidance(archetype).voice
    },
    {
      label: archetype === "Trust-first marketplace" ? "Human Handoff" : archetype === "Editorial/luxury brand" ? "Luxury System" : archetype === "Creative production tool" ? "Creator Command" : archetype === "Operator dashboard" ? "Measured System" : "Warm Product",
      headline: "Human clarity with polished product structure.",
      copy: "A warmer direction that uses the same strategic base but makes people, outcomes, and emotional confidence more visible.",
      promise: "Make the product easier to trust, understand, and return to.",
      traits: ["human", "warm", "clear", "credible", "polished", "accessible"],
      colors: baseColors.slice().reverse(),
      fonts: { heading: "Friendly premium sans such as Satoshi, Avenir Next, Plus Jakarta Sans, or system UI", body: "Inter, Source Sans 3, Geist, or system UI" },
      voice: ["warm", "clear", "direct", "helpful", "not generic"]
    },
    {
      label: archetype === "Trust-first marketplace" ? "Authority Flow" : archetype === "Editorial/luxury brand" ? "Modern Imprint" : archetype === "Creative production tool" ? "Visual Lab" : archetype === "Operator dashboard" ? "Executive Console" : "Distinctive Signal",
      headline: "Sharper contrast, clearer decisions, stronger memory.",
      copy: "A more distinctive direction that increases brand memorability while preserving usable UI and clear implementation rules.",
      promise: "Give the product a recognizable visual signature without hurting usability.",
      traits: ["distinctive", "high-contrast", "modern", "memorable", "structured", "brandable"],
      colors: [baseColors[0], baseColors[2], baseColors[1], baseColors[4], baseColors[3], baseColors[5]].filter(Boolean),
      fonts: { heading: "High-personality but readable display paired with Inter or system UI", body: "Inter, Geist, Source Sans 3, or system UI" },
      voice: ["sharp", "confident", "specific", "commercial", "usable"]
    }
  ];
}

function brandOpportunityForProject(projectPath) {
  const name = path.basename(projectPath);
  const packageText = readTextIfExists(path.join(projectPath, "package.json"), 8000);
  const packageJson = parseJsonSafely(packageText);
  const readme = readTextIfExists(path.join(projectPath, "README.md"));
  const projectDoc = readTextIfExists(path.join(projectPath, "docs", "PROJECT.md"));
  const agents = readTextIfExists(path.join(projectPath, "AGENTS.md"), 6000);
  const title = cleanProjectTitle(firstMarkdownHeading(projectDoc, readme)
    || (packageJson?.displayName || packageJson?.productName || packageJson?.name ? humanizeProjectName(packageJson.displayName || packageJson.productName || packageJson.name) : "")
    || humanizeProjectName(name));
  const allText = [name, title, packageText, readme, projectDoc, agents].join("\n");
  const hasPackage = Boolean(packageText);
  const hasReadme = Boolean(readme);
  const hasProjectDoc = Boolean(projectDoc);
  const hasBrandGuide = fs.existsSync(path.join(projectPath, "docs", "brand", "BRAND_GUIDE.md"));
  const hasDesignMd = fs.existsSync(path.join(projectPath, "DESIGN.md"));
  const hasBrandTokens = fs.existsSync(path.join(projectPath, "src", "styles", "brand-tokens.css"))
    || fs.existsSync(path.join(projectPath, "src", "brand-tokens.css"))
    || fs.existsSync(path.join(projectPath, "src", "brand-tokens.css"));
  const logoPath = findFileMatch(projectPath, (file) => /logo|favicon|mark|icon/i.test(file) && /\.(svg|png|jpg|jpeg|webp|ico)$/i.test(file), { maxDepth: 4 });
  const hasLogo = Boolean(logoPath);
  const localUrl = localUrlForProject(name);
  const publicFacing = /landing|homepage|website|public|launch|brand|customer|reader|consumer|client|user|app store|marketing/i.test(allText);
  const visualHeavy = /logo|brand|design|ui|website|landing|image|social|cover|reader|marketplace|studio|app/i.test(allText);
  const archetype = projectArchetype(allText);
  let score = 0;
  const reasons = [];
  const [strategicBoost, strategicReason] = strategicBrandBoost(name);

  if (name === "brand-kit-studio") score -= 30;
  if (strategicBoost) {
    score += strategicBoost;
    reasons.push(strategicReason);
  }
  if (hasPackage) score += 10;
  if (publicFacing) {
    score += 14;
    reasons.push("public-facing or customer-facing product");
  }
  if (visualHeavy) score += 8;
  if (!hasBrandGuide) {
    score += 28;
    reasons.push("no project-local brand guide found");
  }
  if (!hasDesignMd) {
    score += 18;
    reasons.push("no DESIGN.md implementation source found");
  }
  if (!hasLogo) {
    score += 16;
    reasons.push("no obvious logo/favicon asset found");
  }
  if (!hasBrandTokens) {
    score += 10;
    reasons.push("no exported brand token file found");
  }
  if (!hasProjectDoc) {
    score += 6;
    reasons.push("missing docs/PROJECT.md");
  }
  if (!hasReadme) score += 3;

  const recommendedAction = !hasBrandGuide
    ? "Run Brand Kit Studio intake, generate directions, then install a full brand kit."
    : !hasLogo
      ? "Run a logo approval pass and install approved logo/social assets."
      : !hasDesignMd
        ? "Add DESIGN.md and tokens so future redesign work stays consistent."
        : "Use Design Transformation Lab/Design Scout for the next UI polish pass, not a full rebrand.";

  return {
    name,
    title,
    path: projectPath,
    score: Math.max(0, Math.round(score)),
    priority: score >= 65 ? "high" : score >= 45 ? "medium" : "low",
    archetype,
    hasPackage,
    hasBrandGuide,
    hasDesignMd,
    hasLogo,
    hasBrandTokens,
    localUrl,
    reasons: reasons.slice(0, 4),
    recommendedAction,
    designReferenceFit: publicFacing || visualHeavy || /dashboard|website|app|landing|marketplace|studio|reader/i.test(archetype)
  };
}

async function projectBrandIntake(req, res) {
  try {
    const parsed = new URL(req.url || "/", `http://127.0.0.1:${PORT}`);
    const projectPath = safeProjectPath(parsed.searchParams.get("projectPath") || "");
    if (!fs.existsSync(projectPath) || !fs.statSync(projectPath).isDirectory()) {
      throw new Error("Target project folder does not exist.");
    }

    const sources = readProjectSources(projectPath);
    const opportunity = brandOpportunityForProject(projectPath);
    const title = deriveProjectTitle(sources);
    const archetype = opportunity.archetype;
    const guidance = archetypeGuidance(archetype);
    const sourceText = [sources.projectDoc, sources.readme, sources.brandGuide, sources.designMd, sources.agents].join("\n\n");
    const description = extractSection(sources.projectDoc, ["What It Is", "Product", "Overview", "Product Summary", "Company", "Purpose"])
      || compactParagraph(sources.projectDoc || sources.readme || sources.packageJson?.description || title, 1000);
    const problem = extractSection(sources.projectDoc, ["Problem", "Problem It Solves", "Main Problem", "Why It Exists"], 850)
      || guidance.problem;
    const audience = extractSection(sources.projectDoc, ["Who It Serves", "Audience", "Target Audience", "Users"], 850)
      || guidance.audience;
    const localUrl = opportunity.localUrl || localUrlForProject(sources.name);
    const logoPath = findFileMatch(projectPath, (file) => /logo|favicon|mark|icon/i.test(file) && /\.(svg|png|jpg|jpeg|webp|ico)$/i.test(file), { maxDepth: 4 });
    const existingClues = [
      sources.brandGuide ? "Existing docs/brand/BRAND_GUIDE.md found; use it as prior brand context, then improve gaps instead of erasing useful decisions." : "",
      sources.designMd ? "Existing DESIGN.md found; preserve valid implementation rules and update them if the new kit is approved." : "",
      logoPath ? `Existing logo/favicon-like asset found at ${path.relative(projectPath, logoPath)}.` : "No obvious logo/favicon asset found in committed project files.",
      opportunity.hasBrandTokens ? "Existing brand token file found." : "No project-local brand token file found.",
      localUrl ? `Local preview URL found: ${localUrl}.` : "No local preview URL found in the Workspace registry.",
      compactParagraph(sourceText, 500)
    ].filter(Boolean);
    const risks = [
      !opportunity.hasBrandGuide ? "Brand direction may be under-documented; avoid overfitting to a single current screen." : "",
      !opportunity.hasLogo ? "Logo and favicon should be approved visually before install." : "",
      !opportunity.hasDesignMd ? "Future redesign work may drift without DESIGN.md implementation rules." : "",
      "Do not invent fake traction, customers, revenue, partnerships, reviews, or public proof.",
      "Do not claim live publishing, live sending, payments, or production actions are connected unless project docs prove it.",
      "Keep changes reversible: install brand source-of-truth files first, then refactor live UI only after review."
    ].filter(Boolean);
    const requiredAssets = [
      "Primary horizontal logo",
      "Compact mark/fav icon",
      "Social avatar that works at small circular sizes",
      "Open Graph image",
      "LinkedIn banner",
      "YouTube banner",
      "X/Twitter header",
      "Facebook cover",
      "Instagram/Facebook/X/YouTube profile image variants",
      "Brand color tokens and typography rules",
      "DESIGN.md implementation rules",
      "Website/app preview direction and hero/header treatment"
    ];
    const recommendedDirections = directionsForArchetype(archetype, title);

    const packet = {
      projectName: title,
      brandName: title,
      projectPath,
      sourceUrl: localUrl,
      productDescription: description,
      audience,
      problem,
      desiredFeeling: guidance.feeling,
      existingBrandClues: existingClues,
      whatShouldNotChange: [
        "Do not overwrite working product structure just to chase a visual trend.",
        "Do not remove existing safety, review, or manual-approval constraints.",
        "Do not introduce generic SaaS styling if the project category needs a more specific brand.",
        "Do not make claims that are not supported by current project files.",
        "Keep this brand kit easy to revise until the owner approves the final logo and direction."
      ],
      competitorsOrReferences: guidance.references,
      voiceTone: guidance.voice,
      visualDirectionClues: guidance.visuals,
      requiredAssets,
      brandRisks: risks,
      recommendedDirections,
      bestRecommendedDirection: recommendedDirections[0]?.label || "",
      whyThisDirection: `Brand Kit Studio ranked this as a ${opportunity.priority}-priority ${archetype} opportunity because ${opportunity.reasons.join("; ") || "it would benefit from a stronger brand source of truth"}. The first direction is the safest starting point because it improves consistency and implementation clarity before making deeper UI changes.`,
      portfolioOpportunity: opportunity,
      inputFiles: []
    };

    json(res, 200, { ok: true, packet, opportunity });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

function portfolioBrandOpportunities(req, res) {
  try {
    const entries = fs.readdirSync(workspaceRoot, { withFileTypes: true });
    const projects = entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .filter((entry) => !["node_modules", "dist", "build"].includes(entry.name))
      .map((entry) => path.join(workspaceRoot, entry.name))
      .filter((projectPath) => fs.existsSync(path.join(projectPath, "README.md"))
        || fs.existsSync(path.join(projectPath, "package.json"))
        || fs.existsSync(path.join(projectPath, "docs", "PROJECT.md")))
      .map(brandOpportunityForProject)
      .sort((a, b) => b.score - a.score);
    json(res, 200, {
      ok: true,
      workspaceRoot,
      scanned: projects.length,
      topProjects: projects.slice(0, 12),
      allProjects: projects,
      designReferenceRecommended: projects.filter((project) => project.designReferenceFit).slice(0, 20)
    });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

function safeProfileId(value) {
  return slugifyName(value).slice(0, 120);
}

function profilePath(id) {
  const safeId = safeProfileId(id);
  if (!safeId) throw new Error("Invalid profile id.");
  return path.join(profileDir, `${safeId}.json`);
}

function profileMetadata(record, file) {
  return {
    id: record.id || path.basename(file, ".json"),
    name: record.name || record.brandName || "Untitled brand profile",
    brandName: record.brandName || "",
    updatedAt: record.updatedAt || "",
    directionLabel: record.directionLabel || "",
    logoDecision: record.logoDecision || ""
  };
}

function listProfiles(req, res) {
  try {
    fs.mkdirSync(profileDir, { recursive: true });
    const profiles = fs.readdirSync(profileDir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => {
        try {
          const record = JSON.parse(fs.readFileSync(path.join(profileDir, file), "utf8"));
          return profileMetadata(record, file);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
    json(res, 200, { ok: true, profiles });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

async function saveProfile(req, res) {
  try {
    const body = await readJsonBody(req);
    const snapshot = body.snapshot || {};
    const brandName = String(body.brandName || snapshot.brandName || "Untitled Brand").trim();
    const directionLabel = String(body.directionLabel || snapshot.directionLabel || "").trim();
    const baseName = String(body.name || `${brandName} brand profile`).trim();
    const now = new Date().toISOString();
    const id = safeProfileId(body.id || `${brandName}-${now.replace(/[:.]/g, "-")}`);
    if (!id) throw new Error("Profile name is required.");

    fs.mkdirSync(profileDir, { recursive: true });
    const record = {
      id,
      name: baseName,
      brandName,
      directionLabel,
      logoDecision: String(body.logoDecision || snapshot.logoDecision || "").trim(),
      updatedAt: now,
      snapshot
    };
    fs.writeFileSync(profilePath(id), JSON.stringify(record, null, 2));
    json(res, 200, { ok: true, profile: profileMetadata(record, `${id}.json`) });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

function loadProfile(req, res, id) {
  try {
    const file = profilePath(id);
    if (!fs.existsSync(file)) throw new Error("Saved profile not found.");
    const record = JSON.parse(fs.readFileSync(file, "utf8"));
    json(res, 200, { ok: true, profile: profileMetadata(record, `${id}.json`), snapshot: record.snapshot || {} });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

function deleteProfile(req, res, id) {
  try {
    const file = profilePath(id);
    if (!fs.existsSync(file)) throw new Error("Saved profile not found.");
    fs.unlinkSync(file);
    json(res, 200, { ok: true, id: safeProfileId(id) });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

async function callOpenAIImageGeneration({ prompt, name, size = "1536x1024", quality, background = "auto" }) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";
  if (!apiKey) {
    throw new Error("OpenAI image generation is not configured. Add OPENAI_API_KEY to .env.local, restart Brand Kit Studio, then try again.");
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      prompt,
      n: 1,
      size,
      quality: quality || process.env.OPENAI_IMAGE_QUALITY || "high",
      background,
      output_format: "png"
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error?.message || `OpenAI image generation failed with HTTP ${response.status}.`);
  }

  const image = result.data?.[0];
  if (!image?.b64_json) throw new Error("OpenAI did not return an image payload.");
  return {
    ok: true,
    model,
    name,
    type: "image/png",
    size: Buffer.byteLength(image.b64_json, "base64"),
    dataUrl: `data:image/png;base64,${image.b64_json}`,
    revisedPrompt: image.revised_prompt || ""
  };
}

async function callOpenAIImageEdit({ prompt, referenceImage, name, size = "1024x1024", quality, background = "auto" }) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";
  if (!apiKey) {
    throw new Error("OpenAI image generation is not configured. Add OPENAI_API_KEY to .env.local, restart Brand Kit Studio, then try again.");
  }
  if (!referenceImage?.data) {
    return callOpenAIImageGeneration({ prompt, name, size, quality, background });
  }

  const bytes = Buffer.from(String(referenceImage.data), "base64");
  const blob = new Blob([bytes], { type: referenceImage.mime || "image/png" });
  const form = new FormData();
  form.append("model", model);
  form.append("prompt", prompt);
  form.append("size", size);
  form.append("quality", quality || process.env.OPENAI_IMAGE_QUALITY || "high");
  form.append("background", background);
  form.append("output_format", "png");
  form.append("image[]", blob, referenceImage.name || "reference.png");

  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}` },
    body: form
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error?.message || `OpenAI image edit failed with HTTP ${response.status}.`);
  }

  const image = result.data?.[0];
  if (!image?.b64_json) throw new Error("OpenAI did not return an image payload.");
  return {
    ok: true,
    model,
    name,
    type: "image/png",
    size: Buffer.byteLength(image.b64_json, "base64"),
    dataUrl: `data:image/png;base64,${image.b64_json}`,
    revisedPrompt: image.revised_prompt || ""
  };
}

async function generateLogoImage(req, res) {
  try {
    const body = await readJsonBody(req);
    const prompt = String(body.prompt || "").trim();
    const mode = String(body.mode || "generate");
    const name = String(body.name || "generated-logo.png").trim();
    const size = String(body.size || (mode === "final" ? "1024x1024" : "1536x1024")).trim();
    const background = String(body.background || "auto").trim();
    const quality = String(body.quality || process.env.OPENAI_IMAGE_QUALITY || "high").trim();

    if (!prompt) throw new Error("Generate a logo prompt first.");
    if (prompt.length > 32000) throw new Error("Logo prompt is too long for image generation.");

    console.log(`Generating logo image with ${process.env.OPENAI_IMAGE_MODEL || "gpt-image-2"}: ${name}`);
    const payload = mode === "edit" || mode === "final"
      ? await callOpenAIImageEdit({
        prompt,
        referenceImage: body.referenceImage,
        name,
        size,
        quality,
        background
      })
      : await callOpenAIImageGeneration({ prompt, name, size, quality, background });

    json(res, 200, payload);
  } catch (error) {
    console.log(`Logo image generation failed: ${error.message}`);
    json(res, 400, { ok: false, error: error.message });
  }
}

async function captureLocalUrl(req, res) {
  try {
    const body = await readJsonBody(req);
    const targetUrl = String(body.url || "").trim();
    const viewport = body.viewport || {};
    const width = Math.min(Math.max(Number(body.width || viewport.width) || 1440, 390), 1920);
    const height = Math.min(Math.max(Number(body.height || viewport.height) || 1000, 600), 1600);

    if (!isAllowedLocalUrl(targetUrl)) {
      json(res, 400, {
        ok: false,
        error: "Only local preview URLs are allowed: localhost, 127.0.0.1, or ::1."
      });
      return;
    }

    await assertLocalUrlReachable(targetUrl);

    const chrome = findChrome();
    if (!chrome) {
      json(res, 500, {
        ok: false,
        error: "Could not find Google Chrome or Chromium for local screenshot capture."
      });
      return;
    }

    fs.mkdirSync(captureDir, { recursive: true });
    const file = path.join(captureDir, `capture-${Date.now()}.png`);
    const userDataDir = path.join(captureDir, `profile-${Date.now()}`);
    const args = [
      "--headless=new",
      "--disable-gpu",
      `--user-data-dir=${userDataDir}`,
      `--screenshot=${file}`,
      `--window-size=${width},${height}`,
      targetUrl
    ];

    execFile(chrome, args, { timeout: 20000 }, (error) => {
      if (error) {
        cleanupCaptureFiles(file, userDataDir);
        json(res, 500, {
          ok: false,
          error: "Local screenshot capture failed. Make sure the target app is running and reachable."
        });
        return;
      }

      fs.readFile(file, (readError, data) => {
        cleanupCaptureFiles(file, userDataDir);
        if (readError) {
          json(res, 500, {
            ok: false,
            error: "Screenshot was captured but could not be read."
          });
          return;
        }

        json(res, 200, {
          ok: true,
          url: targetUrl,
          width,
          height,
          type: "image/png",
          size: data.length,
          name: `${new URL(targetUrl).hostname}-${Date.now()}.png`,
          dataUrl: `data:image/png;base64,${data.toString("base64")}`
        });
      });
    });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

async function projectPathFromLocalUrl(value) {
  if (!isAllowedLocalUrl(value)) return null;
  const parsed = new URL(value);
  const port = parsed.port || (parsed.protocol === "https:" ? "443" : "80");
  if (!port) return null;

  const pidOutput = await execFileText("lsof", ["-nP", `-iTCP:${port}`, "-sTCP:LISTEN", "-t"], { timeout: 5000 });
  const pid = pidOutput.split(/\s+/).find(Boolean);
  if (!pid) return null;

  const cwdOutput = await execFileText("lsof", ["-a", "-p", pid, "-d", "cwd", "-Fn"], { timeout: 5000 });
  const cwd = cwdOutput.split("\n").find((line) => line.startsWith("n"))?.slice(1);
  if (!cwd) return null;

  try {
    return safeProjectPath(cwd);
  } catch {
    return null;
  }
}

function projectPathFromName(...names) {
  const slugs = names.map(slugifyName).filter(Boolean);
  if (!slugs.length || !fs.existsSync(workspaceRoot)) return null;

  const entries = fs.readdirSync(workspaceRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const slug of slugs) {
    const exact = entries.find((entry) => slugifyName(entry) === slug);
    if (exact) return path.join(workspaceRoot, exact);
  }

  for (const slug of slugs) {
    const fuzzy = entries.find((entry) => {
      const entrySlug = slugifyName(entry);
      return entrySlug.includes(slug) || slug.includes(entrySlug);
    });
    if (fuzzy) return path.join(workspaceRoot, fuzzy);
  }

  return null;
}

async function resolveProjectFolder(req, res) {
  try {
    const body = await readJsonBody(req);
    const sourceUrl = String(body.sourceUrl || "").trim();
    const projectName = String(body.projectName || "").trim();
    const brandName = String(body.brandName || "").trim();

    let projectPath = null;
    let method = "";
    if (sourceUrl && isAllowedLocalUrl(sourceUrl)) {
      projectPath = await projectPathFromLocalUrl(sourceUrl).catch(() => null);
      method = projectPath ? "local-url-process" : "";
    }

    if (!projectPath) {
      projectPath = projectPathFromName(projectName, brandName);
      method = projectPath ? "workspace-name-match" : "";
    }

    if (!projectPath) {
      json(res, 404, {
        ok: false,
        error: `Could not auto-detect the project folder. Paste the project folder path from the configured workspace root: ${workspaceRoot}`
      });
      return;
    }

    json(res, 200, { ok: true, projectPath, method });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

function safeProjectPath(value) {
  const raw = String(value || "").trim();
  if (!raw) throw new Error("Choose a target project folder first.");
  if (!path.isAbsolute(raw)) throw new Error("Use an absolute project folder path.");
  const resolved = path.resolve(raw);
  const relative = path.relative(workspaceRoot, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Install is limited to folders inside the configured workspace root: ${workspaceRoot}`);
  }
  if (resolved === workspaceRoot) {
    throw new Error("Choose a specific project folder inside the Workspace, not the Workspace root.");
  }
  return resolved;
}

function safeRelativePath(value) {
  const clean = String(value || "").replaceAll("\\", "/").trim();
  if (!clean || clean.startsWith("/") || clean.includes("\0")) {
    throw new Error(`Unsafe install path: ${value}`);
  }
  const normalized = path.posix.normalize(clean);
  if (normalized === "." || normalized.startsWith("../") || normalized === "..") {
    throw new Error(`Unsafe install path: ${value}`);
  }
  return normalized;
}

function installSnippet(kind, brandName, directionLabel) {
  if (kind === "agents") {
    return `\n## Brand System\n\n- Treat \`DESIGN.md\` and \`docs/brand/BRAND_GUIDE.md\` as the source of truth for ${brandName} brand strategy, voice, visual style, colors, typography, logos, assets, and implementation rules.\n- New UI, copy, images, social assets, and marketing work should reference \`DESIGN.md\`, the brand guide, and \`src/styles/brand-tokens.css\` by default.\n- Current selected direction: ${directionLabel}.\n- Do not invent unrelated colors, fonts, logos, illustration styles, or brand claims unless the owner explicitly asks for a new direction.\n`;
  }

  return `\n## Brand System\n\nThe project brand source of truth lives in \`DESIGN.md\` and \`docs/brand/BRAND_GUIDE.md\`. Current selected direction: ${directionLabel}. Future UI, copy, image, social, and marketing work should reference DESIGN.md, the brand guide, and \`src/styles/brand-tokens.css\` unless the owner asks for a new direction.\n`;
}

function mergeTextFile(projectPath, relativePath, snippet) {
  const filePath = path.join(projectPath, relativePath);
  if (!fs.existsSync(filePath)) return snippet.trimStart();
  const existing = fs.readFileSync(filePath, "utf8");
  if (existing.includes("docs/brand/BRAND_GUIDE.md") && existing.includes("DESIGN.md")) return existing;
  return `${existing.trimEnd()}\n${snippet}`;
}

function buildInstallFiles(body, projectPath) {
  const inputFiles = body.files && typeof body.files === "object" ? body.files : {};
  const files = {};

  for (const [rawPath, value] of Object.entries(inputFiles)) {
    const relativePath = safeRelativePath(rawPath);
    files[relativePath] = fileBuffer(value);
  }

  const brandName = String(body.brandName || "Project brand").trim();
  const directionLabel = String(body.directionLabel || "Selected direction").trim();
  files["AGENTS.md"] = Buffer.from(mergeTextFile(projectPath, "AGENTS.md", installSnippet("agents", brandName, directionLabel)), "utf8");
  files["docs/PROJECT.md"] = Buffer.from(mergeTextFile(projectPath, "docs/PROJECT.md", installSnippet("project", brandName, directionLabel)), "utf8");
  return files;
}

function fileBuffer(value) {
  if (value && typeof value === "object" && value.encoding === "base64") {
    return Buffer.from(String(value.data || ""), "base64");
  }
  return Buffer.from(String(value), "utf8");
}

function installPlan(projectPath, files) {
  return Object.entries(files).map(([relativePath, content]) => {
    const filePath = path.join(projectPath, relativePath);
    if (!filePath.startsWith(projectPath + path.sep)) {
      throw new Error(`Unsafe install path: ${relativePath}`);
    }
    if (!fs.existsSync(filePath)) {
      return { path: relativePath, action: "create", bytes: content.length };
    }
    const existing = fs.readFileSync(filePath);
    return {
      path: relativePath,
      action: Buffer.compare(existing, content) === 0 ? "unchanged" : "update",
      bytes: content.length
    };
  });
}

async function previewInstall(req, res) {
  try {
    const body = await readJsonBody(req);
    const projectPath = safeProjectPath(body.projectPath);
    if (!fs.existsSync(projectPath) || !fs.statSync(projectPath).isDirectory()) {
      throw new Error("Target project folder does not exist.");
    }
    const files = buildInstallFiles(body, projectPath);
    const plan = installPlan(projectPath, files);
    json(res, 200, { ok: true, projectPath, plan });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

async function installBrandKit(req, res) {
  try {
    const body = await readJsonBody(req);
    if (body.approved !== true) throw new Error("Preview and approve the install first.");

    const projectPath = safeProjectPath(body.projectPath);
    if (!fs.existsSync(projectPath) || !fs.statSync(projectPath).isDirectory()) {
      throw new Error("Target project folder does not exist.");
    }

    const files = buildInstallFiles(body, projectPath);
    const plan = installPlan(projectPath, files);
    const backupRoot = path.join(projectPath, ".brand-kit-studio-backups", new Date().toISOString().replace(/[:.]/g, "-"));
    const written = [];

    for (const item of plan) {
      if (item.action === "unchanged") continue;
      const destination = path.join(projectPath, item.path);
      fs.mkdirSync(path.dirname(destination), { recursive: true });

      if (item.action === "update") {
        const backupPath = path.join(backupRoot, item.path);
        fs.mkdirSync(path.dirname(backupPath), { recursive: true });
        fs.copyFileSync(destination, backupPath);
      }

      fs.writeFileSync(destination, files[item.path], "utf8");
      written.push(item);
    }

    json(res, 200, {
      ok: true,
      projectPath,
      backupPath: written.some((item) => item.action === "update") ? backupRoot : null,
      written,
      plan
    });
  } catch (error) {
    json(res, 400, { ok: false, error: error.message });
  }
}

const server = http.createServer((req, res) => {
  const route = (req.url || "").split("?")[0];
  if (req.method === "GET" && route === "/api/openai-status") {
    json(res, 200, openAIStatus());
    return;
  }
  if (req.method === "GET" && route === "/api/design-scout-status") {
    json(res, 200, designScoutStatus());
    return;
  }
  if (req.method === "POST" && route === "/api/design-scout") {
    designScout(req, res);
    return;
  }
  if (req.method === "GET" && route === "/api/portfolio-brand-opportunities") {
    portfolioBrandOpportunities(req, res);
    return;
  }
  if (req.method === "GET" && route === "/api/project-brand-intake") {
    projectBrandIntake(req, res);
    return;
  }
  if (req.method === "POST" && route === "/api/openai-config") {
    openAIConfig(req, res);
    return;
  }
  if (req.method === "POST" && route === "/api/capture-local-url") {
    captureLocalUrl(req, res);
    return;
  }
  if (req.method === "POST" && route === "/api/generate-logo-image") {
    generateLogoImage(req, res);
    return;
  }
  if (req.method === "GET" && route === "/api/brand-profiles") {
    listProfiles(req, res);
    return;
  }
  if (req.method === "POST" && route === "/api/brand-profiles") {
    saveProfile(req, res);
    return;
  }
  if (req.method === "GET" && route.startsWith("/api/brand-profiles/")) {
    loadProfile(req, res, route.split("/").pop());
    return;
  }
  if (req.method === "DELETE" && route.startsWith("/api/brand-profiles/")) {
    deleteProfile(req, res, route.split("/").pop());
    return;
  }
  if (req.method === "POST" && route === "/api/resolve-project-folder") {
    resolveProjectFolder(req, res);
    return;
  }
  if (req.method === "POST" && route === "/api/install-preview") {
    previewInstall(req, res);
    return;
  }
  if (req.method === "POST" && route === "/api/install-brand-kit") {
    installBrandKit(req, res);
    return;
  }

  const filePath = safePath(req.url || "/");
  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": types[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(data);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Brand Kit Studio running at http://127.0.0.1:${PORT}/`);
});
