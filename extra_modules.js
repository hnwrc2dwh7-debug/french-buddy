// Extra Chapters (CP Basics, Nouns & Plurals, Grammar & Word Classes) + Expanded Grammar Reference
// Loaded after data.js and vocab_and_verbs.js

(function () {
  const EXTRA_TIPS = [
    {
      titleFr: "0. Les sons français (Bases CP)",
      titleEn: "0. Key French Sounds (Beginner / CP)",
      rows: [
        ["OU (loup, rouge, bonjour)", "Sounds like 'oo' in 'food'"],
        ["ON / OM (bonbon, maison, ballon)", "Nasal 'on' sound (don't pronounce the N clearly)"],
        ["OI (poisson, trois, moi, oiseau)", "Sounds like 'wa' in 'water'"],
        ["CH (chat, chien, chaussure)", "Always soft 'sh' (like 'shoe', never 'ch' like 'chair')"],
        ["AU / EAU (gâteau, bateau, jaune)", "Sounds like a clean 'oh'"],
        ["É vs È (école vs règle)", "É = closed 'ay' • È = open 'eh' (like 'bed')"]
      ]
    },
    {
      titleFr: "5. La nature des mots (Grammaire scolaire)",
      titleEn: "5. Parts of Speech (Word Classes)",
      rows: [
        ["Déterminant (Determiner)", "Petit mot devant le nom : le, la, les, un, une, des, mon, ma, ce"],
        ["Nom (Noun)", "Désigne une personne, un animal, une chose ou un lieu : chat, table, école, Tom"],
        ["Verbe (Verb)", "Indique une action ou un état : manger, courir, être, avoir, parler"],
        ["Adjectif (Adjective)", "Décrit comment est le nom : grand, rouge, rapide, gentille"],
        ["Pronom (Pronoun)", "Remplace un nom : je, tu, il, elle, on, nous, vous, ils, elles"]
      ]
    },
    {
      titleFr: "6. Le pluriel des noms (Singulier → Pluriel)",
      titleEn: "6. Making Nouns Plural",
      rows: [
        ["Règle générale (+ S muet)", "un chat → des chats • une pomme → des pommes"],
        ["Mots en -EAU / -AU / -EU (+ X)", "un gâteau → des gâteaux • un tableau → des tableaux • un oiseau → des oiseaux"],
        ["Mots en -AL (→ -AUX)", "un cheval → des chevaux • un animal → des animaux"],
        ["Mots finissant déjà par S / X / Z", "Ne changent pas ! une souris → des souris • un nez → des nez"],
        ["Exception célèbre", "un œil (an eye) → des yeux (eyes)"]
      ]
    },
    {
      titleFr: "7. Jours, Saisons & Nombres (Bases CP)",
      titleEn: "7. Days, Seasons & Numbers",
      rows: [
        ["Les 7 jours (sans majuscule !)", "lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche"],
        ["Les 4 saisons", "le printemps (spring), l'été (summer), l'automne (autumn), l'hiver (winter)"],
        ["Nombres 1 à 20", "un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze... vingt"],
        ["Dizaines (30 à 100)", "trente (30), quarante (40), cinquante (50), soixante (60), soixante-dix (70), quatre-vingts (80), cent (100)"]
      ]
    }
  ];

  window.GRAMMAR_TIPS = [EXTRA_TIPS[0], ...window.GRAMMAR_TIPS, ...EXTRA_TIPS.slice(1)];

  const EXTRA_MODULES = [
    {
      id: "bases_cp",
      category: "cp",
      badge: "Niveau CP",
      iconIllustration: "parler",
      titleFr: "Bases CP : Sons, Nombres, Jours, Couleurs & Corps",
      titleEn: "First Steps (CP): Sounds, Numbers, Days, Colours & Body",
      descFr: "Les tout premiers repères du français pour démarrer facilement : compter, les jours, la famille et les sons.",
      descEn: "Absolute fundamentals to start strong: numbers, days of the week, seasons, body parts, family & sounds.",
      questions: [
        {
          type: "dropdown",
          illustration: "classe",
          promptFr: "Les jours de la semaine (menu déroulant à 10 choix) :",
          promptEn: "Days of the week (10-option dropdowns):",
          templateFr: "Le premier jour d'école est {0}, puis {1}, et le week-end c'est {2} et {3}.",
          questionEn: "The first school day is Monday, then Tuesday, and the weekend is Saturday and Sunday.",
          audioText: "Le premier jour d'école est lundi, puis mardi, et le week-end c'est samedi et dimanche.",
          blanks: [
            { answer: "lundi", options: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "janvier", "été", "hier"] },
            { answer: "mardi", options: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "mars", "demain", "matin"] },
            { answer: "samedi", options: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "juin", "hiver", "soir"] },
            { answer: "dimanche", options: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "août", "nuit", "midi"] }
          ],
          explainFr: "Les 7 jours : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche (sans majuscule en français !).",
          explainEn: "In French, days of the week are NOT capitalised: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche!"
        },
        {
          type: "dropdown",
          illustration: "aller",
          promptFr: "Les 4 saisons de l'année :",
          promptEn: "The 4 seasons of the year:",
          templateFr: "Il fait chaud en {0}, les feuilles tombent en {1}, il neige en {2} et les fleurs poussent au {3}.",
          questionEn: "It is hot in summer, leaves fall in autumn, it snows in winter, and flowers grow in spring.",
          audioText: "Il fait chaud en été, les feuilles tombent en automne, il neige en hiver et les fleurs poussent au printemps.",
          blanks: [
            { answer: "été", options: ["été", "hiver", "automne", "printemps", "lundi", "juillet", "soleil", "pluie", "matin", "soir"] },
            { answer: "automne", options: ["été", "hiver", "automne", "printemps", "octobre", "vent", "dimanche", "neige", "nuit", "jour"] },
            { answer: "hiver", options: ["été", "hiver", "automne", "printemps", "décembre", "froid", "mardi", "nuage", "mer", "ciel"] },
            { answer: "printemps", options: ["été", "hiver", "automne", "printemps", "avril", "fleur", "jeudi", "arbre", "jardin", "parc"] }
          ],
          explainFr: "Les 4 saisons : le printemps, l'été, l'automne, l'hiver.",
          explainEn: "The 4 seasons: le printemps (spring), l'été (summer), l'automne (autumn), l'hiver (winter)."
        },
        {
          type: "match",
          illustration: "classe",
          promptFr: "Les nombres de base (CP) : relie chaque chiffre à son mot français :",
          promptEn: "Basic numbers: match each number with its French word:",
          audioText: "Douze, quinze, vingt, cinquante.",
          pairs: [
            { fr: "douze", en: "12 (twelve)" },
            { fr: "quinze", en: "15 (fifteen)" },
            { fr: "vingt", en: "20 (twenty)" },
            { fr: "cinquante", en: "50 (fifty)" }
          ],
          explainFr: "12 = douze • 15 = quinze • 20 = vingt (le G et le T sont muets !) • 50 = cinquante.",
          explainEn: "12 = douze • 15 = quinze • 20 = vingt (silent g & t!) • 50 = cinquante."
        },
        {
          type: "mcq",
          illustration: "classe",
          promptFr: "Comment dit-on le nombre 80 en français ? (Un grand classique !)",
          promptEn: "How do you say 80 in French? (Literally 'four twenties'!)",
          questionFr: "80 s'écrit : ___",
          questionEn: "80 = 4 x 20 in French!",
          audioText: "quatre-vingts",
          options: ["quatre-vingts", "huit-dix", "soixante-dix", "quarante"],
          answer: "quatre-vingts",
          explainFr: "En France : 70 = soixante-dix (60+10), 80 = quatre-vingts (4x20), 90 = quatre-vingt-dix (4x20+10) !",
          explainEn: "Famous French maths: 70 = 60+10 (soixante-dix), 80 = 4x20 (quatre-vingts), 90 = 4x20+10!"
        },
        {
          type: "dropdown",
          illustration: "parler",
          promptFr: "Les parties du corps humain (CP — 10 choix par liste !) :",
          promptEn: "Parts of the body (10 options per dropdown!):",
          templateFr: "J'écoute avec mes {0}, je regarde avec mes {1}, j'écris avec ma {2} et je marche avec mes {3}.",
          questionEn: "I listen with my ears, I look with my eyes, I write with my hand, and I walk with my feet.",
          audioText: "J'écoute avec mes oreilles, je regarde avec mes yeux, j'écris avec ma main et je marche avec mes pieds.",
          blanks: [
            { answer: "oreilles", options: ["oreilles", "yeux", "pieds", "mains", "nez", "bouche", "tête", "bras", "jambes", "doigts"] },
            { answer: "yeux", options: ["yeux", "oreilles", "pieds", "mains", "nez", "bouche", "tête", "bras", "genoux", "cheveux"] },
            { answer: "main", options: ["main", "tête", "bouche", "jambe", "oreille", "pied", "nez", "œil", "épaule", "dos"] },
            { answer: "pieds", options: ["pieds", "yeux", "oreilles", "mains", "cheveux", "dents", "doigts", "bras", "épaules", "nez"] }
          ],
          explainFr: "Les oreilles (ears) • Les yeux (eyes — singulier : un œil !) • La main (hand) • Les pieds (feet) !",
          explainEn: "Oreilles (ears) • Yeux (eyes — singular: un œil!) • Main (hand) • Pieds (feet)!"
        },
        {
          type: "mcq",
          illustration: "manger",
          promptFr: "Lecture CP — Quel mot contient le son « OI » (qui se prononce « wa ») ?",
          promptEn: "CP Phonics — Which word contains the French sound 'OI' (pronounced 'wa')?",
          questionFr: "Le ___ nage dans l'eau.",
          questionEn: "The fish swims in the water.",
          audioText: "Le poisson nage dans l'eau.",
          options: ["poisson", "pomme", "mouton", "gâteau"],
          answer: "poisson",
          explainFr: "Dans « poisson » (fish), les lettres O + I se prononcent « wa » (comme dans trois, moi, oiseau) !",
          explainEn: "In French, O + I always sounds like 'wa': poisson (fish), trois (3), oiseau (bird)!"
        },
        {
          type: "mcq",
          illustration: "manger",
          promptFr: "Lecture CP — Comment se prononcent les lettres « EAU » dans « gâteau » ?",
          promptEn: "CP Phonics — How is 'EAU' pronounced in 'gâteau' (cake)?",
          questionFr: "Dans « gâteau », « oiseau » et « eau », les 3 lettres E-A-U font le son...",
          questionEn: "In 'gâteau', 'oiseau', and 'eau', the 3 letters E-A-U make the sound...",
          audioText: "Un gâteau, un oiseau, de l'eau.",
          options: ["« O » (oh)", "« OU » (oo)", "« A » (ah)", "« I » (ee)"],
          answer: "« O » (oh)",
          explainFr: "Secret de lecture CP : AU et EAU se prononcent toujours « O » (gâteau = ga-to, eau = o) !",
          explainEn: "Big reading hack: 'AU' and 'EAU' ALWAYS sound like a simple 'O' (eau = 'oh', gâteau = 'ga-toh')!"
        },
        {
          type: "match",
          illustration: "maison",
          promptFr: "La famille (CP) : relie chaque membre de la famille :",
          promptEn: "Family members: match French and English:",
          audioText: "La mère, le père, le frère, la sœur.",
          pairs: [
            { fr: "la mère", en: "the mother" },
            { fr: "le père", en: "the father" },
            { fr: "le frère", en: "the brother" },
            { fr: "la sœur", en: "the sister" }
          ],
          explainFr: "Et aussi : maman (mum), papa (dad), grand-mère (grandma), grand-père (grandpa) !",
          explainEn: "And casually: maman (mum), papa (dad), grand-mère (grandma), grand-père (grandpa)!"
        },
        {
          type: "dropdown",
          illustration: "sac",
          promptFr: "Les couleurs de base (10 couleurs dans chaque menu déroulant !) :",
          promptEn: "Basic colours (10 colours in each dropdown!):",
          templateFr: "Le soleil est {0}, l'herbe est {1}, le ciel est {2} et la neige est {3}.",
          questionEn: "The sun is yellow, the grass is green, the sky is blue, and the snow is white.",
          audioText: "Le soleil est jaune, l'herbe est verte, le ciel est bleu et la neige est blanche.",
          blanks: [
            { answer: "jaune", options: ["jaune", "rouge", "bleu", "vert", "noir", "blanc", "rose", "gris", "marron", "violet"] },
            { answer: "verte", options: ["verte", "jaune", "rouge", "bleue", "noire", "blanche", "rose", "grise", "orange", "violette"] },
            { answer: "bleu", options: ["bleu", "rouge", "vert", "jaune", "noir", "blanc", "rose", "gris", "marron", "orange"] },
            { answer: "blanche", options: ["blanche", "noire", "rouge", "bleue", "verte", "jaune", "grise", "rose", "marron", "violette"] }
          ],
          explainFr: "Soleil jaune • Herbe (fém.) verte • Ciel bleu • Neige (fém.) blanche !",
          explainEn: "Sun = yellow (jaune), Grass = green (verte), Sky = blue (bleu), Snow = white (blanche)!"
        },
        {
          type: "input",
          illustration: "classe",
          promptFr: "Écris le nombre 10 en toutes lettres (niveau CP) :",
          promptEn: "Spell the number 10 in French:",
          questionFr: "J'ai ___ doigts sur mes deux mains. (10)",
          questionEn: "I have ten fingers on my two hands.",
          audioText: "J'ai dix doigts sur mes deux mains.",
          answer: "dix",
          hintFr: "3 lettres : d-i-x",
          hintEn: "3 letters: d-i-x",
          explainFr: "Un, deux, trois, quatre, cinq, six, sept, huit, neuf, DIX !",
          explainEn: "10 = dix (pronounced 'dees' when alone!)."
        }
      ]
    },

    {
      id: "noms_pluriels",
      category: "noms",
      badge: "Noms & Pluriels",
      iconIllustration: "maison",
      titleFr: "Les Noms : Vocabulaire (78+ Mots) & Pluriels",
      titleEn: "French Nouns (78+ Words), Gender & Plurals",
      descFr: "Apprends des dizaines de noms du quotidien + les règles du pluriel (-s, -x, -aux, yeux).",
      descEn: "Master dozens of everyday French nouns plus regular & irregular plurals!",
      questions: [
        {
          type: "dropdown",
          illustration: "maison",
          promptFr: "Pluriels célèbres (attention aux mots en -AL, -EAU et œil !) :",
          promptEn: "Famous French plurals (watch -al, -eau, and 'œil'!):",
          templateFr: "Un cheval → des {0} • Un gâteau → des {1} • Un œil → des {2} • Un chat → des {3}.",
          questionEn: "Horses • Cakes • Eyes • Cats",
          audioText: "Des chevaux, des gâteaux, des yeux, des chats.",
          blanks: [
            { answer: "chevaux", options: ["chevaux", "chevals", "cheval", "cheveaux", "chiens", "chats", "oiseaux", "animaux", "gâteaux", "yeux"] },
            { answer: "gâteaux", options: ["gâteaux", "gâteaus", "gâteau", "gâtaux", "tableaux", "oiseaux", "chevaux", "pommes", "pains", "fruits"] },
            { answer: "yeux", options: ["yeux", "œils", "œil", "oreilles", "nez", "mains", "pieds", "chevaux", "oiseaux", "visages"] },
            { answer: "chats", options: ["chats", "chat", "chatx", "chaux", "chiens", "souris", "lapins", "chevaux", "vaches", "oiseaux"] }
          ],
          explainFr: "Cheval → chevaux (-aux) • Gâteau → gâteaux (-x) • Œil → yeux (irrégulier !) • Chat → chats (+s).",
          explainEn: "Cheval → chevaux • Gâteau → gâteaux (-eau takes -x) • Œil → yeux (famous irregular!) • Chat → chats."
        },
        {
          type: "dropdown",
          illustration: "maison",
          promptFr: "Les pièces et objets de la maison (10 choix par menu déroulant !) :",
          promptEn: "Rooms and furniture at home (10 options per dropdown!):",
          templateFr: "Je dors dans mon {0}, je prépare le repas dans la {1}, j'ouvre la {2} et je joue dans le {3}.",
          questionEn: "I sleep in my bed, I make dinner in the kitchen, I open the window, and I play in the garden.",
          audioText: "Je dors dans mon lit, je prépare le repas dans la cuisine, j'ouvre la fenêtre et je joue dans le jardin.",
          blanks: [
            { answer: "lit", options: ["lit", "jardin", "table", "chaise", "porte", "fenêtre", "cuisine", "chambre", "bus", "stylo"] },
            { answer: "cuisine", options: ["cuisine", "chambre", "rue", "montagne", "mer", "trousse", "chaussure", "pluie", "lune", "pomme"] },
            { answer: "fenêtre", options: ["fenêtre", "table", "chaise", "lit", "arbre", "fleur", "soleil", "vache", "souris", "neige"] },
            { answer: "jardin", options: ["jardin", "lit", "crayon", "fromage", "lait", "poulet", "manteau", "train", "cahier", "tableau"] }
          ],
          explainFr: "Le lit (bed) • La cuisine (kitchen) • La fenêtre (window) • Le jardin (garden) !",
          explainEn: "Le lit (bed) • La cuisine (kitchen) • La fenêtre (window) • Le jardin (garden)!"
        },
        {
          type: "mcq",
          illustration: "classe",
          promptFr: "Quel est le pluriel de « un tableau » (a board / painting) ?",
          promptEn: "What is the plural of 'un tableau'?",
          questionFr: "Dans cette salle, il y a deux ___.",
          questionEn: "In this room, there are two boards.",
          audioText: "Dans cette salle, il y a deux tableaux.",
          options: ["tableaux", "tableaus", "tableau", "tablaux"],
          answer: "tableaux",
          explainFr: "Les noms en -EAU prennent un X au pluriel : un tableau → des tableaux, un oiseau → des oiseaux !",
          explainEn: "Nouns ending in -eau take a silent -x in the plural: un tableau → des tableaux!"
        },
        {
          type: "mcq",
          illustration: "maison",
          promptFr: "Quel est le pluriel de « une souris » (a mouse) ?",
          promptEn: "What is the plural of 'une souris' (ends in -s already!)?",
          questionFr: "Le chat regarde trois ___.",
          questionEn: "The cat is watching three mice.",
          audioText: "Le chat regarde trois souris.",
          options: ["souris", "sourises", "souriss", "souriaux"],
          answer: "souris",
          explainFr: "Quand un nom finit déjà par S, X ou Z au singulier (souris, nez, bus), il ne change pas au pluriel !",
          explainEn: "Nouns already ending in -s, -x, or -z stay identical in the plural: une souris → trois souris!"
        }
      ]
    },

    {
      id: "nature_mots",
      category: "grammaire",
      badge: "Grammaire",
      iconIllustration: "classe",
      titleFr: "Grammaire : Nom, Verbe, Adjectif & Déterminant",
      titleEn: "Grammar: Nouns, Verbs, Adjectives & Determiners",
      descFr: "Reconnaître la nature des mots dans une phrase (comme en cours de français !).",
      descEn: "Identify word classes (noun, verb, adjective, determiner, pronoun) just like in French class!",
      questions: [
        {
          type: "dropdown",
          illustration: "classe",
          promptFr: "Dans la phrase « Le petit chat mange », quelle est la nature de chaque mot ?",
          promptEn: "In 'Le petit chat mange' (The small cat eats), pick the word class of each word:",
          templateFr: "« Le » est un {0} • « petit » est un {1} • « chat » est un {2} • « mange » est un {3}.",
          questionEn: "'Le' = determiner • 'petit' = adjective • 'chat' = noun • 'mange' = verb",
          audioText: "Le petit chat mange.",
          blanks: [
            { answer: "déterminant", options: ["déterminant", "nom", "verbe", "adjectif", "pronom", "préposition", "adverbe", "phrase"] },
            { answer: "adjectif", options: ["adjectif", "nom", "verbe", "déterminant", "pronom", "préposition", "adverbe", "sujet"] },
            { answer: "nom", options: ["nom", "verbe", "adjectif", "déterminant", "pronom", "préposition", "adverbe", "article"] },
            { answer: "verbe", options: ["verbe", "nom", "adjectif", "déterminant", "pronom", "préposition", "adverbe", "pluriel"] }
          ],
          explainFr: "Déterminant (Le) + Adjectif (petit) + Nom (chat) + Verbe (mange) : la structure de base du français !",
          explainEn: "Determiner (Le) + Adjective (petit) + Noun (chat) + Verb (mange)!"
        },
        {
          type: "mcq",
          illustration: "jouer",
          promptFr: "Trouve le VERBE (l'action) dans cette phrase :",
          promptEn: "Find the VERB (the action word) in this sentence:",
          questionFr: "« Les élèves courent vite dans la grande cour. »",
          questionEn: "'The students run fast in the big schoolyard.'",
          audioText: "Les élèves courent vite dans la grande cour.",
          options: ["courent", "élèves", "grande", "cour"],
          answer: "courent",
          explainFr: "« Courent » vient du verbe COURIR (to run) : c'est l'action de la phrase !",
          explainEn: "'Courent' comes from the verb COURIR (to run) — it is the action!"
        },
        {
          type: "mcq",
          illustration: "manger",
          promptFr: "Trouve le NOM COMMUN (objet / aliment) dans cette phrase :",
          promptEn: "Find the NOUN (object/food) among these choices:",
          questionFr: "« Je mange une délicieuse pomme rouge. »",
          questionEn: "'I eat a delicious red apple.'",
          audioText: "Je mange une délicieuse pomme rouge.",
          options: ["pomme", "mange", "délicieuse", "rouge"],
          answer: "pomme",
          explainFr: "« Pomme » est le nom (précédé du déterminant « une »). « Délicieuse » et « rouge » sont des adjectifs !",
          explainEn: "'Pomme' (apple) is the noun. 'Délicieuse' & 'rouge' are adjectives, and 'mange' is the verb!"
        },
        {
          type: "mcq",
          illustration: "maison",
          promptFr: "Trouve l'ADJECTIF (le mot qui décrit) dans cette phrase :",
          promptEn: "Find the ADJECTIVE (the describing word) in this sentence:",
          questionFr: "« Mon voisin habite une maison blanche. »",
          questionEn: "'My neighbour lives in a white house.'",
          audioText: "Mon voisin habite une maison blanche.",
          options: ["blanche", "habite", "maison", "voisin"],
          answer: "blanche",
          explainFr: "« Blanche » décrit comment est la maison : c'est un adjectif qualificatif !",
          explainEn: "'Blanche' (white) describes the house — it's an adjective!"
        },
        {
          type: "match",
          illustration: "classe",
          promptFr: "Relie chaque mot à sa nature grammaticale :",
          promptEn: "Match each French word to its grammatical class:",
          audioText: "Une table, parler, rapide, nous.",
          pairs: [
            { fr: "table (Nom / Noun)", en: "Désigne un objet / Thing" },
            { fr: "parler (Verbe / Verb)", en: "Désigne une action / Action" },
            { fr: "rapide (Adjectif / Adj.)", en: "Décrit un nom / Describes" },
            { fr: "nous (Pronom / Pronoun)", en: "Remplace un sujet / Subject" }
          ],
          explainFr: "Savoir distinguer Nom, Verbe, Adjectif et Pronom aide énormément pour tous les accords !",
          explainEn: "Knowing Noun vs Verb vs Adjective vs Pronoun makes French spelling & agreements 10x easier!"
        },
        {
          type: "dropdown",
          illustration: "parler",
          promptFr: "Trouve le SUJET et le VERBE dans chaque phrase :",
          promptEn: "Identify the word class of each highlighted word:",
          templateFr: "Dans « Nous jouons au foot » : « Nous » est un {0}, « jouons » est un {1}, et « foot » est un {2}.",
          questionEn: "In 'Nous jouons au foot' (We play football): pronoun, verb, noun.",
          audioText: "Nous jouons au foot.",
          blanks: [
            { answer: "pronom", options: ["pronom", "nom", "verbe", "adjectif", "déterminant", "adverbe", "pluriel", "féminin"] },
            { answer: "verbe", options: ["verbe", "nom", "adjectif", "pronom", "déterminant", "adverbe", "sujet", "objet"] },
            { answer: "nom", options: ["nom", "verbe", "adjectif", "pronom", "déterminant", "adverbe", "accent", "temps"] }
          ],
          explainFr: "« Nous » = pronom sujet • « jouons » = verbe (jouer) • « foot » = nom !",
          explainEn: "'Nous' = subject pronoun • 'jouons' = verb • 'foot' = noun!"
        },
        {
          type: "mcq",
          illustration: "classe",
          promptFr: "Imparfait (pour parler d'une habitude dans le passé : « Quand j'étais petit... ») :",
          promptEn: "Imperfect tense (past habits: 'When I was little...'):",
          questionFr: "Quand j'étais en CP, je ___ souvent au parc.",
          questionEn: "When I was in Year 2 (CP), I often played at the park.",
          audioText: "Quand j'étais en CP, je jouais souvent au parc.",
          options: ["jouais", "joue", "jouerai", "jouons"],
          answer: "jouais",
          explainFr: "À l'imparfait, les terminaisons sont toujours les mêmes pour tous les verbes : -ais, -ais, -ait, -ions, -iez, -aient !",
          explainEn: "Imperfect tense ('used to / was doing') has the same endings for ALL verbs: -ais, -ais, -ait, -ions, -iez, -aient!"
        },
        {
          type: "mcq",
          illustration: "aller",
          promptFr: "Imparfait du verbe ÊTRE :",
          promptEn: "Imperfect tense of ÊTRE (was / were):",
          questionFr: "Avant d'arriver ici, nous ___ en Angleterre.",
          questionEn: "Before arriving here, we were in England.",
          audioText: "Avant d'arriver ici, nous étions en Angleterre.",
          options: ["étions", "sommes", "serons", "étiez"],
          answer: "étions",
          explainFr: "Être à l'imparfait : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient !",
          explainEn: "Être in the imperfect: j'étais (I was), nous étions (we were), ils étaient (they were)!"
        }
      ]
    }
  ];

  // Assign clean categories to the original 7 modules in data.js
  const catMap = {
    essentiels: "verbes",
    conjugaison_present: "verbes",
    passe_futur: "verbes",
    vocabulaire: "noms",
    genre_adjectifs: "grammaire",
    dialogues: "dialogues",
    menus_deroulants: "grammaire"
  };

  window.MODULES.forEach(m => {
    m.category = catMap[m.id] || "verbes";
  });

  // Prepend the 3 new modules (CP Basics, Nouns & Plurals, Grammar/Word Classes)
  window.MODULES = [...EXTRA_MODULES, ...window.MODULES];
})();
