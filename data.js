// Comprehensive Bilingual French-English Exercise & Grammar Database
// Designed for Collège students (11-15 yrs) — 100% side-by-side FR 🇫🇷 + EN 🇬🇧

window.VERB_TABLES = [
  {
    id: "etre",
    infinitive: "être",
    meaningEn: "to be",
    group: "Verbe essentiel (irrégulier) / Essential irregular verb",
    illustration: "etre",
    tipFr: "Astuce : « Être » sert à se décrire (Je suis anglais, Il est grand) et pour certains verbes au passé.",
    tipEn: "Tip: 'Être' is used to describe yourself (Je suis anglais = I am English) and with motion verbs in the past.",
    forms: [
      { proFr: "je", verb: "suis", fullFr: "je suis", en: "I am", exFr: "Je suis au collège.", exEn: "I am in secondary school." },
      { proFr: "tu", verb: "es", fullFr: "tu es", en: "you are (1 friend)", exFr: "Tu es mon ami.", exEn: "You are my friend." },
      { proFr: "il / elle / on", verb: "est", fullFr: "il est / elle est", en: "he / she / one is (we are)", exFr: "Elle est sympa.", exEn: "She is nice." },
      { proFr: "nous", verb: "sommes", fullFr: "nous sommes", en: "we are", exFr: "Nous sommes en classe.", exEn: "We are in class." },
      { proFr: "vous", verb: "êtes", fullFr: "vous êtes", en: "you are (plural / polite)", exFr: "Vous êtes prêts ?", exEn: "Are you ready?" },
      { proFr: "ils / elles", verb: "sont", fullFr: "ils sont / elles sont", en: "they are", exFr: "Ils sont contents.", exEn: "They are happy." }
    ]
  },
  {
    id: "avoir",
    infinitive: "avoir",
    meaningEn: "to have",
    group: "Verbe essentiel (irrégulier) / Essential irregular verb",
    illustration: "avoir",
    tipFr: "Piège classique : en français, on utilise AVOIR pour l'âge, la faim et la soif ! (J'ai 13 ans, j'ai faim).",
    tipEn: "Watch out! French uses AVOIR (to have) for age, hunger & thirst: 'J'ai 13 ans' (I am 13), 'J'ai faim' (I am hungry).",
    forms: [
      { proFr: "j'", verb: "ai", fullFr: "j'ai", en: "I have", exFr: "J'ai treize ans.", exEn: "I am thirteen years old." },
      { proFr: "tu", verb: "as", fullFr: "tu as", en: "you have", exFr: "Tu as un stylo ?", exEn: "Do you have a pen?" },
      { proFr: "il / elle / on", verb: "a", fullFr: "il a / elle a", en: "he / she has (we have)", exFr: "On a cours d'anglais.", exEn: "We have English class." },
      { proFr: "nous", verb: "avons", fullFr: "nous avons", en: "we have", exFr: "Nous avons un chien.", exEn: "We have a dog." },
      { proFr: "vous", verb: "avez", fullFr: "vous avez", en: "you have (plural / polite)", exFr: "Vous avez faim ?", exEn: "Are you hungry?" },
      { proFr: "ils / elles", verb: "ont", fullFr: "ils ont / elles ont", en: "they have", exFr: "Ils ont des cahiers.", exEn: "They have notebooks." }
    ]
  },
  {
    id: "aller",
    infinitive: "aller",
    meaningEn: "to go",
    group: "Verbe essentiel (irrégulier) / Essential irregular verb",
    illustration: "aller",
    tipFr: "Super utile : « Aller + verbe » permet aussi de parler du futur ! (Je vais jouer = I am going to play).",
    tipEn: "Super useful: 'Aller + infinitive' builds the near future, just like English! (Je vais jouer = I'm going to play).",
    forms: [
      { proFr: "je", verb: "vais", fullFr: "je vais", en: "I go / I am going", exFr: "Je vais au collège.", exEn: "I go to school." },
      { proFr: "tu", verb: "vas", fullFr: "tu vas", en: "you go", exFr: "Comment tu vas ?", exEn: "How are you doing?" },
      { proFr: "il / elle / on", verb: "va", fullFr: "il va / on va", en: "he / she goes (we go)", exFr: "On va à la cantine.", exEn: "We're going to the cafeteria." },
      { proFr: "nous", verb: "allons", fullFr: "nous allons", en: "we go", exFr: "Nous allons au parc.", exEn: "We are going to the park." },
      { proFr: "vous", verb: "allez", fullFr: "vous allez", en: "you go", exFr: "Vous allez bien ?", exEn: "Are you doing well?" },
      { proFr: "ils / elles", verb: "vont", fullFr: "ils vont / elles vont", en: "they go", exFr: "Elles vont en ville.", exEn: "They are going to town." }
    ]
  },
  {
    id: "faire",
    infinitive: "faire",
    meaningEn: "to do / to make",
    group: "Verbe essentiel (irrégulier) / Essential irregular verb",
    illustration: "faire",
    tipFr: "Attention à « vous faites » (pas faisez !) et « ils font ». On l'utilise aussi pour le sport et la météo (Il fait beau).",
    tipEn: "Watch 'vous faites' and 'ils font'! Also used for sports (faire du foot) and weather (Il fait beau = It's sunny).",
    forms: [
      { proFr: "je", verb: "fais", fullFr: "je fais", en: "I do / make", exFr: "Je fais mes devoirs.", exEn: "I do my homework." },
      { proFr: "tu", verb: "fais", fullFr: "tu fais", en: "you do / make", exFr: "Tu fais du sport ?", exEn: "Do you play sports?" },
      { proFr: "il / elle / on", verb: "fait", fullFr: "il fait / elle fait", en: "he / she does", exFr: "Il fait beau aujourd'hui.", exEn: "The weather is nice today." },
      { proFr: "nous", verb: "faisons", fullFr: "nous faisons", en: "we do / make", exFr: "Nous faisons un gâteau.", exEn: "We are making a cake." },
      { proFr: "vous", verb: "faites", fullFr: "vous faites", en: "you do / make", exFr: "Qu'est-ce que vous faites ?", exEn: "What are you doing?" },
      { proFr: "ils / elles", verb: "font", fullFr: "ils font / elles font", en: "they do / make", exFr: "Ils font du vélo.", exEn: "They ride bikes." }
    ]
  },
  {
    id: "parler",
    infinitive: "parler",
    meaningEn: "to speak / talk",
    group: "1er groupe (-ER régulier) / Regular -ER verb",
    illustration: "parler",
    tipFr: "Bonne nouvelle : 80% des verbes français suivent ce modèle ! Terminaisons : -e, -es, -e, -ons, -ez, -ent.",
    tipEn: "Great news: 80% of French verbs follow this pattern! Endings: -e, -es, -e, -ons, -ez, -ent (and -e/-es/-ent are silent!).",
    forms: [
      { proFr: "je", verb: "parle", fullFr: "je parle", en: "I speak", exFr: "Je parle anglais et un peu français.", exEn: "I speak English and a bit of French." },
      { proFr: "tu", verb: "parles", fullFr: "tu parles", en: "you speak", exFr: "Tu parles très bien !", exEn: "You speak very well!" },
      { proFr: "il / elle / on", verb: "parle", fullFr: "il parle / elle parle", en: "he / she speaks", exFr: "Elle parle avec le prof.", exEn: "She is talking with the teacher." },
      { proFr: "nous", verb: "parlons", fullFr: "nous parlons", en: "we speak", exFr: "Nous parlons ensemble.", exEn: "We talk together." },
      { proFr: "vous", verb: "parlez", fullFr: "vous parlez", en: "you speak", exFr: "Vous parlez anglais ?", exEn: "Do you speak English?" },
      { proFr: "ils / elles", verb: "parlent", fullFr: "ils parlent / elles parlent", en: "they speak", exFr: "Ils parlent dans la cour.", exEn: "They are talking in the schoolyard." }
    ]
  },
  {
    id: "manger",
    infinitive: "manger",
    meaningEn: "to eat",
    group: "1er groupe (-GER) / -ER verb with 'nous' spelling rule",
    illustration: "manger",
    tipFr: "Petit secret : avec « nous », on garde le E → « nous mangeons » pour garder le son doux [j] !",
    tipEn: "Small trick: with 'nous', keep the E → 'nous mangeons' so the G stays soft (like 'measure', not 'mango')!",
    forms: [
      { proFr: "je", verb: "mange", fullFr: "je mange", en: "I eat", exFr: "Je mange un croissant.", exEn: "I am eating a croissant." },
      { proFr: "tu", verb: "manges", fullFr: "tu manges", en: "you eat", exFr: "Tu manges à la cantine ?", exEn: "Do you eat at the cafeteria?" },
      { proFr: "il / elle / on", verb: "mange", fullFr: "il mange / on mange", en: "he / she eats (we eat)", exFr: "On mange à midi.", exEn: "We eat at noon." },
      { proFr: "nous", verb: "mangeons", fullFr: "nous mangeons", en: "we eat", exFr: "Nous mangeons une pomme.", exEn: "We are eating an apple." },
      { proFr: "vous", verb: "mangez", fullFr: "vous mangez", en: "you eat", exFr: "Vous mangez du fromage.", exEn: "You eat cheese." },
      { proFr: "ils / elles", verb: "mangent", fullFr: "ils mangent", en: "they eat", exFr: "Elles mangent ensemble.", exEn: "They eat together." }
    ]
  },
  {
    id: "jouer",
    infinitive: "jouer",
    meaningEn: "to play",
    group: "1er groupe (-ER régulier) / Regular -ER verb",
    illustration: "jouer",
    tipFr: "Jouer À un sport / jeu (jouer au foot, aux jeux vidéo) • Jouer D'un instrument (jouer de la guitare).",
    tipEn: "Use 'jouer à / au' for sports & games (jouer au foot) and 'jouer de' for musical instruments!",
    forms: [
      { proFr: "je", verb: "joue", fullFr: "je joue", en: "I play", exFr: "Je joue au foot.", exEn: "I play football." },
      { proFr: "tu", verb: "joues", fullFr: "tu joues", en: "you play", exFr: "Tu joues aux jeux vidéo ?", exEn: "Do you play video games?" },
      { proFr: "il / elle / on", verb: "joue", fullFr: "il joue / elle joue", en: "he / she plays", exFr: "Il joue avec nous.", exEn: "He plays with us." },
      { proFr: "nous", verb: "jouons", fullFr: "nous jouons", en: "we play", exFr: "Nous jouons dans la cour.", exEn: "We play in the schoolyard." },
      { proFr: "vous", verb: "jouez", fullFr: "vous jouez", en: "you play", exFr: "Vous jouez bien !", exEn: "You play well!" },
      { proFr: "ils / elles", verb: "jouent", fullFr: "ils jouent", en: "they play", exFr: "Ils jouent au basket.", exEn: "They play basketball." }
    ]
  },
  {
    id: "ecouter",
    infinitive: "écouter",
    meaningEn: "to listen (to)",
    group: "1er groupe (-ER + voyelle -> J') / Regular -ER verb",
    illustration: "ecouter",
    tipFr: "Devant une voyelle (é), « je » devient « j' » : J'écoute de la musique ! (Pas besoin de 'to' en français).",
    tipEn: "Before a vowel, 'je' becomes 'j'': J'écoute ! Also, 'écouter' already means 'listen TO' (no extra preposition).",
    forms: [
      { proFr: "j'", verb: "écoute", fullFr: "j'écoute", en: "I listen (to)", exFr: "J'écoute de la musique.", exEn: "I listen to music." },
      { proFr: "tu", verb: "écoutes", fullFr: "tu écoutes", en: "you listen", exFr: "Tu écoutes la chanson ?", exEn: "Are you listening to the song?" },
      { proFr: "il / elle / on", verb: "écoute", fullFr: "il écoute", en: "he / she listens", exFr: "Elle écoute le professeur.", exEn: "She listens to the teacher." },
      { proFr: "nous", verb: "écoutons", fullFr: "nous écoutons", en: "we listen", exFr: "Nous écoutons en classe.", exEn: "We listen in class." },
      { proFr: "vous", verb: "écoutez", fullFr: "vous écoutez", en: "you listen", exFr: "Écoutez bien !", exEn: "Listen carefully!" },
      { proFr: "ils / elles", verb: "écoutent", fullFr: "ils écoutent", en: "they listen", exFr: "Ils écoutent un podcast.", exEn: "They listen to a podcast." }
    ]
  },
  {
    id: "finir",
    infinitive: "finir",
    meaningEn: "to finish",
    group: "2e groupe (-IR régulier) / Regular -IR verb (-issons)",
    illustration: "ecrire",
    tipFr: "Modèle du 2e groupe (finir, choisir, réussir) : -is, -is, -it, -issons, -issez, -issent.",
    tipEn: "2nd group pattern (finir, choisir = choose, réussir = succeed): -is, -is, -it, -issons, -issez, -issent.",
    forms: [
      { proFr: "je", verb: "finis", fullFr: "je finis", en: "I finish", exFr: "Je finis mon exercice.", exEn: "I finish my exercise." },
      { proFr: "tu", verb: "finis", fullFr: "tu finis", en: "you finish", exFr: "Tu finis à quelle heure ?", exEn: "What time do you finish?" },
      { proFr: "il / elle / on", verb: "finit", fullFr: "il finit", en: "he / she finishes", exFr: "Le cours finit à 16h.", exEn: "Class finishes at 4 PM." },
      { proFr: "nous", verb: "finissons", fullFr: "nous finissons", en: "we finish", exFr: "Nous finissons ensemble.", exEn: "We finish together." },
      { proFr: "vous", verb: "finissez", fullFr: "vous finissez", en: "you finish", exFr: "Vous finissez le dessin.", exEn: "You finish the drawing." },
      { proFr: "ils / elles", verb: "finissent", fullFr: "ils finissent", en: "they finish", exFr: "Ils finissent leurs devoirs.", exEn: "They finish their homework." }
    ]
  },
  {
    id: "prendre",
    infinitive: "prendre",
    meaningEn: "to take / to have (food/transport)",
    group: "3e groupe (-DRE) / Useful irregular verb",
    illustration: "cantine",
    tipFr: "Très utilisé pour les transports (prendre le bus) et les repas ! Comprendre et apprendre se conjuguent pareil.",
    tipEn: "Used for transport (prendre le bus) and ordering food! 'Comprendre' (understand) & 'apprendre' (learn) match it.",
    forms: [
      { proFr: "je", verb: "prends", fullFr: "je prends", en: "I take", exFr: "Je prends le bus.", exEn: "I take the bus." },
      { proFr: "tu", verb: "prends", fullFr: "tu prends", en: "you take", exFr: "Tu prends un dessert ?", exEn: "Are you having dessert?" },
      { proFr: "il / elle / on", verb: "prend", fullFr: "il prend", en: "he / she takes", exFr: "Il prend son sac.", exEn: "He takes his bag." },
      { proFr: "nous", verb: "prenons", fullFr: "nous prenons", en: "we take", exFr: "Nous prenons nos cahiers.", exEn: "We take our notebooks." },
      { proFr: "vous", verb: "prenez", fullFr: "vous prenez", en: "you take", exFr: "Vous prenez le train ?", exEn: "Do you take the train?" },
      { proFr: "ils / elles", verb: "prennent", fullFr: "ils prennent", en: "they take", exFr: "Ils prennent le déjeuner.", exEn: "They have lunch." }
    ]
  },
  {
    id: "pouvoir",
    infinitive: "pouvoir",
    meaningEn: "can / to be able to",
    group: "3e groupe (verbe modal) / Modal verb",
    illustration: "classe",
    tipFr: "Indispensable en classe : « Est-ce que je peux... ? » = Can I / May I... ?",
    tipEn: "Essential in class: 'Je peux répéter ?' / 'Vous pouvez m'aider ?' (Can you help me?).",
    forms: [
      { proFr: "je", verb: "peux", fullFr: "je peux", en: "I can", exFr: "Je peux aller au tableau ?", exEn: "Can I go to the board?" },
      { proFr: "tu", verb: "peux", fullFr: "tu peux", en: "you can", exFr: "Tu peux m'aider ?", exEn: "Can you help me?" },
      { proFr: "il / elle / on", verb: "peut", fullFr: "il peut", en: "he / she can", exFr: "On peut travailler à deux.", exEn: "We can work in pairs." },
      { proFr: "nous", verb: "pouvons", fullFr: "nous pouvons", en: "we can", exFr: "Nous pouvons commencer.", exEn: "We can start." },
      { proFr: "vous", verb: "pouvez", fullFr: "vous pouvez", en: "you can", exFr: "Vous pouvez répéter, s'il vous plaît ?", exEn: "Can you repeat, please?" },
      { proFr: "ils / elles", verb: "peuvent", fullFr: "ils peuvent", en: "they can", exFr: "Ils peuvent venir.", exEn: "They can come." }
    ]
  },
  {
    id: "vouloir",
    infinitive: "vouloir",
    meaningEn: "to want",
    group: "3e groupe (verbe modal) / Modal verb",
    illustration: "manger",
    tipFr: "Astuce politesse : « Je voudrais » = I would like (plus poli que « Je veux » !).",
    tipEn: "Politeness pro-tip: 'Je veux' = I want, while 'Je voudrais' = I would like!",
    forms: [
      { proFr: "je", verb: "veux", fullFr: "je veux", en: "I want", exFr: "Je veux apprendre le français.", exEn: "I want to learn French." },
      { proFr: "tu", verb: "veux", fullFr: "tu veux", en: "you want", exFr: "Tu veux jouer avec nous ?", exEn: "Do you want to play with us?" },
      { proFr: "il / elle / on", verb: "veut", fullFr: "il veut", en: "he / she wants", exFr: "Elle veut une pomme.", exEn: "She wants an apple." },
      { proFr: "nous", verb: "voulons", fullFr: "nous voulons", en: "we want", exFr: "Nous voulons gagner !", exEn: "We want to win!" },
      { proFr: "vous", verb: "voulez", fullFr: "vous voulez", en: "you want", exFr: "Vous voulez de l'eau ?", exEn: "Do you want some water?" },
      { proFr: "ils / elles", verb: "veulent", fullFr: "ils veulent", en: "they want", exFr: "Ils veulent réussir.", exEn: "They want to succeed." }
    ]
  }
];

