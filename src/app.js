const defaultDirections = {
  studio: {
    label: "Studio-grade operator",
    headline: "A calm brand lab for serious project momentum",
    copy: "Best for local tools, operator dashboards, and founder systems that need to feel premium, trustworthy, and immediately usable.",
    promise: "Turn messy idea inputs into a brand source of truth Codex can keep using.",
    traits: ["precise", "useful", "premium", "grounded"],
    fonts: {
      heading: "Inter Tight, Inter, system-ui, sans-serif",
      body: "Inter, system-ui, sans-serif"
    },
    colors: [
      ["Ink", "#141412"],
      ["Paper", "#f8f8f5"],
      ["Deep Teal", "#22577a"],
      ["Night", "#102a37"],
      ["Signal Coral", "#ff6b4a"],
      ["Saffron", "#e8a71c"]
    ],
    voice: [
      "Confident and practical, never fluffy.",
      "Explain what is generated, what still needs approval, and what becomes the source of truth.",
      "Use plain-English operating language: brand pack, export, project folder, approved direction."
    ]
  },
  premium: {
    label: "Premium consumer",
    headline: "A polished identity system with stronger emotional pull",
    copy: "Best for products, creators, ecommerce, wellness, lifestyle, and public-facing brands that need memorability and taste.",
    promise: "Shape a brand that feels desirable before it becomes a full website or campaign.",
    traits: ["warm", "memorable", "sensory", "elevated"],
    fonts: {
      heading: "Canela, Georgia, serif",
      body: "Inter, system-ui, sans-serif"
    },
    colors: [
      ["Charcoal", "#1d1b18"],
      ["Soft White", "#fbfaf5"],
      ["Merlot", "#6c2135"],
      ["Clay", "#b65b43"],
      ["Sage", "#7b8c70"],
      ["Gold", "#d8a431"]
    ],
    voice: [
      "More sensory and emotional, but still concrete.",
      "Use desire, ritual, transformation, and taste without fake luxury claims.",
      "Keep proof and benefits grounded in what the project can actually deliver."
    ]
  },
  technical: {
    label: "Technical trust",
    headline: "A clear credibility system for serious software and AI tools",
    copy: "Best for AI, data, finance, B2B, infrastructure, and technical products where trust beats decoration.",
    promise: "Make the system feel reliable, inspectable, and hard to misinterpret.",
    traits: ["credible", "structured", "transparent", "sharp"],
    fonts: {
      heading: "IBM Plex Sans, Inter, system-ui, sans-serif",
      body: "IBM Plex Sans, Inter, system-ui, sans-serif"
    },
    colors: [
      ["Carbon", "#111827"],
      ["White", "#ffffff"],
      ["Control Blue", "#1d4ed8"],
      ["Steel", "#64748b"],
      ["Cyan", "#0891b2"],
      ["Amber", "#d97706"]
    ],
    voice: [
      "Lead with auditability, controls, and clear states.",
      "Show limits instead of hiding them.",
      "Use system language only when it helps the owner make a safer decision."
    ]
  }
};

const designReferenceLanes = [
  {
    id: "consumer-ai",
    label: "Premium consumer AI",
    keywords: ["consumer", "ai", "app", "apps", "studio", "unicorn", "magical", "mobile", "creative", "playful"],
    query: "light premium consumer AI app, optimistic product launch, tasteful magic cues, app tile portfolio",
    references: [
      ["Consumer app launch systems", "Use bright product clarity, app-store polish, and benefit-first hero composition."],
      ["AI builder/productivity pages", "Show real product surfaces and workflows before abstract AI language."],
      ["Premium playful brands", "Use small sparks, color moments, and soft depth without becoming childish."]
    ],
    principles: [
      "Light-first surfaces with colorful accents as moments of delight, not full-page chaos.",
      "Hero should make the product category obvious before explaining the larger vision.",
      "Use app tiles, portfolio constellations, or focused product cards to show the studio model.",
      "Avoid dark AI lab styling, crypto signals, fake traction, and generic SaaS dashboards."
    ]
  },
  {
    id: "operator-saas",
    label: "Operator-grade SaaS",
    keywords: ["dashboard", "os", "automation", "command", "operator", "workflow", "analytics", "codex", "local-first", "system"],
    query: "clean operator dashboard, local-first AI workflow, dense but calm command center",
    references: [
      ["Linear-style product systems", "Use clear hierarchy, compact controls, and understated polish."],
      ["Vercel/GitHub developer surfaces", "Favor technical trust, readable states, and useful previews."],
      ["Modern analytics dashboards", "Keep cards dense, scannable, and controlled."]
    ],
    principles: [
      "Optimize for repeated use: visible state, fast scanning, and calm hierarchy.",
      "Use restrained depth, precise borders, and high-contrast action states.",
      "Do not over-decorate operational screens with marketing-style hero sections.",
      "Make approvals, risks, and blocked steps impossible to miss."
    ]
  },
  {
    id: "marketplace-trust",
    label: "Trust-first marketplace",
    keywords: ["real estate", "realtor", "broker", "referral", "lead", "exchange", "marketplace", "privacy", "legal", "client"],
    query: "trust-first real estate marketplace, professional referral workflow, clear privacy handoff",
    references: [
      ["Real estate marketplace UX", "Use people/place imagery, professional trust signals, and clear next steps."],
      ["Fintech/legal review flows", "Show protection, checkpoints, and consent before handoff."],
      ["B2B referral tools", "Balance warmth with broker-safe clarity."]
    ],
    principles: [
      "Lead with trust, privacy, and the handoff mechanism instead of generic lead generation hype.",
      "Use human real-estate imagery only when it reinforces the actual user promise.",
      "Make legal/broker review language plain and visible without making the brand feel scary.",
      "Keep CTAs action-oriented and avoid claims about guaranteed deals, closings, or outcomes."
    ]
  },
  {
    id: "editorial-luxury",
    label: "Editorial luxury",
    keywords: ["romance", "publishing", "book", "kindle", "reader", "author", "imprint", "novel", "series", "luxury", "cinematic"],
    query: "premium editorial publishing brand, cinematic romance imprint, elegant reader experience",
    references: [
      ["Luxury editorial systems", "Use high-contrast type, generous spacing, and restrained dramatic color."],
      ["Book/reader surfaces", "Prioritize comfortable reading, cover-forward presentation, and emotional tone."],
      ["Premium entertainment brands", "Use cinematic imagery without cheap stock-romance signals."]
    ],
    principles: [
      "Separate operator-system clarity from reader-facing emotion and desire.",
      "Use serif display type only where it improves the editorial mood and remains readable.",
      "Avoid generic pink romance, ornate clutter, childish symbols, and fake bestseller proof.",
      "Make social assets quote- and cover-friendly, but keep profile images mark-first."
    ]
  },
  {
    id: "learning-product",
    label: "Friendly learning product",
    keywords: ["language", "learning", "education", "student", "practice", "conversation", "tutor", "lesson"],
    query: "friendly learning app, modern language practice, calm progress and conversation UI",
    references: [
      ["Language learning apps", "Use progress, conversation, and friendly practice cues."],
      ["Consumer education onboarding", "Show what the learner does next, not only the promise."],
      ["Soft productivity tools", "Use warmth and clarity without childish classroom visuals."]
    ],
    principles: [
      "Make the first action feel low-pressure and immediately useful.",
      "Use progress, practice, and conversation components as primary visuals.",
      "Keep colors friendly but controlled enough for adult users.",
      "Avoid cartoon overload unless the target audience is explicitly children."
    ]
  },
  {
    id: "premium-local-service",
    label: "Premium local service",
    keywords: ["clinic", "wellness", "fitness", "service", "local", "salon", "restaurant", "coach", "membership"],
    query: "premium local service website, warm trust, clear booking and offer hierarchy",
    references: [
      ["Premium local service pages", "Use real environment cues, clear booking actions, and high-trust copy."],
      ["Wellness/lifestyle brands", "Use soft warmth and spacious sections without beige monotony."],
      ["Membership conversion flows", "Make value, schedule, and next step easy to compare."]
    ],
    principles: [
      "Show the real place, person, product, or service early.",
      "Make booking/contact paths obvious and low-friction.",
      "Use warmth without flattening the design into generic beige or spa styling.",
      "Avoid vague transformation claims without concrete service details."
    ]
  }
];

const INTAKE_PROMPT = `Create a Brand Kit Studio intake packet for this project.

Read the project docs, app copy, existing UI, README, docs/PROJECT.md, AGENTS.md, screenshots/assets if present, and summarize everything Brand Kit Studio needs.

Return valid JSON only, with this shape:
{
  "projectName": "",
  "brandName": "",
  "sourceUrl": "",
  "productDescription": "",
  "audience": "",
  "problem": "",
  "desiredFeeling": "",
  "existingBrandClues": [],
  "whatShouldNotChange": [],
  "competitorsOrReferences": [],
  "voiceTone": [],
  "visualDirectionClues": [],
  "requiredAssets": [],
  "brandRisks": [],
  "recommendedDirections": [
    {
      "label": "",
      "headline": "",
      "copy": "",
      "promise": "",
      "traits": [],
      "colors": [["Color name", "#000000"]],
      "fonts": { "heading": "", "body": "" },
      "voice": []
    }
  ],
  "bestRecommendedDirection": "",
  "whyThisDirection": ""
}

Keep it honest. Do not invent proof, traction, partnerships, claims, or brand approvals that are not visible in the project. Give 3 distinct brand directions when the project identity is not already locked.`;

const state = {
  files: [],
  targetFrame: null,
  directions: Object.fromEntries(Object.entries(defaultDirections).map(([key, direction]) => [key, { ...direction, id: key }])),
  importedPacket: null,
  selectedDirectionId: "studio",
  previewMode: "app",
  openai: {
    configured: false,
    model: "gpt-image-2",
    quality: "high"
  },
  logoLab: {
    boards: {},
    boardImages: {},
    boardStatus: {},
    variantImage: null,
    variantStatus: "",
    finalStatus: "",
    isGeneratingBoards: false,
    isGeneratingVariant: false,
    isGeneratingFinal: false,
    selectedDirectionId: "",
    variantPrompt: "",
    approvedVariant: "",
    approvedSource: "",
    revisionNotes: "",
    skipped: false,
    assets: {
      board: null,
      final: null
    }
  },
  install: {
    previewReady: false,
    installed: false
  },
  designScout: {
    requestKey: "",
    loading: false,
    liveReferences: [],
    mode: "builtin",
    provider: "builtin",
    warning: ""
  },
  autoBrain: {
    active: false,
    source: "",
    status: "Ready",
    summary: "Choose a project from Portfolio Brand Brain to auto-read it and generate comparable redesign previews."
  },
  screenLab: {
    images: {},
    status: {},
    isGenerating: false,
    message: ""
  },
  portfolioBrain: {
    loading: false,
    importingPath: "",
    message: "",
    projects: [],
    scanned: 0,
    error: ""
  },
  profiles: [],
  activeProfileId: ""
};

let packetAutoImportTimer = null;
let designScoutTimer = null;

