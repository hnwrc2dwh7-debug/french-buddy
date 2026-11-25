// Mon Cahier de Français — Interactive Bilingual Exercise Engine

(function () {
  const STORAGE_KEY = "frenchBuddyProfile_v1";

  const defaultProfile = {
    name: "",
    xp: 0,
    quizzesDone: 0,
    bestStreak: 0,
    bestModuleScores: {}
  };

  let profile = loadProfile();
  let questionCountSetting = 10;
  let activeCategoryFilter = "all";
  let session = null;

  let activeMemoTab = "verbs";
  let activeVerbId = "etre";
  let memoSearchQuery = "";

  function loadProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultProfile };
      return { ...defaultProfile, ...JSON.parse(raw) };
    } catch (e) {
      return { ...defaultProfile };
    }
  }

  function saveProfile() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      // ignore storage errors
    }
    updateNavbarStats();
  }

  // ==================== HELPERS ====================
  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function stripAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function cleanBadgeText(badge) {
    return String(badge).replace(/^[^\wÀ-ÿ]+/, "").trim();
  }

  function getBadges() {
    const hasPerfect = Object.values(profile.bestModuleScores).some(s => s === 100);
    return [
      { id: "first", label: "1er Quiz / First Quiz", unlocked: profile.quizzesDone >= 1 },
      { id: "streak5", label: "Série x5 / 5 Streak", unlocked: profile.bestStreak >= 5 },
      { id: "perfect", label: "Sans Faute 100%", unlocked: hasPerfect },
      { id: "xp500", label: "500 pts", unlocked: profile.xp >= 500 },
      { id: "xp1500", label: "Expert 1500 pts", unlocked: profile.xp >= 1500 }
    ];
  }

  function updateNavbarStats() {
    const xpEl = document.getElementById("nav-xp");
    const streakEl = document.getElementById("nav-streak");
    if (xpEl) xpEl.textContent = `${profile.xp} pts`;
    if (streakEl) streakEl.textContent = `Série max : ${profile.bestStreak}`;
  }

  // ==================== DASHBOARD / HOME VIEW ====================
  window.renderHome = function () {
    session = null;
    updateNavbarStats();
    const app = document.getElementById("app");
    const badges = getBadges();
    const greetingName = profile.name ? `, ${escapeHtml(profile.name)}` : "";

    app.innerHTML = `
      <section class="hero-card">
        <div>
          <div class="hero-kicker">Cahier d'exercices bilingue &middot; Collège</div>
          <h1 class="hero-title">Bienvenue${greetingName} dans ton cahier de français</h1>
          <p class="hero-en">
            Welcome${greetingName}! Practice French verbs, conjugations, vocabulary and school dialogues with side-by-side English guidance.
          </p>
          <div class="student-name-row">
            <label for="student-name" class="name-label">Prénom / Name :</label>
            <input id="student-name" class="name-input" type="text" maxlength="24"
              placeholder="Ex : Oliver, Emma..." value="${escapeHtml(profile.name)}" />
            <button class="btn btn-red" onclick="startQuiz('mix')">
              Lancer le Grand Quiz &rarr;
            </button>
          </div>
        </div>
        <div class="hero-stats-box">
          <div class="hero-stats-grid">
            <div>
              <div class="hero-stat-num">${profile.xp}</div>
              <div class="hero-stat-lbl">Points</div>
            </div>
            <div>
              <div class="hero-stat-num">${profile.quizzesDone}</div>
              <div class="hero-stat-lbl">Séries finies</div>
            </div>
            <div>
              <div class="hero-stat-num">${profile.bestStreak}</div>
              <div class="hero-stat-lbl">Record série</div>
            </div>
          </div>
          <div class="badges-row">
            ${badges
              .map(
                b => `<span class="mini-badge ${b.unlocked ? "unlocked" : ""}">${b.label}</span>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="settings-bar">
        <div class="bilingual-label">
          <strong>Longueur d'une série / Questions per session :</strong>
          <span>Choisis le nombre de questions avant ton bilan final / Choose quiz length before final score</span>
        </div>
        <div class="count-pills">
          ${[8, 10, 15, 20]
            .map(
              n => `
            <button class="count-pill ${questionCountSetting === n ? "active" : ""}"
              onclick="setQuestionCount(${n})">
              ${n} questions
            </button>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="special-modes-grid">
        <div class="special-card mix-card">
          <div>
            <h3>Grand Défi Mélangé</h3>
            <div class="en-sub">Mega Mix &mdash; CP, Verbs, Nouns &amp; Grammar</div>
            <p style="font-size:0.84rem;color:var(--ink-soft);">
              Pioche dans absolument tout : bases CP, 32 verbes, 78+ noms, grammaire et dialogues.
            </p>
          </div>
          <button class="btn btn-red" onclick="startQuiz('mix')">Commencer / Start &rarr;</button>
        </div>

        <div class="special-card drill-card">
          <div>
            <h3>Atelier ${window.VERB_TABLES.length} Verbes</h3>
            <div class="en-sub">Endless Verb Trainer (${window.VERB_TABLES.length} Verbs / ${window.VERB_TABLES.length * 6} Forms)</div>
            <p style="font-size:0.84rem;color:var(--ink-soft);">
              Générateur infini de conjugaison : menus déroulants 9 choix, QCM et écriture.
            </p>
          </div>
          <button class="btn btn-green" onclick="startQuiz('verb_drill')">Conjuguer / Verbs &rarr;</button>
        </div>

        <div class="special-card dd-card">
          <div>
            <h3>Atelier ${window.NOUN_BANK.length} Noms &amp; Mots</h3>
            <div class="en-sub">Endless Noun &amp; Vocabulary Trainer (CP to Collège)</div>
            <p style="font-size:0.84rem;color:var(--ink-soft);">
              École, famille, corps, animaux, maison, nourriture : genres (le/la), pluriels et listes déroulantes.
            </p>
          </div>
          <button class="btn btn-ink" onclick="startQuiz('noun_drill')">Mots &amp; Noms / Nouns &rarr;</button>
        </div>

        <div class="special-card dd-card">
          <div>
            <h3>Textes à Menus Déroulants</h3>
            <div class="en-sub">15 Multi-Dropdown Stories (8&ndash;10 Choices)</div>
            <p style="font-size:0.84rem;color:var(--ink-soft);">
              Complète des phrases et mini-textes avec de longues listes déroulantes.
            </p>
          </div>
          <button class="btn btn-outline" onclick="startQuiz('menus_deroulants')">Ouvrir / Open &rarr;</button>
        </div>
      </section>

      <div class="section-heading">
        <h2>Chapitres du cahier / Workbook Chapters (${window.MODULES.length})</h2>
        <div class="count-pills">
          ${[
            ["all", "Tous / All"],
            ["cp", "Bases CP"],
            ["verbes", `Verbes (${window.VERB_TABLES.length})`],
            ["noms", `Noms (${window.NOUN_BANK.length})`],
            ["grammaire", "Grammaire"],
            ["dialogues", "Dialogues"]
          ]
            .map(
              ([id, lbl]) => `
            <button class="count-pill ${activeCategoryFilter === id ? "active" : ""}"
              onclick="setCategoryFilter('${id}')">${lbl}</button>
          `
            )
            .join("")}
        </div>
      </div>

      <section class="modules-grid">
        ${window.MODULES.filter(m => activeCategoryFilter === "all" || m.category === activeCategoryFilter)
          .map(mod => {
            const best = profile.bestModuleScores[mod.id];
            const label = cleanBadgeText(mod.badge);
            return `
            <article class="module-card">
              <div class="module-illus">
                ${window.getIllustration(mod.iconIllustration)}
              </div>
              <div class="module-body">
                <div class="module-top-row">
                  <span class="module-tag">${escapeHtml(label)}</span>
                  ${
                    best !== undefined
                      ? `<span class="best-score-chip">Record : ${best}%</span>`
                      : `<span style="font-size:0.75rem;color:var(--ink-muted);font-weight:700;">À découvrir</span>`
                  }
                </div>
                <h3 class="module-title-fr">${escapeHtml(mod.titleFr)}</h3>
                <div class="module-title-en"><span class="lang-tag lang-en">EN</span>${escapeHtml(mod.titleEn)}</div>
                <p class="module-desc">
                  ${escapeHtml(mod.descFr)}
                  <span class="en-line">${escapeHtml(mod.descEn)}</span>
                </p>
                <button class="btn btn-ink" style="width:100%;" onclick="startQuiz('${mod.id}')">
                  Ouvrir le chapitre / Start &rarr;
                </button>
              </div>
            </article>
          `;
          })
          .join("")}
      </section>
    `;

    const nameInput = document.getElementById("student-name");
    if (nameInput) {
      nameInput.addEventListener("input", e => {
        profile.name = e.target.value.trim();
        saveProfile();
      });
    }
  };

  window.setQuestionCount = function (n) {
    questionCountSetting = n;
    window.renderHome();
  };

  window.setCategoryFilter = function (cat) {
    activeCategoryFilter = cat;
    window.renderHome();
  };

  // ==================== START A QUIZ SESSION ====================
  window.startQuiz = function (modeOrModuleId, customQuestions, customTitleFr, customTitleEn) {
    let pool = [];
    let titleFr = "";
    let titleEn = "";
    let moduleId = modeOrModuleId;

    if (customQuestions && customQuestions.length > 0) {
      pool = customQuestions;
      titleFr = customTitleFr || "Correction des erreurs";
      titleEn = customTitleEn || "Mistake Review";
    } else if (modeOrModuleId === "mix") {
      const allHandcrafted = window.MODULES.flatMap(m => m.questions);
      const dynVerbs = window.generateDynamicVerbQuestions(8);
      const dynNouns = window.generateDynamicNounQuestions ? window.generateDynamicNounQuestions(8) : [];
      pool = shuffle([...allHandcrafted, ...dynVerbs, ...dynNouns]).slice(0, questionCountSetting);
      titleFr = "Grand Défi Mélangé";
      titleEn = "Mega Mix Challenge";
    } else if (modeOrModuleId === "verb_drill") {
      const verbMods = window.MODULES.filter(m => m.category === "verbes");
      const verbHandcrafted = verbMods.flatMap(m => m.questions);
      const dyn = window.generateDynamicVerbQuestions(questionCountSetting + 10);
      pool = shuffle([...dyn, ...shuffle(verbHandcrafted).slice(0, 5)]).slice(
        0,
        questionCountSetting
      );
      titleFr = "Atelier 32 Verbes";
      titleEn = "32-Verb Conjugation Trainer";
    } else if (modeOrModuleId === "noun_drill") {
      const dynNouns = window.generateDynamicNounQuestions ? window.generateDynamicNounQuestions(questionCountSetting + 6) : [];
      const nounMod = window.MODULES.find(m => m.id === "noms_pluriels");
      const baseNouns = nounMod ? nounMod.questions : [];
      pool = shuffle([...dynNouns, ...baseNouns]).slice(0, questionCountSetting);
      titleFr = "Atelier Noms & Vocabulaire (78+ Mots)";
      titleEn = "Nouns & Vocabulary Trainer";
    } else {
      const mod = window.MODULES.find(m => m.id === modeOrModuleId);
      if (!mod) return;
      titleFr = mod.titleFr;
      titleEn = mod.titleEn;
      let base = shuffle(mod.questions);
      if (base.length < questionCountSetting && (mod.id === "essentiels" || mod.id === "conjugaison_present")) {
        const extra = window.generateDynamicVerbQuestions(questionCountSetting - base.length);
        base = [...base, ...extra];
      } else if (base.length < questionCountSetting && (mod.id === "noms_pluriels" || mod.id === "vocabulaire")) {
        const extra = window.generateDynamicNounQuestions
          ? window.generateDynamicNounQuestions(questionCountSetting - base.length)
          : [];
        base = [...base, ...extra];
      }
      pool = base.slice(0, questionCountSetting);
    }

    session = {
      moduleId,
      titleFr,
      titleEn,
      questions: pool,
      index: 0,
      correctCount: 0,
      points: 0,
      streak: 0,
      maxSessionStreak: 0,
      answered: false,
      history: []
    };

    renderCurrentQuestion();
  };

  // ==================== RENDER QUESTION ====================
  function renderCurrentQuestion() {
    if (!session) return;
    if (session.index >= session.questions.length) {
      renderResultsScreen();
      return;
    }

    const q = session.questions[session.index];
    session.answered = false;
    const total = session.questions.length;
    const progressPct = Math.round((session.index / total) * 100);
    const app = document.getElementById("app");

    app.innerHTML = `
      <div class="quiz-wrapper">
        <div class="quiz-topbar">
          <button class="btn btn-outline" onclick="renderHome()">&larr; Retour / Exit</button>
          <div style="text-align:center;">
            <div style="font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:1.05rem;">${escapeHtml(session.titleFr)}</div>
            <div style="font-size:0.8rem;color:var(--ink-muted);font-weight:600;">Question ${session.index + 1} sur ${total}</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            <span class="stat-pill">${session.points} pts</span>
            <span class="stat-pill stat-pill-streak">Série : ${session.streak}</span>
            <button class="btn btn-outline" style="padding:7px 11px;font-size:0.82rem;" onclick="openMemoModal()">
              Aide Verbes
            </button>
          </div>
        </div>

        <div class="progress-track">
          <div class="progress-fill" style="width:${progressPct}%"></div>
        </div>

        <div class="quiz-card">
          <div class="quiz-visual-row">
            <div class="quiz-svg-box">
              ${window.getIllustration(q.illustration)}
            </div>
            <div>
              <div class="bilingual-prompt">
                <div class="prompt-fr"><span class="lang-tag lang-fr">FR</span>${escapeHtml(q.promptFr)}</div>
                <div class="prompt-en"><span class="lang-tag lang-en">EN</span>${escapeHtml(q.promptEn)}</div>
              </div>

              ${renderQuestionPromptBlock(q)}
            </div>
          </div>

          <div id="interaction-zone"></div>
          <div id="feedback-zone"></div>
        </div>
      </div>
    `;

    const zone = document.getElementById("interaction-zone");
    if (q.type === "mcq") mountMCQ(q, zone);
    else if (q.type === "dialogue") mountDialogue(q, zone);
    else if (q.type === "input") mountInput(q, zone);
    else if (q.type === "match") mountMatch(q, zone);
    else if (q.type === "order") mountOrder(q, zone);
    else if (q.type === "dropdown") mountDropdown(q, zone);
  }

  function renderQuestionPromptBlock(q) {
    if (q.type === "dialogue") {
      return `
        <div class="dialogue-bubble">
          <div class="speaker-tag">${escapeHtml(q.speakerA)}</div>
          <div class="sentence-fr">&laquo; ${escapeHtml(q.lineAFr)} &raquo;</div>
          <div class="sentence-en"><span class="lang-tag lang-en">EN</span>"${escapeHtml(q.lineAEn)}"</div>
        </div>
      `;
    }
    if (q.type === "dropdown") {
      return `
        <div class="sentence-box">
          <div style="font-size:0.78rem;font-weight:800;color:var(--ink-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">
            Traduction / English meaning
          </div>
          <div class="sentence-en" style="font-size:1rem;font-weight:700;color:var(--ink);">
            "${escapeHtml(q.questionEn)}"
          </div>
        </div>
      `;
    }
    if (q.type === "match") {
      return `
        <div class="sentence-box">
          <div class="sentence-fr" style="font-size:1.05rem;">Clique à gauche (FR), puis sur sa traduction à droite (EN).</div>
          <div class="sentence-en">Click a French item on the left, then its English match on the right.</div>
        </div>
      `;
    }
    if (q.type === "order") {
      return `
        <div class="sentence-box">
          <div style="font-size:0.78rem;font-weight:800;color:var(--ink-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">
            Traduire en français / Translate into French
          </div>
          <div class="sentence-en" style="font-size:1.06rem;font-weight:700;color:var(--ink);">
            "${escapeHtml(q.questionEn)}"
          </div>
        </div>
      `;
    }
    return `
      <div class="sentence-box">
        <div class="sentence-fr">${escapeHtml(q.questionFr)}</div>
        <div class="sentence-en"><span class="lang-tag lang-en">EN</span>${escapeHtml(q.questionEn)}</div>
      </div>
    `;
  }

  // ==================== 1. MCQ ENGINE ====================
  function mountMCQ(q, zone) {
    const opts = shuffle(q.options);
    zone.innerHTML = `<div class="mcq-grid" id="mcq-grid"></div>`;
    const grid = document.getElementById("mcq-grid");

    opts.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "mcq-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        if (session.answered) return;
        const isCorrect = opt === q.answer;
        Array.from(grid.children).forEach(b => {
          b.disabled = true;
          if (b.textContent === q.answer) b.classList.add("correct");
        });
        if (!isCorrect) btn.classList.add("wrong");
        finalizeAnswer(q, isCorrect, opt);
      };
      grid.appendChild(btn);
    });
  }

  // ==================== 2. DIALOGUE ENGINE ====================
  function mountDialogue(q, zone) {
    const opts = shuffle(q.options);
    zone.innerHTML = `<div class="mcq-grid" style="grid-template-columns:1fr;" id="dlg-grid"></div>`;
    const grid = document.getElementById("dlg-grid");

    opts.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "mcq-btn";
      btn.innerHTML = `
        <span><span class="lang-tag lang-fr">FR</span>&laquo; ${escapeHtml(opt.fr)} &raquo;</span>
        <span class="opt-en"><span class="lang-tag lang-en">EN</span>"${escapeHtml(opt.en)}"</span>
      `;
      btn.onclick = () => {
        if (session.answered) return;
        const isCorrect = opt.fr === q.answer;
        Array.from(grid.children).forEach((b, idx) => {
          b.disabled = true;
          if (opts[idx].fr === q.answer) b.classList.add("correct");
        });
        if (!isCorrect) btn.classList.add("wrong");
        finalizeAnswer(q, isCorrect, opt.fr);
      };
      grid.appendChild(btn);
    });
  }

  // ==================== 3. INPUT ENGINE (with optional English-keyboard accent helper) ====================
  function mountInput(q, zone) {
    const accents = ["é", "è", "ê", "ë", "à", "â", "ç", "ù", "î", "ô", "œ"];
    zone.innerHTML = `
      <div class="input-area">
        <div class="answer-input-row">
          <input id="user-text-answer" class="answer-input" type="text" autocomplete="off" spellcheck="false"
            placeholder="Écris ta réponse ici / Type your French answer..." />
          <button id="btn-check-input" class="btn btn-ink" type="button">Valider / Check</button>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
          <button id="btn-show-hint" type="button" class="btn btn-outline" style="font-size:0.8rem;padding:6px 12px;">
            Afficher un indice / Show hint
          </button>
          <button id="btn-toggle-accents" type="button" class="btn btn-outline" style="font-size:0.8rem;padding:6px 12px;">
            Clavier anglais : accents (é, è, ç…)
          </button>
        </div>
        <div id="accent-drawer" class="accent-bar" style="display:none;margin-top:10px;margin-bottom:0;">
          <span class="accent-bar-label">Cliquer pour insérer / Click to insert :</span>
          ${accents
            .map(ch => `<button type="button" class="accent-key" data-ch="${ch}">${ch}</button>`)
            .join("")}
        </div>
        <div id="hint-container"></div>
      </div>
    `;

    const input = document.getElementById("user-text-answer");
    const checkBtn = document.getElementById("btn-check-input");
    const hintBtn = document.getElementById("btn-show-hint");
    const toggleAccentsBtn = document.getElementById("btn-toggle-accents");
    const accentDrawer = document.getElementById("accent-drawer");
    input.focus();

    toggleAccentsBtn.onclick = () => {
      const open = accentDrawer.style.display !== "none";
      accentDrawer.style.display = open ? "none" : "flex";
      input.focus();
    };

    zone.querySelectorAll(".accent-key").forEach(btn => {
      btn.onclick = () => {
        if (session.answered) return;
        const ch = btn.getAttribute("data-ch");
        const start = input.selectionStart || input.value.length;
        const end = input.selectionEnd || input.value.length;
        input.value = input.value.slice(0, start) + ch + input.value.slice(end);
        input.focus();
        input.setSelectionRange(start + ch.length, start + ch.length);
      };
    });

    hintBtn.onclick = () => {
      document.getElementById("hint-container").innerHTML = `
        <div class="hint-box">
          <strong>Indice (FR) :</strong> ${escapeHtml(q.hintFr || "")}
          <br/><strong>Hint (EN):</strong> ${escapeHtml(q.hintEn || "")}
        </div>
      `;
    };

    function submitInput() {
      if (session.answered) return;
      const val = input.value.trim();
      if (!val) return;
      const cleanVal = val.toLowerCase();
      const cleanTarget = q.answer.toLowerCase();
      const exactMatch = cleanVal === cleanTarget;
      const accentOnlyDiff = !exactMatch && stripAccents(cleanVal) === stripAccents(cleanTarget);

      input.disabled = true;
      checkBtn.disabled = true;

      if (exactMatch || accentOnlyDiff) {
        input.style.borderColor = "#245B49";
        input.style.background = "#E9F4EF";
        const extraNote = accentOnlyDiff
          ? `Presque parfait : attention juste à l'accent sur « ${q.answer} » (Watch the accent: '${q.answer}').`
          : "";
        finalizeAnswer(q, true, val, extraNote);
      } else {
        input.style.borderColor = "#C43E32";
        input.style.background = "#FBECEB";
        finalizeAnswer(q, false, val);
      }
    }

    checkBtn.onclick = submitInput;
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitInput();
      }
    });
  }

  // ==================== 4. MATCH PAIRS ENGINE ====================
  function mountMatch(q, zone) {
    const leftItems = shuffle(q.pairs.map((p, idx) => ({ id: idx, text: p.fr })));
    const rightItems = shuffle(q.pairs.map((p, idx) => ({ id: idx, text: p.en })));

    let selectedLeft = null;
    let matchedCount = 0;
    let mistakes = 0;

    zone.innerHTML = `
      <div class="match-columns">
        <div>
          <div class="match-col-title">Français (FR)</div>
          <div id="match-left"></div>
        </div>
        <div>
          <div class="match-col-title">English (EN)</div>
          <div id="match-right"></div>
        </div>
      </div>
    `;

    const leftCol = document.getElementById("match-left");
    const rightCol = document.getElementById("match-right");

    const leftBtns = {};
    const rightBtns = {};

    leftItems.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "match-item";
      btn.textContent = item.text;
      btn.onclick = () => {
        if (session.answered || btn.classList.contains("matched")) return;
        Object.values(leftBtns).forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedLeft = item.id;
      };
      leftBtns[item.id] = btn;
      leftCol.appendChild(btn);
    });

    rightItems.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "match-item";
      btn.textContent = item.text;
      btn.onclick = () => {
        if (session.answered || btn.classList.contains("matched") || selectedLeft === null) return;
        const lBtn = leftBtns[selectedLeft];
        if (selectedLeft === item.id) {
          lBtn.classList.remove("selected");
          lBtn.classList.add("matched");
          btn.classList.add("matched");
          selectedLeft = null;
          matchedCount++;
          if (matchedCount === q.pairs.length) {
            finalizeAnswer(
              q,
              mistakes <= 1,
              mistakes === 0 ? "4/4 paires reliées sans erreur" : `4/4 reliées (${mistakes} essai(s) supplémentaire(s))`
            );
          }
        } else {
          mistakes++;
          btn.classList.add("wrong-flash");
          lBtn.classList.add("wrong-flash");
          setTimeout(() => {
            btn.classList.remove("wrong-flash");
            lBtn.classList.remove("wrong-flash", "selected");
          }, 420);
          selectedLeft = null;
        }
      };
      rightBtns[item.id] = btn;
      rightCol.appendChild(btn);
    });
  }

  // ==================== 5. WORD ORDER BUILDER ====================
  function mountOrder(q, zone) {
    const allTokens = shuffle([...q.words, ...(q.distractors || [])]).map((w, i) => ({
      id: i,
      word: w,
      picked: false
    }));
    const chosenIds = [];

    zone.innerHTML = `
      <div>
        <div style="font-size:0.82rem;font-weight:700;color:var(--ink-muted);margin-bottom:6px;">
          Clique sur les mots dans l'ordre / Click words in order (clique dessus pour retirer) :
        </div>
        <div class="order-dropzone" id="order-dropzone"></div>
        <div class="order-bank" id="order-bank"></div>
        <button id="btn-check-order" class="btn btn-ink" type="button">Valider la phrase / Check</button>
      </div>
    `;

    const dropzone = document.getElementById("order-dropzone");
    const bank = document.getElementById("order-bank");
    const checkBtn = document.getElementById("btn-check-order");

    function renderChips() {
      dropzone.innerHTML = "";
      bank.innerHTML = "";

      if (chosenIds.length === 0) {
        dropzone.innerHTML = `<span style="color:var(--ink-muted);font-size:0.88rem;">Ta phrase apparaîtra ici / Your sentence will appear here...</span>`;
      } else {
        chosenIds.forEach(id => {
          const tok = allTokens.find(t => t.id === id);
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "word-chip in-zone";
          chip.textContent = tok.word;
          chip.onclick = () => {
            if (session.answered) return;
            tok.picked = false;
            const idx = chosenIds.indexOf(id);
            if (idx >= 0) chosenIds.splice(idx, 1);
            renderChips();
          };
          dropzone.appendChild(chip);
        });
      }

      allTokens.forEach(tok => {
        if (tok.picked) return;
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "word-chip";
        chip.textContent = tok.word;
        chip.onclick = () => {
          if (session.answered) return;
          tok.picked = true;
          chosenIds.push(tok.id);
          renderChips();
        };
        bank.appendChild(chip);
      });
    }

    renderChips();

    checkBtn.onclick = () => {
      if (session.answered || chosenIds.length === 0) return;
      const built = chosenIds.map(id => allTokens.find(t => t.id === id).word).join(" ");
      const target = q.words.join(" ");
      checkBtn.disabled = true;
      finalizeAnswer(q, built === target, built);
    };
  }

  // ==================== 6. INLINE DROPDOWN ENGINE ====================
  function mountDropdown(q, zone) {
    const parts = q.templateFr.split(/\{(\d+)\}/g);
    let html = "";
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        html += escapeHtml(parts[i]);
      } else {
        const bIdx = parseInt(parts[i], 10);
        const blank = q.blanks[bIdx];
        const opts = shuffle(blank.options);
        html += `<select class="inline-select" data-blank-idx="${bIdx}">
          <option value="">Choisir (${opts.length} choix)...</option>
          ${opts.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("")}
        </select><span id="dd-fix-${bIdx}"></span>`;
      }
    }

    zone.innerHTML = `
      <div>
        <div style="font-size:0.82rem;font-weight:700;color:var(--ink-muted);margin-bottom:8px;">
          Ouvre chaque menu déroulant et choisis la bonne réponse / Open each dropdown and select the right word :
        </div>
        <div class="dropdown-passage">${html}</div>
        <div id="dd-warning" style="color:var(--red-pen);font-size:0.84rem;font-weight:700;margin-bottom:8px;"></div>
        <button id="btn-check-dropdown" class="btn btn-ink" type="button">
          Valider mes choix / Check Dropdowns
        </button>
      </div>
    `;

    const selects = Array.from(zone.querySelectorAll(".inline-select"));
    const checkBtn = document.getElementById("btn-check-dropdown");
    const warnEl = document.getElementById("dd-warning");

    checkBtn.onclick = () => {
      if (session.answered) return;
      const missing = selects.some(s => !s.value);
      if (missing) {
        warnEl.textContent =
          "Choisis une réponse dans chaque liste déroulante avant de valider / Please select an option in every dropdown.";
        selects.forEach(s => {
          if (!s.value) s.style.borderColor = "#C43E32";
        });
        return;
      }
      warnEl.textContent = "";
      checkBtn.disabled = true;

      let allRight = true;
      const chosenList = [];

      selects.forEach(s => {
        const bIdx = parseInt(s.getAttribute("data-blank-idx"), 10);
        const target = q.blanks[bIdx].answer;
        const val = s.value;
        chosenList.push(val);
        s.disabled = true;
        s.style.borderColor = "";
        if (val === target) {
          s.classList.add("correct");
        } else {
          allRight = false;
          s.classList.add("wrong");
          const fixSpan = document.getElementById(`dd-fix-${bIdx}`);
          if (fixSpan) {
            fixSpan.innerHTML = `<span class="dropdown-fix-chip">&rarr; ${escapeHtml(target)}</span>`;
          }
        }
      });

      finalizeAnswer(q, allRight, chosenList.join(" / "));
    };
  }

  // ==================== FEEDBACK & SCORE CALCULATION ====================
  function finalizeAnswer(q, isCorrect, userAnswer, extraNote) {
    session.answered = true;
    const correctDisplay =
      q.type === "order"
        ? q.words.join(" ")
        : q.type === "match"
        ? q.pairs.map(p => `${p.fr} = ${p.en}`).join(" • ")
        : q.type === "dropdown"
        ? q.blanks.map(b => b.answer).join(" / ")
        : q.answer;

    if (isCorrect) {
      session.correctCount++;
      session.streak++;
      if (session.streak > session.maxSessionStreak) {
        session.maxSessionStreak = session.streak;
      }
      if (session.streak > profile.bestStreak) {
        profile.bestStreak = session.streak;
      }
      const streakBonus = session.streak >= 3 ? 5 : 0;
      const gained = 10 + streakBonus;
      session.points += gained;
      profile.xp += gained;
    } else {
      session.streak = 0;
    }

    saveProfile();
    session.history.push({
      q,
      isCorrect,
      userAnswer,
      correctDisplay
    });

    const fb = document.getElementById("feedback-zone");
    const isLast = session.index + 1 >= session.questions.length;

    fb.innerHTML = `
      <div class="feedback-banner ${isCorrect ? "ok" : "ko"}">
        <div style="flex:1;min-width:240px;">
          <div class="feedback-title">
            ${
              isCorrect
                ? `Bonne réponse / Correct ! ${session.streak >= 3 ? `(Série x${session.streak} : +15 pts)` : "(+10 pts)"}`
                : `Pas tout à fait — Réponse attendue : « ${escapeHtml(correctDisplay)} »`
            }
          </div>
          ${extraNote ? `<div style="font-size:0.85rem;font-weight:700;color:var(--green-board);margin-bottom:4px;">${escapeHtml(extraNote)}</div>` : ""}
          <div class="feedback-explain-fr"><span class="lang-tag lang-fr">FR</span>${escapeHtml(q.explainFr)}</div>
          <div class="feedback-explain-en"><span class="lang-tag lang-en">EN</span>${escapeHtml(q.explainEn)}</div>
        </div>
        <button id="btn-next-question" class="btn ${isCorrect ? "btn-ink" : "btn-red"}" type="button">
          ${isLast ? "Voir le bilan final / Final Score &rarr;" : "Suivant / Next &rarr;"}
        </button>
      </div>
    `;

    const nextBtn = document.getElementById("btn-next-question");
    nextBtn.focus();
    nextBtn.onclick = () => {
      session.index++;
      renderCurrentQuestion();
    };
  }

  // ==================== FINAL SCORE SCREEN ====================
  function renderResultsScreen() {
    const total = session.questions.length;
    const right = session.correctCount;
    const pct = Math.round((right / total) * 100);

    profile.quizzesDone++;
    if (session.moduleId && window.MODULES.some(m => m.id === session.moduleId)) {
      const prev = profile.bestModuleScores[session.moduleId] || 0;
      if (pct > prev) profile.bestModuleScores[session.moduleId] = pct;
    }
    saveProfile();

    let stars = "★ ☆ ☆";
    let msgFr = "Bon début ! Relis la correction ci-dessous et réessaie, ça va vite rentrer.";
    let msgEn = "Good start! Check the review below and try again — every mistake helps you learn.";
    if (pct === 100) {
      stars = "★ ★ ★";
      msgFr = "Sans-faute ! Tu maîtrises parfaitement cette série.";
      msgEn = "100% Perfect Score! You nailed every single question.";
    } else if (pct >= 80) {
      stars = "★ ★ ★";
      msgFr = "Très beau travail ! Tu es vraiment à l'aise sur ce chapitre.";
      msgEn = "Great work! You have a strong grasp of this topic.";
    } else if (pct >= 60) {
      stars = "★ ★ ☆";
      msgFr = "Bien joué ! Encore un petit effort pour décrocher les 3 étoiles.";
      msgEn = "Well done! Just a little more practice to get all 3 stars.";
    }

    const wrongQuestions = session.history.filter(h => !h.isCorrect).map(h => h.q);
    const app = document.getElementById("app");
    const studentTag = profile.name ? ` de ${escapeHtml(profile.name)}` : "";

    app.innerHTML = `
      <div class="results-card">
        <div class="results-top">
          <div class="results-trophy">${window.getIllustration("trophy")}</div>
          <div class="stars-display">${stars}</div>
          <h1 class="results-title-fr">Score final${studentTag} : ${right} / ${total} (${pct}%)</h1>
          <p class="results-title-en">
            ${escapeHtml(msgFr)}<br/>
            <span style="color:var(--ink-muted);">${escapeHtml(msgEn)}</span>
          </p>
        </div>

        <div class="score-kpis">
          <div class="kpi-box">
            <div class="kpi-val">${right} / ${total}</div>
            <div class="kpi-lbl">Bonnes réponses / Correct</div>
          </div>
          <div class="kpi-box">
            <div class="kpi-val">+${session.points} pts</div>
            <div class="kpi-lbl">Points gagnés / Earned</div>
          </div>
          <div class="kpi-box">
            <div class="kpi-val">${session.maxSessionStreak}</div>
            <div class="kpi-lbl">Meilleure série / Best Streak</div>
          </div>
        </div>

        <div class="results-actions">
          ${
            wrongQuestions.length > 0
              ? `<button class="btn btn-red" id="btn-retry-mistakes">
                  Rejouer mes ${wrongQuestions.length} erreur(s) / Retry Mistakes
                </button>`
              : ""
          }
          <button class="btn btn-ink" id="btn-play-again">
            Refaire une série / Play Again
          </button>
          <button class="btn btn-outline" onclick="renderHome()">
            Retour aux chapitres / All Topics
          </button>
        </div>

        <div class="review-list">
          <h3 style="margin-bottom:14px;font-size:1.18rem;">
            Correction détaillée / Detailed Review
          </h3>
          ${session.history
            .map(
              (item, i) => `
            <div class="review-item ${item.isCorrect ? "rev-ok" : "rev-ko"}">
              <div style="flex:1;">
                <div style="font-weight:800;font-size:0.95rem;margin-bottom:3px;color:var(--ink);">
                  ${item.isCorrect ? "✓" : "✕"} Q${i + 1}. ${escapeHtml(
                item.q.questionFr ||
                  (item.q.templateFr ? item.q.templateFr.replace(/\{\d+\}/g, "___") : "") ||
                  item.q.lineAFr ||
                  item.q.promptFr
              )}
                </div>
                <div style="font-size:0.84rem;color:var(--ink-muted);margin-bottom:6px;">
                  <span class="lang-tag lang-en">EN</span>${escapeHtml(item.q.questionEn || item.q.lineAEn || item.q.promptEn)}
                </div>
                ${
                  !item.isCorrect
                    ? `<div style="font-size:0.86rem;color:var(--red-pen);font-weight:700;">
                        Ta réponse : « ${escapeHtml(item.userAnswer)} » &rarr;
                        <span style="color:var(--green-board);">Bonne réponse : « ${escapeHtml(item.correctDisplay)} »</span>
                      </div>`
                    : `<div style="font-size:0.85rem;color:var(--green-board);font-weight:700;">
                        Réponse : « ${escapeHtml(item.correctDisplay)} »
                      </div>`
                }
                <div style="font-size:0.82rem;color:var(--ink-soft);margin-top:4px;">
                  ${escapeHtml(item.q.explainEn)}
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    const retryBtn = document.getElementById("btn-retry-mistakes");
    if (retryBtn) {
      retryBtn.onclick = () =>
        window.startQuiz(
          session.moduleId,
          wrongQuestions,
          "Révision de mes erreurs",
          "Mistake Review"
        );
    }

    const againBtn = document.getElementById("btn-play-again");
    if (againBtn) {
      const prevMode = session.moduleId || "mix";
      againBtn.onclick = () => window.startQuiz(prevMode);
    }

    if (pct >= 60) launchConfetti();
  }

  // ==================== VERB & GRAMMAR CHEAT SHEET MODAL ====================
  window.openMemoModal = function () {
    const modal = document.getElementById("memo-modal");
    modal.classList.remove("hidden");
    renderMemoModalContent();
  };

  window.closeMemoModal = function () {
    document.getElementById("memo-modal").classList.add("hidden");
  };

  window.switchMemoTab = function (tab) {
    activeMemoTab = tab;
    memoSearchQuery = "";
    renderMemoModalContent();
  };

  window.selectVerbMemo = function (verbId) {
    activeVerbId = verbId;
    renderMemoModalContent();
  };

  function renderMemoModalContent() {
    const tabsEl = document.getElementById("memo-tabs");
    const bodyEl = document.getElementById("memo-body");
    const verbCount = window.VERB_TABLES.length;
    const nounCount = window.NOUN_BANK ? window.NOUN_BANK.length : 0;

    tabsEl.innerHTML = `
      <button class="btn ${activeMemoTab === "verbs" ? "btn-ink" : "btn-outline"}"
        onclick="switchMemoTab('verbs')">
        ${verbCount} Verbes / Verb Tables
      </button>
      <button class="btn ${activeMemoTab === "nouns" ? "btn-ink" : "btn-outline"}"
        onclick="switchMemoTab('nouns')">
        ${nounCount} Noms &amp; Mots (CP &rarr; Collège)
      </button>
      <button class="btn ${activeMemoTab === "grammar" ? "btn-ink" : "btn-outline"}"
        onclick="switchMemoTab('grammar')">
        Règles &amp; Bases CP / Grammar Guide
      </button>
    `;

    if (activeMemoTab === "verbs") {
      const q = memoSearchQuery.trim().toLowerCase();
      const filteredVerbs = q
        ? window.VERB_TABLES.filter(
            v =>
              v.infinitive.toLowerCase().includes(q) ||
              v.meaningEn.toLowerCase().includes(q)
          )
        : window.VERB_TABLES;
      const verb =
        filteredVerbs.find(v => v.id === activeVerbId) ||
        filteredVerbs[0] ||
        window.VERB_TABLES[0];

      bodyEl.innerHTML = `
        <div style="margin-bottom:12px;">
          <input id="memo-search-input" class="answer-input" style="width:100%;padding:9px 13px;font-size:0.9rem;"
            type="text" placeholder="Rechercher un verbe (ex: lire, to eat, savoir, ouvrir)..."
            value="${escapeHtml(memoSearchQuery)}" />
        </div>
        <div class="verb-pills">
          ${filteredVerbs
            .map(
              v => `
            <button class="verb-pill ${v.id === verb.id ? "active" : ""}"
              onclick="selectVerbMemo('${v.id}')">
              ${escapeHtml(v.infinitive)} (${escapeHtml(v.meaningEn)})
            </button>
          `
            )
            .join("")}
        </div>

        <div style="background:var(--paper);border:1.5px solid var(--border-strong);border-left:4px solid var(--red-pen);border-radius:10px;padding:16px;margin-bottom:14px;">
          <div>
            <h3 style="font-size:1.35rem;color:var(--ink);">
              ${escapeHtml(verb.infinitive)} &mdash; <span style="color:var(--red-pen);">${escapeHtml(verb.meaningEn)}</span>
            </h3>
            <div style="font-size:0.82rem;color:var(--ink-muted);font-weight:600;">${escapeHtml(verb.group)}</div>
          </div>
          <p style="margin-top:10px;font-size:0.88rem;"><span class="lang-tag lang-fr">FR</span>${escapeHtml(verb.tipFr)}</p>
          <p style="font-size:0.85rem;color:var(--ink-soft);margin-top:4px;"><span class="lang-tag lang-en">EN</span>${escapeHtml(verb.tipEn)}</p>
        </div>

        <table class="conj-table">
          <thead>
            <tr>
              <th>Français</th>
              <th>English</th>
              <th>Exemple / Example</th>
            </tr>
          </thead>
          <tbody>
            ${verb.forms
              .map(
                f => `
              <tr>
                <td><span class="conj-highlight">${escapeHtml(f.fullFr)}</span></td>
                <td>${escapeHtml(f.en)}</td>
                <td>
                  <strong>${escapeHtml(f.exFr)}</strong>
                  <div style="font-size:0.8rem;color:var(--ink-muted);">${escapeHtml(f.exEn)}</div>
                </td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      `;

      const searchInput = document.getElementById("memo-search-input");
      if (searchInput) {
        searchInput.addEventListener("input", e => {
          memoSearchQuery = e.target.value;
          renderMemoModalContent();
          const el = document.getElementById("memo-search-input");
          if (el) {
            el.focus();
            el.setSelectionRange(el.value.length, el.value.length);
          }
        });
      }
    } else if (activeMemoTab === "nouns") {
      const q = memoSearchQuery.trim().toLowerCase();
      const nouns = (window.NOUN_BANK || []).filter(
        n =>
          !q ||
          n.word.toLowerCase().includes(q) ||
          n.en.toLowerCase().includes(q) ||
          n.cat.toLowerCase().includes(q)
      );

      bodyEl.innerHTML = `
        <div style="margin-bottom:14px;">
          <input id="memo-search-input" class="answer-input" style="width:100%;padding:9px 13px;font-size:0.9rem;"
            type="text" placeholder="Rechercher un nom (ex: chat, apple, école, eye, maison)..."
            value="${escapeHtml(memoSearchQuery)}" />
        </div>
        <table class="conj-table">
          <thead>
            <tr>
              <th>Thème</th>
              <th>Singulier (FR)</th>
              <th>Pluriel (FR)</th>
              <th>English (EN)</th>
            </tr>
          </thead>
          <tbody>
            ${nouns
              .map(n => {
                const sing = n.art === "l'" ? `l'${n.word}` : `${n.art} ${n.word}`;
                return `
                  <tr>
                    <td style="font-size:0.78rem;color:var(--ink-muted);font-weight:700;">${escapeHtml(n.cat)}</td>
                    <td><span class="conj-highlight">${escapeHtml(sing)}</span></td>
                    <td style="font-weight:600;">${escapeHtml(n.plural)}</td>
                    <td>${escapeHtml(n.en)}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      `;

      const searchInput = document.getElementById("memo-search-input");
      if (searchInput) {
        searchInput.addEventListener("input", e => {
          memoSearchQuery = e.target.value;
          renderMemoModalContent();
          const el = document.getElementById("memo-search-input");
          if (el) {
            el.focus();
            el.setSelectionRange(el.value.length, el.value.length);
          }
        });
      }
    } else {
      bodyEl.innerHTML = window.GRAMMAR_TIPS.map(
        card => `
        <div style="border:1.5px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;background:var(--paper);">
          <h3 style="font-size:1.12rem;color:var(--ink);margin-bottom:2px;">
            ${escapeHtml(card.titleFr)}
          </h3>
          <div style="font-size:0.88rem;font-weight:600;color:var(--red-pen);margin-bottom:10px;">
            ${escapeHtml(card.titleEn)}
          </div>
          <table class="conj-table" style="margin-top:4px;background:var(--surface);">
            <tbody>
              ${card.rows
                .map(
                  r => `
                <tr>
                  <td style="width:36%;font-weight:700;color:var(--ink);">${escapeHtml(r[0])}</td>
                  <td>${escapeHtml(r[1])}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `
      ).join("");
    }
  }

  // ==================== SUBTLE CONFETTI CELEBRATION ====================
  function launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#1B2A4A", "#C43E32", "#245B49", "#B67B1F", "#D9A441"];
    const pieces = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 180,
      size: 6 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: -1.8 + Math.random() * 3.6,
      vy: 2.2 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vrot: -0.09 + Math.random() * 0.18
    }));

    let frame = 0;
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
        ctx.restore();
      });
      frame++;
      if (frame < 140) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(tick);
  }

  // ==================== INIT ====================
  document.addEventListener("DOMContentLoaded", () => {
    const modalBackdrop = document.getElementById("memo-modal");
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", e => {
        if (e.target === modalBackdrop) window.closeMemoModal();
      });
    }

    window.renderHome();
  });
})();