window.GRAMMAR_TIPS = [
  {
    titleFr: "1. Les pronoms sujets",
    titleEn: "1. Subject Pronouns",
    rows: [
      ["Je / J' (devant a, e, i, o, u, h)", "I (J'ai = I have, J'écoute = I listen)"],
      ["Tu", "You (singular, friendly — classmates & friends)"],
      ["Il / Elle / On", "He / She / We (casual! 'On va à la cantine' = We're going to lunch)"],
      ["Nous", "We (more formal / written)"],
      ["Vous", "You (plural 'you all' OR polite to a teacher: 'Monsieur / Madame')"],
      ["Ils / Elles", "They ('Elles' = only girls/feminine; 'Ils' = boys or mixed group)"]
    ]
  },
  {
    titleFr: "2. Les verbes en -ER au présent",
    titleEn: "2. Regular -ER Verbs (Present)",
    rows: [
      ["Je parl-e", "Silent -e ! Sounds like 'parl'"],
      ["Tu parl-es", "Silent -es ! Sounds exact same: 'parl'"],
      ["Il / Elle / On parl-e", "Silent -e ! Sounds exact same: 'parl'"],
      ["Nous parl-ons", "Pronounced '-on' (nasal sound)"],
      ["Vous parl-ez", "Pronounced '-ay' (like 'parlay')"],
      ["Ils / Elles parl-ent", "TRAP! -ent is 100% SILENT! Sounds like 'parl' (never 'parlent'!)"]
    ]
  },
  {
    titleFr: "3. Masculin / Féminin & Adjectifs",
    titleEn: "3. Gender (Le / La) & Adjectives",
    rows: [
      ["LE / UN (masculin)", "le sac (the bag), un stylo (a pen), le chat (the cat)"],
      ["LA / UNE (féminin)", "la maison (the house), une pomme (an apple), la classe (the class)"],
      ["L' (devant voyelle)", "l'école (the school), l'ordinateur (the computer), l'ami (the friend)"],
      ["LES / DES (pluriel)", "les sacs (the bags), des amis (some friends)"],
      ["Accord de l'adjectif", "Add -e for feminine & -s for plural: un chat vert → une pomme verte"]
    ]
  },
  {
    titleFr: "4. Passé Composé & Futur Proche",
    titleEn: "4. Past & Near Future",
    rows: [
      ["Futur proche (Aller + infinitif)", "Je vais manger = I am going to eat • On va jouer = We're going to play"],
      ["Passé composé avec AVOIR", "J'ai mangé (I ate) • Tu as fini (You finished) • Il a parlé (He spoke)"],
      ["Passé composé avec ÊTRE (mouvement)", "Je suis allé(e) (I went) • Elle est venue (She came) • Ils sont partis"]
    ]
  }
];

// ============================================================================
// MODULES & HAND-CRAFTED BILINGUAL EXERCISES
// Types supported:
//  - "mcq"      : Multiple choice with illustration + audio
//  - "input"    : Type answer (with clickable French accent helper bar!)
//  - "match"    : Match 4 French items with 4 English items
//  - "order"    : Click word chips in order to build the French sentence
//  - "dialogue" : School mini-conversation bubble — choose best reply
// ============================================================================