const els = {
  packetInput: document.querySelector("#packetInput"),
  packetImporter: document.querySelector("#packetImporter"),
  copyPacketPromptButton: document.querySelector("#copyPacketPromptButton"),
  importPacketButton: document.querySelector("#importPacketButton"),
  packetStatus: document.querySelector("#packetStatus"),
  directionOptions: document.querySelector("#directionOptions"),
  optionBoard: document.querySelector("#optionBoard"),
  autoBrainStatus: document.querySelector("#autoBrainStatus"),
  autoBrainSummary: document.querySelector("#autoBrainSummary"),
  autoPreviewGallery: document.querySelector("#autoPreviewGallery"),
  generateScreenRedesignsButton: document.querySelector("#generateScreenRedesignsButton"),
  screenRedesignStatus: document.querySelector("#screenRedesignStatus"),
  appliedPreview: document.querySelector("#appliedPreview"),
  appliedPreviewTitle: document.querySelector("#appliedPreviewTitle"),
  appliedPreviewMode: document.querySelector("#appliedPreviewMode"),
  brandName: document.querySelector("#brandName"),
  sourceUrl: document.querySelector("#sourceUrl"),
  captureUrlButton: document.querySelector("#captureUrlButton"),
  captureStatus: document.querySelector("#captureStatus"),
  audience: document.querySelector("#audience"),
  brief: document.querySelector("#brief"),
  fileInput: document.querySelector("#fileInput"),
  dropZone: document.querySelector("#dropZone"),
  fileList: document.querySelector("#fileList"),
  positioningTitle: document.querySelector("#positioningTitle"),
  positioningCopy: document.querySelector("#positioningCopy"),
  designScoutStatus: document.querySelector("#designScoutStatus"),
  designScoutQuery: document.querySelector("#designScoutQuery"),
  designScoutReferences: document.querySelector("#designScoutReferences"),
  designScoutPrinciples: document.querySelector("#designScoutPrinciples"),
  logoPreview: document.querySelector("#logoPreview"),
  swatches: document.querySelector("#swatches"),
  typeHeadline: document.querySelector("#typeHeadline"),
  typeBody: document.querySelector("#typeBody"),
  typeStack: document.querySelector("#typeStack"),
  ogPreview: document.querySelector("#ogPreview"),
  ogTitle: document.querySelector("#ogTitle"),
  ogText: document.querySelector("#ogText"),
  socialPreview: document.querySelector("#socialPreview"),
  messageList: document.querySelector("#messageList"),
  checklist: document.querySelector("#checklist"),
  exportButton: document.querySelector("#exportButton"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  resetButton: document.querySelector("#resetButton"),
  exportNote: document.querySelector("#exportNote"),
  installPath: document.querySelector("#installPath"),
  previewInstallButton: document.querySelector("#previewInstallButton"),
  installButton: document.querySelector("#installButton"),
  installSummary: document.querySelector("#installSummary"),
  refreshPortfolioBrainButton: document.querySelector("#refreshPortfolioBrainButton"),
  portfolioBrainStatus: document.querySelector("#portfolioBrainStatus"),
  portfolioBrainList: document.querySelector("#portfolioBrainList"),
  testReadinessTitle: document.querySelector("#testReadinessTitle"),
  testReadinessList: document.querySelector("#testReadinessList"),
  generateLogoBoardsButton: document.querySelector("#generateLogoBoardsButton"),
  generateLogoVariantsButton: document.querySelector("#generateLogoVariantsButton"),
  generateApprovedLogoButton: document.querySelector("#generateApprovedLogoButton"),
  openAiStatus: document.querySelector("#openAiStatus"),
  openAiKeyInput: document.querySelector("#openAiKeyInput"),
  openAiQualitySelect: document.querySelector("#openAiQualitySelect"),
  saveOpenAiKeyButton: document.querySelector("#saveOpenAiKeyButton"),
  skipLogoApprovalButton: document.querySelector("#skipLogoApprovalButton"),
  logoApprovalBadge: document.querySelector("#logoApprovalBadge"),
  logoLabStatus: document.querySelector("#logoLabStatus"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  profileSelect: document.querySelector("#profileSelect"),
  loadProfileButton: document.querySelector("#loadProfileButton"),
  deleteProfileButton: document.querySelector("#deleteProfileButton"),
  profileStatus: document.querySelector("#profileStatus"),
  logoBoardGrid: document.querySelector("#logoBoardGrid"),
  logoRevisionNotes: document.querySelector("#logoRevisionNotes"),
  logoVariantGrid: document.querySelector("#logoVariantGrid"),
  logoBoardAssetInput: document.querySelector("#logoBoardAssetInput"),
  logoFinalAssetInput: document.querySelector("#logoFinalAssetInput"),
  logoAssetGrid: document.querySelector("#logoAssetGrid"),
  imageLightbox: document.querySelector("#imageLightbox"),
  imageLightboxImage: document.querySelector("#imageLightboxImage"),
  imageLightboxClose: document.querySelector("#imageLightboxClose")
};

function selectedDirection() {
  const input = document.querySelector("input[name='direction']:checked");
  const id = input?.value || state.selectedDirectionId || "studio";
  return state.directions[id] || state.directions.studio;
}

function slugify(value) {
  return (value || "brand-kit")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "brand-kit";
}

function initials(value) {
  const words = (value || "Brand Kit").trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function getInputs() {
  const brandName = els.brandName.value.trim() || "Untitled Brand";
  return {
    brandName,
    slug: slugify(brandName),
    sourceUrl: els.sourceUrl.value.trim(),
    audience: els.audience.value.trim() || "Target audience not specified yet",
    brief: els.brief.value.trim() || "No brief provided yet.",
    direction: selectedDirection(),
    directionId: document.querySelector("input[name='direction']:checked")?.value || state.selectedDirectionId || "studio",
    importedPacket: state.importedPacket,
    targetFrame: state.targetFrame,
    files: state.files
  };
}

function textColorFor(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.67 ? "#141412" : "#ffffff";
}

function designScoutForInput(input) {
  const packet = input.importedPacket || {};
  const text = [
    input.brandName,
    input.audience,
    input.brief,
    packet.productDescription,
    packet.problem,
    packet.desiredFeeling,
    ...(packet.visualDirectionClues || []),
    ...(packet.competitorsOrReferences || []),
    ...(packet.voiceTone || [])
  ].join(" ").toLowerCase();

  const scored = designReferenceLanes
    .map((lane) => ({
      ...lane,
      score: lane.keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score);
  const primary = scored[0].score > 0 ? scored[0] : designReferenceLanes[1];
  const secondary = scored.find((lane) => lane.id !== primary.id && lane.score > 0) || scored.find((lane) => lane.id !== primary.id);
  const feeling = packet.desiredFeeling || input.direction?.traits?.join(" ") || "modern clean premium";
  const query = `${primary.query}; ${feeling}; ${input.brandName}`;
  const secondaryPrinciples = secondary ? secondary.principles.slice(0, 2) : [];
  return {
    provider: state.designScout.mode === "live-http" || state.designScout.mode === "live-cli"
      ? `Live ${state.designScout.provider} references`
      : "Built-in scout now; live LazyWeb/design-reference bridge optional",
    lane: primary,
    secondary,
    query,
    mode: state.designScout.mode,
    liveReferences: state.designScout.liveReferences || [],
    warning: state.designScout.warning || "",
    references: primary.references,
    principles: [...primary.principles, ...secondaryPrinciples].slice(0, 6)
  };
}

function designScoutRequestKey(input) {
  return JSON.stringify({
    brandName: input.brandName,
    audience: input.audience,
    brief: input.brief,
    directionId: input.directionId,
    query: designScoutForInput(input).query
  });
}

function scoutPromptSummary(input) {
  const scout = designScoutForInput(input);
  const liveText = scout.liveReferences.length
    ? `\nLive reference examples: ${scout.liveReferences.map((item) => `${item.title}${item.description ? ` - ${item.description}` : ""}`).join(" | ")}`
    : "";
  return [
    `Design scout lane: ${scout.lane.label}`,
    `Auto reference query: ${scout.query}`,
    `Reference patterns: ${scout.references.map(([name, why]) => `${name} - ${why}`).join(" | ")}`,
    `Design principles: ${scout.principles.join(" ")}${liveText}`
  ].join("\n");
}

function renderDesignScout(input) {
  const scout = designScoutForInput(input);
  els.designScoutStatus.textContent = state.designScout.loading ? "Searching..." : scout.provider;
  els.designScoutQuery.textContent = `Auto query: ${scout.query}`;
  const liveCards = scout.liveReferences.map((item) => `
    <div class="is-live">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.description || item.category || item.url || "Live design reference")}</span>
    </div>
  `);
  const builtInCards = scout.references.map(([name, why]) => `
    <div>
      <strong>${escapeHtml(name)}</strong>
      <span>${escapeHtml(why)}</span>
    </div>
  `);
  els.designScoutReferences.innerHTML = [...liveCards, ...builtInCards].slice(0, 6).join("");
  els.designScoutPrinciples.innerHTML = scout.principles.map((principle) => `<li>${escapeHtml(principle)}</li>`).join("");
}

function renderPortfolioBrain() {
  if (state.portfolioBrain.loading) {
    els.portfolioBrainStatus.textContent = "Scanning Workspace projects...";
    els.portfolioBrainList.innerHTML = renderGenerationProgress("Scanning portfolio", "Checking brand guides, DESIGN.md, logos, and token coverage.");
    return;
  }
  if (state.portfolioBrain.error) {
    els.portfolioBrainStatus.textContent = state.portfolioBrain.error;
    els.portfolioBrainList.innerHTML = "";
    return;
  }
  const projects = state.portfolioBrain.projects || [];
  els.portfolioBrainStatus.textContent = state.portfolioBrain.importingPath
    ? `Reading ${projects.find((project) => project.path === state.portfolioBrain.importingPath)?.name || "project"} and creating a Brand Intake Packet...`
    : state.portfolioBrain.message
      ? state.portfolioBrain.message
      : projects.length
    ? `Scanned ${state.portfolioBrain.scanned} projects. Top ${projects.length} brand opportunities shown.`
    : "No project recommendations loaded yet.";
  els.portfolioBrainList.innerHTML = projects.map((project, index) => `
    <article class="portfolio-brain-item is-${escapeHtml(project.priority)}">
      <div class="portfolio-brain-head">
        <span>${index + 1}</span>
        <strong>${escapeHtml(project.title || project.name)}</strong>
        <em>${escapeHtml(project.archetype)} - ${escapeHtml(project.priority)} priority</em>
      </div>
      <p>${escapeHtml(project.recommendedAction)}</p>
      <small>${escapeHtml((project.reasons || []).join(" • ") || "Brand/design consistency pass recommended.")}</small>
      <div class="portfolio-brain-pills">
        <b class="${project.hasBrandGuide ? "is-ok" : "is-gap"}">${project.hasBrandGuide ? "Brand guide" : "Needs brand guide"}</b>
        <b class="${project.hasDesignMd ? "is-ok" : "is-gap"}">${project.hasDesignMd ? "DESIGN.md" : "Needs DESIGN.md"}</b>
        <b class="${project.hasLogo ? "is-ok" : "is-gap"}">${project.hasLogo ? "Logo found" : "Needs logo"}</b>
        <b class="${project.hasBrandTokens ? "is-ok" : "is-gap"}">${project.hasBrandTokens ? "Tokens" : "Needs tokens"}</b>
        ${project.localUrl ? `<b class="is-ok">Preview URL</b>` : ""}
      </div>
      <div class="portfolio-brain-actions">
        <button class="secondary-action compact-action" type="button" data-project-start="${escapeHtml(project.path)}" ${state.portfolioBrain.importingPath === project.path ? "disabled" : ""}>
          ${state.portfolioBrain.importingPath === project.path ? "Reading project..." : "Start brand kit"}
        </button>
        ${project.localUrl ? `<span>${escapeHtml(project.localUrl)}</span>` : `<span>No local preview URL found yet</span>`}
      </div>
    </article>
  `).join("");
}

async function refreshPortfolioBrain() {
  state.portfolioBrain.loading = true;
  state.portfolioBrain.error = "";
  state.portfolioBrain.message = "";
  renderPortfolioBrain();
  try {
    const response = await fetch("/api/portfolio-brand-opportunities");
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Portfolio scan failed.");
    state.portfolioBrain = {
      loading: false,
      importingPath: "",
      message: "",
      projects: Array.isArray(result.topProjects) ? result.topProjects : [],
      scanned: result.scanned || 0,
      error: ""
    };
  } catch (error) {
    state.portfolioBrain = {
      loading: false,
      importingPath: "",
      message: "",
      projects: [],
      scanned: 0,
      error: error.message
    };
  }
  renderPortfolioBrain();
}

async function startBrandKitFromProject(projectPath) {
  if (!projectPath) return;
  const project = state.portfolioBrain.projects.find((item) => item.path === projectPath);
  state.portfolioBrain.importingPath = projectPath;
  state.portfolioBrain.error = "";
  state.portfolioBrain.message = "";
  state.autoBrain = {
    active: true,
    source: project?.title || project?.name || "Workspace project",
    status: "Reading project",
    summary: "Full Automation AI Brain is reading project docs, brand gaps, preview hints, and category signals."
  };
  renderPortfolioBrain();
  try {
    const response = await fetch(`/api/project-brand-intake?projectPath=${encodeURIComponent(projectPath)}`);
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not create a project intake packet.");
    els.packetInput.value = JSON.stringify(result.packet, null, 2);
    await importPacket({ auto: true });
    els.installPath.value = result.packet.projectPath || projectPath;
    els.packetStatus.textContent = `Auto-created a Brand Intake Packet for ${result.packet.brandName || project?.name || "the selected project"}.`;
    state.autoBrain = {
      active: true,
      source: result.packet.brandName || project?.title || project?.name || "Workspace project",
      status: state.targetFrame ? "Project frame captured" : "Redesign choices ready",
      summary: "Full Automation AI Brain generated three comparable redesign choices. Select one, then generate logo boards."
    };
    state.portfolioBrain.message = "Project loaded. Review the recommended directions, generate logo boards, then preview install.";
    markInstallDirty("Preview the install after the auto-created project packet.");
    renderTestReadiness(getInputs());
    document.querySelector("#preview")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    state.portfolioBrain.error = error.message;
    state.portfolioBrain.message = "";
    state.autoBrain.status = "Needs attention";
    state.autoBrain.summary = error.message;
  } finally {
    state.portfolioBrain.importingPath = "";
    renderPortfolioBrain();
  }
}

function scheduleDesignScoutRefresh() {
  clearTimeout(designScoutTimer);
  designScoutTimer = setTimeout(refreshDesignScout, 450);
}

async function refreshDesignScout() {
  const input = getInputs();
  const scout = designScoutForInput(input);
  const requestKey = designScoutRequestKey(input);
  if (state.designScout.requestKey === requestKey || state.designScout.loading) return;
  state.designScout.loading = true;
  state.designScout.warning = "";
  renderDesignScout(input);

  try {
    const response = await fetch("/api/design-scout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: scout.query,
        project: {
          brandName: input.brandName,
          audience: input.audience,
          brief: input.brief,
          sourceUrl: input.sourceUrl,
          direction: input.direction.label
        },
        fallback: {
          lane: scout.lane.label,
          references: scout.references,
          principles: scout.principles
        }
      })
    });
    const result = await response.json();
    state.designScout = {
      requestKey,
      loading: false,
      liveReferences: Array.isArray(result.references) ? result.references : [],
      mode: result.mode || "builtin",
      provider: result.provider || "builtin",
      warning: result.warning || result.note || ""
    };
  } catch (error) {
    state.designScout = {
      requestKey,
      loading: false,
      liveReferences: [],
      mode: "builtin",
      provider: "builtin",
      warning: error.message
    };
  }
  render();
}

function render() {
  renderDirectionOptions();
  const input = getInputs();
  const dir = input.direction;
  const mark = initials(input.brandName);
  const [ink, paper, primary, deep, accent, secondary] = dir.colors;

  els.positioningTitle.textContent = dir.headline;
  els.positioningCopy.textContent = `${input.brandName} is positioned for ${input.audience}. ${dir.promise}`;
  els.logoPreview.textContent = mark;
  els.logoPreview.style.background = `linear-gradient(135deg, ${deep[1]}, ${primary[1]})`;
  els.logoPreview.style.color = "#ffffff";
  renderDesignScout(input);
  renderAutoBrainGallery(input);

  els.swatches.innerHTML = dir.colors
    .map(([name, hex]) => `<div class="swatch" style="background:${hex};color:${textColorFor(hex)};text-shadow:none"><span>${name}</span><span>${hex}</span></div>`)
    .join("");

  els.typeHeadline.textContent = `${input.brandName} should feel ${dir.traits.slice(0, 3).join(", ")}.`;
  els.typeBody.textContent = "The type system should be strong enough for brand documents, export screens, social previews, and future project UI.";
  els.typeStack.textContent = `${dir.fonts.heading} / ${dir.fonts.body}`;

  els.ogPreview.style.background = `linear-gradient(135deg, ${deep[1]}, ${primary[1]} 58%, ${accent[1]})`;
  els.ogTitle.textContent = input.brandName;
  els.ogText.textContent = dir.promise;
  els.socialPreview.textContent = mark;
  els.socialPreview.style.background = `radial-gradient(circle at 24% 18%, ${accent[1]}, transparent 30%), linear-gradient(135deg, ${deep[1]}, ${primary[1]})`;
  renderAppliedPreview(input);
  renderLogoLab(input);
  renderTestReadiness(input);
  renderOpenAiStatus();
  renderProfileControls();
  renderPortfolioBrain();
  els.packetImporter.classList.toggle("is-imported", Boolean(state.importedPacket));
  document.body.classList.toggle("has-imported-packet", Boolean(state.importedPacket));
  document.body.classList.toggle("has-board-images", Object.keys(state.logoLab.boardImages).length > 0);
  document.body.classList.toggle("has-variant-image", Boolean(state.logoLab.variantImage));

  els.messageList.innerHTML = [
    `One-liner: ${input.brandName} helps ${input.audience.toLowerCase()} create a consistent brand system from messy early inputs.`,
    `Tone: ${dir.voice[0]}`,
    `Do not claim live AI generation, paid provider output, or final approval until those steps actually happen.`
  ].map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const checks = [
    "Brand strategy documents included",
    "DESIGN.md, visual system, and tokens included",
    "Automated design scout guidance included",
    "Voice and messaging guide included",
    "Logo and exact-size social SVG assets included",
    logoApprovalComplete()
      ? state.logoLab.skipped ? "Logo approval explicitly skipped for now" : `${logoApprovalLabel()} approved`
      : "Logo approval still required before direct install",
    "Project AGENTS brand rule included",
    state.targetFrame ? `Actual project preview frame loaded: ${state.targetFrame.name}` : "No actual project screenshot loaded yet",
    state.files.length ? `${state.files.length} input file reference${state.files.length === 1 ? "" : "s"} recorded` : "No uploaded input files yet"
  ];
  els.checklist.innerHTML = checks.map((item) => `
    <div class="check-item">
      <span class="check-dot">OK</span>
      <span>${escapeHtml(item)}</span>
    </div>
  `).join("");

  els.previewInstallButton.classList.toggle("is-next-step", logoApprovalComplete() && !state.install.previewReady);
  els.installButton.classList.toggle("is-next-step", state.install.previewReady && !state.install.installed);
  els.generateLogoBoardsButton.classList.toggle("is-next-step", state.autoBrain.active && !Object.keys(state.logoLab.boardImages).length && !state.logoLab.isGeneratingBoards);

  els.fileList.innerHTML = state.files.length
    ? state.files.map((file) => `
      <div class="file-pill">
        <span>${escapeHtml(file.name)}${file.isPreviewFrame ? " - preview frame" : ""}</span>
        <span>${formatBytes(file.size)}</span>
      </div>
    `).join("")
    : "";
}

function readinessItem(label, status, detail) {
  return { label, status, detail };
}

function markInstallDirty(message = "") {
  state.install.previewReady = false;
  state.install.installed = false;
  els.installButton.disabled = true;
  if (message) els.installSummary.textContent = message;
}

function renderOpenAiStatus() {
  const busy = logoGenerationBusy();
  const boardsComplete = logoBoardGenerationComplete();
  const canFinalize = logoCanGenerateFinal();
  els.openAiStatus.textContent = state.openai.configured
    ? `Ready: ${state.openai.model} (${state.openai.quality})`
    : "Not configured yet. Save a key locally before generating images.";
  els.openAiStatus.classList.toggle("is-ready", state.openai.configured);
  els.openAiStatus.closest(".openai-setup-box").classList.toggle("is-configured", state.openai.configured);
  els.openAiQualitySelect.value = state.openai.quality || "high";
  els.generateLogoBoardsButton.disabled = !state.openai.configured || busy;
  els.generateLogoVariantsButton.disabled = !state.openai.configured || busy || !boardsComplete;
  els.generateApprovedLogoButton.disabled = !state.openai.configured || busy || !canFinalize;
  els.generateLogoBoardsButton.classList.toggle("is-next-step", state.openai.configured && !busy && Object.keys(state.logoLab.boardImages).length === 0);
  els.generateLogoVariantsButton.classList.toggle("is-next-step", state.openai.configured && !busy && boardsComplete && !state.logoLab.variantImage && state.logoLab.approvedSource !== "board");
  els.generateApprovedLogoButton.classList.toggle("is-next-step", state.openai.configured && !busy && canFinalize && !state.logoLab.assets.final);
}

function logoGenerationBusy() {
  return state.logoLab.isGeneratingBoards || state.logoLab.isGeneratingVariant || state.logoLab.isGeneratingFinal;
}

function logoBoardGenerationComplete() {
  const directionIds = Object.keys(state.directions);
  return directionIds.length > 0 && directionIds.every((id) => state.logoLab.boardImages[id]);
}

async function refreshOpenAiStatus() {
  try {
    const response = await fetch("/api/openai-status");
    const result = await response.json();
    state.openai = {
      configured: Boolean(result.configured),
      model: result.model || "gpt-image-2",
      quality: result.quality || "high"
    };
  } catch {
    state.openai = {
      configured: false,
      model: "gpt-image-2",
      quality: "high"
    };
  }
  renderOpenAiStatus();
}

async function saveOpenAiConfig() {
  const apiKey = els.openAiKeyInput.value.trim();
  els.saveOpenAiKeyButton.disabled = true;
  els.openAiStatus.textContent = "Saving local OpenAI setup...";

  try {
    const response = await fetch("/api/openai-config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey,
        model: "gpt-image-2",
        quality: els.openAiQualitySelect.value || "high"
      })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not save OpenAI setup.");
    els.openAiKeyInput.value = "";
    state.openai = {
      configured: Boolean(result.configured),
      model: result.model || "gpt-image-2",
      quality: result.quality || "high"
    };
    els.logoLabStatus.textContent = "OpenAI image generation is configured. You can generate logo images now.";
  } catch (error) {
    els.openAiStatus.textContent = error.message;
  } finally {
    els.saveOpenAiKeyButton.disabled = false;
    renderOpenAiStatus();
  }
}

function renderTestReadiness(input) {
  const hasInstallPlan = state.install.previewReady;
  const installed = state.install.installed;
  const installPath = els.installPath.value.trim();
  const sourceUrl = input.sourceUrl.trim();
  const localUrl = isLocalPreviewUrl(sourceUrl);
  const hasBoards = Object.keys(state.logoLab.boards).length > 0;
  const hasBoardImages = Object.keys(state.logoLab.boardImages).length > 0;
  const hasVariantPrompt = Boolean(state.logoLab.variantPrompt);
  const hasVariantImage = Boolean(state.logoLab.variantImage);
  const logoReady = logoApprovalComplete();
  const boardLogoApproved = state.logoLab.approvedSource === "board";
  const hasFinalLogoAsset = Boolean(state.logoLab.assets.final);

  const items = [
    readinessItem(
      "Packet imported",
      state.importedPacket ? "done" : "needed",
      state.importedPacket ? "Brand directions came from a project packet." : "Paste a Brand Intake Packet to auto-fill this."
    ),
    readinessItem(
      "Project preview",
      state.targetFrame ? "done" : localUrl ? "needed" : "optional",
      state.targetFrame
        ? "Actual local preview frame loaded."
        : localUrl
          ? "Local URL is present, but no frame is loaded yet."
          : "No local preview frame. You can still test install without it."
    ),
    readinessItem(
      "Target folder",
      installPath ? "done" : "needed",
      installPath || "Auto-detect from packet or paste the project folder."
    ),
    readinessItem(
      "Logo board images",
      hasBoardImages ? "done" : "needed",
      hasBoardImages ? `${Object.keys(state.logoLab.boardImages).length} direction image${Object.keys(state.logoLab.boardImages).length === 1 ? "" : "s"} generated.` : hasBoards ? "Prompts are ready; generate board images next." : "Generate board images before choosing a logo direction."
    ),
    readinessItem(
      "Logo variant image",
      hasVariantImage ? "done" : boardLogoApproved ? "optional" : "needed",
      hasVariantImage
        ? "Four-variant decision sheet is generated."
        : boardLogoApproved
          ? "Optional now: you already approved a logo from the board."
          : hasVariantPrompt ? "Prompt is ready; generate the variant image next." : "Generate variants, or approve a logo directly from a board."
    ),
    readinessItem(
      "Logo approval",
      logoReady ? state.logoLab.skipped ? "warning" : "done" : "blocked",
      logoReady
        ? state.logoLab.skipped ? "Skipped temporarily." : `${logoApprovalLabel()} approved.`
        : "Approve a board logo, approve A/B/C/D, or explicitly skip for now."
    ),
    readinessItem(
      "Logo image asset",
      hasFinalLogoAsset ? "done" : "optional",
      hasFinalLogoAsset ? "Final generated logo image will export with the kit." : "Optional: attach the final generated logo image before install."
    ),
    readinessItem(
      "Install preview",
      hasInstallPlan ? "done" : "needed",
      hasInstallPlan ? "Create/update list is visible." : "Click Preview install after logo approval."
    ),
    readinessItem(
      "Brand kit installed",
      installed ? "done" : "optional",
      installed ? "Install completed in the target project." : "Final action for the full test."
    )
  ];

  const blocking = items.filter((item) => item.status === "needed" || item.status === "blocked");
  els.testReadinessTitle.textContent = blocking.length
    ? `${blocking.length} step${blocking.length === 1 ? "" : "s"} before full test install`
    : installed ? "Full test complete" : "Ready for install test";

  els.testReadinessList.innerHTML = items.map((item) => `
    <div class="test-readiness-item is-${item.status}">
      <span>${item.status === "done" ? "OK" : item.status === "warning" ? "SKIP" : item.status === "blocked" ? "BLOCK" : item.status === "optional" ? "OPT" : "TODO"}</span>
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </div>
    </div>
  `).join("");
}

function logoApprovalComplete() {
  return Boolean(state.logoLab.approvedSource || state.logoLab.approvedVariant || state.logoLab.skipped);
}

function logoApprovalLabel() {
  if (state.logoLab.approvedSource === "board") {
    return `${state.directions[logoDirectionId()]?.label || "Selected"} board logo`;
  }
  if (state.logoLab.approvedVariant) return `Logo variant ${state.logoLab.approvedVariant}`;
  return "Logo";
}

function logoCanGenerateFinal() {
  if (state.logoLab.approvedSource === "board") {
    return Boolean(state.logoLab.assets.board || state.logoLab.boardImages[logoDirectionId()]);
  }
  return Boolean(state.logoLab.approvedVariant && state.logoLab.variantImage);
}

function logoDirectionId() {
  return state.logoLab.selectedDirectionId || state.selectedDirectionId;
}

function directionPrompt(input, direction, id) {
  const colorText = direction.colors.map(([name, hex]) => `${name} ${hex}`).join(", ");
  const packet = input.importedPacket || {};
  const avoid = [
    ...(packet.whatShouldNotChange || []),
    ...(packet.brandRisks || []),
    "Do not use childish marks, generic swooshes, fake awards, fake bestseller claims, watermarks, messy clutter, or plain initial letters as the whole logo idea."
  ].slice(0, 8).join(" ");
  return `Use case: logo-brand
Asset type: single-direction brand/logo concept board
Primary request: Create one polished logo concept board for "${input.brandName}" using the "${direction.label}" direction. This must be distinct from the other directions, not a minor color variation.
Brand context: ${input.brief}
Audience: ${input.audience}
Required visible text: "${input.brandName}". If a tagline is used, keep it short and crisp.
Direction headline: ${direction.headline}
Direction promise: ${direction.promise}
Visual traits: ${direction.traits.join(", ")}
Color palette: ${colorText}
Typography direction: heading ${direction.fonts.heading}; body ${direction.fonts.body}
${scoutPromptSummary(input)}
Board layout must be standardized across all directions:
- Landscape 16:10 decision board.
- Same neutral paper background across all boards.
- Top row: primary wordmark, compact symbol/favicon, social avatar circle.
- Middle row: website header lockup and small app/product placement.
- Bottom row: palette chips and typography sample.
- Keep all labels small and secondary; visual identity should be the main subject.
Logo rule: the mark must be a modern distinctive symbol, emblem, or abstract icon system. Do not make the logo only initials or plain letters.
Contrast rule: every visible word and mark must be high contrast and readable against its background; no dark text on dark color and no light text on light color.
Style: senior brand designer presentation board, premium spacing, vector-friendly mark ideas shown as polished raster mockups, distinct logo forms, crisp text, consistent framing.
Avoid: ${avoid}
Output: one landscape board for this direction only.`;
}

function variantsPrompt(input) {
  const id = logoDirectionId();
  const direction = state.directions[id] || input.direction;
  const notes = els.logoRevisionNotes.value.trim() || state.logoLab.revisionNotes || "No extra revision notes yet.";
  const colorText = direction.colors.map(([name, hex]) => `${name} ${hex}`).join(", ");
  return `Use case: logo-brand
Asset type: four-logo-variant decision sheet
Primary request: Create four distinct logo concepts for "${input.brandName}" using the approved "${direction.label}" brand direction. The four concepts must be meaningfully different, not the same mark repeated.
Required visible text: "${input.brandName}". Label the four options clearly as A, B, C, and D.
Brand context: ${input.brief}
Audience: ${input.audience}
Direction: ${direction.label}
Promise: ${direction.promise}
Colors: ${colorText}
Typography direction: heading ${direction.fonts.heading}; body ${direction.fonts.body}
${scoutPromptSummary(input)}
Variant requirements:
A: refined wordmark-led identity
B: compact symbol-led identity with custom letter integration only if it feels ownable
C: symbol plus wordmark identity
D: editorial/premium publishing-style lockup
Standardized sheet layout:
- Landscape 16:10 decision sheet.
- Four equal columns labeled A, B, C, D.
- Each column must use the same mini-layout: large logo lockup, small circular profile mark, favicon square, tiny header placement.
- Keep backgrounds and scale consistent so differences are easy to compare.
Logo rule: no option should be only plain initials or generic letters. Each option needs a distinctive modern symbol, emblem, or abstract icon that can survive as an app icon, favicon, and social avatar.
Contrast rule: all logo text and marks must be high contrast and readable on their displayed backgrounds.
Social/avatar rule: small profile marks should be symbol/icon only, with no tiny tagline, no long wordmark text, and no crowded detail.
Revision notes from owner: ${notes}
Avoid: generic swooshes, childish symbols, hearts as the main idea, ornate clutter, fake awards, fake bestseller claims, messy typography, watermarks.
Output: one landscape decision sheet with four distinct logo options.`;
}

function finalLogoPrompt(input) {
  const id = logoDirectionId();
  const direction = state.directions[id] || input.direction;
  const approvedFromBoard = state.logoLab.approvedSource === "board";
  const variant = approvedFromBoard ? "the approved logo from the selected board image" : state.logoLab.approvedVariant || "the approved option";
  const colorText = direction.colors.map(([name, hex]) => `${name} ${hex}`).join(", ");
  const notes = els.logoRevisionNotes.value.trim() || state.logoLab.revisionNotes || "No extra revision notes.";
  return `Use case: final-logo-production
Asset type: standalone approved logo asset
Primary request: Create a clean standalone final logo for "${input.brandName}" based on ${variant} from the reference image when provided.
Brand context: ${input.brief}
Audience: ${input.audience}
Direction: ${direction.label}
Promise: ${direction.promise}
Colors: ${colorText}
Typography direction: heading ${direction.fonts.heading}; body ${direction.fonts.body}
${scoutPromptSummary(input)}
Required output: one polished logo lockup on a simple clean background, optimized for website header and brand guide usage.
Also create the mark so it can be cropped into tiny social avatars; tiny profile/avatar use should be symbol/icon only, not long text, not taglines, and not a plain initials-only fallback.
${approvedFromBoard ? "Reference instruction: the owner approved one logo from the selected concept board. Preserve the strongest logo lockup from that board, especially the top-left/header-style logo if present. Remove all surrounding board elements, mockup labels, palettes, photos, and extra sample layouts." : `If using a reference sheet, isolate and refine approved option ${variant}; do not merge all options.`}
Revision notes from owner: ${notes}
Avoid: watermarks, mockup scenes, extra labels, fake awards, tiny unreadable text, clutter, generic swooshes, childish symbols, low contrast.
Output: square final logo asset, centered, clean, high contrast, production-reference quality.`;
}

function screenRedesignPrompt(input, direction, id) {
  const colorText = direction.colors.map(([name, hex]) => `${name} ${hex}`).join(", ");
  const cue = projectCue(input);
  const packet = input.importedPacket || {};
  const risks = [
    ...(packet.whatShouldNotChange || []),
    ...(packet.brandRisks || [])
  ].slice(0, 8).join(" ");
  return `Use case: actual-product-screen-redesign
Asset type: one realistic redesigned web app screen
Primary request: Redesign the referenced "${input.brandName}" screen using the "${direction.label}" direction. Use the attached screenshot as the structure reference and keep the same product purpose, screen density, and main dashboard information hierarchy.
Brand context: ${input.brief}
Audience: ${input.audience}
Current screen role: ${cue.stage}
Direction headline: ${direction.headline}
Direction promise: ${direction.promise}
Visual traits: ${direction.traits.join(", ")}
Color palette: ${colorText}
Typography direction: heading ${direction.fonts.heading}; body ${direction.fonts.body}
${scoutPromptSummary(input)}
Redesign requirements:
- Preserve the actual app/page structure enough that the owner can judge how this direction would feel on the real product.
- Show a full desktop web app screenshot, not a logo board, not a moodboard, not a brand guide page.
- Keep navigation, dashboard panels, core cards, status chips, charts, and primary action areas believable for the referenced screen.
- Apply this direction visibly through layout polish, color, typography, button treatment, cards, icon style, contrast, and hierarchy.
- Make text readable and high contrast; do not put dark text on dark backgrounds or light text on light backgrounds.
- Use professional product-design quality, not generic crypto neon, fake profit claims, casino vibes, or toy-like AI graphics.
- For ProfitPilot or trading products, keep live-money safety visible: paper proof, blockers, risk gates, and no guaranteed-profit implication.
Do not invent: ${risks}
Output: one polished 16:10 desktop web app redesign screenshot based on the attached current project screenshot.`;
}

function renderPromptCard(title, prompt, actions = "") {
  return `
    <div class="logo-prompt-card">
      <div>
        <strong>${escapeHtml(title)}</strong>
        ${actions}
      </div>
      <details class="prompt-details">
        <summary>Prompt</summary>
        <pre>${escapeHtml(prompt)}</pre>
      </details>
    </div>
  `;
}

function renderLogoAssetCard(kind, asset) {
  const label = kind === "final" ? "Final logo image" : "Source/reference image";
  if (!asset) {
    return `
      <div class="logo-asset-card is-empty">
        <strong>${label}</strong>
        <span>No saved image yet.</span>
      </div>
    `;
  }

  return `
    <div class="logo-asset-card">
      <img src="${asset.dataUrl}" alt="${escapeHtml(label)} preview" />
      <div>
        <strong>${label}</strong>
        <span>${escapeHtml(asset.name)} - ${formatBytes(asset.size)}</span>
      </div>
      <button class="tiny-action" type="button" data-logo-remove="${kind}">Remove</button>
    </div>
  `;
}

function renderLogoAssets() {
  els.logoAssetGrid.innerHTML = [
    state.logoLab.finalStatus === "generating"
      ? `<div class="logo-asset-card is-progress">${renderGenerationProgress("Generating final logo", "Refining the approved logo into a standalone asset.")}</div>`
      : "",
    renderLogoAssetCard("board", state.logoLab.assets.board),
    renderLogoAssetCard("final", state.logoLab.assets.final)
  ].filter(Boolean).join("");
}

function renderLogoLab(input) {
  const complete = logoApprovalComplete();
  els.logoApprovalBadge.textContent = complete ? state.logoLab.skipped ? "Skipped" : `Approved ${logoApprovalLabel()}` : "Required";
  els.logoApprovalBadge.classList.toggle("is-approved", complete);
  els.logoApprovalBadge.classList.toggle("is-skipped", state.logoLab.skipped);

  const boardEntries = Object.entries(state.logoLab.boards);
  els.logoBoardGrid.innerHTML = boardEntries.length
    ? boardEntries.map(([id, prompt]) => {
      const direction = state.directions[id];
      const isSelected = id === logoDirectionId();
      const image = state.logoLab.boardImages[id];
      const status = state.logoLab.boardStatus[id] || (image ? "done" : "waiting");
      return `
        <div class="logo-prompt-card ${status === "generating" ? "is-generating" : ""}">
          <div>
            <strong>${escapeHtml(direction?.label || id)}</strong>
            <button class="tiny-action ${isSelected ? "is-selected" : ""}" type="button" data-logo-select="${escapeHtml(id)}">
              ${isSelected ? "Selected" : "Use for variants"}
            </button>
            ${image ? `<button class="tiny-action ${state.logoLab.approvedSource === "board" && isSelected ? "is-selected" : ""}" type="button" data-logo-approve-board="${escapeHtml(id)}">
              ${state.logoLab.approvedSource === "board" && isSelected ? "Board logo approved" : "Use board logo"}
            </button>` : ""}
            <button class="tiny-action" type="button" data-copy-prompt="${escapeHtml(id)}">Copy prompt</button>
          </div>
          <div class="generation-state is-${escapeHtml(status)}">${escapeHtml(generationStatusLabel(status))}</div>
          ${image ? `<img class="logo-generated-image" src="${image.dataUrl}" alt="${escapeHtml(direction?.label || id)} generated logo board" data-lightbox-src="${image.dataUrl}" />` : ""}
          <details class="prompt-details">
            <summary>Prompt</summary>
            <pre>${escapeHtml(prompt)}</pre>
          </details>
        </div>
      `;
    }).join("")
    : `<div class="logo-empty">No logo board prompts generated yet.</div>`;

  if (state.logoLab.variantPrompt) {
    els.logoVariantGrid.innerHTML = `
      ${state.logoLab.variantStatus === "generating" ? renderGenerationProgress("Generating variant image", "Creating four comparable logo options for the selected direction. This can take a little while.") : ""}
      ${state.logoLab.variantStatus && state.logoLab.variantStatus !== "generating" ? `<div class="generation-state is-${escapeHtml(state.logoLab.variantStatus)}">${escapeHtml(generationStatusLabel(state.logoLab.variantStatus))}</div>` : ""}
      ${state.logoLab.variantImage ? `<img class="logo-generated-image" src="${state.logoLab.variantImage.dataUrl}" alt="Generated four-logo-variant decision sheet" data-lightbox-src="${state.logoLab.variantImage.dataUrl}" />` : ""}
      ${renderPromptCard(`Four variants for ${state.directions[logoDirectionId()]?.label || "selected direction"}`, state.logoLab.variantPrompt, `
        <button class="tiny-action" type="button" data-copy-prompt="variants">Copy prompt</button>
      `)}
      <div class="variant-approval-row">
        ${["A", "B", "C", "D"].map((label) => `
          <button class="tiny-action ${state.logoLab.approvedVariant === label ? "is-selected" : ""}" type="button" data-approve-variant="${label}">
            Approve ${label}
          </button>
        `).join("")}
      </div>
    `;
  } else {
    els.logoVariantGrid.innerHTML = state.logoLab.approvedSource === "board"
      ? `<div class="logo-empty">Board logo approved. You can generate the final logo now, or generate variants only if you want alternatives.</div>`
      : `<div class="logo-empty">Select a direction and generate the four-variant prompt, or approve a logo directly from a board.</div>`;
  }

  renderLogoAssets();
}

function renderGenerationProgress(title, detail) {
  return `
    <div class="generation-progress">
      <div class="spinner" aria-hidden="true"></div>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(detail)}</span>
      </div>
    </div>
  `;
}

function generationStatusLabel(status) {
  return {
    waiting: "Waiting",
    queued: "Queued",
    generating: "Generating...",
    done: "Generated",
    error: "Needs retry"
  }[status] || status;
}

async function generateLogoBoards() {
  if (!state.openai.configured) {
    els.logoLabStatus.textContent = "Save your OpenAI key locally first, then generate logo images.";
    return;
  }
  const input = getInputs();
  await refreshDesignScout();
  markInstallDirty("Preview the install after choosing and approving a logo.");
  state.logoLab.boards = Object.fromEntries(
    Object.entries(state.directions).map(([id, direction]) => [id, directionPrompt(input, direction, id)])
  );
  state.logoLab.selectedDirectionId = state.logoLab.selectedDirectionId || state.selectedDirectionId;
  state.logoLab.skipped = false;
  state.logoLab.boardImages = {};
  state.logoLab.boardStatus = Object.fromEntries(Object.keys(state.directions).map((id) => [id, "queued"]));
  state.logoLab.variantImage = null;
  state.logoLab.variantStatus = "";
  state.logoLab.finalStatus = "";
  state.logoLab.approvedSource = "";
  state.logoLab.approvedVariant = "";
  state.logoLab.isGeneratingBoards = true;
  state.logoLab.assets.board = null;
  state.logoLab.assets.final = null;
  els.logoLabStatus.textContent = `Generating ${Object.keys(state.logoLab.boards).length} logo board image${Object.keys(state.logoLab.boards).length === 1 ? "" : "s"} with gpt-image-2...`;
  render();

  try {
    const entries = Object.entries(state.logoLab.boards);
    for (const [index, [id, prompt]] of entries.entries()) {
      const direction = state.directions[id];
      state.logoLab.boardStatus[id] = "generating";
      els.logoLabStatus.textContent = `Generating logo board ${index + 1} of ${entries.length}: ${direction?.label || id}. Please wait.`;
      render();
      const asset = await requestLogoImage({
        prompt,
        name: `${input.slug}-${slugify(direction?.label || id)}-logo-board.png`,
        mode: "generate",
        size: "1536x1024"
      });
      state.logoLab.boardImages[id] = asset;
      state.logoLab.boardStatus[id] = "done";
      if (id === logoDirectionId()) state.logoLab.assets.board = asset;
      render();
    }
    els.logoLabStatus.textContent = "Generated logo board images. If you already like one logo from a board, click Use board logo. Otherwise generate variants.";
  } catch (error) {
    const current = Object.keys(state.logoLab.boardStatus).find((id) => state.logoLab.boardStatus[id] === "generating");
    if (current) state.logoLab.boardStatus[current] = "error";
    els.logoLabStatus.textContent = `Image generation stopped: ${error.message}`;
  } finally {
    state.logoLab.isGeneratingBoards = false;
    render();
  }
}

async function generateScreenRedesigns() {
  if (!state.openai.configured) {
    els.screenRedesignStatus.textContent = "OpenAI image generation must be configured first.";
    return;
  }
  if (!state.targetFrame?.url) {
    els.screenRedesignStatus.textContent = "Capture the actual project screen first, then generate screen redesigns.";
    return;
  }

  const input = getInputs();
  await refreshDesignScout();
  state.screenLab = {
    images: {},
    status: Object.fromEntries(Object.keys(state.directions).map((id) => [id, "queued"])),
    isGenerating: true,
    message: "Generating actual screen redesigns from the captured screenshot..."
  };
  render();

  try {
    const entries = Object.entries(state.directions).slice(0, 3);
    for (const [index, [id, direction]] of entries.entries()) {
      state.screenLab.status[id] = "generating";
      state.screenLab.message = `Generating screen redesign ${index + 1} of ${entries.length}: ${direction.label}.`;
      render();
      const prompt = screenRedesignPrompt(input, direction, id);
      const asset = await requestLogoImage({
        prompt,
        name: `${input.slug}-${slugify(direction.label)}-screen-redesign.png`,
        mode: "edit",
        size: "1536x1024",
        referenceImage: imageReferencePayload(state.targetFrame)
      });
      state.screenLab.images[id] = asset;
      state.screenLab.status[id] = "done";
      render();
    }
    state.screenLab.message = "Actual screen redesigns generated. Choose the direction that feels strongest, then move to logo boards.";
    els.screenRedesignStatus.textContent = state.screenLab.message;
  } catch (error) {
    const current = Object.keys(state.screenLab.status).find((id) => state.screenLab.status[id] === "generating");
    if (current) state.screenLab.status[current] = "error";
    state.screenLab.message = `Screen redesign generation stopped: ${error.message}`;
    els.screenRedesignStatus.textContent = state.screenLab.message;
  } finally {
    state.screenLab.isGenerating = false;
    render();
  }
}

async function generateLogoVariants() {
  if (!state.openai.configured) {
    els.logoLabStatus.textContent = "Save your OpenAI key locally first, then generate the variant image.";
    return;
  }
  const input = getInputs();
  await refreshDesignScout();
  markInstallDirty("Preview the install after approving a logo variant.");
  state.logoLab.revisionNotes = els.logoRevisionNotes.value.trim();
  state.logoLab.selectedDirectionId = logoDirectionId();
  state.logoLab.variantPrompt = variantsPrompt(input);
  state.logoLab.approvedVariant = "";
  state.logoLab.approvedSource = "";
  state.logoLab.skipped = false;
  state.logoLab.variantImage = null;
  state.logoLab.variantStatus = "generating";
  state.logoLab.finalStatus = "";
  state.logoLab.isGeneratingVariant = true;
  state.logoLab.assets.final = null;
  els.logoLabStatus.textContent = "Generating the four-logo-variant image with gpt-image-2...";
  render();

  try {
    const asset = await requestLogoImage({
      prompt: state.logoLab.variantPrompt,
      name: `${input.slug}-logo-variants.png`,
      mode: "generate",
      size: "1536x1024"
    });
    state.logoLab.variantImage = asset;
    state.logoLab.variantStatus = "done";
    state.logoLab.assets.board = asset;
    els.logoLabStatus.textContent = "Generated the four-logo-variant image. Approve A, B, C, or D.";
  } catch (error) {
    state.logoLab.variantStatus = "error";
    els.logoLabStatus.textContent = `Variant image generation stopped: ${error.message}`;
  } finally {
    state.logoLab.isGeneratingVariant = false;
    render();
  }
}

async function generateApprovedLogoAsset() {
  if (!state.openai.configured) {
    els.logoLabStatus.textContent = "Save your OpenAI key locally first, then generate the final logo.";
    return;
  }
  const input = getInputs();
  await refreshDesignScout();
  if (!logoCanGenerateFinal()) {
    els.logoLabStatus.textContent = "Approve a board logo or A/B/C/D variant before generating the final logo.";
    return;
  }

  markInstallDirty("Preview the install after generating the final logo.");
  state.logoLab.finalStatus = "generating";
  state.logoLab.isGeneratingFinal = true;
  els.logoLabStatus.textContent = `Generating final logo from ${logoApprovalLabel()} with gpt-image-2...`;
  render();

  try {
    const reference = state.logoLab.approvedSource === "board"
      ? state.logoLab.assets.board || state.logoLab.boardImages[logoDirectionId()] || null
      : state.logoLab.variantImage || state.logoLab.assets.board || null;
    const asset = await requestLogoImage({
      prompt: finalLogoPrompt(input),
      name: `${input.slug}-approved-logo.png`,
      mode: reference ? "final" : "generate",
      size: "1024x1024",
      referenceImage: imageReferencePayload(reference)
    });
    state.logoLab.assets.final = asset;
    state.logoLab.finalStatus = "done";
    els.logoLabStatus.textContent = "Generated final approved logo. Preview install when you are ready.";
  } catch (error) {
    state.logoLab.finalStatus = "error";
    els.logoLabStatus.textContent = `Final logo generation stopped: ${error.message}`;
  } finally {
    state.logoLab.isGeneratingFinal = false;
    render();
  }
}

async function requestLogoImage(payload) {
  const response = await fetch("/api/generate-logo-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "OpenAI image generation failed.");
  }
  return {
    name: result.name || payload.name || "generated-logo.png",
    size: result.size || 0,
    type: result.type || "image/png",
    dataUrl: result.dataUrl,
    model: result.model || "gpt-image-2",
    revisedPrompt: result.revisedPrompt || ""
  };
}

function profileSnapshot() {
  const input = getInputs();
  return {
    brandName: input.brandName,
    sourceUrl: input.sourceUrl,
    audience: input.audience,
    brief: input.brief,
    selectedDirectionId: state.selectedDirectionId,
    previewMode: state.previewMode,
    directions: state.directions,
    importedPacket: state.importedPacket,
    autoBrain: state.autoBrain,
    screenLab: state.screenLab,
    files: state.files,
    targetFrame: state.targetFrame?.url?.startsWith("data:")
      ? state.targetFrame
      : state.targetFrame ? { ...state.targetFrame, url: "" } : null,
    logoLab: state.logoLab,
    installPath: els.installPath.value.trim(),
    logoRevisionNotes: els.logoRevisionNotes.value.trim(),
    directionLabel: input.direction.label,
    logoDecision: logoApprovalComplete() && !state.logoLab.skipped ? logoApprovalLabel() : state.logoLab.skipped ? "Skipped" : "Not approved"
  };
}

async function refreshProfiles() {
  try {
    const response = await fetch("/api/brand-profiles");
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not load profiles.");
    const profiles = result.profiles || [];
    state.profiles = profiles;
    const selectedValue = state.activeProfileId || els.profileSelect.value;
    els.profileSelect.innerHTML = profiles.length
      ? [
        `<option value="">Choose a saved profile</option>`,
        ...profiles.map((profile) => `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.name)} - ${escapeHtml(profile.logoDecision || profile.directionLabel || "Draft")}</option>`)
      ].join("")
      : `<option value="">No saved profiles yet</option>`;
    if (selectedValue && profiles.some((profile) => profile.id === selectedValue)) {
      els.profileSelect.value = selectedValue;
    }
    renderProfileControls();
  } catch (error) {
    els.profileStatus.textContent = error.message;
  }
}

function renderProfileControls() {
  const hasProfiles = state.profiles.length > 0;
  const selectedId = state.activeProfileId || els.profileSelect.value;
  els.saveProfileButton.textContent = selectedId ? "Update profile" : "Save profile";
  els.loadProfileButton.disabled = !hasProfiles || !els.profileSelect.value;
  els.deleteProfileButton.disabled = !hasProfiles || !els.profileSelect.value;
}

function matchingProfileForBrand(brandName) {
  const slug = slugify(brandName);
  return state.profiles.find((profile) => slugify(profile.brandName || profile.name) === slug) || null;
}

async function saveProfile() {
  const snapshot = profileSnapshot();
  const existingProfile = state.activeProfileId
    ? state.profiles.find((profile) => profile.id === state.activeProfileId)
    : (els.profileSelect.value
      ? state.profiles.find((profile) => profile.id === els.profileSelect.value)
      : matchingProfileForBrand(snapshot.brandName));
  const profileId = existingProfile?.id || "";
  els.saveProfileButton.disabled = true;
  els.profileStatus.textContent = profileId ? "Updating saved brand profile..." : "Saving brand profile locally...";
  try {
    const response = await fetch("/api/brand-profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: profileId || undefined,
        name: existingProfile?.name || `${snapshot.brandName} - ${new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}`,
        brandName: snapshot.brandName,
        directionLabel: snapshot.directionLabel,
        logoDecision: snapshot.logoDecision,
        snapshot
      })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not save profile.");
    state.activeProfileId = result.profile.id;
    els.profileStatus.textContent = `${profileId ? "Updated" : "Saved"} profile: ${result.profile.name}.`;
    await refreshProfiles();
    els.profileSelect.value = result.profile.id;
  } catch (error) {
    els.profileStatus.textContent = error.message;
  } finally {
    els.saveProfileButton.disabled = false;
  }
}

async function loadProfile() {
  const id = els.profileSelect.value;
  if (!id) {
    els.profileStatus.textContent = "Choose a saved profile to restore.";
    return;
  }
  els.loadProfileButton.disabled = true;
  els.profileStatus.textContent = "Restoring saved brand profile...";
  try {
    const response = await fetch(`/api/brand-profiles/${encodeURIComponent(id)}`);
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not restore profile.");
    state.activeProfileId = result.profile.id;
    restoreProfileSnapshot(result.snapshot || {});
    els.profileStatus.textContent = `Restored profile: ${result.profile.name}.`;
    await refreshProfiles();
  } catch (error) {
    els.profileStatus.textContent = error.message;
  } finally {
    els.loadProfileButton.disabled = false;
  }
}

async function deleteProfile() {
  const id = els.profileSelect.value;
  if (!id) {
    els.profileStatus.textContent = "Choose a saved profile to delete.";
    return;
  }
  const profile = state.profiles.find((item) => item.id === id);
  if (!window.confirm(`Delete saved profile "${profile?.name || id}"? This only removes the Brand Kit Studio saved draft.`)) {
    return;
  }
  els.deleteProfileButton.disabled = true;
  els.profileStatus.textContent = "Deleting saved profile...";
  try {
    const response = await fetch(`/api/brand-profiles/${encodeURIComponent(id)}`, { method: "DELETE" });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not delete profile.");
    if (state.activeProfileId === id) state.activeProfileId = "";
    els.profileSelect.value = "";
    els.profileStatus.textContent = `Deleted profile: ${profile?.name || id}.`;
    await refreshProfiles();
  } catch (error) {
    els.profileStatus.textContent = error.message;
  } finally {
    els.deleteProfileButton.disabled = false;
    renderProfileControls();
  }
}