window.MODULES = [
  {
    id: "essentiels",
    badge: "⭐ Module 1",
    color: "#2563EB",
    bgLight: "#EFF6FF",
    iconIllustration: "etre",
    titleFr: "Les 4 Verbes Rois : Être, Avoir, Aller, Faire",
    titleEn: "The 4 King Verbs: To Be, Have, Go, Do",
    descFr: "Les 4 verbes les plus utilisés tous les jours en France !",
    descEn: "The 4 most used verbs every single day in French!",
    questions: [
      {
        type: "mcq",
        illustration: "etre",
        promptFr: "Choisis la bonne forme du verbe ÊTRE :",
        promptEn: "Choose the right form of ÊTRE (to be):",
        questionFr: "Bonjour ! Je ___ un nouvel élève anglais.",
        questionEn: "Hello! I am a new English student.",
        audioText: "Bonjour ! Je suis un nouvel élève anglais.",
        options: ["suis", "es", "est", "sommes"],
        answer: "suis",
        explainFr: "Avec « Je », le verbe être devient « je suis ».",
        explainEn: "With 'Je' (I), être is always 'je suis' (I am)."
      },
      {
        type: "mcq",
        illustration: "avoir",
        promptFr: "Attention au piège de l'âge en français !",
        promptEn: "Watch out for how French says your age!",
        questionFr: "J'___ treize ans.",
        questionEn: "I am thirteen years old. (Literally: I have 13 years)",
        audioText: "J'ai treize ans.",
        options: ["ai", "suis", "as", "a"],
        answer: "ai",
        explainFr: "En français, on utilise AVOIR pour dire son âge : « J'ai 13 ans » (et jamais je suis 13 ans !).",
        explainEn: "In French, you 'HAVE' your years! So 'I am 13' = 'J'ai 13 ans'."
      },
      {
        type: "input",
        illustration: "aller",
        promptFr: "Écris le verbe ALLER au présent :",
        promptEn: "Type the verb ALLER (to go) in the present tense:",
        questionFr: "Nous ___ au collège ensemble. (aller)",
        questionEn: "We go to secondary school together.",
        audioText: "Nous allons au collège ensemble.",
        answer: "allons",
        hintFr: "Commence par all... avec la terminaison de « nous » (-ons)",
        hintEn: "Starts with 'all...' + the 'nous' ending (-ons)",
        explainFr: "Bravo ! « Nous allons » = We go / We are going.",
        explainEn: "Spot on! 'Nous allons' = We go / We are going."
      },
      {
        type: "match",
        illustration: "etre",
        promptFr: "Relie chaque forme de ÊTRE à son sens en anglais :",
        promptEn: "Match each form of ÊTRE with its English meaning:",
        audioText: "Je suis, tu es, nous sommes, ils sont.",
        pairs: [
          { fr: "Je suis", en: "I am" },
          { fr: "Tu es", en: "You are (1 friend)" },
          { fr: "Nous sommes", en: "We are" },
          { fr: "Ils sont", en: "They are" }
        ],
        explainFr: "Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
        explainEn: "Être: je suis (I am), tu es (you are), nous sommes (we are), ils sont (they are)."
      },
      {
        type: "mcq",
        illustration: "faire",
        promptFr: "Complète avec le verbe FAIRE :",
        promptEn: "Complete with the verb FAIRE (to do / play):",
        questionFr: "Est-ce que vous ___ du sport le mercredi ?",
        questionEn: "Do you play sports on Wednesdays?",
        audioText: "Est-ce que vous faites du sport le mercredi ?",
        options: ["faites", "faisez", "font", "faisons"],
        answer: "faites",
        explainFr: "Attention ! On dit « vous faites » (irrégulier, jamais « faisez »).",
        explainEn: "Careful! 'Vous faites' is irregular (never 'faisez'!)."
      },
      {
        type: "input",
        illustration: "avoir",
        promptFr: "Complète avec AVOIR au présent :",
        promptEn: "Complete with AVOIR (to have) in the present:",
        questionFr: "Tu ___ un stylo bleu, s'il te plaît ?",
        questionEn: "Do you have a blue pen, please?",
        audioText: "Tu as un stylo bleu, s'il te plaît ?",
        answer: "as",
        hintFr: "2 lettres seulement ! (avec tu)",
        hintEn: "Just 2 letters! (with 'tu', the S is silent)",
        explainFr: "Avec « tu », avoir s'écrit « tu as » (le s est muet).",
        explainEn: "With 'tu', avoir is 'tu as' (the final 's' is silent)."
      },
      {
        type: "mcq",
        illustration: "aller",
        promptFr: "Choisis la bonne conjugaison de ALLER :",
        promptEn: "Choose the right conjugation of ALLER (to go):",
        questionFr: "Mes amis ___ à la cantine à midi.",
        questionEn: "My friends go to the cafeteria at noon.",
        audioText: "Mes amis vont à la cantine à midi.",
        options: ["vont", "allent", "vas", "va"],
        answer: "vont",
        explainFr: "« Mes amis » = « ils ». Avec ils/elles, aller donne « ils vont » !",
        explainEn: "'Mes amis' = 'they' (ils). With ils/elles, aller becomes 'vont'!"
      },
      {
        type: "order",
        illustration: "soleil",
        promptFr: "Remets les mots dans l'ordre (expression météo avec FAIRE) :",
        promptEn: "Put the words in order (weather expression with FAIRE):",
        questionEn: "The weather is nice today.",
        audioText: "Il fait beau aujourd'hui.",
        words: ["Il", "fait", "beau", "aujourd'hui."],
        distractors: ["est", "a"],
        explainFr: "Pour la météo, le français utilise « Il fait » : Il fait beau, il fait froid, il fait chaud !",
        explainEn: "For weather, French says 'Il fait' (literally 'It makes'): Il fait beau = It's sunny/nice!"
      },
      {
        type: "match",
        illustration: "avoir",
        promptFr: "Expressions utiles avec AVOIR (et pas être !) :",
        promptEn: "Useful expressions that use AVOIR (not 'to be'!):",
        audioText: "J'ai faim, j'ai soif, j'ai froid, j'ai raison.",
        pairs: [
          { fr: "J'ai faim", en: "I am hungry" },
          { fr: "J'ai soif", en: "I am thirsty" },
          { fr: "J'ai froid", en: "I am cold" },
          { fr: "J'ai 14 ans", en: "I am 14 years old" }
        ],
        explainFr: "En français, on « a » faim, soif, chaud, froid et son âge !",
        explainEn: "Big French secret: hunger, thirst, cold, heat, and age all use AVOIR (to have)!"
      },
      {
        type: "input",
        illustration: "etre",
        promptFr: "Écris le verbe ÊTRE avec « vous » (n'oublie pas l'accent avec les boutons !) :",
        promptEn: "Type ÊTRE with 'vous' (use the accent buttons below if needed!):",
        questionFr: "Vous ___ très sympas !",
        questionEn: "You (all) are very nice!",
        audioText: "Vous êtes très sympas !",
        answer: "êtes",
        hintFr: "Commence par « ê... » (4 lettres)",
        hintEn: "Starts with 'ê...' (4 letters: ê-t-e-s)",
        explainFr: "Super ! « Vous êtes » prend un accent circonflexe sur le ê.",
        explainEn: "Awesome! 'Vous êtes' has the little roof accent (circonflexe) on ê."
      },
      {
        type: "mcq",
        illustration: "faire",
        promptFr: "Complète la phrase avec FAIRE :",
        promptEn: "Complete the sentence with FAIRE:",
        questionFr: "Le soir, mes sœurs ___ leurs devoirs.",
        questionEn: "In the evening, my sisters do their homework.",
        audioText: "Le soir, mes sœurs font leurs devoirs.",
        options: ["font", "fait", "faisons", "ont"],
        answer: "font",
        explainFr: "« Mes sœurs » = « elles » → « elles font » (ça rime avec ils sont, ils ont, ils vont !).",
        explainEn: "'Mes sœurs' = 'elles' → 'elles font'! Notice the 4 kings rhyme in 'ils': sont, ont, vont, font!"
      },
      {
        type: "mcq",
        illustration: "aller",
        promptFr: "Que veut dire « On va au cinéma » ?",
        promptEn: "Complete with ALLER for 'On' (casual 'we'):",
        questionFr: "Ce week-end, on ___ au cinéma !",
        questionEn: "This weekend, we are going to the cinema!",
        audioText: "Ce week-end, on va au cinéma !",
        options: ["va", "allons", "vas", "vont"],
        answer: "va",
        explainFr: "« On » veut dire « nous » à l'oral, MAIS il se conjugue toujours comme « il / elle » → On va !",
        explainEn: "'On' means 'we' in everyday French, BUT it always conjugates like 'il / elle' → On va!"
      },
      {
        type: "input",
        illustration: "avoir",
        promptFr: "Écris AVOIR avec « ils » :",
        promptEn: "Type AVOIR with 'ils' (they):",
        questionFr: "Ils ___ cours de mathématiques.",
        questionEn: "They have maths class.",
        audioText: "Ils ont cours de mathématiques.",
        answer: "ont",
        hintFr: "3 lettres (attention : pas « sont » qui est le verbe être !)",
        hintEn: "3 letters: o-n-t (don't confuse with 'sont' = are!)",
        explainFr: "Exact ! « Ils ont » = They have (alors que « Ils sont » = They are).",
        explainEn: "Exact! 'Ils ont' = They have (whereas 'Ils sont' = They are)."
      },
      {
        type: "order",
        illustration: "aller",
        promptFr: "Construis la question en français :",
        promptEn: "Build the everyday French greeting:",
        questionEn: "Hello, how are you doing?",
        audioText: "Salut, comment tu vas ?",
        words: ["Salut,", "comment", "tu", "vas", "?"],
        distractors: ["suis", "a"],
        explainFr: "En français, pour demander « How are you? », on utilise le verbe ALLER : « Comment ça va ? / Comment tu vas ? ».",
        explainEn: "In French, 'How are you?' literally uses ALLER (to go): 'Comment tu vas ?' (How's it going?)."
      },
      {
        type: "dropdown",
        illustration: "etre",
        promptFr: "Menus déroulants : choisis les 3 bonnes formes parmi toutes les propositions !",
        promptEn: "Dropdown menus: pick the 3 right verb forms from the long lists!",
        templateFr: "Salut ! Je {0} anglais, j'{1} treize ans et je {2} au collège en France.",
        questionEn: "Hi! I am English, I am 13 years old, and I go to secondary school in France.",
        audioText: "Salut ! Je suis anglais, j'ai treize ans et je vais au collège en France.",
        blanks: [
          {
            answer: "suis",
            options: ["suis", "es", "est", "sommes", "êtes", "sont", "ai", "vais", "fais"]
          },
          {
            answer: "ai",
            options: ["ai", "as", "a", "avons", "avez", "ont", "suis", "es", "vais"]
          },
          {
            answer: "vais",
            options: ["vais", "vas", "va", "allons", "allez", "vont", "suis", "fais", "ont"]
          }
        ],
        explainFr: "Combo parfait des 3 verbes rois : Je suis (être) • J'ai 13 ans (avoir) • Je vais (aller) !",
        explainEn: "Perfect combo of the 3 king verbs: Je suis (I am) • J'ai 13 ans (I'm 13) • Je vais (I go)!"
      },
      {
        type: "dropdown",
        illustration: "faire",
        promptFr: "Ouvre chaque liste déroulante et choisis la bonne conjugaison :",
        promptEn: "Open each dropdown menu and choose the right conjugation:",
        templateFr: "Le mercredi, nous {0} du sport et nos amis {1} de la musique.",
        questionEn: "On Wednesdays, we play sports and our friends play music.",
        audioText: "Le mercredi, nous faisons du sport et nos amis font de la musique.",
        blanks: [
          {
            answer: "faisons",
            options: ["fais", "fait", "faisons", "faites", "font", "faisez", "allons", "sommes", "avons"]
          },
          {
            answer: "font",
            options: ["font", "fais", "fait", "faisons", "faites", "vont", "sont", "ont", "faire"]
          }
        ],
        explainFr: "Avec « nous » → nous faisons • Avec « nos amis » (ils) → ils font !",
        explainEn: "With 'nous' → nous faisons • With 'nos amis' (they) → ils font!"
      }
    ]
  },

  {
    id: "conjugaison_present",
    badge: "🔥 Module 2",
    color: "#7C3AED",
    bgLight: "#F5F3FF",
    iconIllustration: "parler",
    titleFr: "Conjugaison au Présent (-ER, -IR & Verbes utiles)",
    titleEn: "Present Tense Conjugation (-ER, -IR & Useful Verbs)",
    descFr: "Parler, manger, jouer, écouter, finir, prendre, pouvoir, vouloir !",
    descEn: "Speak, eat, play, listen, finish, take, can & want!",
    questions: [
      {
        type: "mcq",
        illustration: "parler",
        promptFr: "Choisis la bonne terminaison des verbes en -ER :",
        promptEn: "Choose the right -ER verb ending:",
        questionFr: "Tu ___ anglais et français ! (parler)",
        questionEn: "You speak English and French!",
        audioText: "Tu parles anglais et français !",
        options: ["parles", "parle", "parlez", "parlons"],
        answer: "parles",
        explainFr: "Avec « tu », tous les verbes en -ER prennent « -es » (et le s ne se prononce pas !).",
        explainEn: "With 'tu', all -ER verbs end in '-es' (and the 's' is silent when spoken!)."
      },
      {
        type: "mcq",
        illustration: "manger",
        promptFr: "Attention à l'orthographe spéciale avec « nous » !",
        promptEn: "Watch the special spelling with 'nous'!",
        questionFr: "À midi, nous ___ à la cantine. (manger)",
        questionEn: "At noon, we eat at the school cafeteria.",
        audioText: "À midi, nous mangeons à la cantine.",
        options: ["mangeons", "mangons", "mangez", "mangent"],
        answer: "mangeons",
        explainFr: "On garde le « e » dans « nous mangeons » pour que le G garde le son doux [j] !",
        explainEn: "We keep the 'e' in 'nous mangeons' so the G stays soft instead of sounding hard like 'mango'!"
      },
      {
        type: "input",
        illustration: "jouer",
        promptFr: "Conjugue le verbe JOUER au présent :",
        promptEn: "Conjugate JOUER (to play) in the present:",
        questionFr: "Les élèves ___ au foot dans la cour. (jouer)",
        questionEn: "The students play football in the schoolyard.",
        audioText: "Les élèves jouent au foot dans la cour.",
        answer: "jouent",
        hintFr: "« Les élèves » = ils → terminaison muette en 3 lettres (-ent) !",
        hintEn: "'Les élèves' = they (ils) → add the 3-letter silent ending '-ent'!",
        explainFr: "Super ! « Ils jouent » s'écrit avec -ent, mais se prononce juste « jou » !",
        explainEn: "Great! 'Ils jouent' ends in '-ent' in writing, even though '-ent' is completely silent!"
      },
      {
        type: "mcq",
        illustration: "ecouter",
        promptFr: "Complète avec le verbe ÉCOUTER :",
        promptEn: "Complete with ÉCOUTER (to listen to):",
        questionFr: "J'___ de la musique dans le bus.",
        questionEn: "I listen to music on the bus.",
        audioText: "J'écoute de la musique dans le bus.",
        options: ["écoute", "écoutes", "écoutons", "écouter"],
        answer: "écoute",
        explainFr: "Avec « Je / J' », les verbes en -ER se terminent par « -e » : J'écoute.",
        explainEn: "With 'Je / J'', regular -ER verbs end in '-e': J'écoute."
      },
      {
        type: "match",
        illustration: "parler",
        promptFr: "Associe chaque pronom à la bonne forme de PARLER :",
        promptEn: "Match each pronoun with the right form of PARLER:",
        audioText: "Je parle, tu parles, nous parlons, vous parlez.",
        pairs: [
          { fr: "Tu ...", en: "parles (-es)" },
          { fr: "Nous ...", en: "parlons (-ons)" },
          { fr: "Vous ...", en: "parlez (-ez)" },
          { fr: "Ils ...", en: "parlent (-ent)" }
        ],
        explainFr: "Les terminaisons en -ER : -e, -es, -e, -ons, -ez, -ent.",
        explainEn: "Master these 6 endings (-e, -es, -e, -ons, -ez, -ent) and you know thousands of French verbs!"
      },
      {
        type: "mcq",
        illustration: "ecrire",
        promptFr: "Verbe du 2e groupe en -IR : FINIR",
        promptEn: "Regular -IR verb: FINIR (to finish)",
        questionFr: "Nous ___ les cours à 16h30.",
        questionEn: "We finish classes at 4:30 PM.",
        audioText: "Nous finissons les cours à seize heures trente.",
        options: ["finissons", "finons", "finissez", "finit"],
        answer: "finissons",
        explainFr: "Les verbes comme finir prennent « -issons » avec nous : nous finissons, nous choisissons.",
        explainEn: "2nd-group -IR verbs add '-issons' with nous: nous finissons (we finish)."
      },
      {
        type: "input",
        illustration: "classe",
        promptFr: "Complète avec le verbe POUVOIR (can) :",
        promptEn: "Complete with POUVOIR (can / to be able to):",
        questionFr: "Madame, est-ce que je ___ poser une question ?",
        questionEn: "Ma'am, can I ask a question?",
        audioText: "Madame, est-ce que je peux poser une question ?",
        answer: "peux",
        hintFr: "Commence par p-e-u... avec un x à la fin !",
        hintEn: "4 letters: p-e-u-x",
        explainFr: "Phrase magique en classe : « Est-ce que je peux... ? » (avec un X à je peux et tu peux !).",
        explainEn: "Super useful classroom phrase: 'Est-ce que je peux... ?' (ends with X for je & tu!)."
      },
      {
        type: "mcq",
        illustration: "cantine",
        promptFr: "Choisis la bonne forme de PRENDRE :",
        promptEn: "Choose the right form of PRENDRE (to take):",
        questionFr: "Tous les matins, ils ___ le bus scolaire.",
        questionEn: "Every morning, they take the school bus.",
        audioText: "Tous les matins, ils prennent le bus scolaire.",
        options: ["prennent", "prendent", "prenons", "prend"],
        answer: "prennent",
        explainFr: "Attention au double N : « ils prennent » !",
        explainEn: "Watch the double N in 'ils prennent'!"
      },
      {
        type: "mcq",
        illustration: "manger",
        promptFr: "Complète avec VOULOIR (to want) :",
        promptEn: "Complete with VOULOIR (to want):",
        questionFr: "Est-ce que tu ___ jouer au basket avec nous ?",
        questionEn: "Do you want to play basketball with us?",
        audioText: "Est-ce que tu veux jouer au basket avec nous ?",
        options: ["veux", "veut", "voulez", "voulons"],
        answer: "veux",
        explainFr: "Comme « je peux / tu peux », vouloir prend un X : « je veux, tu veux, il veut ».",
        explainEn: "Just like 'peux', vouloir uses X for je & tu: 'je veux, tu veux, il veut'."
      },
      {
        type: "order",
        illustration: "ecouter",
        promptFr: "Remets la phrase dans l'ordre :",
        promptEn: "Put the words in the right order:",
        questionEn: "She listens to the teacher in class.",
        audioText: "Elle écoute le professeur en classe.",
        words: ["Elle", "écoute", "le", "professeur", "en", "classe."],
        distractors: ["à", "écoutent"],
        explainFr: "En français, on dit directement « écouter quelqu'un » (sans 'to' entre le verbe et le nom) !",
        explainEn: "Remember: 'écouter' already includes 'to', so it's 'écoute le professeur' (not 'écoute à')!"
      },
      {
        type: "input",
        illustration: "lire",
        promptFr: "Conjugue AIMER au présent :",
        promptEn: "Conjugate AIMER (to like / love) in the present:",
        questionFr: "Vous ___ le chocolat français ? (aimer)",
        questionEn: "Do you like French chocolate?",
        audioText: "Vous aimez le chocolat français ?",
        answer: "aimez",
        hintFr: "Avec « vous », les verbes en -ER finissent par -ez !",
        hintEn: "With 'vous', -ER verbs always end in '-ez'!",
        explainFr: "Parfait ! « Vous aimez » (le -ez se prononce « é »).",
        explainEn: "Perfect! 'Vous aimez' (-ez sounds like 'ay')."
      },
      {
        type: "match",
        illustration: "classe",
        promptFr: "Relie ces 4 verbes très utiles en classe :",
        promptEn: "Match these 4 super useful classroom verbs:",
        audioText: "Je peux, je veux, je comprends, je finis.",
        pairs: [
          { fr: "Je peux", en: "I can" },
          { fr: "Je veux", en: "I want" },
          { fr: "Je comprends", en: "I understand" },
          { fr: "Je finis", en: "I finish" }
        ],
        explainFr: "Avec ces 4 verbes, tu peux presque tout dire en cours !",
        explainEn: "With these 4 verbs, you can express almost anything in class!"
      },
      {
        type: "dropdown",
        illustration: "parler",
        promptFr: "Choisis la bonne terminaison dans chaque menu déroulant :",
        promptEn: "Select the right verb form from each dropdown list:",
        templateFr: "En classe, j'{0} le professeur, tu {1} en français et nous {2} l'exercice ensemble.",
        questionEn: "In class, I listen to the teacher, you speak in French, and we finish the exercise together.",
        audioText: "En classe, j'écoute le professeur, tu parles en français et nous finissons l'exercice ensemble.",
        blanks: [
          {
            answer: "écoute",
            options: ["écoute", "écoutes", "écoutons", "écoutez", "écoutent", "écouter", "parle", "finis"]
          },
          {
            answer: "parles",
            options: ["parle", "parles", "parlons", "parlez", "parlent", "parler", "parlé", "écoute"]
          },
          {
            answer: "finissons",
            options: ["finis", "finit", "finissons", "finissez", "finissent", "finons", "finir", "faisons"]
          }
        ],
        explainFr: "J'écoute (-e) • Tu parles (-es) • Nous finissons (2e groupe en -issons) !",
        explainEn: "J'écoute (-e) • Tu parles (-es) • Nous finissons (2nd group -IR adds -issons)!"
      },
      {
        type: "dropdown",
        illustration: "cantine",
        promptFr: "Sélectionne les bonnes formes de PRENDRE, VOULOIR et POUVOIR :",
        promptEn: "Pick the right forms of PRENDRE, VOULOIR, and POUVOIR:",
        templateFr: "À midi, mes amis {0} un plateau. Est-ce que tu {1} un dessert ou tu {2} venir dans la cour ?",
        questionEn: "At noon, my friends take a tray. Do you want dessert or can you come to the schoolyard?",
        audioText: "À midi, mes amis prennent un plateau. Est-ce que tu veux un dessert ou tu peux venir dans la cour ?",
        blanks: [
          {
            answer: "prennent",
            options: ["prends", "prend", "prenons", "prenez", "prennent", "prendent", "prendre", "vont", "ont"]
          },
          {
            answer: "veux",
            options: ["veux", "veut", "voulons", "voulez", "veulent", "vouloir", "peux", "prends", "fais"]
          },
          {
            answer: "peux",
            options: ["peux", "peut", "pouvons", "pouvez", "peuvent", "pouvoir", "veux", "vas", "es"]
          }
        ],
        explainFr: "Ils prennent (2 n) • Tu veux (avec x) • Tu peux (avec x) !",
        explainEn: "Ils prennent (double n) • Tu veux (ends in x) • Tu peux (ends in x)!"
      }
    ]
  },

  {
    id: "passe_futur",
    badge: "⏳ Module 3",
    color: "#0D9488",
    bgLight: "#F0FDFA",
    iconIllustration: "temps",
    titleFr: "Hier & Demain : Passé Composé et Futur Proche",
    titleEn: "Yesterday & Tomorrow: Past & Near Future",
    descFr: "Raconter son week-end (J'ai joué) et parler de demain (Je vais aller) !",
    descEn: "Talk about your weekend (I played) and tomorrow's plans (I'm going to go)!",
    questions: [
      {
        type: "mcq",
        illustration: "temps",
        promptFr: "Futur proche (Aller + verbe à l'infinitif) :",
        promptEn: "Near future (Aller + infinitive, just like 'going to'):",
        questionFr: "Demain, je ___ jouer au foot avec Tom.",
        questionEn: "Tomorrow, I am going to play football with Tom.",
        audioText: "Demain, je vais jouer au foot avec Tom.",
        options: ["vais", "suis", "ai", "va"],
        answer: "vais",
        explainFr: "Futur proche = ALLER au présent + infinitif : « Je vais jouer » = I am going to play !",
        explainEn: "Near future = ALLER + infinitive, exact same logic as English: 'Je vais jouer' = I'm going to play!"
      },
      {
        type: "mcq",
        illustration: "manger",
        promptFr: "Passé composé (Hier...) :",
        promptEn: "Past tense — Passé Composé (Yesterday...):",
        questionFr: "Hier midi, j'___ mangé une pizza.",
        questionEn: "Yesterday at noon, I ate a pizza.",
        audioText: "Hier midi, j'ai mangé une pizza.",
        options: ["ai", "suis", "vais", "as"],
        answer: "ai",
        explainFr: "La plupart des verbes forment le passé composé avec AVOIR : « J'ai mangé » = I ate / I have eaten.",
        explainEn: "Most verbs form the past with AVOIR + past participle (-é): 'J'ai mangé' = I ate."
      },
      {
        type: "input",
        illustration: "jouer",
        promptFr: "Écris le participe passé du verbe JOUER (en -é) :",
        promptEn: "Type the past participle of JOUER (ends in -é):",
        questionFr: "Samedi dernier, nous avons ___ aux jeux vidéo.",
        questionEn: "Last Saturday, we played video games.",
        audioText: "Samedi dernier, nous avons joué aux jeux vidéo.",
        answer: "joué",
        hintFr: "Remplace -er par -é (utilise le bouton « é » !)",
        hintEn: "Replace '-er' with '-é' (click the 'é' accent button!)",
        explainFr: "Astuce géniale : TOUS les verbes en -ER font leur participe passé en « -é » (jouer → joué, parler → parlé) !",
        explainEn: "Awesome rule: EVERY single -ER verb changes '-er' to '-é' in the past (jouer → joué, manger → mangé)!"
      },
      {
        type: "mcq",
        illustration: "aller",
        promptFr: "Attention : ALLER utilise ÊTRE au passé composé !",
        promptEn: "Watch out: ALLER uses ÊTRE in the past tense!",
        questionFr: "Pendant les vacances, je ___ allé à Londres.",
        questionEn: "During the holidays, I went to London.",
        audioText: "Pendant les vacances, je suis allé à Londres.",
        options: ["suis", "ai", "vais", "étais"],
        answer: "suis",
        explainFr: "Les verbes de déplacement (aller, venir, partir, arriver) utilisent ÊTRE : « Je suis allé(e) » !",
        explainEn: "Movement verbs (aller = go, venir = come, partir = leave) use ÊTRE: 'Je suis allé' = I went!"
      },
      {
        type: "order",
        illustration: "temps",
        promptFr: "Construis cette phrase au futur proche :",
        promptEn: "Build this sentence in the near future:",
        questionEn: "Tonight, we are going to watch a film.",
        audioText: "Ce soir, on va regarder un film.",
        words: ["Ce", "soir,", "on", "va", "regarder", "un", "film."],
        distractors: ["a", "regardé"],
        explainFr: "« On va regarder » = We are going to watch (hyper naturel à l'oral !).",
        explainEn: "'On va regarder' = We are going to watch (the most natural way French teens say it!)."
      },
      {
        type: "match",
        illustration: "temps",
        promptFr: "Passé, Présent ou Futur ? Relie chaque phrase :",
        promptEn: "Past, Present, or Future? Match each sentence:",
        audioText: "Hier j'ai mangé. Maintenant je mange. Demain je vais manger.",
        pairs: [
          { fr: "J'ai mangé", en: "I ate (Past)" },
          { fr: "Je mange", en: "I am eating (Present)" },
          { fr: "Je vais manger", en: "I'm going to eat (Future)" },
          { fr: "Je suis allé", en: "I went (Past with être)" }
        ],
        explainFr: "Tu maîtrises les 3 temps essentiels pour raconter ta vie en français !",
        explainEn: "With just Present, Passé Composé & Futur Proche, you can talk about past, now & future!"
      },
      {
        type: "mcq",
        illustration: "faire",
        promptFr: "Quel est le participe passé irrégulier de FAIRE ?",
        promptEn: "What is the irregular past participle of FAIRE (to do)?",
        questionFr: "Hier soir, j'ai ___ tous mes devoirs !",
        questionEn: "Last night, I did all my homework!",
        audioText: "Hier soir, j'ai fait tous mes devoirs !",
        options: ["fait", "faisé", "faire", "font"],
        answer: "fait",
        explainFr: "À retenir par cœur : « J'ai fait » = I did / I made !",
        explainEn: "Memorize this golden combo: 'J'ai fait' = I did / I made!"
      },
      {
        type: "input",
        illustration: "ecouter",
        promptFr: "Complète le futur proche avec ALLER :",
        promptEn: "Complete the near future with ALLER:",
        questionFr: "Tu ___ écouter cette chanson, elle est géniale !",
        questionEn: "You are going to listen to this song, it's awesome!",
        audioText: "Tu vas écouter cette chanson, elle est géniale !",
        answer: "vas",
        hintFr: "Le verbe aller avec « tu » (3 lettres)",
        hintEn: "The verb aller with 'tu' (3 letters: v-a-s)",
        explainFr: "Exact : « Tu vas écouter » = You are going to listen!",
        explainEn: "Exact: 'Tu vas écouter' = You are going to listen!"
      },
      {
        type: "mcq",
        illustration: "lire",
        promptFr: "Choisis le bon participe passé de FINIR :",
        promptEn: "Choose the past participle of FINIR (to finish):",
        questionFr: "J'ai ___ mon contrôle de français !",
        questionEn: "I finished my French test!",
        audioText: "J'ai fini mon contrôle de français !",
        options: ["fini", "finir", "finissé", "finis"],
        answer: "fini",
        explainFr: "Les verbes en -IR comme finir font leur participe passé en « -i » : J'ai fini !",
        explainEn: "Regular -IR verbs drop the R in the past: finir → J'ai fini (I'm done / I finished)!"
      },
      {
        type: "mcq",
        illustration: "pluie",
        promptFr: "Quel mot indique le PASSÉ ?",
        promptEn: "Which time word fits a PAST tense sentence?",
        questionFr: "___, il a plu toute la journée.",
        questionEn: "Yesterday, it rained all day.",
        audioText: "Hier, il a plu toute la journée.",
        options: ["Hier", "Demain", "Bientôt", "Maintenant"],
        answer: "Hier",
        explainFr: "Repères de temps : Hier = Yesterday • Aujourd'hui = Today • Demain = Tomorrow.",
        explainEn: "Key time markers: Hier = Yesterday • Aujourd'hui = Today • Demain = Tomorrow."
      },
      {
        type: "dropdown",
        illustration: "temps",
        promptFr: "Passé composé ou Futur proche ? Choisis dans les listes déroulantes !",
        promptEn: "Past or Near Future? Pick from the dropdown lists!",
        templateFr: "Hier, j'{0} {1} au basket, et demain je {2} aller à la piscine !",
        questionEn: "Yesterday, I played basketball, and tomorrow I am going to go to the swimming pool!",
        audioText: "Hier, j'ai joué au basket, et demain je vais aller à la piscine !",
        blanks: [
          {
            answer: "ai",
            options: ["ai", "suis", "vais", "as", "a", "avons", "étais", "fais"]
          },
          {
            answer: "joué",
            options: ["joué", "jouer", "joue", "joues", "jouons", "jouez", "jouent", "fini"]
          },
          {
            answer: "vais",
            options: ["vais", "vas", "va", "allons", "suis", "ai", "fais", "peux"]
          }
        ],
        explainFr: "Hier → J'ai joué (passé composé) • Demain → Je vais aller (futur proche) !",
        explainEn: "Yesterday → J'ai joué (past) • Tomorrow → Je vais aller (near future)!"
      }
    ]
  },

  {
    id: "vocabulaire",
    badge: "🎨 Module 4",
    color: "#EA580C",
    bgLight: "#FFF7ED",
    iconIllustration: "sac",
    titleFr: "Vocabulaire Illustré : Collège & Quotidien",
    titleEn: "Illustrated Vocabulary: School & Daily Life",
    descFr: "Apprends les mots indispensables grâce aux dessins !",
    descEn: "Learn must-know French words with visual drawings!",
    questions: [
      {
        type: "mcq",
        illustration: "sac",
        promptFr: "Regarde le dessin : comment s'appelle cet objet ?",
        promptEn: "Look at the drawing: what is this called in French?",
        questionFr: "Je mets mes livres dans mon ___.",
        questionEn: "I put my books in my backpack / schoolbag.",
        audioText: "un sac à dos",
        options: ["sac à dos", "cahier", "vélo", "tableau"],
        answer: "sac à dos",
        explainFr: "Un sac à dos = a backpack (littéralement « bag on back » !).",
        explainEn: "'Un sac à dos' = a backpack (literally 'bag-on-back'!)."
      },
      {
        type: "mcq",
        illustration: "cahier",
        promptFr: "Quel est cet objet scolaire ?",
        promptEn: "What is this school item?",
        questionFr: "Ouvrez votre ___ à la page dix !",
        questionEn: "Open your notebook / exercise book to page ten!",
        audioText: "Ouvrez votre cahier à la page dix !",
        options: ["cahier", "stylo", "ordinateur", "bureau"],
        answer: "cahier",
        explainFr: "Un cahier = a notebook / exercise book (le H ne se prononce pas : « ca-yé »).",
        explainEn: "'Un cahier' = a notebook (the H is silent, pronounced 'kah-yay')."
      },
      {
        type: "input",
        illustration: "stylo",
        promptFr: "Écris le mot français pour « pen » :",
        promptEn: "Type the French word for 'pen':",
        questionFr: "J'écris avec un ___.",
        questionEn: "I write with a pen.",
        audioText: "J'écris avec un stylo.",
        answer: "stylo",
        hintFr: "5 lettres : s-t-y-l-o",
        hintEn: "5 letters: s-t-y-l-o",
        explainFr: "Un stylo = a pen • Un crayon = a pencil !",
        explainEn: "'Un stylo' = a pen • 'Un crayon' = a pencil (false friend alert: crayon ≠ wax crayon!)."
      },
      {
        type: "mcq",
        illustration: "ordinateur",
        promptFr: "Comment dit-on « computer / laptop » en français ?",
        promptEn: "How do you say 'computer' in French?",
        questionFr: "En salle informatique, on travaille sur un ___.",
        questionEn: "In the IT room, we work on a computer.",
        audioText: "un ordinateur",
        options: ["ordinateur", "téléphone", "classeur", "tableau"],
        answer: "ordinateur",
        explainFr: "Un ordinateur (souvent abrégé « un ordi » par les collégiens français !).",
        explainEn: "'Un ordinateur' — French students almost always shorten it to 'un ordi'!"
      },
      {
        type: "match",
        illustration: "classe",
        promptFr: "Relie le vocabulaire de la salle de classe :",
        promptEn: "Match the classroom vocabulary:",
        audioText: "Le tableau, la cour, la cantine, les devoirs.",
        pairs: [
          { fr: "le tableau", en: "the board" },
          { fr: "la cour", en: "the schoolyard" },
          { fr: "la cantine", en: "the cafeteria" },
          { fr: "les devoirs", en: "homework" }
        ],
        explainFr: "Quatre mots que tu entendras tous les jours au collège !",
        explainEn: "Four words you will hear every single day at a French collège!"
      },
      {
        type: "mcq",
        illustration: "chat",
        promptFr: "Quel animal vois-tu sur le dessin ?",
        promptEn: "Which animal is in the drawing?",
        questionFr: "À la maison, j'ai un petit ___ roux.",
        questionEn: "At home, I have a little ginger cat.",
        audioText: "À la maison, j'ai un petit chat roux.",
        options: ["chat", "chien", "oiseau", "cheval"],
        answer: "chat",
        explainFr: "Un chat = a cat (le « ch » se prononce doux comme 'sh', et le T est muet : « sha » !).",
        explainEn: "'Un chat' = a cat ('ch' sounds like 'sh' and the T is silent: 'shah'!)."
      },
      {
        type: "input",
        illustration: "chien",
        promptFr: "Et cet animal fidèle, comment s'écrit-il en français ?",
        promptEn: "And how do you spell 'dog' in French?",
        questionFr: "Mon voisin promène son ___.",
        questionEn: "My neighbour is walking his dog.",
        audioText: "Mon voisin promène son chien.",
        answer: "chien",
        hintFr: "5 lettres : c-h-i-e-n",
        hintEn: "5 letters: c-h-i-e-n",
        explainFr: "Un chien = a dog (et au féminin : une chienne).",
        explainEn: "'Un chien' = a dog!"
      },
      {
        type: "mcq",
        illustration: "velo",
        promptFr: "Regarde le dessin : quel est ce moyen de transport ?",
        promptEn: "Look at the drawing: what is this transport?",
        questionFr: "Quand il fait beau, je viens au collège à ___.",
        questionEn: "When the weather is nice, I come to school by bike.",
        audioText: "Quand il fait beau, je viens au collège à vélo.",
        options: ["vélo", "voiture", "train", "pied"],
        answer: "vélo",
        explainFr: "Un vélo = a bike (et « à pied » = on foot !).",
        explainEn: "'Un vélo' = a bike (and 'à pied' = on foot!)."
      },
      {
        type: "mcq",
        illustration: "dormir",
        promptFr: "Quelle action représente ce dessin ?",
        promptEn: "Which verb matches this drawing?",
        questionFr: "Il est minuit, il faut ___ !",
        questionEn: "It's midnight, time to sleep!",
        audioText: "Il est minuit, il faut dormir !",
        options: ["dormir", "courir", "lire", "écrire"],
        answer: "dormir",
        explainFr: "Dormir = to sleep (d'où le mot anglais 'dormitory' !).",
        explainEn: "'Dormir' = to sleep (same root as English 'dormitory'!)."
      },
      {
        type: "mcq",
        illustration: "courir",
        promptFr: "En cours d'EPS (sport), que fait-on ?",
        promptEn: "In PE (sports class), what verb matches this sneaker?",
        questionFr: "En EPS, nous devons ___ vite !",
        questionEn: "In PE, we have to run fast!",
        audioText: "En EPS, nous devons courir vite !",
        options: ["courir", "dormir", "manger", "lire"],
        answer: "courir",
        explainFr: "Courir = to run (je cours, tu cours, il court).",
        explainEn: "'Courir' = to run! (Bonus: PE class in France is called 'EPS')."
      },
      {
        type: "match",
        illustration: "manger",
        promptFr: "Associe les mots du repas et de la météo :",
        promptEn: "Match food & weather words:",
        audioText: "Une pomme, du fromage, le soleil, la pluie.",
        pairs: [
          { fr: "une pomme", en: "an apple" },
          { fr: "du fromage", en: "some cheese" },
          { fr: "le soleil", en: "the sun" },
          { fr: "la pluie", en: "the rain" }
        ],
        explainFr: "Bien joué ! Quatre mots très courants du quotidien.",
        explainEn: "Nice job! Four super common everyday words."
      },
      {
        type: "input",
        illustration: "maison",
        promptFr: "Comment dit-on « house / home » en français ?",
        promptEn: "How do you write 'house' in French?",
        questionFr: "Après les cours, je rentre à la ___.",
        questionEn: "After school, I go back home / to the house.",
        audioText: "Après les cours, je rentre à la maison.",
        answer: "maison",
        hintFr: "6 lettres : m-a-i-s-o-n",
        hintEn: "6 letters: m-a-i-s-o-n",
        explainFr: "La maison = the house / « à la maison » = at home !",
        explainEn: "'La maison' = the house, and 'à la maison' means 'at home'!"
      },
      {
        type: "dropdown",
        illustration: "sac",
        promptFr: "Choisis les bons objets du collège dans chaque liste déroulante (10 choix !) :",
        promptEn: "Pick the right school items from each 10-option dropdown menu:",
        templateFr: "Dans mon {0}, je range mon {1} rouge, mon {2} bleu et mon {3}.",
        questionEn: "In my backpack, I put my red notebook, my blue pen, and my computer.",
        audioText: "Dans mon sac à dos, je range mon cahier rouge, mon stylo bleu et mon ordinateur.",
        blanks: [
          {
            answer: "sac à dos",
            options: ["sac à dos", "vélo", "chat", "chien", "soleil", "fromage", "stylo", "tableau", "lit", "arbre"]
          },
          {
            answer: "cahier",
            options: ["cahier", "vélo", "chien", "soleil", "croissant", "nuage", "ballon", "jardin", "bus", "repas"]
          },
          {
            answer: "stylo",
            options: ["stylo", "chat", "fromage", "pluie", "maison", "arbre", "cantine", "cour", "vélo", "lit"]
          },
          {
            answer: "ordinateur",
            options: ["ordinateur", "soleil", "chien", "pomme", "croissant", "pluie", "jardin", "ballon", "chat", "eau"]
          }
        ],
        explainFr: "Dans le sac à dos : le cahier (notebook), le stylo (pen) et l'ordinateur (laptop) !",
        explainEn: "In the sac à dos: cahier (notebook), stylo (pen), and ordinateur (computer)!"
      }
    ]
  },

  {
    id: "genre_adjectifs",
    badge: "🧩 Module 5",
    color: "#DB2777",
    bgLight: "#FDF2F8",
    iconIllustration: "genre",
    titleFr: "Le / La, Un / Une & Accord des Adjectifs",
    titleEn: "Masculine / Feminine Articles & Adjectives",
    descFr: "Choisir entre le/la/les et accorder les couleurs et adjectifs !",
    descEn: "Master le/la/les (gender) and match adjectives like a native!",
    questions: [
      {
        type: "mcq",
        illustration: "maison",
        promptFr: "Masculin (le) ou Féminin (la) ?",
        promptEn: "Masculine (le) or Feminine (la)?",
        questionFr: "Voici ___ maison de mes grands-parents.",
        questionEn: "Here is my grandparents' house.",
        audioText: "Voici la maison de mes grands-parents.",
        options: ["la", "le", "l'", "un"],
        answer: "la",
        explainFr: "« Maison » est féminin → la maison / une maison.",
        explainEn: "'Maison' is feminine → la maison (the house) / une maison (a house)."
      },
      {
        type: "mcq",
        illustration: "ordinateur",
        promptFr: "Attention à la première lettre du mot « ordinateur » !",
        promptEn: "Look at the first letter of 'ordinateur'!",
        questionFr: "J'allume ___ ordinateur.",
        questionEn: "I turn on the computer.",
        audioText: "J'allume l'ordinateur.",
        options: ["l'", "le", "la", "les"],
        answer: "l'",
        explainFr: "Devant une voyelle (a, e, i, o, u) ou un h muet, « le » et « la » deviennent toujours « l' » !",
        explainEn: "Before a vowel (a, e, i, o, u) or silent h, both 'le' and 'la' turn into 'l''!"
      },
      {
        type: "mcq",
        illustration: "sac",
        promptFr: "Accorde l'adjectif de couleur avec « une trousse » (féminin) :",
        promptEn: "Agree the colour adjective with 'une trousse' (feminine pencil case):",
        questionFr: "J'ai un sac vert et une trousse ___.",
        questionEn: "I have a green bag and a green pencil case.",
        audioText: "J'ai un sac vert et une trousse verte.",
        options: ["verte", "vert", "verts", "vertes"],
        answer: "verte",
        explainFr: "Au féminin, on ajoute généralement un « -e » à l'adjectif : vert → verte !",
        explainEn: "For feminine nouns, you usually add '-e' to the adjective: vert (silent t) → verte (pronounced t)!"
      },
      {
        type: "input",
        illustration: "genre",
        promptFr: "Écris l'article indéfini féminin (« a / an » pour un mot féminin) :",
        promptEn: "Type the feminine word for 'a / an':",
        questionFr: "Je mange ___ pomme rouge.",
        questionEn: "I am eating a red apple.",
        audioText: "Je mange une pomme rouge.",
        answer: "une",
        hintFr: "Masculin = un • Féminin = u...",
        hintEn: "Masculine = un • Feminine = u-n-e",
        explainFr: "Exact : un = masculin (un stylo), une = féminin (une pomme) !",
        explainEn: "Exact: 'un' is masculine (un stylo), 'une' is feminine (une pomme)!"
      },
      {
        type: "mcq",
        illustration: "chat",
        promptFr: "Où se place la couleur en français ?",
        promptEn: "Where do colour adjectives go in French?",
        questionFr: "Comment dit-on « a black cat » en français ?",
        questionEn: "How do you say 'a black cat' in French?",
        audioText: "un chat noir",
        options: ["un chat noir", "un noir chat", "une chat noire", "le noir chat"],
        answer: "un chat noir",
        explainFr: "En français, les couleurs se placent APRÈS le nom : un chat noir (littéralement 'a cat black') !",
        explainEn: "In French, colours ALWAYS go AFTER the noun: 'un chat noir' (literally 'a cat black')!"
      },
      {
        type: "mcq",
        illustration: "ami",
        promptFr: "Accorde l'adjectif au féminin pluriel :",
        promptEn: "Match the adjective with 'mes amies' (feminine plural):",
        questionFr: "Sophie et Emma sont très ___.",
        questionEn: "Sophie and Emma are very smart / clever.",
        audioText: "Sophie et Emma sont très intelligentes.",
        options: ["intelligentes", "intelligent", "intelligents", "intelligente"],
        answer: "intelligentes",
        explainFr: "Féminin (-e) + Pluriel (-s) = « -es » → intelligentes !",
        explainEn: "Feminine (-e) + Plural (-s) = '-es' → intelligentes!"
      },
      {
        type: "match",
        illustration: "genre",
        promptFr: "Relie le masculin et le féminin des adjectifs :",
        promptEn: "Match masculine adjectives with their feminine form:",
        audioText: "Grand, grande. Blanc, blanche. Beau, belle. Sportif, sportive.",
        pairs: [
          { fr: "grand (tall)", en: "grande" },
          { fr: "blanc (white)", en: "blanche" },
          { fr: "beau (beautiful)", en: "belle" },
          { fr: "sportif (sporty)", en: "sportive" }
        ],
        explainFr: "Certains adjectifs changent un peu au féminin : blanc → blanche, beau → belle, -if → -ive !",
        explainEn: "Watch these fun feminine transformations: blanc → blanche, beau → belle, sportif → sportive!"
      },
      {
        type: "order",
        illustration: "cahier",
        promptFr: "Attention à la place de « petit » (devant) et de la couleur (après) !",
        promptEn: "Put in order ('petit' goes before the noun, colour goes after!):",
        questionEn: "I have a small red notebook.",
        audioText: "J'ai un petit cahier rouge.",
        words: ["J'ai", "un", "petit", "cahier", "rouge."],
        distractors: ["petite", "la"],
        explainFr: "Les petits adjectifs courants (petit, grand, bon, beau, nouveau) vont DEVANT le nom, mais les couleurs vont APRÈS !",
        explainEn: "Short common adjectives (petit, grand, bon, beau) go BEFORE the noun, while colours go AFTER!"
      },
      {
        type: "mcq",
        illustration: "genre",
        promptFr: "Quelle couleur NE change JAMAIS, ni au féminin ni au pluriel ?",
        promptEn: "Complete with 'orange' (hint: fruit colours are invariable!):",
        questionFr: "J'ai acheté deux trousses ___.",
        questionEn: "I bought two orange pencil cases.",
        audioText: "J'ai acheté deux trousses orange.",
        options: ["orange", "oranges", "orangées", "oranger"],
        answer: "orange",
        explainFr: "Astuce de pro : « orange » et « marron » viennent d'un fruit, donc ils ne prennent JAMAIS de S !",
        explainEn: "French pro-tip: 'orange' and 'marron' (brown) come from fruits, so they NEVER add an -s!"
      },
      {
        type: "input",
        illustration: "classe",
        promptFr: "Mets « le cahier » au pluriel : ___ cahiers",
        promptEn: "Turn 'le' (the) into the plural word for 'the':",
        questionFr: "Rangez ___ cahiers dans vos sacs.",
        questionEn: "Put the notebooks away in your bags.",
        audioText: "Rangez les cahiers dans vos sacs.",
        answer: "les",
        hintFr: "3 lettres : le / la / l' deviennent tous « l... » au pluriel !",
        hintEn: "3 letters: le, la, and l' all become 'l-e-s' in the plural!",
        explainFr: "Au pluriel, plus besoin de réfléchir au genre : c'est « les » pour tout le monde !",
        explainEn: "Great news: in the plural, masculine and feminine both use 'les'!"
      },
      {
        type: "dropdown",
        illustration: "genre",
        promptFr: "Choisis le bon article ET le bon accord d'adjectif dans les listes déroulantes :",
        promptEn: "Pick the right article AND adjective agreement from the dropdowns:",
        templateFr: "Voici {0} école très {1} avec {2} élèves {3} !",
        questionEn: "Here is a very big school with kind students!",
        audioText: "Voici une école très grande avec des élèves gentils !",
        blanks: [
          {
            answer: "une",
            options: ["un", "une", "des", "le", "la", "les", "du", "au"]
          },
          {
            answer: "grande",
            options: ["grand", "grande", "grands", "grandes", "petit", "petits", "beau", "beaux"]
          },
          {
            answer: "des",
            options: ["un", "une", "des", "le", "la", "l'", "du", "au"]
          },
          {
            answer: "gentils",
            options: ["gentils", "gentil", "gentille", "gentilles", "contente", "petite", "grande", "sportif"]
          }
        ],
        explainFr: "Une école (féminin → grande) • Des élèves (pluriel → gentils avec un s) !",
        explainEn: "Une école (feminine → grande) • Des élèves (plural → gentils with an -s)!"
      }
    ]
  },

  {
    id: "dialogues",
    badge: "💬 Module 6",
    color: "#0284C7",
    bgLight: "#F0F9FF",
    iconIllustration: "ami",
    titleFr: "Dialogues au Collège & Vie de Classe",
    titleEn: "School Dialogues & Real-Life Conversations",
    descFr: "Parler avec ses camarades, les profs et à la cantine !",
    descEn: "Real conversations with classmates, teachers & at lunch!",
    questions: [
      {
        type: "dialogue",
        illustration: "parler",
        speakerA: "Léo (camarade / classmate)",
        lineAFr: "Salut ! Bienvenue dans notre classe ! Comment tu t'appelles ?",
        lineAEn: "Hi! Welcome to our class! What is your name?",
        promptFr: "Choisis la meilleure réponse :",
        promptEn: "Choose the best reply:",
        audioText: "Salut ! Bienvenue dans notre classe ! Comment tu t'appelles ? Salut, je m'appelle Oliver, enchanté !",
        options: [
          { fr: "Salut ! Je m'appelle Oliver, enchanté !", en: "Hi! My name is Oliver, nice to meet you!" },
          { fr: "J'ai quatorze ans.", en: "I am fourteen years old." },
          { fr: "Au revoir, à demain !", en: "Goodbye, see you tomorrow!" },
          { fr: "Je m'appelle est Oliver.", en: "(Incorrect: 'Je m'appelle' already means 'My name is')" }
        ],
        answer: "Salut ! Je m'appelle Oliver, enchanté !",
        explainFr: "« Je m'appelle... » veut déjà dire « My name is / I call myself » (on n'ajoute pas 'est' !). Et « Enchanté » = Nice to meet you !",
        explainEn: "'Je m'appelle...' already contains the verb ('I call myself'), so never add 'est'! 'Enchanté' = Nice to meet you!"
      },
      {
        type: "dialogue",
        illustration: "classe",
        speakerA: "M. Martin (professeur / teacher)",
        lineAFr: "Alors, ouvrez vos livres à la page quarante-deux...",
        lineAEn: "Alright, open your books to page forty-two...",
        promptFr: "Tu n'as pas bien entendu. Que dis-tu poliment au professeur ?",
        promptEn: "You didn't catch that. What do you politely say to the teacher?",
        audioText: "Excusez-moi Monsieur, vous pouvez répéter plus lentement, s'il vous plaît ?",
        options: [
          { fr: "Excusez-moi Monsieur, vous pouvez répéter plus lentement, s'il vous plaît ?", en: "Excuse me Sir, can you repeat more slowly, please?" },
          { fr: "Hé toi, répète !", en: "Hey you, repeat! (Way too rude!)" },
          { fr: "Je ne mange pas le livre.", en: "I don't eat the book." },
          { fr: "Où est la cantine ?", en: "Where is the cafeteria?" }
        ],
        answer: "Excusez-moi Monsieur, vous pouvez répéter plus lentement, s'il vous plaît ?",
        explainFr: "Avec un professeur, on dit « Monsieur / Madame » et on utilise « vous » ! Cette phrase te sauvera plein de fois en classe.",
        explainEn: "In France, students call teachers 'Monsieur' or 'Madame' (without their last name!) and always use 'vous'."
      },
      {
        type: "dialogue",
        illustration: "cantine",
        speakerA: "La dame de la cantine (Lunch staff)",
        lineAFr: "Bonjour jeune homme ! Qu'est-ce que tu prends aujourd'hui ?",
        lineAEn: "Hello young man! What are you having today?",
        promptFr: "Comment commander poliment ?",
        promptEn: "How do you order politely?",
        audioText: "Bonjour Madame, je voudrais des pâtes et une pomme, s'il vous plaît.",
        options: [
          { fr: "Bonjour Madame, je voudrais des pâtes et une pomme, s'il vous plaît.", en: "Hello Ma'am, I would like pasta and an apple, please." },
          { fr: "Donne-moi des pâtes !", en: "Give me pasta! (Too bossy!)" },
          { fr: "Je suis une pomme.", en: "I am an apple." },
          { fr: "Merci, au revoir !", en: "Thanks, bye!" }
        ],
        answer: "Bonjour Madame, je voudrais des pâtes et une pomme, s'il vous plaît.",
        explainFr: "« Je voudrais... s'il vous plaît » (= I would like... please) est la formule magique partout en France !",
        explainEn: "'Bonjour' + 'Je voudrais... s'il vous plaît' is the golden politeness combo everywhere in France!"
      },
      {
        type: "dialogue",
        illustration: "ami",
        speakerA: "Chloé (camarade / classmate)",
        lineAFr: "Tu viens d'où en Angleterre ?",
        lineAEn: "Where are you from in England?",
        promptFr: "Choisis la bonne réponse :",
        promptEn: "Choose the right answer:",
        audioText: "Je viens de Manchester, mais maintenant j'habite ici en France !",
        options: [
          { fr: "Je viens de Manchester, mais maintenant j'habite ici en France !", en: "I'm from Manchester, but now I live here in France!" },
          { fr: "Je vais à Manchester demain.", en: "I am going to Manchester tomorrow." },
          { fr: "J'ai un chien anglais.", en: "I have an English dog." },
          { fr: "Il est quinze heures.", en: "It is 3 PM." }
        ],
        answer: "Je viens de Manchester, mais maintenant j'habite ici en France !",
        explainFr: "« Je viens de... » = I come from... • « J'habite à / en... » = I live in... !",
        explainEn: "'Je viens de...' = I come from... and 'J'habite...' = I live (remember the H in habiter is silent!)."
      },
      {
        type: "dialogue",
        illustration: "jouer",
        speakerA: "Lucas (ami / friend)",
        lineAFr: "Ça te dit de faire un foot à la récré ?",
        lineAEn: "Do you feel like playing football at break time?",
        promptFr: "Tu es d'accord ! Que réponds-tu ?",
        promptEn: "You're keen! What do you say?",
        audioText: "Carrément ! Bonne idée, j'arrive !",
        options: [
          { fr: "Carrément ! Bonne idée, j'arrive !", en: "Totally! Great idea, I'm coming!" },
          { fr: "Je ne sais pas lire.", en: "I don't know how to read." },
          { fr: "Hier, il a neigé.", en: "Yesterday, it snowed." },
          { fr: "Enchanté Monsieur.", en: "Pleased to meet you Sir." }
        ],
        answer: "Carrément ! Bonne idée, j'arrive !",
        explainFr: "Mot de collégien super naturel : « Carrément ! » (= Totally! / Definitely!) et « la récré » (= break / recess).",
        explainEn: "Cool French teen slang: 'Carrément !' = Totally / For sure! And 'la récré' = school break time."
      },
      {
        type: "input",
        illustration: "classe",
        promptFr: "Quand tu ne sais pas un mot en français, comment demandes-tu ?",
        promptEn: "Complete this super helpful question: 'How do you say ... in French?'",
        questionFr: "Comment on ___ « ruler » en français ?",
        questionEn: "How do you say 'ruler' in French? (Réponse : une règle !)",
        audioText: "Comment on dit ruler en français ?",
        answer: "dit",
        hintFr: "Le verbe « dire » avec « on » : 3 lettres (d-i-t)",
        hintEn: "3 letters: d-i-t ('Comment on dit...?')",
        explainFr: "Garde cette phrase précieusement : « Comment on dit [...] en français ? » = How do you say [...] in French?",
        explainEn: "Keep this lifesaver phrase in your pocket: 'Comment on dit [...] en français ?'"
      },
      {
        type: "order",
        illustration: "parler",
        promptFr: "Remets dans l'ordre cette phrase très utile quand quelqu'un parle trop vite :",
        promptEn: "Build this helpful sentence when people speak fast:",
        questionEn: "I am still learning French.",
        audioText: "J'apprends encore le français.",
        words: ["J'apprends", "encore", "le", "français."],
        distractors: ["suis", "parler"],
        explainFr: "« J'apprends encore le français » = I'm still learning French !",
        explainEn: "'J'apprends encore le français' = I'm still learning French!"
      },
      {
        type: "match",
        illustration: "ami",
        promptFr: "Expressions quotidiennes entre amis au collège :",
        promptEn: "Everyday expressions with friends at school:",
        audioText: "À tout à l'heure ! À demain ! Pas de souci ! Ça marche !",
        pairs: [
          { fr: "À tout à l'heure !", en: "See you later (today)!" },
          { fr: "À demain !", en: "See you tomorrow!" },
          { fr: "Pas de souci !", en: "No worries!" },
          { fr: "Ça marche !", en: "Sounds good / Deal!" }
        ],
        explainFr: "Les Français adorent dire « Pas de souci ! » et « Ça marche ! » (= OK / Sounds good).",
        explainEn: "French people say 'Pas de souci !' (No worries) and 'Ça marche !' (Sounds good) dozens of times a day!"
      },
      {
        type: "dialogue",
        illustration: "stylo",
        speakerA: "Toi (You)",
        lineAFr: "Zut, j'ai oublié ma trousse à la maison...",
        lineAEn: "Shoot, I forgot my pencil case at home...",
        promptFr: "Que demandes-tu à ton voisin de table ?",
        promptEn: "What do you ask your desk partner?",
        audioText: "Tu peux me prêter un stylo, s'il te plaît ?",
        options: [
          { fr: "Tu peux me prêter un stylo, s'il te plaît ?", en: "Can you lend me a pen, please?" },
          { fr: "Donne-moi ton stylo tout de suite !", en: "Give me your pen right now! (Too rude!)" },
          { fr: "Tu manges ma trousse ?", en: "Are you eating my pencil case?" },
          { fr: "Quel âge a ton stylo ?", en: "How old is your pen?" }
        ],
        answer: "Tu peux me prêter un stylo, s'il te plaît ?",
        explainFr: "« Tu peux me prêter... s'il te plaît ? » (s'il TE plaît pour un ami, s'il VOUS plaît pour un adulte !).",
        explainEn: "'Prêter' = to lend. Notice 's'il TE plaît' with a classmate vs 's'il VOUS plaît' with a teacher!"
      },
      {
        type: "mcq",
        illustration: "classe",
        promptFr: "Faux-ami classique FR / EN : que veut dire « le collège » en France ?",
        promptEn: "Classic FR/EN false friend: what does 'le collège' mean in France?",
        questionFr: "En France, « le collège » c'est pour les élèves de...",
        questionEn: "In France, 'le collège' is for students aged...",
        audioText: "En France, le collège c'est de onze à quinze ans, de la sixième à la troisième.",
        options: [
          "11 à 15 ans (Secondary / Middle school)",
          "18 à 22 ans (University)",
          "3 à 5 ans (Nursery school)",
          "Un club de sport"
        ],
        answer: "11 à 15 ans (Secondary / Middle school)",
        explainFr: "Faux-ami ! En France : Collège (11-15 ans : 6e, 5e, 4e, 3e) → Lycée (15-18 ans) → Université / Fac (18+).",
        explainEn: "False friend! In France: Collège = ages 11-15 (Years 7-10), Lycée = ages 15-18, Université = uni!"
      },
      {
        type: "dropdown",
        illustration: "parler",
        promptFr: "Complète le dialogue avec les menus déroulants :",
        promptEn: "Complete the conversation using the dropdown menus:",
        templateFr: "— Salut ! Comment tu {0} ? — Ça {1} super bien ! Tu {2} venir jouer au foot à la récré ?",
        questionEn: "— Hi! How are you doing? — Doing great! Do you want to come play football at break?",
        audioText: "Salut ! Comment tu vas ? Ça va super bien ! Tu veux venir jouer au foot à la récré ?",
        blanks: [
          {
            answer: "vas",
            options: ["vais", "vas", "va", "allons", "allez", "vont", "es", "as", "fais"]
          },
          {
            answer: "va",
            options: ["vais", "vas", "va", "allons", "vont", "est", "a", "fait", "peut"]
          },
          {
            answer: "veux",
            options: ["veux", "veut", "voulons", "voulez", "veulent", "vas", "es", "as", "prends"]
          }
        ],
        explainFr: "Comment tu vas ? → Ça va bien ! → Tu veux venir ?",
        explainEn: "Comment tu vas ? (How are you?) → Ça va bien ! (Doing well!) → Tu veux venir ? (Do you want to come?)"
      }
    ]
  },

  {
    id: "menus_deroulants",
    badge: "📋 Module 7",
    color: "#4F46E5",
    bgLight: "#EEF2FF",
    iconIllustration: "ecrire",
    titleFr: "Spécial Menus Déroulants : Textes & Verbes à Trous",
    titleEn: "Special Dropdown Challenge: Fill-in-the-Blank Stories",
    descFr: "Plein de réponses dans chaque liste déroulante pour tester ta précision !",
    descEn: "Big dropdown lists with 8–10 choices per blank to test your accuracy!",
    questions: [
      {
        type: "dropdown",
        illustration: "ami",
        promptFr: "Ma présentation au collège (4 listes déroulantes de 9 choix !) :",
        promptEn: "Introducing myself at school (4 dropdowns with 9 options each!):",
        templateFr: "Bonjour ! Je m'{0} Harry, je {1} d'Angleterre, j'{2} quatorze ans et j'{3} le sport !",
        questionEn: "Hello! My name is Harry, I come from England, I am 14 years old, and I love sports!",
        audioText: "Bonjour ! Je m'appelle Harry, je viens d'Angleterre, j'ai quatorze ans et j'adore le sport !",
        blanks: [
          {
            answer: "appelle",
            options: ["appelle", "appelles", "appelons", "appelez", "appellent", "appeler", "suis", "ai", "habite"]
          },
          {
            answer: "viens",
            options: ["viens", "vient", "venons", "venez", "viennent", "vais", "suis", "fais", "parle"]
          },
          {
            answer: "ai",
            options: ["ai", "as", "a", "avons", "avez", "ont", "suis", "es", "vais"]
          },
          {
            answer: "adore",
            options: ["adore", "adores", "adorons", "adorez", "adorent", "adorer", "aimons", "joues", "fais"]
          }
        ],
        explainFr: "Je m'appelle (-e) • Je viens (venir) • J'ai 14 ans (avoir) • J'adore (-e) !",
        explainEn: "Je m'appelle • Je viens (I come) • J'ai 14 ans (I am 14) • J'adore (I love)!"
      },
      {
        type: "dropdown",
        illustration: "classe",
        promptFr: "Une matinée en cours (choisis parmi 9 formes verbales à chaque trou) :",
        promptEn: "A morning in class (pick from 9 verb forms in each dropdown):",
        templateFr: "À 8h30, les élèves {0} dans la classe, le professeur {1} la date au tableau et nous {2} nos cahiers.",
        questionEn: "At 8:30, the students enter the classroom, the teacher writes the date on the board, and we take our notebooks.",
        audioText: "À huit heures trente, les élèves entrent dans la classe, le professeur écrit la date au tableau et nous prenons nos cahiers.",
        blanks: [
          {
            answer: "entrent",
            options: ["entre", "entres", "entrons", "entrez", "entrent", "entrer", "entré", "allons", "vient"]
          },
          {
            answer: "écrit",
            options: ["écris", "écrit", "écrivons", "écrivez", "écrivent", "écrire", "parlons", "lis", "faites"]
          },
          {
            answer: "prenons",
            options: ["prends", "prend", "prenons", "prenez", "prennent", "prendre", "pris", "avons", "faisons"]
          }
        ],
        explainFr: "Les élèves entrent (-ent) • Le professeur écrit (il écrit) • Nous prenons (-ons) !",
        explainEn: "Les élèves entrent (they enter) • Le professeur écrit (he writes) • Nous prenons (we take)!"
      },
      {
        type: "dropdown",
        illustration: "cantine",
        promptFr: "Pause déjeuner à la cantine :",
        promptEn: "Lunch break at the school cafeteria:",
        templateFr: "À midi, nous {0} faim ! Nous {1} à la cantine et nous {2} avec nos amis.",
        questionEn: "At noon, we are hungry! We go to the cafeteria and we eat with our friends.",
        audioText: "À midi, nous avons faim ! Nous allons à la cantine et nous mangeons avec nos amis.",
        blanks: [
          {
            answer: "avons",
            options: ["sommes", "avons", "allons", "faisons", "avez", "ont", "ai", "suis", "êtes"]
          },
          {
            answer: "allons",
            options: ["vais", "vas", "va", "allons", "allez", "vont", "sommes", "avons", "faisons"]
          },
          {
            answer: "mangeons",
            options: ["mangeons", "mangons", "mange", "manges", "mangez", "mangent", "manger", "mangé", "prennent"]
          }
        ],
        explainFr: "Nous avons faim (avoir !) • Nous allons (aller) • Nous mangeons (avec le e !).",
        explainEn: "Nous avons faim (avoir!) • Nous allons (we go) • Nous mangeons (keep the 'e' after g!)."
      },
      {
        type: "dropdown",
        illustration: "jouer",
        promptFr: "Mercredi après-midi : sport et jeux !",
        promptEn: "Wednesday afternoon: sports & games!",
        templateFr: "L'après-midi, tu {0} du vélo, Léo {1} au foot et ses sœurs {2} de la musique.",
        questionEn: "In the afternoon, you ride a bike, Léo plays football, and his sisters listen to music.",
        audioText: "L'après-midi, tu fais du vélo, Léo joue au foot et ses sœurs écoutent de la musique.",
        blanks: [
          {
            answer: "fais",
            options: ["fais", "fait", "faisons", "faites", "font", "faire", "vas", "es", "as"]
          },
          {
            answer: "joue",
            options: ["joue", "joues", "jouons", "jouez", "jouent", "jouer", "joué", "fais", "vas"]
          },
          {
            answer: "écoutent",
            options: ["écoute", "écoutes", "écoutons", "écoutez", "écoutent", "écouter", "écouté", "parles", "joue"]
          }
        ],
        explainFr: "Tu fais du vélo • Léo (il) joue (-e) • Ses sœurs (elles) écoutent (-ent) !",
        explainEn: "Tu fais (you do/ride) • Léo joue (-e) • Ses sœurs écoutent (-ent silent)!"
      },
      {
        type: "dropdown",
        illustration: "genre",
        promptFr: "Articles (le/la/l'/les/un/une/des) : choisis le bon petit mot !",
        promptEn: "Articles: pick the exact French article from 9 choices!",
        templateFr: "Sur mon bureau, je pose {0} ordinateur, {1} trousse bleue, {2} cahier vert et {3} stylos.",
        questionEn: "On my desk, I put the computer, a blue pencil case, a green notebook, and some pens.",
        audioText: "Sur mon bureau, je pose l'ordinateur, une trousse bleue, un cahier vert et des stylos.",
        blanks: [
          {
            answer: "l'",
            options: ["le", "la", "l'", "les", "des", "une", "du", "au", "aux"]
          },
          {
            answer: "une",
            options: ["un", "une", "des", "le", "l'", "les", "du", "au", "mon"]
          },
          {
            answer: "un",
            options: ["un", "une", "des", "la", "l'", "les", "de la", "aux", "ma"]
          },
          {
            answer: "des",
            options: ["un", "une", "des", "le", "la", "l'", "du", "au", "ce"]
          }
        ],
        explainFr: "L'ordinateur (voyelle) • Une trousse (fém.) • Un cahier (masc.) • Des stylos (pluriel) !",
        explainEn: "L'ordinateur (vowel) • Une trousse (fem.) • Un cahier (masc.) • Des stylos (plural)!"
      },
      {
        type: "dropdown",
        illustration: "temps",
        promptFr: "Voyage dans le temps : Hier, Aujourd'hui et Demain !",
        promptEn: "Time travel: Yesterday, Today, and Tomorrow!",
        templateFr: "Hier, nous {0} fini le projet. Aujourd'hui, nous {1} contents, et demain nous {2} fêter ça !",
        questionEn: "Yesterday, we finished the project. Today, we are happy, and tomorrow we are going to celebrate!",
        audioText: "Hier, nous avons fini le projet. Aujourd'hui, nous sommes contents, et demain nous allons fêter ça !",
        blanks: [
          {
            answer: "avons",
            options: ["avons", "sommes", "allons", "faisons", "avez", "ont", "ai", "étions", "vont"]
          },
          {
            answer: "sommes",
            options: ["sommes", "avons", "allons", "faisons", "êtes", "sont", "suis", "es", "ont"]
          },
          {
            answer: "allons",
            options: ["allons", "avons", "sommes", "faisons", "allez", "vont", "vais", "pouvez", "voulez"]
          }
        ],
        explainFr: "Hier : nous avons fini (passé composé) • Aujourd'hui : nous sommes (présent) • Demain : nous allons fêter (futur proche) !",
        explainEn: "Yesterday: nous avons fini • Today: nous sommes • Tomorrow: nous allons fêter!"
      },
      {
        type: "dropdown",
        illustration: "chat",
        promptFr: "Les animaux et les couleurs (attention aux accords masculin / féminin / pluriel !) :",
        promptEn: "Animals & colours (watch masculine / feminine / plural agreements!):",
        templateFr: "Chez moi, j'ai un chat {0}, une chienne {1} et deux oiseaux {2}.",
        questionEn: "At home, I have a black cat, a white dog (female), and two blue birds.",
        audioText: "Chez moi, j'ai un chat noir, une chienne blanche et deux oiseaux bleus.",
        blanks: [
          {
            answer: "noir",
            options: ["noir", "noire", "noirs", "noires", "blanche", "bleue", "verte", "petite"]
          },
          {
            answer: "blanche",
            options: ["blanc", "blanche", "blancs", "blanches", "noir", "bleus", "gris", "petit"]
          },
          {
            answer: "bleus",
            options: ["bleu", "bleue", "bleus", "bleues", "vert", "verte", "blanche", "noire"]
          }
        ],
        explainFr: "Un chat noir (masc. sing.) • Une chienne blanche (fém. sing.) • Deux oiseaux bleus (masc. pluriel) !",
        explainEn: "Un chat noir (masc.) • Une chienne blanche (fem. of blanc) • Deux oiseaux bleus (masc. plural -s)!"
      },
      {
        type: "dropdown",
        illustration: "soleil",
        promptFr: "La météo des saisons en France :",
        promptEn: "Weather across the seasons in France:",
        templateFr: "En été, il {0} chaud et il y a du {1}. En automne, il tombe souvent de la {2}.",
        questionEn: "In summer, it is hot and there is sunshine. In autumn, rain often falls.",
        audioText: "En été, il fait chaud et il y a du soleil. En automne, il tombe souvent de la pluie.",
        blanks: [
          {
            answer: "fait",
            options: ["fait", "est", "a", "va", "fais", "font", "sommes", "prend", "peut"]
          },
          {
            answer: "soleil",
            options: ["soleil", "cahier", "stylo", "fromage", "chien", "vélo", "sac", "tableau", "lit"]
          },
          {
            answer: "pluie",
            options: ["pluie", "pomme", "maison", "trousse", "chaise", "musique", "table", "porte", "cour"]
          }
        ],
        explainFr: "Il fait chaud (météo = faire) • du soleil (sun) • de la pluie (rain) !",
        explainEn: "Il fait chaud (weather uses 'il fait') • le soleil (sun) • la pluie (rain)!"
      },
      {
        type: "dropdown",
        illustration: "velo",
        promptFr: "Venir au collège : prépositions et verbes !",
        promptEn: "Getting to school: prepositions & verbs!",
        templateFr: "Quand il fait beau, je {0} au collège {1} vélo, mais quand il pleut nous {2} le bus.",
        questionEn: "When the weather is nice, I go to school by bike, but when it rains we take the bus.",
        audioText: "Quand il fait beau, je vais au collège à vélo, mais quand il pleut nous prenons le bus.",
        blanks: [
          {
            answer: "vais",
            options: ["vais", "vas", "va", "allons", "allez", "vont", "suis", "ai", "prend"]
          },
          {
            answer: "à",
            options: ["à", "dans", "sur", "sous", "avec", "pour", "chez", "sans", "vers"]
          },
          {
            answer: "prenons",
            options: ["prends", "prend", "prenons", "prenez", "prennent", "prendre", "allons", "sommes", "faisons"]
          }
        ],
        explainFr: "Je vais • à vélo (on dit à vélo / à pied, mais en bus / en voiture !) • nous prenons le bus.",
        explainEn: "Je vais • 'à vélo' (by bike) & 'à pied' (on foot), vs 'en bus' / 'en voiture' • nous prenons!"
      },
      {
        type: "dropdown",
        illustration: "lire",
        promptFr: "Politesse et questions en classe :",
        promptEn: "Politeness & classroom questions:",
        templateFr: "Excusez-moi Madame, est-ce que vous {0} m'aider ? Je ne {1} pas ce mot, qu'est-ce que ça {2} dire ?",
        questionEn: "Excuse me Ma'am, can you help me? I don't understand this word, what does it mean?",
        audioText: "Excusez-moi Madame, est-ce que vous pouvez m'aider ? Je ne comprends pas ce mot, qu'est-ce que ça veut dire ?",
        blanks: [
          {
            answer: "pouvez",
            options: ["peux", "peut", "pouvons", "pouvez", "peuvent", "pouvoir", "voulez", "faites", "allez"]
          },
          {
            answer: "comprends",
            options: ["comprends", "comprend", "comprenons", "comprenez", "comprennent", "comprendre", "prend", "sais", "peut"]
          },
          {
            answer: "veut",
            options: ["veux", "veut", "voulons", "voulez", "veulent", "vouloir", "fait", "peut", "va"]
          }
        ],
        explainFr: "Vous pouvez (can you) • Je ne comprends pas (I don't understand) • Qu'est-ce que ça veut dire ? (What does it mean?) !",
        explainEn: "Super useful trio: 'Vous pouvez...?' • 'Je ne comprends pas' • 'Qu'est-ce que ça veut dire ?' (What does that mean?)"
      },
      {
        type: "dropdown",
        illustration: "classe",
        promptFr: "Les mots interrogatifs (10 choix par menu déroulant !) :",
        promptEn: "Question words (10 options per dropdown!):",
        templateFr: "{0} est la salle de sciences ? {1} commence le cours et {2} est ton professeur ?",
        questionEn: "Where is the science room? When does class start, and who is your teacher?",
        audioText: "Où est la salle de sciences ? Quand commence le cours et qui est ton professeur ?",
        blanks: [
          {
            answer: "Où",
            options: ["Où", "Quand", "Qui", "Pourquoi", "Comment", "Combien", "Que", "Quel", "Parce que", "Avec"]
          },
          {
            answer: "Quand",
            options: ["Quand", "Où", "Qui", "Combien", "Quoi", "Quel", "Chez", "Mais", "Sans", "Dont"]
          },
          {
            answer: "qui",
            options: ["qui", "quand", "où", "pourquoi", "combien", "que", "quoi", "parce que", "jamais", "toujours"]
          }
        ],
        explainFr: "Où = Where • Quand = When • Qui = Who • Pourquoi = Why • Comment = How • Combien = How many !",
        explainEn: "Où = Where • Quand = When • Qui = Who • Pourquoi = Why • Comment = How • Combien = How many!"
      },
      {
        type: "dropdown",
        illustration: "stylo",
        promptFr: "La négation en français (ne ... pas / n' ... pas) :",
        promptEn: "Negation in French ('ne ... pas' sandwiches the verb!):",
        templateFr: "Désolé, je {0}ai {1} de stylo rouge, et nous {2} parlons pas espagnol.",
        questionEn: "Sorry, I don't have a red pen, and we don't speak Spanish.",
        audioText: "Désolé, je n'ai pas de stylo rouge, et nous ne parlons pas espagnol.",
        blanks: [
          {
            answer: "n'",
            options: ["n'", "ne", "pas", "non", "jamais", "plus", "sans", "ni", "rien", "peu"]
          },
          {
            answer: "pas",
            options: ["pas", "ne", "n'", "non", "oui", "très", "bien", "trop", "assez", "tout"]
          },
          {
            answer: "ne",
            options: ["ne", "n'", "pas", "non", "sans", "ni", "mais", "ou", "donc", "car"]
          }
        ],
        explainFr: "En français, « ne ... pas » entoure le verbe ! Devant une voyelle (ai), « ne » devient « n' » : Je n'ai pas.",
        explainEn: "'ne ... pas' wraps around the verb like a sandwich! Before a vowel ('ai'), 'ne' becomes 'n'': Je n'ai pas."
      },
      {
        type: "dropdown",
        illustration: "sac",
        promptFr: "Mon, ma ou mes ? (Les adjectifs possessifs — 10 choix !) :",
        promptEn: "My / Your (mon, ma, mes — depends on the object's gender!):",
        templateFr: "Je prends {0} sac (masc.), {1} trousse (fém.) et {2} cahiers (pluriel).",
        questionEn: "I take my bag, my pencil case, and my notebooks.",
        audioText: "Je prends mon sac, ma trousse et mes cahiers.",
        blanks: [
          {
            answer: "mon",
            options: ["mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "nos", "leurs"]
          },
          {
            answer: "ma",
            options: ["mon", "ma", "mes", "ton", "tes", "son", "ses", "notre", "vos", "leur"]
          },
          {
            answer: "mes",
            options: ["mon", "ma", "mes", "ton", "ta", "son", "sa", "notre", "votre", "leur"]
          }
        ],
        explainFr: "Mon = masculin (mon sac) • Ma = féminin (ma trousse) • Mes = pluriel (mes cahiers) !",
        explainEn: "Mon = masculine • Ma = feminine • Mes = plural (regardless of whether you're a boy or girl!)."
      },
      {
        type: "dropdown",
        illustration: "dormir",
        promptFr: "Ma soirée à la maison (lire, écrire, dormir — 10 choix par liste !) :",
        promptEn: "My evening at home (read, write, sleep — 10 choices per dropdown!):",
        templateFr: "Le soir, je {0} un chapitre de mon livre, j'{1} un message à mes amis puis je {2} à 22h.",
        questionEn: "In the evening, I read a chapter of my book, I write a message to my friends, then I sleep at 10 PM.",
        audioText: "Le soir, je lis un chapitre de mon livre, j'écris un message à mes amis puis je dors à vingt-deux heures.",
        blanks: [
          {
            answer: "lis",
            options: ["lis", "lit", "lisons", "lisez", "lisent", "lire", "lu", "écris", "dors", "vois"]
          },
          {
            answer: "écris",
            options: ["écris", "écrit", "écrivons", "écrivez", "écrivent", "écrire", "lis", "fais", "prends", "suis"]
          },
          {
            answer: "dors",
            options: ["dors", "dort", "dormons", "dormez", "dorment", "dormir", "cours", "pars", "sors", "vais"]
          }
        ],
        explainFr: "Je lis (lire) • J'écris (écrire) • Je dors (dormir) — remarque qu'ils finissent tous les trois par -s avec « je » !",
        explainEn: "Je lis (I read) • J'écris (I write) • Je dors (I sleep) — notice all three end in silent '-s' with 'je'!"
      },
      {
        type: "dropdown",
        illustration: "parler",
        promptFr: "Choisis le bon pronom sujet (Je, Tu, Il, Elle, Nous, Vous, Ils, Elles) :",
        promptEn: "Choose the matching subject pronoun from 10 choices:",
        templateFr: "{0} êtes prêts ? Oui, {1} sommes prêts et {2} ont déjà ouvert leurs livres !",
        questionEn: "Are you (all) ready? Yes, we are ready and they have already opened their books!",
        audioText: "Vous êtes prêts ? Oui, nous sommes prêts et ils ont déjà ouvert leurs livres !",
        blanks: [
          {
            answer: "Vous",
            options: ["Je", "Tu", "Il", "Elle", "On", "Nous", "Vous", "Ils", "Elles", "Moi"]
          },
          {
            answer: "nous",
            options: ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "toi"]
          },
          {
            answer: "ils",
            options: ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "moi", "lui"]
          }
        ],
        explainFr: "Vous êtes • Nous sommes • Ils ont ! Les terminaisons du verbe te donnent toujours l'indice du pronom.",
        explainEn: "Vous êtes • Nous sommes • Ils ont! The verb form always tells you which pronoun belongs in front."
      }
    ]
  }
];