function restoreProfileSnapshot(snapshot) {
  releaseTargetFrame();
  state.files = Array.isArray(snapshot.files) ? snapshot.files : [];
  state.targetFrame = snapshot.targetFrame?.url ? snapshot.targetFrame : null;
  state.directions = snapshot.directions || state.directions;
  state.importedPacket = snapshot.importedPacket || null;
  state.autoBrain = snapshot.autoBrain || {
    active: Boolean(snapshot.importedPacket),
    source: snapshot.brandName || "",
    status: snapshot.importedPacket ? "Redesign choices ready" : "Ready",
    summary: snapshot.importedPacket
      ? "Full Automation AI Brain restored this profile and regenerated comparable redesign choices."
      : "Choose a project from Portfolio Brand Brain to auto-read it and generate comparable redesign previews."
  };
  state.screenLab = snapshot.screenLab || {
    images: {},
    status: {},
    isGenerating: false,
    message: ""
  };
  state.selectedDirectionId = snapshot.selectedDirectionId || Object.keys(state.directions)[0] || "studio";
  state.previewMode = snapshot.previewMode || "app";
  state.logoLab = {
    ...state.logoLab,
    ...(snapshot.logoLab || {}),
    assets: {
      board: snapshot.logoLab?.assets?.board || null,
      final: snapshot.logoLab?.assets?.final || null
    }
  };
  state.install = {
    previewReady: false,
    installed: false
  };
  state.portfolioBrain = {
    loading: false,
    importingPath: "",
    message: "",
    projects: [],
    scanned: 0,
    error: ""
  };
  els.brandName.value = snapshot.brandName || "Untitled Brand";
  els.sourceUrl.value = snapshot.sourceUrl || "";
  els.audience.value = snapshot.audience || "";
  els.brief.value = snapshot.brief || "";
  els.logoRevisionNotes.value = snapshot.logoRevisionNotes || state.logoLab.revisionNotes || "";
  els.installPath.value = snapshot.installPath || "";
  document.querySelectorAll("[data-preview-mode]").forEach((item) => {
    item.classList.toggle("is-selected", item.dataset.previewMode === state.previewMode);
  });
  markInstallDirty("Preview the install after restoring a saved profile.");
  render();
}

async function copyLogoPrompt(key) {
  const prompt = key === "variants" ? state.logoLab.variantPrompt : state.logoLab.boards[key];
  if (!prompt) return;
  try {
    await navigator.clipboard.writeText(prompt);
    els.logoLabStatus.textContent = "Logo prompt copied.";
  } catch {
    els.logoLabStatus.textContent = "Clipboard unavailable. Select and copy the prompt text manually.";
  }
}

function renderDirectionOptions() {
  const entries = Object.entries(state.directions);
  const activeId = state.selectedDirectionId;

  els.directionOptions.innerHTML = entries.map(([id, direction]) => `
    <label>
      <input name="direction" type="radio" value="${escapeHtml(id)}" ${id === activeId ? "checked" : ""} />
      ${escapeHtml(direction.label)}
    </label>
  `).join("");

  els.optionBoard.innerHTML = entries.map(([id, direction]) => renderOptionCard(id, direction, id === activeId)).join("");

  document.querySelectorAll("input[name='direction']").forEach((radio) => {
    radio.addEventListener("change", (event) => {
      state.selectedDirectionId = event.target.value;
      markInstallDirty("Preview the install again after changing the brand direction.");
      render();
    });
  });

  document.querySelectorAll(".option-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedDirectionId = card.dataset.directionId;
      markInstallDirty("Preview the install again after changing the brand direction.");
      render();
    });
  });
}

function renderAutoBrainGallery(input) {
  const entries = Object.entries(state.directions).slice(0, 3);
  const status = state.autoBrain.active
    ? state.targetFrame
      ? "Project frame captured"
      : input.sourceUrl
        ? "Project read; start preview to capture screen"
        : "Project read"
    : state.autoBrain.status;
  els.autoBrainStatus.textContent = status;
  els.autoBrainSummary.textContent = state.autoBrain.active
    ? `${input.brandName} is ready for visual choice. Pick a redesign direction below; the next recommended action is logo board generation.`
    : state.autoBrain.summary;
  const canGenerateScreens = Boolean(state.openai.configured && state.targetFrame && !state.screenLab.isGenerating);
  els.generateScreenRedesignsButton.disabled = !canGenerateScreens;
  els.generateScreenRedesignsButton.classList.toggle("is-next-step", Boolean(state.openai.configured && state.targetFrame && state.autoBrain.active && !Object.keys(state.screenLab.images).length && !state.screenLab.isGenerating));
  els.screenRedesignStatus.textContent = state.screenLab.isGenerating
    ? state.screenLab.message || "Generating actual screen redesigns..."
    : !state.openai.configured
      ? "OpenAI image generation must be configured first."
      : !state.targetFrame
        ? "Start the target app or capture a screenshot first; then this can redesign the actual screen."
        : Object.keys(state.screenLab.images).length
          ? "Actual screen redesigns generated from the captured project screenshot."
          : "Ready to generate redesigns from the captured project screenshot.";

  els.autoPreviewGallery.innerHTML = state.importedPacket && entries.length
    ? entries.map(([id, direction]) => renderAutoPreviewCard(id, direction, id === state.selectedDirectionId)).join("")
    : `<div class="auto-preview-empty">Select a recommended project and Brand Kit Studio will auto-generate three comparable redesign previews here.</div>`;
}

function renderAutoPreviewCard(id, direction, isSelected) {
  const input = getInputsForDirection(direction, id);
  const cue = projectCue(input);
  const generated = state.screenLab.images[id];
  const status = state.screenLab.status[id] || "";
  return `
    <article class="auto-preview-card ${isSelected ? "is-selected" : ""}" data-auto-preview-card="${escapeHtml(id)}">
      <div class="auto-preview-card-head">
        <div>
          <strong style="font-family:${safeFont(direction.fonts.heading)}">${escapeHtml(direction.label)}</strong>
          <span>${escapeHtml(direction.headline || direction.promise)}</span>
        </div>
        ${isSelected ? `<b>Selected</b>` : `<b>Option</b>`}
      </div>
      ${generated
        ? `<img class="auto-generated-screen" src="${generated.dataUrl}" alt="${escapeHtml(direction.label)} generated screen redesign" data-lightbox-src="${generated.dataUrl}" />`
        : status === "generating"
          ? renderScreenGeneratingCard(direction)
          : renderAutoPreviewSurface(input)}
      <div class="auto-preview-card-foot">
        <p>${escapeHtml(direction.promise)}</p>
        <button class="secondary-action compact-action" type="button" data-auto-preview-select="${escapeHtml(id)}">
          ${isSelected ? "Using this direction" : "Use this direction"}
        </button>
      </div>
      <small>Decision ${escapeHtml(id.toUpperCase())}: ${escapeHtml(cue.stage)}. Next step after choosing: generate logo board images, then approve install.</small>
    </article>
  `;
}

function renderScreenGeneratingCard(direction) {
  return `
    <div class="auto-preview-surface is-generating-screen">
      ${renderGenerationProgress(`Generating ${direction.label}`, "Using the captured project screenshot as the visual reference.")}
    </div>
  `;
}

function renderAutoPreviewSurface(input) {
  const dir = input.direction;
  const cue = projectCue(input);
  const mark = initials(input.brandName);
  const frame = input.targetFrame;
  return `
    <div class="auto-preview-surface ${frame ? "has-frame" : ""}" style="${previewVars(input)}">
      ${frame ? `<img src="${escapeHtml(frame.url)}" alt="" />` : ""}
      <div class="auto-preview-ui">
        <header>
          <i>${escapeHtml(mark)}</i>
          <strong style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</strong>
          <span>${escapeHtml(cue.metric)}</span>
        </header>
        <section>
          <p>${escapeHtml(cue.stage)}</p>
          <h4 style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(dir.headline)}</h4>
          <span>${escapeHtml(dir.promise)}</span>
          <button type="button">${escapeHtml(cue.primary)}</button>
        </section>
        <footer>
          ${dir.colors.slice(0, 5).map(([name, hex]) => `<i title="${escapeHtml(name)}" style="background:${escapeHtml(hex)}"></i>`).join("")}
        </footer>
      </div>
    </div>
  `;
}

function renderOptionCard(id, direction, isSelected) {
  const input = getInputsForDirection(direction, id);
  const [ink, paper, primary, deep, accent] = direction.colors;
  return `
    <button class="option-card ${isSelected ? "is-selected" : ""}" type="button" data-direction-id="${escapeHtml(id)}">
      <div class="option-card-top">
        <strong style="font-family:${safeFont(direction.fonts.heading)}">${escapeHtml(direction.label)}</strong>
          <span>${escapeHtml(direction.copy)}</span>
      </div>
      ${renderOptionMiniPreview(input)}
      <div class="option-mini-swatches">
        ${direction.colors.slice(0, 4).map(([, hex]) => `<i style="background:${escapeHtml(hex)}"></i>`).join("")}
      </div>
    </button>
  `;
}

function renderOptionMiniPreview(input) {
  const dir = input.direction;
  const [ink, paper, primary, deep, accent] = dir.colors;
  const style = [
    `--mini-bg:${paper[1]}`,
    `--mini-text:${textColorFor(paper[1])}`,
    `--mini-primary:${primary[1]}`,
    `--mini-primary-text:${textColorFor(primary[1])}`,
    `--mini-deep:${deep[1]}`,
    `--mini-deep-text:${textColorFor(deep[1])}`,
    `--mini-accent:${accent[1]}`,
    `--mini-accent-text:${textColorFor(accent[1])}`,
    `--mini-surface:rgba(255,255,255,0.94)`,
    `--mini-surface-text:#141412`,
    `font-family:${safeFont(dir.fonts.body)}`
  ].join(";");

  if (input.targetFrame) {
    return `
      <div class="option-live-mini actual-option-mini" style="${style}">
        <div class="actual-option-image">
          <img src="${escapeHtml(input.targetFrame.url)}" alt="" />
          <div class="actual-option-chrome">
            <i>${escapeHtml(initials(input.brandName))}</i>
            <b style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(dir.label)}</b>
          </div>
          <div class="actual-option-ribbon">
            <strong style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</strong>
            <span>${escapeHtml(dir.promise)}</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="option-live-mini" style="${style}">
      <div class="mini-app-bar">
        <i>${escapeHtml(initials(input.brandName))}</i>
        <span></span>
      </div>
      <div class="mini-app-body">
        <b style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</b>
        <em></em>
        <small></small>
      </div>
    </div>
  `;
}

function getInputsForDirection(direction, id) {
  const brandName = els.brandName.value.trim() || "Untitled Brand";
  return {
    brandName,
    slug: slugify(brandName),
    sourceUrl: els.sourceUrl.value.trim(),
    audience: els.audience.value.trim() || "Target audience not specified yet",
    brief: els.brief.value.trim() || "No brief provided yet.",
    direction,
    directionId: id,
    importedPacket: state.importedPacket,
    targetFrame: state.targetFrame,
    files: state.files
  };
}

function renderAppliedPreview(input) {
  const mode = state.previewMode;
  const renderers = {
    app: renderAppPreview,
    website: renderWebsitePreview,
    logo: renderLogoKitPreview
  };
  const hasActualFrame = input.targetFrame && mode !== "logo";
  els.appliedPreviewMode.textContent = mode === "app" ? "App" : mode === "website" ? "Website" : "Logo kit";
  els.appliedPreviewTitle.textContent = mode === "app"
    ? hasActualFrame ? "Actual app screen treatment" : "Main app screen treatment"
    : mode === "website"
      ? hasActualFrame ? "Actual website/page treatment" : "Website / landing treatment"
      : "Logo, type, and social treatment";
  els.appliedPreview.innerHTML = hasActualFrame
    ? renderActualFramePreview(input)
    : (renderers[mode] || renderers.app)(input);
}

function renderActualFramePreview(input) {
  const dir = input.direction;
  const cue = projectCue(input);
  return `
    <div class="project-preview actual-frame-preview" style="${previewVars(input)}">
      <div class="actual-frame-toolbar">
        <div class="preview-logo">${escapeHtml(initials(input.brandName))}</div>
        <div>
          <strong style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</strong>
          <span>${escapeHtml(dir.label)} applied to imported project screenshot</span>
        </div>
        <button>${escapeHtml(cue.primary)}</button>
      </div>
      <div class="actual-frame-stage">
        <img src="${escapeHtml(input.targetFrame.url)}" alt="Imported project screenshot preview" />
        <div class="brand-overlay-panel">
          <p>${escapeHtml(cue.stage)}</p>
          <h4 style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(dir.headline)}</h4>
          <span>${escapeHtml(dir.promise)}</span>
        </div>
      </div>
      <div class="actual-frame-footer">
        ${dir.colors.slice(0, 6).map(([name, hex]) => `<i title="${escapeHtml(name)}" style="background:${escapeHtml(hex)}"></i>`).join("")}
      </div>
    </div>
  `;
}

function projectCue(input) {
  const text = `${input.brandName} ${input.brief} ${input.importedPacket?.productDescription || ""}`.toLowerCase();
  if (/profitpilot|trading|crypto|paper|wallet|positions|proof|market radar|copy watch|autopilot/.test(text)) {
    return {
      nav: ["Today", "Proof", "Gates"],
      primary: "Review blockers",
      secondary: "Open paper lab",
      stage: "Trading command center",
      item: "Paper proof",
      metric: "Live gated"
    };
  }
  if (/video|clip|edit|render|ad|studio|lab/.test(text)) {
    return {
      nav: ["Queue", "Editor", "Exports"],
      primary: "Review draft",
      secondary: "Render next",
      stage: "Clip workspace",
      item: "Source footage",
      metric: "Ready for review"
    };
  }
  if (/book|romance|publishing|manuscript|reader|story/.test(text)) {
    return {
      nav: ["Library", "Drafts", "Launch"],
      primary: "Open manuscript",
      secondary: "Build launch kit",
      stage: "Publishing desk",
      item: "Book package",
      metric: "Voice aligned"
    };
  }
  if (/website|landing|store|shop|offer|checkout/.test(text)) {
    return {
      nav: ["Home", "Offer", "Proof"],
      primary: "Preview page",
      secondary: "Export assets",
      stage: "Conversion page",
      item: "Hero section",
      metric: "Ready to share"
    };
  }
  return {
    nav: ["Brief", "Preview", "Export"],
    primary: "Generate kit",
    secondary: "Review assets",
    stage: "Project workspace",
    item: "Brand packet",
    metric: "Draft ready"
  };
}

function renderAppPreview(input) {
  const dir = input.direction;
  const cue = projectCue(input);
  const [ink, paper, primary, deep, accent, secondary] = dir.colors;
  return `
    <div class="project-preview app-preview" style="${previewVars(input)}">
      <header>
        <div class="preview-logo">${escapeHtml(initials(input.brandName))}</div>
        <strong style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</strong>
        <nav>${cue.nav.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</nav>
      </header>
      <div class="preview-workspace">
        <section class="preview-stage">
          <p>${escapeHtml(cue.stage)}</p>
          <h4 style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(dir.headline)}</h4>
          <div class="preview-timeline">
            <i style="background:${primary[1]}"></i>
            <i style="background:${accent[1]}"></i>
            <i style="background:${secondary[1]}"></i>
            <i style="background:${deep[1]}"></i>
          </div>
          <button>${escapeHtml(cue.primary)}</button>
        </section>
        <aside>
          <small>${escapeHtml(cue.metric)}</small>
          <b>${escapeHtml(cue.item)}</b>
          <span>${escapeHtml(dir.promise)}</span>
          <button>${escapeHtml(cue.secondary)}</button>
        </aside>
      </div>
    </div>
  `;
}

function renderWebsitePreview(input) {
  const dir = input.direction;
  const [ink, paper, primary, deep, accent] = dir.colors;
  return `
    <div class="project-preview website-preview" style="${previewVars(input)}">
      <header>
        <div class="preview-logo">${escapeHtml(initials(input.brandName))}</div>
        <nav><span>Offer</span><span>How it works</span><span>Proof</span></nav>
      </header>
      <section>
        <p>${escapeHtml(dir.label)}</p>
        <h4 style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</h4>
        <strong>${escapeHtml(dir.promise)}</strong>
        <div>
          <button>Start with a brand kit</button>
          <a href="#preview">Preview assets</a>
        </div>
      </section>
      <footer>
        <i style="background:${primary[1]}"></i>
        <i style="background:${deep[1]}"></i>
        <i style="background:${accent[1]}"></i>
      </footer>
    </div>
  `;
}

function renderLogoKitPreview(input) {
  const dir = input.direction;
  const mark = initials(input.brandName);
  return `
    <div class="project-preview logo-kit-preview" style="${previewVars(input)}">
      <div class="logo-lockup-large">
        <div class="preview-logo xl">${escapeHtml(mark)}</div>
        <div>
          <h4 style="font-family:${safeFont(dir.fonts.heading)}">${escapeHtml(input.brandName)}</h4>
          <span>${escapeHtml(dir.label)}</span>
        </div>
      </div>
      <div class="logo-tiles">
        <div class="preview-logo">${escapeHtml(mark)}</div>
        <div class="preview-logo inverse">${escapeHtml(mark)}</div>
        <div class="social-tile">${escapeHtml(mark)}</div>
      </div>
      <div class="font-specimen">
        <b style="font-family:${safeFont(dir.fonts.heading)}">Aa Brand Headline</b>
        <span style="font-family:${safeFont(dir.fonts.body)}">Interface text, social captions, and export labels.</span>
      </div>
    </div>
  `;
}

function previewVars(input) {
  const [ink, paper, primary, deep, accent, secondary] = input.direction.colors;
  const surface = readableSurface(paper[1]);
  return [
    `--preview-bg:${paper[1]}`,
    `--preview-text:${textColorFor(paper[1])}`,
    `--preview-primary:${primary[1]}`,
    `--preview-deep:${deep[1]}`,
    `--preview-deep-text:${textColorFor(deep[1])}`,
    `--preview-accent:${accent[1]}`,
    `--preview-accent-text:${textColorFor(accent[1])}`,
    `--preview-secondary:${secondary[1]}`,
    `--preview-surface:${surface.bg}`,
    `--preview-surface-text:${surface.text}`,
    `font-family:${safeFont(input.direction.fonts.body)}`
  ].join(";");
}

function readableSurface(hex) {
  const lightText = textColorFor(hex) === "#ffffff";
  return {
    bg: lightText ? "rgba(255,255,255,0.94)" : "rgba(20,20,18,0.04)",
    text: lightText ? "#141412" : "#141412"
  };
}

function safeFont(value) {
  return String(value || "system-ui, sans-serif").replace(/[;"<>]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatBytes(size) {
  if (!size) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let value = size;
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }
  return `${value.toFixed(index ? 1 : 0)} ${units[index]}`;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

async function attachLogoAsset(kind, file) {
  if (!file) return;
  if (!/^image\/(png|jpeg|jpg|webp)$/i.test(file.type)) {
    els.logoLabStatus.textContent = "Attach a PNG, JPG, or WebP logo image.";
    return;
  }
  if (file.size > 6 * 1024 * 1024) {
    els.logoLabStatus.textContent = "Logo assets must be 6 MB or smaller for local export/install.";
    return;
  }

  const dataUrl = await fileToDataUrl(file);
  state.logoLab.assets[kind] = {
    name: file.name,
    size: file.size,
    type: file.type,
    dataUrl
  };
  markInstallDirty("Preview the install after attaching logo assets.");
  els.logoLabStatus.textContent = kind === "final"
    ? "Attached final logo image. It will export with the approved kit."
    : "Attached logo concept sheet. It will export with the approval record.";
  render();
}

function releaseTargetFrame() {
  if (state.targetFrame?.url?.startsWith("blob:")) {
    URL.revokeObjectURL(state.targetFrame.url);
  }
}

function handleFiles(files) {
  const incoming = Array.from(files).map((file) => {
    const isImage = /^image\/(png|jpeg|jpg|webp)$/i.test(file.type);
    const record = {
      name: file.name,
      size: file.size,
      type: file.type || "unknown",
      isPreviewFrame: false
    };

    if (isImage && !state.targetFrame) {
      record.isPreviewFrame = true;
      state.targetFrame = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        source: "upload"
      };
    }

    return record;
  });
  state.files = [...state.files, ...incoming];
  render();
}

function isLocalPreviewUrl(value) {
  try {
    const parsed = new URL(String(value || "").trim());
    const host = parsed.hostname.toLowerCase();
    return (parsed.protocol === "http:" || parsed.protocol === "https:")
      && (host === "localhost" || host === "127.0.0.1" || host === "::1");
  } catch {
    return false;
  }
}

async function captureLocalUrl(options = {}) {
  const isAuto = options.auto === true;
  const targetUrl = els.sourceUrl.value.trim();
  if (!targetUrl) {
    els.captureStatus.textContent = "Paste a running local URL first.";
    return;
  }

  if (!isAuto && !isLocalPreviewUrl(targetUrl)) {
    els.captureStatus.textContent = "Only local preview URLs can be captured automatically.";
    return;
  }

  els.captureUrlButton.disabled = true;
  els.captureStatus.textContent = isAuto ? "Auto-capturing local preview..." : "Capturing local preview...";

  try {
    const response = await fetch("/api/capture-local-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: targetUrl,
        viewport: { width: 1440, height: 1000 }
      })
    });
    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.error || "Local screenshot capture failed.");
    }

    releaseTargetFrame();
    state.targetFrame = {
      name: result.name || "captured-local-url.png",
      size: result.size || 0,
      type: result.type || "image/png",
      url: result.dataUrl,
      sourceUrl: result.url || targetUrl,
      source: "local-url-capture"
    };

    state.files = [
      ...state.files.filter((file) => file.source !== "local-url-capture"),
      {
        name: state.targetFrame.name,
        size: state.targetFrame.size,
        type: state.targetFrame.type,
        isPreviewFrame: true,
        source: "local-url-capture",
        sourceUrl: state.targetFrame.sourceUrl
      }
    ];
    els.captureStatus.textContent = `${isAuto ? "Auto-captured" : "Captured"} ${state.targetFrame.sourceUrl}`;
    render();
  } catch (error) {
    els.captureStatus.textContent = isAuto
      ? `Imported packet, but auto-capture did not finish: ${error.message}`
      : error.message;
  } finally {
    els.captureUrlButton.disabled = false;
  }
}

async function resolveProjectFolder(options = {}) {
  if (els.installPath.value.trim()) return true;

  try {
    const input = getInputs();
    const response = await fetch("/api/resolve-project-folder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sourceUrl: input.sourceUrl,
        projectName: input.importedPacket?.projectName || input.brandName,
        brandName: input.brandName
      })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Could not auto-detect project folder.");

    els.installPath.value = result.projectPath;
    els.installSummary.textContent = result.method === "local-url-process"
      ? "Target project folder auto-detected from the running local preview."
      : "Target project folder auto-detected from the packet project name.";
    renderTestReadiness(getInputs());
    return true;
  } catch (error) {
    if (!options.silent) {
      els.installSummary.textContent = error.message;
      els.exportNote.textContent = "Paste the target project folder, then preview the install again.";
    }
    return false;
  }
}

function parsePacket(raw) {
  const text = raw.trim();
  if (!text) throw new Error("Paste a packet first.");

  const jsonCandidate = extractJson(text);
  if (jsonCandidate) return JSON.parse(jsonCandidate);

  return parseMarkdownPacket(text);
}

function extractJson(text) {
  if (text.startsWith("{") && text.endsWith("}")) return text;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]?.trim().startsWith("{")) return fenced[1].trim();
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first >= 0 && last > first) return text.slice(first, last + 1);
  return "";
}

function parseMarkdownPacket(text) {
  const valueFor = (labels) => {
    const list = Array.isArray(labels) ? labels : [labels];
    for (const label of list) {
      const pattern = new RegExp(`(?:^|\\n)\\s*(?:[-*]\\s*)?(?:#{1,4}\\s*)?${escapeRegExp(label)}\\s*:?\\s*\\n?([\\s\\S]*?)(?=\\n\\s*(?:[-*]\\s*)?(?:#{1,4}\\s*)?[A-Z][A-Za-z /]+\\s*:?\\s*\\n|$)`, "i");
      const match = text.match(pattern);
      if (match?.[1]) return cleanMarkdownValue(match[1]);
    }
    return "";
  };

  return {
    projectName: valueFor(["Project/brand name", "Project name", "Brand name"]),
    brandName: valueFor(["Brand name", "Project/brand name"]),
    sourceUrl: valueFor(["Source URL", "Website", "Website, repo, or source URL"]),
    productDescription: valueFor(["Product/company description", "Product description", "Company description"]),
    audience: valueFor(["Audience", "Target audience"]),
    problem: valueFor(["Problem it solves", "Problem"]),
    desiredFeeling: valueFor(["Desired feeling", "Brand feeling"]),
    existingBrandClues: linesFor(valueFor("Existing brand clues")),
    whatShouldNotChange: linesFor(valueFor("What should not change")),
    competitorsOrReferences: linesFor(valueFor(["Competitors or references if known", "Competitors or references"])),
    voiceTone: linesFor(valueFor(["Voice/tone", "Voice tone"])),
    visualDirectionClues: linesFor(valueFor("Visual direction clues")),
    requiredAssets: linesFor(valueFor("Required assets")),
    brandRisks: linesFor(valueFor(["Brand risks or things not to invent", "Brand risks"])),
    recommendedDirections: parseMarkdownDirections(valueFor("Recommended 3 brand directions")),
    bestRecommendedDirection: valueFor(["Best recommended direction and why", "Best recommended direction"])
  };
}

function parseMarkdownDirections(text) {
  if (!text) return [];
  return text
    .split(/\n(?=\s*(?:\d+\.|-)\s+)/)
    .map((chunk) => chunk.replace(/^\s*(?:\d+\.|-)\s*/, "").trim())
    .filter(Boolean)
    .slice(0, 3)
    .map((chunk) => {
      const [first, ...rest] = chunk.split(/\n/);
      const label = first.replace(/\*\*/g, "").replace(/:$/, "").trim();
      const copy = rest.join(" ").replace(/\s+/g, " ").trim() || chunk;
      return { label, copy };
    });
}

function cleanMarkdownValue(value) {
  return value
    .trim()
    .replace(/^[-*]\s*/gm, "- ")
    .replace(/\n{3,}/g, "\n\n");
}