// ============================================================================
// DYNAMIC VERB DRILL GENERATOR (Infinite extra conjugation practice!)
// Automatically builds fresh Dropdown (with 9-10 options!), MCQ & Input questions
// Uses Unicode-safe word boundary matching so accented verbs are always blanked cleanly.
// ============================================================================
window.generateDynamicVerbQuestions = function(count) {
  function blankOutVerb(sentence, verb, placeholder) {
    const escaped = verb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp("(^|[\\s'’«(])(" + escaped + ")(?=$|[\\s.,!?;:»)])", "i");
    return sentence.replace(re, "$1" + placeholder);
  }

  const generated = [];
  const verbs = window.VERB_TABLES;
  const pool = [];

  verbs.forEach(v => {
    v.forms.forEach((f, idx) => {
      pool.push({ verbObj: v, form: f, idx });
    });
  });

  // Shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const extraTrapVerbs = ["suis", "es", "est", "ai", "as", "ont", "vais", "vont", "fais", "font", "parle", "parlent"];

  const selected = pool.slice(0, count);
  selected.forEach((item, n) => {
    const { verbObj, form } = item;
    const mode = n % 3; // 0 = dropdown (9 choices!), 1 = input, 2 = mcq
    const displayPro = form.proFr.split(" / ")[0];
    const space = displayPro.endsWith("'") ? "" : " ";

    const blankedDD = blankOutVerb(form.exFr, form.verb, "{0}");
    const blankedLine = blankOutVerb(form.exFr, form.verb, "___");

    if (mode === 0) {
      const setOpts = new Set([form.verb, verbObj.infinitive]);
      verbObj.forms.forEach(x => setOpts.add(x.verb));
      for (const trap of extraTrapVerbs) {
        if (setOpts.size >= 9) break;
        setOpts.add(trap);
      }
      const template = blankedDD.includes("{0}")
        ? `${blankedDD} (${verbObj.infinitive})`
        : `${displayPro}${space}{0} (${verbObj.infinitive})`;

      generated.push({
        type: "dropdown",
        illustration: verbObj.illustration,
        promptFr: `Menu déroulant : choisis la bonne forme de « ${verbObj.infinitive.toUpperCase()} » parmi les 9 propositions :`,
        promptEn: `Dropdown: pick the right form of '${verbObj.infinitive.toUpperCase()}' (${verbObj.meaningEn}) from 9 choices:`,
        templateFr: template,
        questionEn: `${form.exEn} (${form.en})`,
        blanks: [
          {
            answer: form.verb,
            options: Array.from(setOpts)
          }
        ],
        explainFr: `Bonne réponse : « ${form.fullFr} » → ${form.exFr}`,
        explainEn: `Correct: '${form.fullFr}' (${form.en}) → ${form.exEn}`
      });
    } else if (mode === 1) {
      const promptLine = blankedLine.includes("___")
        ? `${blankedLine}  (${verbObj.infinitive})`
        : `${displayPro}${space}___  (${verbObj.infinitive})`;
      generated.push({
        type: "input",
        illustration: verbObj.illustration,
        promptFr: `Conjugue le verbe « ${verbObj.infinitive.toUpperCase()} » au présent :`,
        promptEn: `Conjugate '${verbObj.infinitive.toUpperCase()}' (${verbObj.meaningEn}) in the present:`,
        questionFr: promptLine,
        questionEn: `${form.exEn} (${form.en})`,
        answer: form.verb,
        hintFr: `${form.verb.length} lettres, commence par « ${form.verb[0]}... » (pronom : ${form.proFr})`,
        hintEn: `${form.verb.length} letters, starts with "${form.verb[0]}..."`,
        explainFr: `Bonne réponse : « ${form.fullFr} » → ${form.exFr}`,
        explainEn: `Correct: '${form.fullFr}' (${form.en}) → ${form.exEn}`
      });
    } else {
      const distractors = verbObj.forms
        .map(x => x.verb)
        .filter(val => val !== form.verb);
      const uniqueDistractors = [...new Set(distractors)];
      while (uniqueDistractors.length < 3) {
        uniqueDistractors.push(verbObj.infinitive);
      }
      const opts = [form.verb, ...uniqueDistractors.slice(0, 3)];
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      const qLine = blankedLine.includes("___")
        ? `${blankedLine}  (${verbObj.infinitive})`
        : `${displayPro}${space}___  (${verbObj.infinitive})`;
      generated.push({
        type: "mcq",
        illustration: verbObj.illustration,
        promptFr: `Choisis la bonne forme de « ${verbObj.infinitive.toUpperCase()} » :`,
        promptEn: `Pick the right form of '${verbObj.infinitive.toUpperCase()}' (${verbObj.meaningEn}):`,
        questionFr: qLine,
        questionEn: `${form.exEn} (${form.en})`,
        options: opts,
        answer: form.verb,
        explainFr: `Bonne réponse : « ${form.fullFr} » → ${form.exFr}`,
        explainEn: `Correct: '${form.fullFr}' (${form.en}) → ${form.exEn}`
      });
    }
  });

  return generated;
};