function linesFor(value) {
  return String(value || "")
    .split(/\n|;/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function importPacket(options = {}) {
  const isAuto = options.auto === true;
  try {
    const packet = normalizePacket(parsePacket(els.packetInput.value));
    state.importedPacket = packet;
    state.autoBrain = {
      active: true,
      source: packet.brandName || packet.projectName || "Imported project",
      status: "Redesign choices ready",
      summary: "Full Automation AI Brain imported the packet and generated three comparable redesign choices."
    };
    state.activeProfileId = "";
    state.files = packet.inputFiles || state.files;
    state.directions = buildDirectionsFromPacket(packet);
    state.selectedDirectionId = packet.bestDirectionId || Object.keys(state.directions)[0] || "studio";
    state.logoLab = {
      boards: {},
      boardImages: {},
      boardStatus: {},
      variantImage: null,
      variantStatus: "",
      finalStatus: "",
      isGeneratingBoards: false,
      isGeneratingVariant: false,
      isGeneratingFinal: false,
      selectedDirectionId: "",
      variantPrompt: "",
      approvedVariant: "",
      approvedSource: "",
      revisionNotes: "",
      skipped: false,
      assets: {
        board: null,
        final: null
      }
    };
    state.screenLab = {
      images: {},
      status: {},
      isGenerating: false,
      message: ""
    };
    markInstallDirty("Preview the install after importing the project packet.");

    els.brandName.value = packet.brandName || packet.projectName || "Untitled Brand";
    els.sourceUrl.value = packet.sourceUrl || "";
    els.audience.value = packet.audience || "";
    els.brief.value = buildBriefFromPacket(packet);
    if (packet.projectPath) els.installPath.value = packet.projectPath;
    els.logoRevisionNotes.value = "";
    els.packetStatus.textContent = `${isAuto ? "Auto-imported" : "Imported"} ${Object.keys(state.directions).length} brand direction option${Object.keys(state.directions).length === 1 ? "" : "s"} from the project packet.`;
    render();
    scheduleDesignScoutRefresh();
    if (isLocalPreviewUrl(els.sourceUrl.value)) {
      await captureLocalUrl({ auto: true });
    } else if (els.sourceUrl.value.trim()) {
      els.captureStatus.textContent = "Packet imported. Public/source URL recorded; local capture skipped.";
    } else {
      els.captureStatus.textContent = "Packet imported. Add a local preview URL to auto-capture the project frame.";
    }
    await resolveProjectFolder({ silent: true });
  } catch (error) {
    els.packetStatus.textContent = isAuto
      ? "Waiting for a complete Brand Intake Packet..."
      : `Could not import packet: ${error.message}`;
  }
}

function schedulePacketAutoImport() {
  clearTimeout(packetAutoImportTimer);
  packetAutoImportTimer = setTimeout(() => {
    importPacket({ auto: true });
  }, 250);
}

function normalizePacket(packet) {
  const brandName = packet.brandName || packet.projectName || packet["Project/brand name"] || packet["Project name"] || "";
  return {
    projectName: packet.projectName || brandName,
    brandName,
    sourceUrl: packet.sourceUrl || packet.website || "",
    productDescription: packet.productDescription || packet.description || "",
    audience: packet.audience || packet.targetAudience || "",
    problem: packet.problem || packet.problemItSolves || "",
    desiredFeeling: packet.desiredFeeling || packet.brandFeeling || "",
    existingBrandClues: arrayFor(packet.existingBrandClues),
    whatShouldNotChange: arrayFor(packet.whatShouldNotChange),
    competitorsOrReferences: arrayFor(packet.competitorsOrReferences),
    voiceTone: arrayFor(packet.voiceTone),
    visualDirectionClues: arrayFor(packet.visualDirectionClues),
    requiredAssets: arrayFor(packet.requiredAssets),
    brandRisks: arrayFor(packet.brandRisks || packet.risks),
    recommendedDirections: arrayFor(packet.recommendedDirections),
    bestRecommendedDirection: packet.bestRecommendedDirection || "",
    whyThisDirection: packet.whyThisDirection || "",
    inputFiles: arrayFor(packet.inputFiles),
    projectPath: packet.projectPath || packet.targetProjectFolder || "",
    portfolioOpportunity: packet.portfolioOpportunity || null
  };
}

function arrayFor(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return linesFor(String(value));
}

function buildBriefFromPacket(packet) {
  const sections = [
    ["Product/company", packet.productDescription],
    ["Problem", packet.problem],
    ["Desired feeling", packet.desiredFeeling],
    ["Existing brand clues", packet.existingBrandClues.join("; ")],
    ["What should not change", packet.whatShouldNotChange.join("; ")],
    ["Voice/tone", packet.voiceTone.join("; ")],
    ["Visual direction clues", packet.visualDirectionClues.join("; ")],
    ["Required assets", packet.requiredAssets.join("; ")],
    ["Brand risks", packet.brandRisks.join("; ")]
  ].filter(([, value]) => value);

  return sections.map(([label, value]) => `${label}: ${value}`).join("\n\n") || "Imported project packet.";
}

function buildDirectionsFromPacket(packet) {
  const recommended = packet.recommendedDirections.length ? packet.recommendedDirections : [];
  const generated = recommended.slice(0, 3).reduce((acc, item, index) => {
    const option = typeof item === "string" ? { label: item, copy: item } : item;
    const id = `option-${index + 1}`;
    const fallback = Object.values(defaultDirections)[index] || defaultDirections.studio;
    const label = option.label || option.name || fallback.label;
    const rawColors = Array.isArray(option.colors) && option.colors.length ? option.colors : fallback.colors;
    acc[id] = {
      id,
      label,
      headline: option.headline || `${label} direction for ${packet.brandName || packet.projectName || "this brand"}`,
      copy: option.copy || option.description || fallback.copy,
      promise: option.promise || fallback.promise,
      traits: arrayFor(option.traits).length ? arrayFor(option.traits).slice(0, 5) : fallback.traits,
      fonts: option.fonts || fallback.fonts,
      colors: normalizeColors(rawColors, fallback.colors),
      voice: arrayFor(option.voice).length ? arrayFor(option.voice).slice(0, 4) : fallback.voice
    };
    return acc;
  }, {});

  const result = Object.keys(generated).length ? generated : Object.fromEntries(Object.entries(defaultDirections).map(([key, direction]) => [key, { ...direction, id: key }]));
  const best = packet.bestRecommendedDirection.toLowerCase();
  const bestEntry = Object.entries(result).find(([, direction]) => best && best.includes(direction.label.toLowerCase()));
  packet.bestDirectionId = bestEntry?.[0] || Object.keys(result)[0];
  return result;
}

function normalizeColors(colors, fallback) {
  const normalized = colors
    .map((color, index) => {
      if (Array.isArray(color) && /^#[0-9a-f]{6}$/i.test(color[1] || "")) return [String(color[0] || `Color ${index + 1}`), color[1]];
      if (typeof color === "object" && /^#[0-9a-f]{6}$/i.test(color.hex || "")) return [String(color.name || `Color ${index + 1}`), color.hex];
      if (typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color.trim())) return [`Color ${index + 1}`, color.trim()];
      return null;
    })
    .filter(Boolean);
  if (normalized.length < 4) return fallback;
  const filled = [...normalized];
  fallback.forEach((color) => {
    if (filled.length < 6) filled.push(color);
  });
  return filled.slice(0, 6);
}

function brandGuide(input) {
  const dir = input.direction;
  return `# ${input.brandName} Brand Guide

Status: Draft generated by Brand Kit Studio

## Brand Summary

${input.brandName} is a ${dir.label.toLowerCase()} brand system for ${input.audience}. It exists to make early project ideas easier to turn into consistent brand, design, messaging, and asset decisions.

## Brand Promise

${dir.promise}

## Positioning

For ${input.audience}, ${input.brandName} turns rough inputs into a structured brand package that future Codex work can reference instead of reinventing colors, fonts, copy, logos, and social assets.

## Personality

${dir.traits.map((trait) => `- ${capitalize(trait)}: show this through concrete UI, clear asset states, and owner-readable language.`).join("\n")}

## Visual Summary

- Direction: ${dir.label}
- Logo behavior: simple wordmark plus compact icon mark for folders, social profiles, and app chrome.
- Color behavior: strong neutral foundation, one primary trust color, one warm signal accent.
- Typography: ${dir.fonts.heading} for headings; ${dir.fonts.body} for body and app UI.

## Voice Summary

${dir.voice.map((rule) => `- ${rule}`).join("\n")}

## Future Codex Rule

Future UI, copy, image, social asset, and marketing work should reference this brand guide and the brand tokens unless the owner explicitly asks for a different direction.
`;
}

function brandStrategy(input) {
  const dir = input.direction;
  return `# ${input.brandName} Brand Strategy

## Confirmed Inputs

- Brand/project: ${input.brandName}
- Audience: ${input.audience}
- Source URL: ${input.sourceUrl || "Not provided"}
- Direction: ${dir.label}

## Brief

${input.brief}

## Moment Of Demand

The owner has a new idea or unfinished project and needs a usable brand foundation before design, social assets, or UI implementation drift into random choices.

## Pain

Early ideas often scatter across docs, screenshots, color guesses, logo drafts, and inconsistent UI work. The core pain is not only missing assets; it is missing a source of truth.

## Desired Outcome

Generate a project-local package that makes brand decisions visible, exportable, and reusable by Codex.

## Differentiation

Most brand tools create isolated visuals. ${input.brandName} should create brand rules that live inside the project folder and guide future implementation.

## Proof Strategy

V1 should prove that exported files are complete, readable, and easy to drop into a repo. Later proof can come from before/after project consistency and faster new-project setup.

## What This Brand Should Not Become

- A generic mood board generator.
- A tool that pretends assets are approved when they are only drafts.
- A workflow that generates pretty files but does not affect future project work.
`;
}

function visualSystem(input) {
  const dir = input.direction;
  const scout = designScoutForInput(input);
  return `# ${input.brandName} Visual System

## Visual Concept

${dir.copy}

## Auto Design Scout

- Reference lane: ${scout.lane.label}
- Auto query: ${scout.query}
- Provider status: ${scout.provider}

${scout.principles.map((principle) => `- ${principle}`).join("\n")}

## Logo Direction

Use a clean wordmark and compact ${initials(input.brandName)} mark. The mark should work at small sizes and inside app chrome, social profiles, favicons, and export folders.

## Color Palette

| Role | Name | Hex |
| --- | --- | --- |
${dir.colors.map(([name, hex], index) => `| ${colorRole(index)} | ${name} | ${hex} |`).join("\n")}

## Typography

- Heading: ${dir.fonts.heading}
- Body/UI: ${dir.fonts.body}

## UI Rules

- Use 6 to 8px radius for panels and controls.
- Prefer precise borders and restrained shadows.
- Keep dashboards dense but breathable.
- Avoid nested cards and generic SaaS decoration.
- Use icons for tools only when they clarify the action.

## Image Direction

Use crisp product UI previews, source-document thumbnails, exported folder structures, and clean brand asset previews. Avoid fake customer proof or stock imagery that does not show the actual product.
`;
}

function designScoutDoc(input) {
  const scout = designScoutForInput(input);
  const liveReferences = scout.liveReferences.length
    ? scout.liveReferences.map((item) => `- ${item.title}${item.description ? `: ${item.description}` : ""}${item.url ? ` (${item.url})` : ""}`).join("\n")
    : "- None returned. Built-in reference patterns were used.";
  return `# ${input.brandName} Design Scout

Status: Automatically generated by Brand Kit Studio

## What This Is

This file records the automated reference logic used before final brand implementation. It is not a copied template library. It translates the project context into design-reference lanes, pattern guidance, and best-practice rules that Codex can use when applying the brand to a real app or website.

## Provider Status

${scout.provider}

Mode: ${scout.mode}

${scout.warning ? `Note: ${scout.warning}\n` : ""}Brand Kit Studio uses built-in reference intelligence by default and can enrich it through a configured live LazyWeb/design-reference HTTP bridge.

## Auto Reference Query

${scout.query}

## Primary Reference Lane

${scout.lane.label}

## Reference Patterns

${scout.references.map(([name, why]) => `- ${name}: ${why}`).join("\n")}

## Live References

${liveReferences}

## Design Principles To Apply

${scout.principles.map((principle) => `- ${principle}`).join("\n")}

## Implementation Rule

Use these as taste and pattern guidance, not as assets to copy. Preserve the selected brand direction, approved logo, exported tokens, and project constraints.
`;
}

function voiceGuide(input) {
  const dir = input.direction;
  return `# ${input.brandName} Voice And Messaging

## Voice Principles

${dir.voice.map((rule) => `- ${rule}`).join("\n")}

## Words To Use

- Brand system
- Source of truth
- Project-ready
- Export pack
- Owner approval
- Local-first
- Design tokens

## Words To Avoid

- Magic
- Fully autonomous
- Guaranteed
- Viral
- Enterprise-grade, unless it is truly enterprise-ready

## One-Liner

${input.brandName} helps ${input.audience.toLowerCase()} turn rough project inputs into a consistent brand package Codex can keep using.

## Short Bio

${input.brandName} is a local-first brand kit generator for turning ideas, files, URLs, screenshots, and notes into project-ready brand guides, assets, and design tokens.

## CTA Options

- Generate brand kit
- Export project pack
- Create brand source of truth
- Review brand direction
`;
}

function assetManifest(input) {
  const hasFinalLogo = Boolean(state.logoLab.assets.final);
  const primaryLogoNote = hasFinalLogo
    ? "Placement SVG wraps the approved raster; preserve the approved image proportions when implementing"
    : "SVG starter generated locally; replace after logo approval";
  const logoMarkNote = hasFinalLogo
    ? "Support SVG only; crop/vectorize from the approved logo image before using as a final favicon/app mark"
    : `Uses initials ${initials(input.brandName)} until a logo is approved`;
  const socialProfileNote = hasFinalLogo
    ? "Uses the approved logo image as a source reference; verify small circular crops before launch"
    : "SVG starter generated locally";
  const conceptAsset = state.logoLab.assets.board
    ? `| Logo concept sheet | ${logoAssetPath("board", state.logoLab.assets.board)} | attached | Logo approval review | ${state.logoLab.assets.board.name} |\n`
    : "";
  const finalAsset = state.logoLab.assets.final
    ? `| Approved logo image | ${logoAssetPath("final", state.logoLab.assets.final)} | attached | Final logo reference | ${state.logoLab.assets.final.name} |\n`
    : "";
  const socialRows = socialAssetSpecs
    .map((spec) => `| ${spec.title} | ${spec.path} | created | ${spec.type === "profile" ? "Profile/avatar" : "Social banner"} | ${spec.width}x${spec.height}; ${spec.type === "profile" ? "mark only, no tiny text" : "brand-safe banner template"} |`)
    .join("\n");

  return `# ${input.brandName} Asset Manifest

| Asset | File/Path | Status | Use | Notes |
| --- | --- | --- | --- | --- |
| Primary logo | public/brand/logo/logo-primary.svg | created | Header, docs, export previews | ${primaryLogoNote} |
| Logo mark | public/brand/logo/logo-mark.svg | created | Favicon, social profile, app chrome | ${logoMarkNote} |
${conceptAsset}${finalAsset}| Open Graph image | public/brand/social/og-default.svg | created | Link preview | SVG starter generated locally |
| Social profile image | public/brand/social/social-profile.svg | created | Profile/avatar | ${socialProfileNote} |
${socialRows}
| Logo approval record | docs/brand/LOGO_APPROVAL.md | created | Approval gate | Records logo-board prompts, revision notes, and approved/skip state |
| Brand guide | docs/brand/BRAND_GUIDE.md | created | Source of truth | Draft needs owner review |
| Design scout | docs/brand/DESIGN_SCOUT.md | created | Reference logic | Records automated design-reference lane and principles |
| DESIGN.md | DESIGN.md | created | AI implementation source | Compact design spec for Codex and other AI coding agents |
| CSS variables | src/styles/brand-tokens.css | created | UI implementation | Import or merge into the project style system |
| Design tokens JSON | src/styles/brand-tokens.json | created | Tooling / adapters | Adapt to project stack if needed |
| Tailwind v4 theme | src/styles/brand-tailwind-v4.css | created | Tailwind implementation | Import in Tailwind v4 projects or translate manually |
| Input references | docs/brand/INPUT_REFERENCES.md | created | Source context | Records uploaded filenames only in V1 |
| Intake packet | docs/brand/BRAND_INTAKE_PACKET.md | created | Automation bridge | Preserves imported project context |
| Intake JSON | docs/brand/brand-intake.json | created | Re-import / automation | Can be imported back into Brand Kit Studio |
`;
}

function logoApprovalDoc(input) {
  const selectedId = logoDirectionId();
  const selectedDirection = state.directions[selectedId] || input.direction;
  const boardPrompts = Object.entries(state.logoLab.boards)
    .map(([id, prompt]) => `## Board Prompt: ${state.directions[id]?.label || id}\n\n\`\`\`text\n${prompt}\n\`\`\``)
    .join("\n\n") || "No board prompts generated yet.";

  return `# ${input.brandName} Logo Approval

Status: ${state.logoLab.skipped ? "Skipped for now" : logoApprovalComplete() ? `Approved ${logoApprovalLabel()}` : "Not approved yet"}

## Selected Logo Direction

${selectedDirection.label}

## Approved Logo Decision

${logoApprovalComplete() && !state.logoLab.skipped ? logoApprovalLabel() : "None yet"}

Source: ${state.logoLab.approvedSource || (state.logoLab.skipped ? "skipped" : "none")}

## Revision Notes

${state.logoLab.revisionNotes || els.logoRevisionNotes.value.trim() || "None recorded"}

## Attached Logo Assets

Concept sheet: ${state.logoLab.assets.board ? `${logoAssetPath("board", state.logoLab.assets.board)} (${state.logoLab.assets.board.name})` : "None attached"}

Final logo image: ${state.logoLab.assets.final ? `${logoAssetPath("final", state.logoLab.assets.final)} (${state.logoLab.assets.final.name})` : "None attached"}

## Four-Variant Prompt

${state.logoLab.variantPrompt ? `\`\`\`text\n${state.logoLab.variantPrompt}\n\`\`\`` : "No variant prompt generated yet."}

${boardPrompts}

## Production Note

AI image generation is for concept exploration. Before final launch, convert the approved logo concept into clean SVG/vector assets, verify small-size readability, and avoid treating generated text as final without review.
`;
}

function inputReferences(input) {
  return `# ${input.brandName} Input References

## Source URL

${input.sourceUrl || "Not provided"}

## Uploaded Files

${input.files.length ? input.files.map((file) => `- ${file.name} (${file.type}, ${formatBytes(file.size)})`).join("\n") : "- None uploaded in this session"}

## Actual Preview Frame

${input.targetFrame ? `${input.targetFrame.name} (${input.targetFrame.type}, ${formatBytes(input.targetFrame.size)})${input.targetFrame.sourceUrl ? `\nSource: ${input.targetFrame.sourceUrl}` : ""}` : "No screenshot frame imported"}

## Original Brief

${input.brief}
`;
}

function intakePacketMarkdown(input) {
  const packet = input.importedPacket;
  return `# ${input.brandName} Brand Intake Packet

Status: ${packet ? "Imported from project chat" : "Generated from manual app inputs"}

## Project/brand name

${input.brandName}

## Audience

${input.audience}

## Source URL

${input.sourceUrl || "Not provided"}

## Selected Direction

${input.direction.label}

## Project Context

${input.brief}

## Imported Packet

${packet ? "```json\n" + JSON.stringify(packet, null, 2) + "\n```" : "No structured packet was imported. This kit was generated from manual form fields."}
`;
}

function intakePacketJson(input) {
  return JSON.stringify({
    brandName: input.brandName,
    sourceUrl: input.sourceUrl,
    audience: input.audience,
    brief: input.brief,
    selectedDirectionId: input.directionId,
    selectedDirection: input.direction,
    directions: state.directions,
    importedPacket: input.importedPacket,
    targetFrame: input.targetFrame ? {
      name: input.targetFrame.name,
      size: input.targetFrame.size,
      type: input.targetFrame.type,
      source: input.targetFrame.source || "upload",
      sourceUrl: input.targetFrame.sourceUrl || null
    } : null,
    logoAssets: {
      conceptSheet: state.logoLab.assets.board ? {
        name: state.logoLab.assets.board.name,
        size: state.logoLab.assets.board.size,
        type: state.logoLab.assets.board.type,
        path: logoAssetPath("board", state.logoLab.assets.board)
      } : null,
      finalLogo: state.logoLab.assets.final ? {
        name: state.logoLab.assets.final.name,
        size: state.logoLab.assets.final.size,
        type: state.logoLab.assets.final.type,
        path: logoAssetPath("final", state.logoLab.assets.final)
      } : null
    },
    files: input.files
  }, null, 2);
}

function extensionForMime(type) {
  if (/jpe?g/i.test(type)) return "jpg";
  if (/webp/i.test(type)) return "webp";
  return "png";
}

function dataUrlPayload(asset) {
  const [, data = ""] = String(asset.dataUrl || "").split(",");
  return {
    encoding: "base64",
    mime: asset.type,
    data
  };
}

function imageReferencePayload(asset) {
  if (!asset) return null;
  const [, data = ""] = String(asset.dataUrl || "").split(",");
  return {
    name: asset.name,
    mime: asset.type,
    data
  };
}

function logoAssetPath(kind, asset) {
  const extension = extensionForMime(asset.type);
  return kind === "final"
    ? `public/brand/logo/logo-approved.${extension}`
    : `docs/brand/logo-concepts/logo-concept-sheet.${extension}`;
}

function logoAssetFiles() {
  const files = {};
  if (state.logoLab.assets.board) {
    files[logoAssetPath("board", state.logoLab.assets.board)] = dataUrlPayload(state.logoLab.assets.board);
  }
  if (state.logoLab.assets.final) {
    files[logoAssetPath("final", state.logoLab.assets.final)] = dataUrlPayload(state.logoLab.assets.final);
  }
  return files;
}

function cssTokens(input) {
  const [ink, paper, primary, deep, accent, secondary] = input.direction.colors;
  return `:root {
  --brand-bg: ${paper[1]};
  --brand-surface: #ffffff;
  --brand-text: ${ink[1]};
  --brand-muted: #66665f;
  --brand-border: #d8d8cf;
  --brand-primary: ${primary[1]};
  --brand-primary-hover: ${deep[1]};
  --brand-accent: ${accent[1]};
  --brand-secondary: ${secondary[1]};
  --brand-success: #24745c;
  --brand-warning: #d97706;
  --brand-danger: #b42318;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-shadow-soft: 0 18px 50px rgb(20 20 18 / 9%);
  --brand-font-heading: ${input.direction.fonts.heading};
  --brand-font-body: ${input.direction.fonts.body};
}
`;
}

function jsonTokens(input) {
  const [ink, paper, primary, deep, accent, secondary] = input.direction.colors;
  return JSON.stringify({
    color: {
      background: paper[1],
      surface: "#ffffff",
      text: ink[1],
      muted: "#66665f",
      border: "#d8d8cf",
      primary: primary[1],
      primaryHover: deep[1],
      accent: accent[1],
      secondary: secondary[1],
      success: "#24745c",
      warning: "#d97706",
      danger: "#b42318"
    },
    radius: {
      sm: "4px",
      md: "8px"
    },
    shadow: {
      soft: "0 18px 50px rgb(20 20 18 / 9%)"
    },
    font: {
      heading: input.direction.fonts.heading,
      body: input.direction.fonts.body
    }
  }, null, 2);
}

function tailwindV4Theme(input) {
  const [ink, paper, primary, deep, accent, secondary] = input.direction.colors;
  return `/*
  ${input.brandName} Tailwind v4 brand theme
  Import this from a Tailwind v4 CSS entrypoint when the target project uses Tailwind.
  Keep DESIGN.md and docs/brand/BRAND_GUIDE.md as the source of truth.
*/

@theme {
  --color-brand-bg: ${paper[1]};
  --color-brand-surface: #ffffff;
  --color-brand-text: ${ink[1]};
  --color-brand-muted: #66665f;
  --color-brand-border: #d8d8cf;
  --color-brand-primary: ${primary[1]};
  --color-brand-primary-hover: ${deep[1]};
  --color-brand-accent: ${accent[1]};
  --color-brand-secondary: ${secondary[1]};
  --color-brand-success: #24745c;
  --color-brand-warning: #d97706;
  --color-brand-danger: #b42318;
  --radius-brand-sm: 4px;
  --radius-brand-md: 8px;
  --shadow-brand-soft: 0 18px 50px rgb(20 20 18 / 9%);
  --font-brand-heading: ${input.direction.fonts.heading};
  --font-brand-body: ${input.direction.fonts.body};
}
`;
}

function designMarkdown(input) {
  const dir = input.direction;
  const scout = designScoutForInput(input);
  const [ink, paper, primary, deep, accent, secondary] = dir.colors;
  const logoStatus = state.logoLab.assets.final
    ? "Approved raster logo exists at public/brand/logo/logo-approved.*. Preserve its proportions; do not stretch, squash, redraw, or replace it with a generic starter mark."
    : state.logoLab.skipped
      ? "Logo approval was skipped temporarily. Treat generated SVG marks as placeholders until the owner approves a final logo."
      : "Logo approval is not complete. Treat generated marks as draft placeholders.";

  return `# ${input.brandName} DESIGN.md

Status: Draft generated by Brand Kit Studio. Use with \`docs/brand/BRAND_GUIDE.md\`, \`docs/brand/VISUAL_SYSTEM.md\`, and \`src/styles/brand-tokens.css\`.

## Purpose

This file is the compact implementation source for AI coding agents and future design passes. It translates the approved brand direction into tokens, UI rules, asset rules, and do/don't guidance that can be applied inside the project without reinterpreting the brand from scratch.

## Brand Snapshot

- Brand/project: ${input.brandName}
- Selected direction: ${dir.label}
- Audience: ${input.audience}
- Source URL: ${input.sourceUrl || "Not provided"}
- Brand promise: ${dir.promise}
- Core traits: ${dir.traits.join(", ")}
- Design scout lane: ${scout.lane.label}
- Design scout mode: ${scout.mode}

## Design Tokens

\`\`\`yaml
brand:
  name: ${JSON.stringify(input.brandName)}
  direction: ${JSON.stringify(dir.label)}
  promise: ${JSON.stringify(dir.promise)}
color:
  background: ${paper[1]}
  surface: "#ffffff"
  text: ${ink[1]}
  muted: "#66665f"
  border: "#d8d8cf"
  primary: ${primary[1]}
  primary_hover: ${deep[1]}
  accent: ${accent[1]}
  secondary: ${secondary[1]}
  success: "#24745c"
  warning: "#d97706"
  danger: "#b42318"
radius:
  sm: 4px
  md: 8px
shadow:
  soft: "0 18px 50px rgb(20 20 18 / 9%)"
font:
  heading: ${JSON.stringify(dir.fonts.heading)}
  body: ${JSON.stringify(dir.fonts.body)}
\`\`\`

## Color Palette

| Role | Name | Hex | Use |
| --- | --- | --- | --- |
| Text / ink | ${ink[0]} | ${ink[1]} | Main text, dark UI surfaces, high-trust anchors |
| Background | ${paper[0]} | ${paper[1]} | Primary page background and light brand surfaces |
| Primary | ${primary[0]} | ${primary[1]} | Main CTAs, selected states, important actions |
| Primary hover / depth | ${deep[0]} | ${deep[1]} | Hover states, deep panels, strong contrast areas |
| Accent | ${accent[0]} | ${accent[1]} | Highlights, badges, small delight moments |
| Secondary | ${secondary[0]} | ${secondary[1]} | Secondary emphasis and supporting graphics |

## Typography

- Headings: ${dir.fonts.heading}
- Body/UI: ${dir.fonts.body}
- Use display type only where the layout has room to breathe. Compact controls, labels, dashboards, and forms should favor the body/UI stack.
- Keep letter spacing at 0 unless a logo asset requires custom vector treatment.

## Logo And Asset Rules

- ${logoStatus}
- Use \`public/brand/logo/logo-primary.svg\` for horizontal placement when no final implementation asset exists yet.
- Use \`public/brand/logo/logo-mark.svg\` or a crop/vectorization derived from the approved logo for favicon, app chrome, and profile avatars.
- Social profile assets should be mark-first and readable at very small sizes; avoid long text inside circular avatars.
- Open Graph and banner assets can use headline text, but keep it short and high contrast.

## Layout And Component Rules

${scout.principles.map((principle) => `- ${principle}`).join("\n")}
- Use clear hierarchy: one primary action per screen section, visible secondary actions, and quiet tertiary controls.
- Prefer 6 to 8px radii for product UI unless the existing design system requires otherwise.
- Avoid nested cards, decorative blobs, and generic SaaS gradients.
- Dashboard and app surfaces should be dense enough to scan, but not cramped.
- Marketing/website surfaces should show the actual product, audience, or offer as early as possible.
- Buttons must maintain readable contrast in normal, hover, disabled, and selected states.

## Voice Rules

${dir.voice.map((rule) => `- ${rule}`).join("\n")}

## Do

- Reference this file before redesigning UI, landing pages, social images, icons, or copy.
- Use the exported CSS variables or Tailwind v4 theme helper instead of inventing new brand colors.
- Preserve owner-approved logo imagery and proportions.
- Call out mismatches when existing UI structure conflicts with the selected brand direction.

## Do Not

- Do not invent proof, traction, partnerships, guarantees, or launch claims.
- Do not replace approved logo art with generated placeholder letters.
- Do not use low-contrast text/background combinations.
- Do not treat this draft as trademark, legal, or final production approval.
`;
}

function agentsRule(input) {
  return `# Project Brand Instructions

## Brand System

- Treat \`DESIGN.md\` and \`docs/brand/BRAND_GUIDE.md\` as the source of truth for ${input.brandName} brand strategy, voice, visual style, colors, typography, logos, and asset usage.
- If \`public/brand/logo/logo-approved.*\` exists, treat that approved raster as the visual logo source of truth. Do not redraw, stretch, squash, or replace it with a generic starter mark; crop or vectorize from the approved image while preserving its proportions.
- New UI, copy, images, social assets, and marketing pages should reference \`DESIGN.md\`, the brand files, and design tokens by default.
- Do not invent unrelated colors, fonts, logos, illustration styles, or brand claims unless the owner explicitly asks for a new direction.
- If the brand system and existing code disagree, call out the mismatch before making broad visual changes.
`;
}

function svgLogo(input, variant = "primary") {
  if (state.logoLab.assets.final) {
    return svgApprovedLogoReference(input, variant, state.logoLab.assets.final);
  }

  const mark = initials(input.brandName);
  const [ink, paper, primary, deep, accent] = input.direction.colors;
  const width = variant === "mark" ? 512 : 1200;
  const text = escapeSvg(input.brandName);
  const title = escapeSvg(`${input.brandName} ${variant} logo`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="512" viewBox="0 0 ${width} 512" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  <rect width="${width}" height="512" rx="48" fill="${paper[1]}"/>
  <rect x="56" y="56" width="400" height="400" rx="42" fill="${deep[1]}"/>
  <path d="M96 352 L256 104 L416 352" fill="none" stroke="${accent[1]}" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="256" y="292" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="118" font-weight="900" fill="#ffffff">${escapeSvg(mark)}</text>
  ${variant === "mark" ? "" : `<text x="512" y="248" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="850" fill="${ink[1]}">${text}</text><text x="516" y="312" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="${primary[1]}">${escapeSvg(input.direction.label)}</text>`}
</svg>`;
}

function svgApprovedLogoReference(input, variant, asset) {
  const [, paper] = input.direction.colors;
  const width = variant === "mark" ? 512 : 1200;
  const title = escapeSvg(`${input.brandName} ${variant} approved logo reference`);
  const imageX = variant === "mark" ? 44 : 56;
  const imageY = variant === "mark" ? 44 : 56;
  const imageWidth = variant === "mark" ? 424 : 1088;
  const imageHeight = variant === "mark" ? 424 : 400;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="512" viewBox="0 0 ${width} 512" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  <rect width="${width}" height="512" rx="48" fill="${paper[1]}"/>
  <rect x="${imageX}" y="${imageY}" width="${imageWidth}" height="${imageHeight}" rx="42" fill="#ffffff"/>
  <image href="${escapeSvg(asset.dataUrl)}" x="${imageX}" y="${imageY}" width="${imageWidth}" height="${imageHeight}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
}

function svgOg(input) {
  const mark = initials(input.brandName);
  const [ink, paper, primary, deep, accent] = input.direction.colors;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title">
  <title id="title">${escapeSvg(input.brandName)} Open Graph image</title>
  <rect width="1200" height="630" fill="${deep[1]}"/>
  <path d="M0 560 C220 460 300 650 520 520 C760 380 850 420 1200 240 L1200 630 L0 630 Z" fill="${primary[1]}" opacity="0.72"/>
  <circle cx="1010" cy="112" r="86" fill="${accent[1]}"/>
  <rect x="72" y="72" width="168" height="168" rx="28" fill="${paper[1]}"/>
  <text x="156" y="178" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="62" font-weight="900" fill="${deep[1]}">${escapeSvg(mark)}</text>
  <text x="72" y="360" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="900" fill="#ffffff">${escapeSvg(input.brandName)}</text>
  <text x="76" y="430" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="700" fill="rgba(255,255,255,0.82)">${escapeSvg(input.direction.promise)}</text>
</svg>`;
}

const socialAssetSpecs = [
  { path: "public/brand/social/linkedin-banner.svg", title: "LinkedIn banner", width: 1584, height: 396, type: "banner" },
  { path: "public/brand/social/youtube-banner.svg", title: "YouTube banner", width: 2560, height: 1440, type: "banner", safe: "1546 x 423 center safe area" },
  { path: "public/brand/social/x-header.svg", title: "X header", width: 1500, height: 500, type: "banner" },
  { path: "public/brand/social/facebook-cover.svg", title: "Facebook cover", width: 1640, height: 924, type: "banner" },
  { path: "public/brand/social/instagram-profile.svg", title: "Instagram profile", width: 1080, height: 1080, type: "profile" },
  { path: "public/brand/social/facebook-profile.svg", title: "Facebook profile", width: 1080, height: 1080, type: "profile" },
  { path: "public/brand/social/x-profile.svg", title: "X profile", width: 1080, height: 1080, type: "profile" },
  { path: "public/brand/social/youtube-profile.svg", title: "YouTube profile", width: 1080, height: 1080, type: "profile" }
];

function svgSocialAsset(input, spec) {
  const mark = initials(input.brandName);
  const [ink, paper, primary, deep, accent] = input.direction.colors;
  const title = escapeSvg(`${input.brandName} ${spec.title}`);
  const approvedLogo = state.logoLab.assets.final;
  if (spec.type === "profile") {
    const logoContent = approvedLogo
      ? `<image href="${escapeSvg(approvedLogo.dataUrl)}" x="${spec.width * 0.2}" y="${spec.height * 0.2}" width="${spec.width * 0.6}" height="${spec.height * 0.6}" preserveAspectRatio="xMidYMid meet"/>`
      : `<path d="M${spec.width * 0.32} ${spec.height * 0.68} L${spec.width * 0.5} ${spec.height * 0.3} L${spec.width * 0.68} ${spec.height * 0.68}" fill="none" stroke="${deep[1]}" stroke-width="${spec.width * 0.042}" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="${spec.width * 0.5}" cy="${spec.height * 0.5}" r="${spec.width * 0.065}" fill="${primary[1]}"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${spec.width}" height="${spec.height}" viewBox="0 0 ${spec.width} ${spec.height}" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  <rect width="${spec.width}" height="${spec.height}" fill="${deep[1]}"/>
  <circle cx="${spec.width / 2}" cy="${spec.height / 2}" r="${spec.width * 0.38}" fill="${paper[1]}"/>
  ${logoContent}
</svg>`;
  }

  const badgeSize = Math.min(spec.height * 0.34, 220);
  const badgeContent = approvedLogo
    ? `<image href="${escapeSvg(approvedLogo.dataUrl)}" x="${72 + badgeSize * 0.12}" y="${spec.height * 0.18 + badgeSize * 0.12}" width="${badgeSize * 0.76}" height="${badgeSize * 0.76}" preserveAspectRatio="xMidYMid meet"/>`
    : `<path d="M${72 + badgeSize * 0.24} ${spec.height * 0.18 + badgeSize * 0.72} L${72 + badgeSize * 0.5} ${spec.height * 0.18 + badgeSize * 0.24} L${72 + badgeSize * 0.76} ${spec.height * 0.18 + badgeSize * 0.72}" fill="none" stroke="${deep[1]}" stroke-width="${Math.max(12, badgeSize * 0.09)}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const safeNote = spec.safe ? `<text x="${spec.width - 72}" y="${spec.height - 44}" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="rgba(255,255,255,0.54)">${escapeSvg(spec.safe)}</text>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${spec.width}" height="${spec.height}" viewBox="0 0 ${spec.width} ${spec.height}" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  <rect width="${spec.width}" height="${spec.height}" fill="${deep[1]}"/>
  <path d="M0 ${spec.height * 0.84} C${spec.width * 0.22} ${spec.height * 0.62} ${spec.width * 0.38} ${spec.height * 1.05} ${spec.width * 0.62} ${spec.height * 0.72} C${spec.width * 0.78} ${spec.height * 0.5} ${spec.width * 0.9} ${spec.height * 0.55} ${spec.width} ${spec.height * 0.36} L${spec.width} ${spec.height} L0 ${spec.height} Z" fill="${primary[1]}" opacity="0.72"/>
  <rect x="72" y="${spec.height * 0.18}" width="${badgeSize}" height="${badgeSize}" rx="32" fill="${paper[1]}"/>
  ${badgeContent}
  <text x="${72 + badgeSize + 48}" y="${spec.height * 0.31}" font-family="Inter, Arial, sans-serif" font-size="${Math.min(spec.height * 0.13, 88)}" font-weight="900" fill="#ffffff">${escapeSvg(input.brandName)}</text>
  <text x="${72 + badgeSize + 52}" y="${spec.height * 0.31 + Math.min(spec.height * 0.07, 46)}" font-family="Inter, Arial, sans-serif" font-size="${Math.min(spec.height * 0.048, 34)}" font-weight="750" fill="${accent[1]}">${escapeSvg(input.direction.promise)}</text>
  ${safeNote}
</svg>`;
}

function socialAssetFiles(input) {
  return Object.fromEntries(socialAssetSpecs.map((spec) => [spec.path, svgSocialAsset(input, spec)]));
}

function exportFiles() {
  const input = getInputs();
  return {
    "DESIGN.md": designMarkdown(input),
    "docs/brand/BRAND_GUIDE.md": brandGuide(input),
    "docs/brand/BRAND_STRATEGY.md": brandStrategy(input),
    "docs/brand/VISUAL_SYSTEM.md": visualSystem(input),
    "docs/brand/DESIGN_SCOUT.md": designScoutDoc(input),
    "docs/brand/VOICE_AND_MESSAGING.md": voiceGuide(input),
    "docs/brand/ASSET_MANIFEST.md": assetManifest(input),
    "docs/brand/LOGO_APPROVAL.md": logoApprovalDoc(input),
    "docs/brand/BRAND_INTAKE_PACKET.md": intakePacketMarkdown(input),
    "docs/brand/brand-intake.json": intakePacketJson(input),
    "docs/brand/INPUT_REFERENCES.md": inputReferences(input),
    "src/styles/brand-tokens.css": cssTokens(input),
    "src/styles/brand-tokens.json": jsonTokens(input),
    "src/styles/brand-tailwind-v4.css": tailwindV4Theme(input),
    "AGENTS.brand-system.md": agentsRule(input),
    "public/brand/logo/logo-primary.svg": svgLogo(input, "primary"),
    "public/brand/logo/logo-mark.svg": svgLogo(input, "mark"),
    "public/brand/social/og-default.svg": svgOg(input),
    "public/brand/social/social-profile.svg": svgLogo(input, "mark"),
    ...socialAssetFiles(input),
    ...logoAssetFiles()
  };
}

function installPayload() {
  const input = getInputs();
  return {
    projectPath: els.installPath.value.trim(),
    brandName: input.brandName,
    directionLabel: input.direction.label,
    files: exportFiles(input)
  };
}

function renderInstallPlan(plan) {
  const counts = plan.reduce((acc, item) => {
    acc[item.action] = (acc[item.action] || 0) + 1;
    return acc;
  }, {});
  const rows = plan.map((item) => `
    <div class="install-row">
      <span>${escapeHtml(item.action)}</span>
      <strong>${escapeHtml(item.path)}</strong>
    </div>
  `).join("");
  return `
    <p>${counts.create || 0} create, ${counts.update || 0} update, ${counts.unchanged || 0} unchanged.</p>
    <div>${rows}</div>
  `;
}

function renderInstallProgress(activeKey, steps = defaultInstallSteps()) {
  const activeIndex = steps.findIndex((step) => step.key === activeKey);
  return `
    <div class="install-progress" aria-live="polite">
      ${steps.map((step, index) => {
        const stateClass = index < activeIndex ? "is-done" : index === activeIndex ? "is-active" : "is-pending";
        return `
          <div class="install-progress-step ${stateClass}">
            <span>${index < activeIndex ? "OK" : index + 1}</span>
            <div>
              <strong>${escapeHtml(step.label)}</strong>
              <small>${escapeHtml(step.detail)}</small>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function defaultInstallSteps() {
  return [
    { key: "validate", label: "Validate target", detail: "Confirming the project folder and approved logo decision." },
    { key: "prepare", label: "Prepare files", detail: "Building brand docs, logo assets, social assets, and design tokens." },
    { key: "write", label: "Write locally", detail: "Writing files into the selected project folder." },
    { key: "backup", label: "Protect changes", detail: "Backing up replaced files when needed." },
    { key: "complete", label: "Complete", detail: "Refreshing the install summary and readiness checklist." }
  ];
}

function setInstallProgress(activeKey) {
  els.installSummary.innerHTML = renderInstallProgress(activeKey);
}

async function previewInstall() {
  els.previewInstallButton.disabled = true;
  els.installButton.disabled = true;
  setInstallProgress("validate");

  try {
    state.logoLab.revisionNotes = els.logoRevisionNotes.value.trim();
    if (!logoApprovalComplete()) {
      throw new Error("Approve a logo variant first, or click Skip for now before installing.");
    }
    if (!els.installPath.value.trim()) {
      const resolved = await resolveProjectFolder();
      if (!resolved) throw new Error("Choose a target project folder first.");
    }
    setInstallProgress("prepare");
    const response = await fetch("/api/install-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(installPayload())
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Install preview failed.");

    setInstallProgress("complete");
    els.installSummary.innerHTML = renderInstallPlan(result.plan);
    state.install.previewReady = true;
    state.install.installed = false;
    els.installButton.disabled = false;
    els.exportNote.textContent = "Install preview ready. Review the create/update list, then install the approved kit.";
  } catch (error) {
    markInstallDirty();
    els.installSummary.textContent = error.message;
    els.exportNote.textContent = "Install preview failed. Nothing was written.";
  } finally {
    els.previewInstallButton.disabled = false;
    renderTestReadiness(getInputs());
  }
}

async function installBrandKit() {
  els.previewInstallButton.disabled = true;
  els.installButton.disabled = true;
  setInstallProgress("validate");

  try {
    setInstallProgress("prepare");
    await new Promise((resolve) => setTimeout(resolve, 80));
    setInstallProgress("write");
    const response = await fetch("/api/install-brand-kit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...installPayload(), approved: true })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "Install failed.");

    setInstallProgress(result.backupPath ? "backup" : "complete");
    await new Promise((resolve) => setTimeout(resolve, 80));
    setInstallProgress("complete");
    els.installSummary.innerHTML = renderInstallPlan(result.plan);
    state.install.previewReady = true;
    state.install.installed = true;
    els.exportNote.textContent = result.backupPath
      ? `Installed ${result.written.length} brand file${result.written.length === 1 ? "" : "s"}. Existing files were backed up first.`
      : `Installed ${result.written.length} brand file${result.written.length === 1 ? "" : "s"}.`;
  } catch (error) {
    markInstallDirty();
    els.installSummary.textContent = error.message;
    els.exportNote.textContent = "Install failed. Check the target folder and preview again.";
  } finally {
    els.previewInstallButton.disabled = false;
    renderTestReadiness(getInputs());
  }
}

function colorRole(index) {
  return ["Primary text", "Background", "Primary action", "Action hover", "Accent", "Secondary accent"][index] || "Brand color";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeSvg(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function downloadZip() {
  const input = getInputs();
  const blob = makeZip(exportFiles(input));
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${input.slug}-brand-kit.zip`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  els.exportNote.textContent = `Exported ${input.slug}-brand-kit.zip locally. Drop it into the project root, then merge the included brand files.`;
}

function handoffPrompt() {
  const input = getInputs();
  return `Use $brand-system-starter in this project. I have a Brand Kit Studio export for ${input.brandName}, using the selected direction "${input.direction.label}". Install the exported DESIGN.md, docs/brand files, assets, brand-intake.json, and brand tokens into the project root. Then update AGENTS.md and docs/PROJECT.md so future UI, copy, images, social assets, and marketing work reference DESIGN.md, the brand guide, and tokens by default unless I ask for a new direction. Keep this local and reversible first, and do not overwrite existing brand assets without checking for conflicts.`;
}

async function copyHandoffPrompt() {
  try {
    await navigator.clipboard.writeText(handoffPrompt());
    els.exportNote.textContent = "Codex handoff prompt copied.";
  } catch {
    els.exportNote.textContent = handoffPrompt();
  }
}

async function copyIntakePrompt() {
  try {
    await navigator.clipboard.writeText(INTAKE_PROMPT);
    els.packetStatus.textContent = "Project-chat intake prompt copied.";
  } catch {
    els.packetInput.value = INTAKE_PROMPT;
    els.packetStatus.textContent = "Clipboard was unavailable, so the prompt was placed in the packet box.";
  }
}

function makeZip(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;

  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = fileContentBytes(content, encoder);
    const crc = crc32(data);
    const local = concatBytes([
      u32(0x04034b50), u16(20), u16(0), u16(0), u16(0), u16(0),
      u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0),
      nameBytes, data
    ]);
    chunks.push(local);
    central.push({
      nameBytes,
      crc,
      size: data.length,
      offset
    });
    offset += local.length;
  });

  central.forEach((entry) => {
    const header = concatBytes([
      u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(0), u16(0),
      u32(entry.crc), u32(entry.size), u32(entry.size), u16(entry.nameBytes.length),
      u16(0), u16(0), u16(0), u16(0), u32(0), u32(entry.offset), entry.nameBytes
    ]);
    chunks.push(header);
  });

  const centralSize = chunks.slice(filesCount(files)).reduce((sum, chunk) => sum + chunk.length, 0);
  const end = concatBytes([
    u32(0x06054b50), u16(0), u16(0), u16(central.length), u16(central.length),
    u32(centralSize), u32(offset), u16(0)
  ]);
  chunks.push(end);

  return new Blob(chunks, { type: "application/zip" });
}

function fileContentBytes(content, encoder) {
  if (content instanceof Uint8Array) return content;
  if (content && typeof content === "object" && content.encoding === "base64") {
    return base64ToBytes(content.data || "");
  }
  return encoder.encode(String(content));
}

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function filesCount(files) {
  return Object.keys(files).length;
}

function concatBytes(parts) {
  const length = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(length);
  let offset = 0;
  parts.forEach((part) => {
    out.set(part, offset);
    offset += part.length;
  });
  return out;
}

function u16(value) {
  const out = new Uint8Array(2);
  out[0] = value & 0xff;
  out[1] = (value >> 8) & 0xff;
  return out;
}

function u32(value) {
  const out = new Uint8Array(4);
  out[0] = value & 0xff;
  out[1] = (value >> 8) & 0xff;
  out[2] = (value >> 16) & 0xff;
  out[3] = (value >> 24) & 0xff;
  return out;
}

function crc32(data) {
  let crc = -1;
  for (let i = 0; i < data.length; i += 1) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ data[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

["input", "change"].forEach((eventName) => {
  [els.brandName, els.sourceUrl, els.audience, els.brief].forEach((el) => {
    el.addEventListener(eventName, () => {
      markInstallDirty("Preview the install again after changing the brand inputs.");
      render();
      scheduleDesignScoutRefresh();
    });
  });
});

["input", "change"].forEach((eventName) => {
  els.installPath.addEventListener(eventName, () => {
    markInstallDirty("Preview the install after choosing the target folder.");
    renderTestReadiness(getInputs());
  });
});

els.fileInput.addEventListener("change", (event) => handleFiles(event.target.files));

["dragenter", "dragover"].forEach((eventName) => {
  els.dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    els.dropZone.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  els.dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    els.dropZone.classList.remove("is-dragging");
  });
});

els.dropZone.addEventListener("drop", (event) => handleFiles(event.dataTransfer.files));
document.querySelectorAll("[data-preview-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    state.previewMode = button.dataset.previewMode || "app";
    document.querySelectorAll("[data-preview-mode]").forEach((item) => {
      item.classList.toggle("is-selected", item === button);
    });
    render();
  });
});
els.importPacketButton.addEventListener("click", importPacket);
els.copyPacketPromptButton.addEventListener("click", copyIntakePrompt);
els.packetInput.addEventListener("paste", schedulePacketAutoImport);
els.captureUrlButton.addEventListener("click", captureLocalUrl);
els.exportButton.addEventListener("click", downloadZip);
els.copyPromptButton.addEventListener("click", copyHandoffPrompt);
els.previewInstallButton.addEventListener("click", previewInstall);
els.installButton.addEventListener("click", installBrandKit);
els.refreshPortfolioBrainButton.addEventListener("click", refreshPortfolioBrain);
els.portfolioBrainList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project-start]");
  if (!button) return;
  startBrandKitFromProject(button.dataset.projectStart || "");
});
els.generateScreenRedesignsButton.addEventListener("click", generateScreenRedesigns);
els.autoPreviewGallery.addEventListener("click", (event) => {
  const button = event.target.closest("[data-auto-preview-select]");
  const card = event.target.closest("[data-auto-preview-card]");
  const directionId = button?.dataset.autoPreviewSelect || card?.dataset.autoPreviewCard || "";
  if (!directionId) return;
  state.selectedDirectionId = directionId;
  state.logoLab.selectedDirectionId = directionId;
  state.logoLab.variantPrompt = "";
  state.logoLab.variantImage = null;
  state.logoLab.approvedVariant = "";
  state.logoLab.approvedSource = "";
  state.logoLab.assets.final = null;
  markInstallDirty("Preview the install again after changing the automation brain direction.");
  els.logoLabStatus.textContent = "Direction selected. Next recommended step: generate logo board images.";
  render();
});
els.generateLogoBoardsButton.addEventListener("click", generateLogoBoards);
els.generateLogoVariantsButton.addEventListener("click", generateLogoVariants);
els.generateApprovedLogoButton.addEventListener("click", generateApprovedLogoAsset);
els.saveProfileButton.addEventListener("click", saveProfile);
els.loadProfileButton.addEventListener("click", loadProfile);
els.deleteProfileButton.addEventListener("click", deleteProfile);
els.profileSelect.addEventListener("change", () => {
  state.activeProfileId = els.profileSelect.value || "";
  renderProfileControls();
});
els.saveOpenAiKeyButton.addEventListener("click", saveOpenAiConfig);
els.openAiKeyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveOpenAiConfig();
});
els.openAiQualitySelect.addEventListener("change", saveOpenAiConfig);
els.logoBoardAssetInput.addEventListener("change", (event) => {
  attachLogoAsset("board", event.target.files?.[0]);
  event.target.value = "";
});
els.logoFinalAssetInput.addEventListener("change", (event) => {
  attachLogoAsset("final", event.target.files?.[0]);
  event.target.value = "";
});
els.skipLogoApprovalButton.addEventListener("click", () => {
  markInstallDirty("Preview the install after changing logo approval.");
  state.logoLab.skipped = true;
  state.logoLab.approvedVariant = "";
  state.logoLab.approvedSource = "";
  state.logoLab.revisionNotes = els.logoRevisionNotes.value.trim();
  els.logoLabStatus.textContent = "Logo approval skipped for now. The install will record this as a temporary decision.";
  render();
});
els.logoBoardGrid.addEventListener("click", (event) => {
  const lightboxImage = event.target.closest("[data-lightbox-src]");
  if (lightboxImage) {
    openImageLightbox(lightboxImage.dataset.lightboxSrc);
    return;
  }
  const button = event.target.closest("button");
  if (!button) return;
  const selectId = button.dataset.logoSelect;
  const approveBoardId = button.dataset.logoApproveBoard;
  const copyId = button.dataset.copyPrompt;
  if (selectId) {
    state.logoLab.selectedDirectionId = selectId;
    state.selectedDirectionId = selectId;
    state.logoLab.variantPrompt = "";
    state.logoLab.variantImage = null;
    state.logoLab.approvedVariant = "";
    state.logoLab.approvedSource = "";
    state.logoLab.skipped = false;
    if (state.logoLab.boardImages[selectId]) {
      state.logoLab.assets.board = state.logoLab.boardImages[selectId];
    }
    state.logoLab.assets.final = null;
    markInstallDirty("Preview the install after changing the logo direction.");
    els.logoLabStatus.textContent = `Selected ${state.directions[selectId]?.label || selectId} for logo variants.`;
    render();
  }
  if (approveBoardId) {
    state.logoLab.selectedDirectionId = approveBoardId;
    state.selectedDirectionId = approveBoardId;
    state.logoLab.approvedSource = "board";
    state.logoLab.approvedVariant = "";
    state.logoLab.skipped = false;
    state.logoLab.revisionNotes = els.logoRevisionNotes.value.trim();
    state.logoLab.assets.board = state.logoLab.boardImages[approveBoardId] || state.logoLab.assets.board;
    state.logoLab.assets.final = null;
    markInstallDirty("Preview the install after approving the board logo.");
    els.logoLabStatus.textContent = `Approved the ${state.directions[approveBoardId]?.label || "selected"} board logo. You can generate the final logo now, or generate variants if you still want alternatives.`;
    render();
  }
  if (copyId) copyLogoPrompt(copyId);
});
els.logoVariantGrid.addEventListener("click", (event) => {
  const lightboxImage = event.target.closest("[data-lightbox-src]");
  if (lightboxImage) {
    openImageLightbox(lightboxImage.dataset.lightboxSrc);
    return;
  }
  const button = event.target.closest("button");
  if (!button) return;
  const copyId = button.dataset.copyPrompt;
  const approved = button.dataset.approveVariant;
  if (copyId) copyLogoPrompt(copyId);
  if (approved) {
    markInstallDirty("Preview the install after changing logo approval.");
    state.logoLab.approvedVariant = approved;
    state.logoLab.approvedSource = "variant";
    state.logoLab.skipped = false;
    state.logoLab.revisionNotes = els.logoRevisionNotes.value.trim();
    state.logoLab.assets.final = null;
    els.logoLabStatus.textContent = `Approved logo variant ${approved}.`;
    render();
  }
});
function openImageLightbox(src) {
  if (!src || !els.imageLightbox || !els.imageLightboxImage) return;
  els.imageLightboxImage.src = src;
  if (typeof els.imageLightbox.showModal === "function") {
    els.imageLightbox.showModal();
  }
}

els.imageLightboxClose.addEventListener("click", () => {
  els.imageLightbox.close();
});
els.imageLightbox.addEventListener("click", (event) => {
  if (event.target === els.imageLightbox) els.imageLightbox.close();
});
els.logoAssetGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const kind = button?.dataset.logoRemove;
  if (!kind) return;
  state.logoLab.assets[kind] = null;
  markInstallDirty("Preview the install after changing logo assets.");
  els.logoLabStatus.textContent = "Removed logo asset from this kit.";
  render();
});
els.resetButton.addEventListener("click", () => {
  state.files = [];
  releaseTargetFrame();
  state.targetFrame = null;
  state.directions = Object.fromEntries(Object.entries(defaultDirections).map(([key, direction]) => [key, { ...direction, id: key }]));
  state.importedPacket = null;
  state.selectedDirectionId = "studio";
  state.logoLab = {
    boards: {},
    boardImages: {},
    boardStatus: {},
    variantImage: null,
    variantStatus: "",
    finalStatus: "",
    isGeneratingBoards: false,
    isGeneratingVariant: false,
    isGeneratingFinal: false,
    selectedDirectionId: "",
    variantPrompt: "",
    approvedVariant: "",
    approvedSource: "",
    revisionNotes: "",
    skipped: false,
    assets: {
      board: null,
      final: null
    }
  };
  state.install = {
    previewReady: false,
    installed: false
  };
  state.designScout = {
    requestKey: "",
    loading: false,
    liveReferences: [],
    mode: "builtin",
    provider: "builtin",
    warning: ""
  };
  state.autoBrain = {
    active: false,
    source: "",
    status: "Ready",
    summary: "Choose a project from Portfolio Brand Brain to auto-read it and generate comparable redesign previews."
  };
  state.screenLab = {
    images: {},
    status: {},
    isGenerating: false,
    message: ""
  };
  state.activeProfileId = "";
  els.packetInput.value = "";
  els.packetStatus.textContent = "No packet imported yet.";
  els.captureStatus.textContent = "Use localhost or 127.0.0.1 to pull in a real project frame.";
  els.installPath.value = "";
  els.installButton.disabled = true;
  els.installSummary.textContent = "Preview the install before writing files.";
  els.logoRevisionNotes.value = "";
  els.logoLabStatus.textContent = "Generate separate prompts for each direction, choose one, then generate four logo variants before installing.";
  els.brandName.value = "Brand Kit Studio";
  els.sourceUrl.value = "";
  els.audience.value = "Founders and operators starting Codex projects";
  els.brief.value = "A local-first app where I can paste an idea, upload project files or screenshots, preview brand directions, and export a full brand guide plus assets into the root folder of a Codex project.";
  render();
});

render();
scheduleDesignScoutRefresh();
refreshOpenAiStatus();
refreshProfiles();
refreshPortfolioBrain();
