// Massive Bilingual Bank: 30 Essential French Verbs + 90+ Nouns & CP-to-Collège Basics
// Used both in the searchable Reference Memo AND in dynamic quiz generators (Dropdowns, MCQ, Input, Match)

window.VERB_TABLES = [
  // === 1. LES INDISPENSABLES ===
  {
    id: "etre", infinitive: "être", meaningEn: "to be", group: "Essentiel (irrégulier)", illustration: "etre",
    tipFr: "Sert à se décrire (Je suis anglais) et pour le passé des verbes de mouvement.",
    tipEn: "Used to describe yourself ('Je suis anglais') and for motion verbs in the past.",
    forms: [
      { proFr: "je", verb: "suis", fullFr: "je suis", en: "I am", exFr: "Je suis en classe.", exEn: "I am in class." },
      { proFr: "tu", verb: "es", fullFr: "tu es", en: "you are", exFr: "Tu es mon ami.", exEn: "You are my friend." },
      { proFr: "il / elle / on", verb: "est", fullFr: "il est", en: "he / she is", exFr: "Elle est contente.", exEn: "She is happy." },
      { proFr: "nous", verb: "sommes", fullFr: "nous sommes", en: "we are", exFr: "Nous sommes prêts.", exEn: "We are ready." },
      { proFr: "vous", verb: "êtes", fullFr: "vous êtes", en: "you are", exFr: "Vous êtes au collège.", exEn: "You are at school." },
      { proFr: "ils / elles", verb: "sont", fullFr: "ils sont", en: "they are", exFr: "Ils sont sympas.", exEn: "They are nice." }
    ]
  },
  {
    id: "avoir", infinitive: "avoir", meaningEn: "to have", group: "Essentiel (irrégulier)", illustration: "avoir",
    tipFr: "Sert aussi pour l'âge (J'ai 13 ans), la faim (J'ai faim) et le passé composé.",
    tipEn: "Also used for age ('J'ai 13 ans'), hunger ('J'ai faim'), and past tense.",
    forms: [
      { proFr: "j'", verb: "ai", fullFr: "j'ai", en: "I have", exFr: "J'ai un chien.", exEn: "I have a dog." },
      { proFr: "tu", verb: "as", fullFr: "tu as", en: "you have", exFr: "Tu as un stylo ?", exEn: "Do you have a pen?" },
      { proFr: "il / elle / on", verb: "a", fullFr: "il a", en: "he / she has", exFr: "On a faim.", exEn: "We are hungry." },
      { proFr: "nous", verb: "avons", fullFr: "nous avons", en: "we have", exFr: "Nous avons cours.", exEn: "We have class." },
      { proFr: "vous", verb: "avez", fullFr: "vous avez", en: "you have", exFr: "Vous avez des livres.", exEn: "You have books." },
      { proFr: "ils / elles", verb: "ont", fullFr: "ils ont", en: "they have", exFr: "Ils ont treize ans.", exEn: "They are thirteen." }
    ]
  },
  {
    id: "aller", infinitive: "aller", meaningEn: "to go", group: "Essentiel (irrégulier)", illustration: "aller",
    tipFr: "Aller + infinitif forme aussi le futur proche (Je vais jouer = I am going to play).",
    tipEn: "Aller + infinitive also makes the near future ('Je vais jouer' = I'm going to play).",
    forms: [
      { proFr: "je", verb: "vais", fullFr: "je vais", en: "I go", exFr: "Je vais à l'école.", exEn: "I go to school." },
      { proFr: "tu", verb: "vas", fullFr: "tu vas", en: "you go", exFr: "Comment tu vas ?", exEn: "How are you doing?" },
      { proFr: "il / elle / on", verb: "va", fullFr: "il va", en: "he / she goes", exFr: "On va à la cantine.", exEn: "We go to the cafeteria." },
      { proFr: "nous", verb: "allons", fullFr: "nous allons", en: "we go", exFr: "Nous allons au parc.", exEn: "We go to the park." },
      { proFr: "vous", verb: "allez", fullFr: "vous allez", en: "you go", exFr: "Vous allez bien ?", exEn: "Are you well?" },
      { proFr: "ils / elles", verb: "vont", fullFr: "ils vont", en: "they go", exFr: "Ils vont en ville.", exEn: "They go to town." }
    ]
  },
  {
    id: "faire", infinitive: "faire", meaningEn: "to do / make", group: "Essentiel (irrégulier)", illustration: "faire",
    tipFr: "Attention : « vous faites » et « ils font ». Utilisé pour le sport et la météo.",
    tipEn: "Watch 'vous faites' and 'ils font'. Also used for sports and weather.",
    forms: [
      { proFr: "je", verb: "fais", fullFr: "je fais", en: "I do", exFr: "Je fais mes devoirs.", exEn: "I do my homework." },
      { proFr: "tu", verb: "fais", fullFr: "tu fais", en: "you do", exFr: "Tu fais du vélo.", exEn: "You ride a bike." },
      { proFr: "il / elle / on", verb: "fait", fullFr: "il fait", en: "he / she does", exFr: "Il fait beau.", exEn: "The weather is nice." },
      { proFr: "nous", verb: "faisons", fullFr: "nous faisons", en: "we do", exFr: "Nous faisons du sport.", exEn: "We do sports." },
      { proFr: "vous", verb: "faites", fullFr: "vous faites", en: "you do", exFr: "Vous faites un dessin.", exEn: "You make a drawing." },
      { proFr: "ils / elles", verb: "font", fullFr: "ils font", en: "they do", exFr: "Ils font un gâteau.", exEn: "They make a cake." }
    ]
  },
  {
    id: "dire", infinitive: "dire", meaningEn: "to say / tell", group: "3e groupe (irrégulier)", illustration: "parler",
    tipFr: "Attention à « vous dites » (comme vous faites !).",
    tipEn: "Watch 'vous dites' (irregular, just like 'vous faites'!).",
    forms: [
      { proFr: "je", verb: "dis", fullFr: "je dis", en: "I say", exFr: "Je dis bonjour.", exEn: "I say hello." },
      { proFr: "tu", verb: "dis", fullFr: "tu dis", en: "you say", exFr: "Qu'est-ce que tu dis ?", exEn: "What are you saying?" },
      { proFr: "il / elle / on", verb: "dit", fullFr: "on dit", en: "he / she says", exFr: "Comment on dit ?", exEn: "How do you say it?" },
      { proFr: "nous", verb: "disons", fullFr: "nous disons", en: "we say", exFr: "Nous disons merci.", exEn: "We say thank you." },
      { proFr: "vous", verb: "dites", fullFr: "vous dites", en: "you say", exFr: "Vous dites la vérité.", exEn: "You tell the truth." },
      { proFr: "ils / elles", verb: "disent", fullFr: "ils disent", en: "they say", exFr: "Ils disent au revoir.", exEn: "They say goodbye." }
    ]
  },
  {
    id: "pouvoir", infinitive: "pouvoir", meaningEn: "can / to be able to", group: "3e groupe (modal)", illustration: "classe",
    tipFr: "Prend un X avec je et tu : je peux, tu peux !",
    tipEn: "Ends in X for je & tu: 'je peux', 'tu peux'!",
    forms: [
      { proFr: "je", verb: "peux", fullFr: "je peux", en: "I can", exFr: "Je peux entrer ?", exEn: "May I come in?" },
      { proFr: "tu", verb: "peux", fullFr: "tu peux", en: "you can", exFr: "Tu peux m'aider ?", exEn: "Can you help me?" },
      { proFr: "il / elle / on", verb: "peut", fullFr: "il peut", en: "he / she can", exFr: "On peut jouer.", exEn: "We can play." },
      { proFr: "nous", verb: "pouvons", fullFr: "nous pouvons", en: "we can", exFr: "Nous pouvons lire.", exEn: "We can read." },
      { proFr: "vous", verb: "pouvez", fullFr: "vous pouvez", en: "you can", exFr: "Vous pouvez répéter ?", exEn: "Can you repeat?" },
      { proFr: "ils / elles", verb: "peuvent", fullFr: "ils peuvent", en: "they can", exFr: "Ils peuvent venir.", exEn: "They can come." }
    ]
  },
  {
    id: "vouloir", infinitive: "vouloir", meaningEn: "to want", group: "3e groupe (modal)", illustration: "manger",
    tipFr: "« Je voudrais » = I would like (version polie de « Je veux »).",
    tipEn: "'Je voudrais' = I would like (the polite version of 'Je veux').",
    forms: [
      { proFr: "je", verb: "veux", fullFr: "je veux", en: "I want", exFr: "Je veux apprendre.", exEn: "I want to learn." },
      { proFr: "tu", verb: "veux", fullFr: "tu veux", en: "you want", exFr: "Tu veux une pomme ?", exEn: "Do you want an apple?" },
      { proFr: "il / elle / on", verb: "veut", fullFr: "elle veut", en: "he / she wants", exFr: "Elle veut un chat.", exEn: "She wants a cat." },
      { proFr: "nous", verb: "voulons", fullFr: "nous voulons", en: "we want", exFr: "Nous voulons jouer.", exEn: "We want to play." },
      { proFr: "vous", verb: "voulez", fullFr: "vous voulez", en: "you want", exFr: "Vous voulez de l'eau ?", exEn: "Do you want water?" },
      { proFr: "ils / elles", verb: "veulent", fullFr: "ils veulent", en: "they want", exFr: "Ils veulent gagner.", exEn: "They want to win." }
    ]
  },
  {
    id: "devoir", infinitive: "devoir", meaningEn: "must / to have to", group: "3e groupe (modal)", illustration: "classe",
    tipFr: "Sert à dire « must / have to » (Je dois travailler).",
    tipEn: "Means 'must / have to' ('Je dois travailler' = I have to work).",
    forms: [
      { proFr: "je", verb: "dois", fullFr: "je dois", en: "I must", exFr: "Je dois partir.", exEn: "I must leave." },
      { proFr: "tu", verb: "dois", fullFr: "tu dois", en: "you must", exFr: "Tu dois écouter.", exEn: "You must listen." },
      { proFr: "il / elle / on", verb: "doit", fullFr: "il doit", en: "he / she must", exFr: "Il doit réviser.", exEn: "He has to revise." },
      { proFr: "nous", verb: "devons", fullFr: "nous devons", en: "we must", exFr: "Nous devons courir.", exEn: "We have to run." },
      { proFr: "vous", verb: "devez", fullFr: "vous devez", en: "you must", exFr: "Vous devez lire.", exEn: "You must read." },
      { proFr: "ils / elles", verb: "doivent", fullFr: "ils doivent", en: "they must", exFr: "Ils doivent finir.", exEn: "They must finish." }
    ]
  },
  {
    id: "savoir", infinitive: "savoir", meaningEn: "to know (a fact / skill)", group: "3e groupe (irrégulier)", illustration: "classe",
    tipFr: "« Je ne sais pas » = I don't know !",
    tipEn: "'Je ne sais pas' = I don't know!",
    forms: [
      { proFr: "je", verb: "sais", fullFr: "je sais", en: "I know", exFr: "Je sais nager.", exEn: "I know how to swim." },
      { proFr: "tu", verb: "sais", fullFr: "tu sais", en: "you know", exFr: "Tu sais la réponse ?", exEn: "Do you know the answer?" },
      { proFr: "il / elle / on", verb: "sait", fullFr: "il sait", en: "he / she knows", exFr: "Elle sait compter.", exEn: "She knows how to count." },
      { proFr: "nous", verb: "savons", fullFr: "nous savons", en: "we know", exFr: "Nous savons lire.", exEn: "We know how to read." },
      { proFr: "vous", verb: "savez", fullFr: "vous savez", en: "you know", exFr: "Vous savez où c'est ?", exEn: "Do you know where it is?" },
      { proFr: "ils / elles", verb: "savent", fullFr: "ils savent", en: "they know", exFr: "Ils savent parler français.", exEn: "They know how to speak French." }
    ]
  },
  {
    id: "voir", infinitive: "voir", meaningEn: "to see", group: "3e groupe", illustration: "aller",
    tipFr: "Attention : « nous voyons » et « vous voyez » prennent un Y !",
    tipEn: "Notice the Y in 'nous voyons' and 'vous voyez'!",
    forms: [
      { proFr: "je", verb: "vois", fullFr: "je vois", en: "I see", exFr: "Je vois le tableau.", exEn: "I see the board." },
      { proFr: "tu", verb: "vois", fullFr: "tu vois", en: "you see", exFr: "Tu vois mon chat ?", exEn: "Do you see my cat?" },
      { proFr: "il / elle / on", verb: "voit", fullFr: "il voit", en: "he / she sees", exFr: "On voit la mer.", exEn: "We see the sea." },
      { proFr: "nous", verb: "voyons", fullFr: "nous voyons", en: "we see", exFr: "Nous voyons nos amis.", exEn: "We see our friends." },
      { proFr: "vous", verb: "voyez", fullFr: "vous voyez", en: "you see", exFr: "Vous voyez bien ?", exEn: "Can you see clearly?" },
      { proFr: "ils / elles", verb: "voient", fullFr: "ils voient", en: "they see", exFr: "Ils voient le bus.", exEn: "They see the bus." }
    ]
  },
  {
    id: "venir", infinitive: "venir", meaningEn: "to come", group: "3e groupe", illustration: "aller",
    tipFr: "« Je viens d'Angleterre » = I come from England.",
    tipEn: "'Je viens d'Angleterre' = I come from England.",
    forms: [
      { proFr: "je", verb: "viens", fullFr: "je viens", en: "I come", exFr: "Je viens de Londres.", exEn: "I come from London." },
      { proFr: "tu", verb: "viens", fullFr: "tu viens", en: "you come", exFr: "Tu viens avec nous ?", exEn: "Are you coming with us?" },
      { proFr: "il / elle / on", verb: "vient", fullFr: "il vient", en: "he / she comes", exFr: "Il vient à vélo.", exEn: "He comes by bike." },
      { proFr: "nous", verb: "venons", fullFr: "nous venons", en: "we come", exFr: "Nous venons demain.", exEn: "We are coming tomorrow." },
      { proFr: "vous", verb: "venez", fullFr: "vous venez", en: "you come", exFr: "Vous venez d'où ?", exEn: "Where do you come from?" },
      { proFr: "ils / elles", verb: "viennent", fullFr: "ils viennent", en: "they come", exFr: "Ils viennent ensemble.", exEn: "They come together." }
    ]
  },
  {
    id: "prendre", infinitive: "prendre", meaningEn: "to take", group: "3e groupe", illustration: "cantine",
    tipFr: "Comprendre (understand) et apprendre (learn) se conjuguent exactement pareil !",
    tipEn: "'Comprendre' (understand) & 'apprendre' (learn) follow the exact same pattern!",
    forms: [
      { proFr: "je", verb: "prends", fullFr: "je prends", en: "I take", exFr: "Je prends le bus.", exEn: "I take the bus." },
      { proFr: "tu", verb: "prends", fullFr: "tu prends", en: "you take", exFr: "Tu prends un fruit ?", exEn: "Are you taking a fruit?" },
      { proFr: "il / elle / on", verb: "prend", fullFr: "il prend", en: "he / she takes", exFr: "Il prend son sac.", exEn: "He takes his bag." },
      { proFr: "nous", verb: "prenons", fullFr: "nous prenons", en: "we take", exFr: "Nous prenons nos cahiers.", exEn: "We take our notebooks." },
      { proFr: "vous", verb: "prenez", fullFr: "vous prenez", en: "you take", exFr: "Vous prenez le train.", exEn: "You take the train." },
      { proFr: "ils / elles", verb: "prennent", fullFr: "ils prennent", en: "they take", exFr: "Ils prennent un plateau.", exEn: "They take a tray." }
    ]
  },
  {
    id: "comprendre", infinitive: "comprendre", meaningEn: "to understand", group: "3e groupe (comme prendre)", illustration: "classe",
    tipFr: "Indispensable en cours : « Je comprends » / « Je ne comprends pas » !",
    tipEn: "Essential in class: 'Je comprends' (I understand) / 'Je ne comprends pas'.",
    forms: [
      { proFr: "je", verb: "comprends", fullFr: "je comprends", en: "I understand", exFr: "Je comprends la consigne.", exEn: "I understand the instruction." },
      { proFr: "tu", verb: "comprends", fullFr: "tu comprends", en: "you understand", exFr: "Tu comprends le texte ?", exEn: "Do you understand the text?" },
      { proFr: "il / elle / on", verb: "comprend", fullFr: "il comprend", en: "he / she understands", exFr: "Elle comprend vite.", exEn: "She understands quickly." },
      { proFr: "nous", verb: "comprenons", fullFr: "nous comprenons", en: "we understand", exFr: "Nous comprenons la règle.", exEn: "We understand the rule." },
      { proFr: "vous", verb: "comprenez", fullFr: "vous comprenez", en: "you understand", exFr: "Vous comprenez ?", exEn: "Do you understand?" },
      { proFr: "ils / elles", verb: "comprennent", fullFr: "ils comprennent", en: "they understand", exFr: "Ils comprennent bien.", exEn: "They understand well." }
    ]
  },
  {
    id: "apprendre", infinitive: "apprendre", meaningEn: "to learn", group: "3e groupe (comme prendre)", illustration: "classe",
    tipFr: "Sert aussi à dire « apprendre par cœur » (learn by heart).",
    tipEn: "Follows 'prendre': j'apprends, tu apprends, il apprend...",
    forms: [
      { proFr: "j'", verb: "apprends", fullFr: "j'apprends", en: "I learn", exFr: "J'apprends le français.", exEn: "I am learning French." },
      { proFr: "tu", verb: "apprends", fullFr: "tu apprends", en: "you learn", exFr: "Tu apprends de nouveaux mots.", exEn: "You learn new words." },
      { proFr: "il / elle / on", verb: "apprend", fullFr: "on apprend", en: "he / she learns", exFr: "On apprend ensemble.", exEn: "We learn together." },
      { proFr: "nous", verb: "apprenons", fullFr: "nous apprenons", en: "we learn", exFr: "Nous apprenons la leçon.", exEn: "We learn the lesson." },
      { proFr: "vous", verb: "apprenez", fullFr: "vous apprenez", en: "you learn", exFr: "Vous apprenez vite.", exEn: "You learn fast." },
      { proFr: "ils / elles", verb: "apprennent", fullFr: "ils apprennent", en: "they learn", exFr: "Ils apprennent l'anglais.", exEn: "They learn English." }
    ]
  },
  {
    id: "mettre", infinitive: "mettre", meaningEn: "to put / to wear", group: "3e groupe", illustration: "sac",
    tipFr: "Sert pour ranger (mettre dans le sac) et pour les vêtements (mettre un manteau).",
    tipEn: "Used for putting things away ('mettre dans le sac') and wearing clothes.",
    forms: [
      { proFr: "je", verb: "mets", fullFr: "je mets", en: "I put", exFr: "Je mets mon manteau.", exEn: "I put on my coat." },
      { proFr: "tu", verb: "mets", fullFr: "tu mets", en: "you put", exFr: "Tu mets ton cahier ici.", exEn: "You put your notebook here." },
      { proFr: "il / elle / on", verb: "met", fullFr: "il met", en: "he / she puts", exFr: "Elle met la table.", exEn: "She sets the table." },
      { proFr: "nous", verb: "mettons", fullFr: "nous mettons", en: "we put", exFr: "Nous mettons nos chaussures.", exEn: "We put on our shoes." },
      { proFr: "vous", verb: "mettez", fullFr: "vous mettez", en: "you put", exFr: "Vous mettez vos livres.", exEn: "You put your books." },
      { proFr: "ils / elles", verb: "mettent", fullFr: "ils mettent", en: "they put", exFr: "Ils mettent leurs sacs.", exEn: "They put their bags." }
    ]
  },

  // === 2. VERBES DU 1er GROUPE (-ER) ===
  {
    id: "parler", infinitive: "parler", meaningEn: "to speak", group: "1er groupe (-ER)", illustration: "parler",
    tipFr: "Modèle classique en -ER : -e, -es, -e, -ons, -ez, -ent.",
    tipEn: "Classic -ER pattern: -e, -es, -e, -ons, -ez, -ent.",
    forms: [
      { proFr: "je", verb: "parle", fullFr: "je parle", en: "I speak", exFr: "Je parle français.", exEn: "I speak French." },
      { proFr: "tu", verb: "parles", fullFr: "tu parles", en: "you speak", exFr: "Tu parles bien.", exEn: "You speak well." },
      { proFr: "il / elle / on", verb: "parle", fullFr: "il parle", en: "he / she speaks", exFr: "Elle parle avec Léo.", exEn: "She talks with Léo." },
      { proFr: "nous", verb: "parlons", fullFr: "nous parlons", en: "we speak", exFr: "Nous parlons en classe.", exEn: "We speak in class." },
      { proFr: "vous", verb: "parlez", fullFr: "vous parlez", en: "you speak", exFr: "Vous parlez anglais ?", exEn: "Do you speak English?" },
      { proFr: "ils / elles", verb: "parlent", fullFr: "ils parlent", en: "they speak", exFr: "Ils parlent ensemble.", exEn: "They talk together." }
    ]
  },
  {
    id: "aimer", infinitive: "aimer", meaningEn: "to like / love", group: "1er groupe (-ER)", illustration: "ami",
    tipFr: "Devant la voyelle A, « je » devient « j' » : J'aime !",
    tipEn: "Before vowel A, 'je' becomes 'j'': J'aime!",
    forms: [
      { proFr: "j'", verb: "aime", fullFr: "j'aime", en: "I like", exFr: "J'aime le chocolat.", exEn: "I like chocolate." },
      { proFr: "tu", verb: "aimes", fullFr: "tu aimes", en: "you like", exFr: "Tu aimes le sport ?", exEn: "Do you like sports?" },
      { proFr: "il / elle / on", verb: "aime", fullFr: "il aime", en: "he / she likes", exFr: "Il aime les animaux.", exEn: "He likes animals." },
      { proFr: "nous", verb: "aimons", fullFr: "nous aimons", en: "we like", exFr: "Nous aimons la musique.", exEn: "We like music." },
      { proFr: "vous", verb: "aimez", fullFr: "vous aimez", en: "you like", exFr: "Vous aimez lire ?", exEn: "Do you like reading?" },
      { proFr: "ils / elles", verb: "aiment", fullFr: "ils aiment", en: "they like", exFr: "Elles aiment dessiner.", exEn: "They like drawing." }
    ]
  },
  {
    id: "manger", infinitive: "manger", meaningEn: "to eat", group: "1er groupe (-GER)", illustration: "manger",
    tipFr: "Avec « nous », on garde le E : « nous mangeons ».",
    tipEn: "Keep the E with 'nous': 'nous mangeons'.",
    forms: [
      { proFr: "je", verb: "mange", fullFr: "je mange", en: "I eat", exFr: "Je mange un croissant.", exEn: "I eat a croissant." },
      { proFr: "tu", verb: "manges", fullFr: "tu manges", en: "you eat", exFr: "Tu manges une pomme.", exEn: "You eat an apple." },
      { proFr: "il / elle / on", verb: "mange", fullFr: "on mange", en: "he / she eats", exFr: "On mange à midi.", exEn: "We eat at noon." },
      { proFr: "nous", verb: "mangeons", fullFr: "nous mangeons", en: "we eat", exFr: "Nous mangeons ensemble.", exEn: "We eat together." },
      { proFr: "vous", verb: "mangez", fullFr: "vous mangez", en: "you eat", exFr: "Vous mangez du pain.", exEn: "You eat bread." },
      { proFr: "ils / elles", verb: "mangent", fullFr: "ils mangent", en: "they eat", exFr: "Ils mangent à la cantine.", exEn: "They eat at the cafeteria." }
    ]
  },
  {
    id: "jouer", infinitive: "jouer", meaningEn: "to play", group: "1er groupe (-ER)", illustration: "jouer",
    tipFr: "Jouer AU foot (sport) • Jouer DE la guitare (instrument).",
    tipEn: "'Jouer au' for sports, 'jouer de' for instruments.",
    forms: [
      { proFr: "je", verb: "joue", fullFr: "je joue", en: "I play", exFr: "Je joue au foot.", exEn: "I play football." },
      { proFr: "tu", verb: "joues", fullFr: "tu joues", en: "you play", exFr: "Tu joues aux cartes.", exEn: "You play cards." },
      { proFr: "il / elle / on", verb: "joue", fullFr: "il joue", en: "he / she plays", exFr: "Il joue dans la cour.", exEn: "He plays in the yard." },
      { proFr: "nous", verb: "jouons", fullFr: "nous jouons", en: "we play", exFr: "Nous jouons ensemble.", exEn: "We play together." },
      { proFr: "vous", verb: "jouez", fullFr: "vous jouez", en: "you play", exFr: "Vous jouez bien.", exEn: "You play well." },
      { proFr: "ils / elles", verb: "jouent", fullFr: "ils jouent", en: "they play", exFr: "Ils jouent au basket.", exEn: "They play basketball." }
    ]
  },
  {
    id: "ecouter", infinitive: "écouter", meaningEn: "to listen to", group: "1er groupe (-ER)", illustration: "ecouter",
    tipFr: "Pas de préposition après écouter : « J'écoute la musique ».",
    tipEn: "No 'to' needed after écouter: 'J'écoute la musique'.",
    forms: [
      { proFr: "j'", verb: "écoute", fullFr: "j'écoute", en: "I listen", exFr: "J'écoute la radio.", exEn: "I listen to the radio." },
      { proFr: "tu", verb: "écoutes", fullFr: "tu écoutes", en: "you listen", exFr: "Tu écoutes le prof.", exEn: "You listen to the teacher." },
      { proFr: "il / elle / on", verb: "écoute", fullFr: "elle écoute", en: "he / she listens", exFr: "Elle écoute une chanson.", exEn: "She listens to a song." },
      { proFr: "nous", verb: "écoutons", fullFr: "nous écoutons", en: "we listen", exFr: "Nous écoutons bien.", exEn: "We listen carefully." },
      { proFr: "vous", verb: "écoutez", fullFr: "vous écoutez", en: "you listen", exFr: "Vous écoutez en classe.", exEn: "You listen in class." },
      { proFr: "ils / elles", verb: "écoutent", fullFr: "ils écoutent", en: "they listen", exFr: "Ils écoutent un podcast.", exEn: "They listen to a podcast." }
    ]
  },
  {
    id: "regarder", infinitive: "regarder", meaningEn: "to watch / look at", group: "1er groupe (-ER)", illustration: "sac",
    tipFr: "Comme écouter, pas besoin de 'at' : « Je regarde le tableau ».",
    tipEn: "No 'at' needed: 'Je regarde le tableau' = I look at the board.",
    forms: [
      { proFr: "je", verb: "regarde", fullFr: "je regarde", en: "I watch", exFr: "Je regarde un film.", exEn: "I watch a film." },
      { proFr: "tu", verb: "regardes", fullFr: "tu regardes", en: "you watch", exFr: "Tu regardes le ciel.", exEn: "You look at the sky." },
      { proFr: "il / elle / on", verb: "regarde", fullFr: "il regarde", en: "he / she watches", exFr: "Il regarde la télé.", exEn: "He watches TV." },
      { proFr: "nous", verb: "regardons", fullFr: "nous regardons", en: "we watch", exFr: "Nous regardons le match.", exEn: "We watch the match." },
      { proFr: "vous", verb: "regardez", fullFr: "vous regardez", en: "you watch", exFr: "Vous regardez l'image.", exEn: "You look at the picture." },
      { proFr: "ils / elles", verb: "regardent", fullFr: "ils regardent", en: "they watch", exFr: "Ils regardent le tableau.", exEn: "They look at the board." }
    ]
  },
  {
    id: "habiter", infinitive: "habiter", meaningEn: "to live (in a place)", group: "1er groupe (-ER)", illustration: "maison",
    tipFr: "Le H est muet : on dit « j'habite » !",
    tipEn: "The H is silent, so 'je' becomes 'j'habite'!",
    forms: [
      { proFr: "j'", verb: "habite", fullFr: "j'habite", en: "I live", exFr: "J'habite en France.", exEn: "I live in France." },
      { proFr: "tu", verb: "habites", fullFr: "tu habites", en: "you live", exFr: "Tu habites où ?", exEn: "Where do you live?" },
      { proFr: "il / elle / on", verb: "habite", fullFr: "elle habite", en: "he / she lives", exFr: "Elle habite près du parc.", exEn: "She lives near the park." },
      { proFr: "nous", verb: "habitons", fullFr: "nous habitons", en: "we live", exFr: "Nous habitons une maison.", exEn: "We live in a house." },
      { proFr: "vous", verb: "habitez", fullFr: "vous habitez", en: "you live", exFr: "Vous habitez en ville ?", exEn: "Do you live in town?" },
      { proFr: "ils / elles", verb: "habitent", fullFr: "ils habitent", en: "they live", exFr: "Ils habitent à Lyon.", exEn: "They live in Lyon." }
    ]
  },
  {
    id: "travailler", infinitive: "travailler", meaningEn: "to work / study", group: "1er groupe (-ER)", illustration: "classe",
    tipFr: "Au collège, « travailler » veut aussi dire étudier / faire ses devoirs.",
    tipEn: "At school, 'travailler' also means studying / working on exercises.",
    forms: [
      { proFr: "je", verb: "travaille", fullFr: "je travaille", en: "I work", exFr: "Je travaille bien.", exEn: "I work well." },
      { proFr: "tu", verb: "travailles", fullFr: "tu travailles", en: "you work", exFr: "Tu travailles en groupe.", exEn: "You work in a group." },
      { proFr: "il / elle / on", verb: "travaille", fullFr: "il travaille", en: "he / she works", exFr: "Il travaille sur l'ordi.", exEn: "He works on the laptop." },
      { proFr: "nous", verb: "travaillons", fullFr: "nous travaillons", en: "we work", exFr: "Nous travaillons ensemble.", exEn: "We work together." },
      { proFr: "vous", verb: "travaillez", fullFr: "vous travaillez", en: "you work", exFr: "Vous travaillez en silence.", exEn: "You work quietly." },
      { proFr: "ils / elles", verb: "travaillent", fullFr: "ils travaillent", en: "they work", exFr: "Ils travaillent au CDI.", exEn: "They study at the library." }
    ]
  },
  {
    id: "donner", infinitive: "donner", meaningEn: "to give", group: "1er groupe (-ER)", illustration: "parler",
    tipFr: "Régulier en -ER, très utilisé au quotidien !",
    tipEn: "Regular -ER verb, super common in daily life!",
    forms: [
      { proFr: "je", verb: "donne", fullFr: "je donne", en: "I give", exFr: "Je donne mon cahier.", exEn: "I give my notebook." },
      { proFr: "tu", verb: "donnes", fullFr: "tu donnes", en: "you give", exFr: "Tu donnes la réponse.", exEn: "You give the answer." },
      { proFr: "il / elle / on", verb: "donne", fullFr: "il donne", en: "he / she gives", exFr: "Le prof donne un exercice.", exEn: "The teacher gives an exercise." },
      { proFr: "nous", verb: "donnons", fullFr: "nous donnons", en: "we give", exFr: "Nous donnons un coup de main.", exEn: "We lend a hand." },
      { proFr: "vous", verb: "donnez", fullFr: "vous donnez", en: "you give", exFr: "Vous donnez votre avis.", exEn: "You give your opinion." },
      { proFr: "ils / elles", verb: "donnent", fullFr: "ils donnent", en: "they give", exFr: "Ils donnent un cadeau.", exEn: "They give a gift." }
    ]
  },

  // === 3. 2e GROUPE (-IR) & AUTRES VERBES DU QUOTIDIEN ===
  {
    id: "finir", infinitive: "finir", meaningEn: "to finish", group: "2e groupe (-IR)", illustration: "ecrire",
    tipFr: "Modèle du 2e groupe : -is, -is, -it, -issons, -issez, -issent.",
    tipEn: "2nd group -IR pattern: -is, -is, -it, -issons, -issez, -issent.",
    forms: [
      { proFr: "je", verb: "finis", fullFr: "je finis", en: "I finish", exFr: "Je finis mon devoir.", exEn: "I finish my homework." },
      { proFr: "tu", verb: "finis", fullFr: "tu finis", en: "you finish", exFr: "Tu finis à 16h.", exEn: "You finish at 4 PM." },
      { proFr: "il / elle / on", verb: "finit", fullFr: "il finit", en: "he / she finishes", exFr: "Le cours finit bientôt.", exEn: "Class finishes soon." },
      { proFr: "nous", verb: "finissons", fullFr: "nous finissons", en: "we finish", exFr: "Nous finissons l'exercice.", exEn: "We finish the exercise." },
      { proFr: "vous", verb: "finissez", fullFr: "vous finissez", en: "you finish", exFr: "Vous finissez la page.", exEn: "You finish the page." },
      { proFr: "ils / elles", verb: "finissent", fullFr: "ils finissent", en: "they finish", exFr: "Ils finissent le repas.", exEn: "They finish lunch." }
    ]
  },
  {
    id: "choisir", infinitive: "choisir", meaningEn: "to choose", group: "2e groupe (-IR)", illustration: "cantine",
    tipFr: "Se conjugue exactement comme « finir » !",
    tipEn: "Follows the exact same pattern as 'finir'!",
    forms: [
      { proFr: "je", verb: "choisis", fullFr: "je choisis", en: "I choose", exFr: "Je choisis une pomme.", exEn: "I choose an apple." },
      { proFr: "tu", verb: "choisis", fullFr: "tu choisis", en: "you choose", exFr: "Tu choisis ta place.", exEn: "You choose your seat." },
      { proFr: "il / elle / on", verb: "choisit", fullFr: "il choisit", en: "he / she chooses", exFr: "Elle choisit un livre.", exEn: "She chooses a book." },
      { proFr: "nous", verb: "choisissons", fullFr: "nous choisissons", en: "we choose", exFr: "Nous choisissons un film.", exEn: "We choose a film." },
      { proFr: "vous", verb: "choisissez", fullFr: "vous choisissez", en: "you choose", exFr: "Vous choisissez la couleur.", exEn: "You choose the colour." },
      { proFr: "ils / elles", verb: "choisissent", fullFr: "ils choisissent", en: "they choose", exFr: "Ils choisissent leur équipe.", exEn: "They choose their team." }
    ]
  },
  {
    id: "lire", infinitive: "lire", meaningEn: "to read", group: "3e groupe", illustration: "lire",
    tipFr: "Prend un S avec nous/vous/ils : nous lisons, vous lisez, ils lisent.",
    tipEn: "Adds an S in the plural: nous lisons, vous lisez, ils lisent.",
    forms: [
      { proFr: "je", verb: "lis", fullFr: "je lis", en: "I read", exFr: "Je lis une BD.", exEn: "I read a comic book." },
      { proFr: "tu", verb: "lis", fullFr: "tu lis", en: "you read", exFr: "Tu lis le texte.", exEn: "You read the text." },
      { proFr: "il / elle / on", verb: "lit", fullFr: "il lit", en: "he / she reads", exFr: "Elle lit un roman.", exEn: "She reads a novel." },
      { proFr: "nous", verb: "lisons", fullFr: "nous lisons", en: "we read", exFr: "Nous lisons ensemble.", exEn: "We read together." },
      { proFr: "vous", verb: "lisez", fullFr: "vous lisez", en: "you read", exFr: "Vous lisez la question.", exEn: "You read the question." },
      { proFr: "ils / elles", verb: "lisent", fullFr: "ils lisent", en: "they read", exFr: "Ils lisent au CDI.", exEn: "They read at the library." }
    ]
  },
  {
    id: "ecrire", infinitive: "écrire", meaningEn: "to write", group: "3e groupe", illustration: "ecrire",
    tipFr: "Prend un V au pluriel : nous écrivons, vous écrivez, ils écrivent !",
    tipEn: "Adds a V in the plural: nous écrivons, vous écrivez, ils écrivent!",
    forms: [
      { proFr: "j'", verb: "écris", fullFr: "j'écris", en: "I write", exFr: "J'écris la date.", exEn: "I write the date." },
      { proFr: "tu", verb: "écris", fullFr: "tu écris", en: "you write", exFr: "Tu écris au stylo.", exEn: "You write with a pen." },
      { proFr: "il / elle / on", verb: "écrit", fullFr: "il écrit", en: "he / she writes", exFr: "Il écrit un message.", exEn: "He writes a message." },
      { proFr: "nous", verb: "écrivons", fullFr: "nous écrivons", en: "we write", exFr: "Nous écrivons la leçon.", exEn: "We write the lesson." },
      { proFr: "vous", verb: "écrivez", fullFr: "vous écrivez", en: "you write", exFr: "Vous écrivez votre nom.", exEn: "You write your name." },
      { proFr: "ils / elles", verb: "écrivent", fullFr: "ils écrivent", en: "they write", exFr: "Ils écrivent une histoire.", exEn: "They write a story." }
    ]
  },
  {
    id: "dormir", infinitive: "dormir", meaningEn: "to sleep", group: "3e groupe (-IR)", illustration: "dormir",
    tipFr: "Au singulier le M disparaît : je dors, tu dors, il dort (mais nous dormons).",
    tipEn: "The M disappears in singular: je dors, tu dors, il dort (returns in nous dormons).",
    forms: [
      { proFr: "je", verb: "dors", fullFr: "je dors", en: "I sleep", exFr: "Je dors bien.", exEn: "I sleep well." },
      { proFr: "tu", verb: "dors", fullFr: "tu dors", en: "you sleep", exFr: "Tu dors déjà ?", exEn: "Are you already asleep?" },
      { proFr: "il / elle / on", verb: "dort", fullFr: "il dort", en: "he / she sleeps", exFr: "Le chat dort.", exEn: "The cat is sleeping." },
      { proFr: "nous", verb: "dormons", fullFr: "nous dormons", en: "we sleep", exFr: "Nous dormons tôt.", exEn: "We sleep early." },
      { proFr: "vous", verb: "dormez", fullFr: "vous dormez", en: "you sleep", exFr: "Vous dormez huit heures.", exEn: "You sleep eight hours." },
      { proFr: "ils / elles", verb: "dorment", fullFr: "ils dorment", en: "they sleep", exFr: "Ils dorment encore.", exEn: "They are still sleeping." }
    ]
  },
  {
    id: "boire", infinitive: "boire", meaningEn: "to drink", group: "3e groupe", illustration: "manger",
    tipFr: "Attention : « nous buvons » et « vous buvez » !",
    tipEn: "Watch 'nous buvons' and 'vous buvez'!",
    forms: [
      { proFr: "je", verb: "bois", fullFr: "je bois", en: "I drink", exFr: "Je bois de l'eau.", exEn: "I drink water." },
      { proFr: "tu", verb: "bois", fullFr: "tu bois", en: "you drink", exFr: "Tu bois un jus d'orange.", exEn: "You drink orange juice." },
      { proFr: "il / elle / on", verb: "boit", fullFr: "il boit", en: "he / she drinks", exFr: "Elle boit du lait.", exEn: "She drinks milk." },
      { proFr: "nous", verb: "buvons", fullFr: "nous buvons", en: "we drink", exFr: "Nous buvons après le sport.", exEn: "We drink after sports." },
      { proFr: "vous", verb: "buvez", fullFr: "vous buvez", en: "you drink", exFr: "Vous buvez un chocolat chaud.", exEn: "You drink hot chocolate." },
      { proFr: "ils / elles", verb: "boivent", fullFr: "ils boivent", en: "they drink", exFr: "Ils boivent de l'eau fraîche.", exEn: "They drink cold water." }
    ]
  },
  {
    id: "partir", infinitive: "partir", meaningEn: "to leave", group: "3e groupe (-IR)", illustration: "aller",
    tipFr: "Au singulier le T disparaît devant S : je pars, tu pars, il part (mais nous partons).",
    tipEn: "Drop the T for je/tu: je pars, tu pars, il part (nous partons).",
    forms: [
      { proFr: "je", verb: "pars", fullFr: "je pars", en: "I leave", exFr: "Je pars à huit heures.", exEn: "I leave at 8 o'clock." },
      { proFr: "tu", verb: "pars", fullFr: "tu pars", en: "you leave", exFr: "Tu pars en vacances.", exEn: "You go on holiday." },
      { proFr: "il / elle / on", verb: "part", fullFr: "il part", en: "he / she leaves", exFr: "Le train part maintenant.", exEn: "The train is leaving now." },
      { proFr: "nous", verb: "partons", fullFr: "nous partons", en: "we leave", exFr: "Nous partons ensemble.", exEn: "We leave together." },
      { proFr: "vous", verb: "partez", fullFr: "vous partez", en: "you leave", exFr: "Vous partez quand ?", exEn: "When are you leaving?" },
      { proFr: "ils / elles", verb: "partent", fullFr: "ils partent", en: "they leave", exFr: "Ils partent à l'école.", exEn: "They leave for school." }
    ]
  },
  {
    id: "ouvrir", infinitive: "ouvrir", meaningEn: "to open", group: "3e groupe (-IR mais terminaisons en -ER !)", illustration: "classe",
    tipFr: "Astuce : bien qu'il finisse en -IR, « ouvrir » se conjugue comme un verbe en -ER (-e, -es, -e) !",
    tipEn: "Neat trick: even though it ends in -IR, 'ouvrir' takes regular -ER endings (-e, -es, -e)!",
    forms: [
      { proFr: "j'", verb: "ouvre", fullFr: "j'ouvre", en: "I open", exFr: "J'ouvre mon livre.", exEn: "I open my book." },
      { proFr: "tu", verb: "ouvres", fullFr: "tu ouvres", en: "you open", exFr: "Tu ouvres la fenêtre.", exEn: "You open the window." },
      { proFr: "il / elle / on", verb: "ouvre", fullFr: "il ouvre", en: "he / she opens", exFr: "Elle ouvre la porte.", exEn: "She opens the door." },
      { proFr: "nous", verb: "ouvrons", fullFr: "nous ouvrons", en: "we open", exFr: "Nous ouvrons nos cahiers.", exEn: "We open our notebooks." },
      { proFr: "vous", verb: "ouvrez", fullFr: "vous ouvrez", en: "you open", exFr: "Vous ouvrez vos livres page dix.", exEn: "You open your books to page ten." },
      { proFr: "ils / elles", verb: "ouvrent", fullFr: "ils ouvrent", en: "they open", exFr: "Ils ouvrent leurs sacs.", exEn: "They open their bags." }
    ]
  },
  {
    id: "courir", infinitive: "courir", meaningEn: "to run", group: "3e groupe", illustration: "jouer",
    tipFr: "Au présent : je cours, tu cours, il court, nous courons, vous courez, ils courent.",
    tipEn: "Present tense: je cours, tu cours, il court, nous courons, vous courez, ils courent.",
    forms: [
      { proFr: "je", verb: "cours", fullFr: "je cours", en: "I run", exFr: "Je cours vite.", exEn: "I run fast." },
      { proFr: "tu", verb: "cours", fullFr: "tu cours", en: "you run", exFr: "Tu cours en EPS.", exEn: "You run in PE class." },
      { proFr: "il / elle / on", verb: "court", fullFr: "il court", en: "he / she runs", exFr: "Il court dans la cour.", exEn: "He runs in the schoolyard." },
      { proFr: "nous", verb: "courons", fullFr: "nous courons", en: "we run", exFr: "Nous courons au stade.", exEn: "We run at the stadium." },
      { proFr: "vous", verb: "courez", fullFr: "vous courez", en: "you run", exFr: "Vous courez ensemble.", exEn: "You run together." },
      { proFr: "ils / elles", verb: "courent", fullFr: "ils courent", en: "they run", exFr: "Ils courent après le bus.", exEn: "They run after the bus." }
    ]
  },
  {
    id: "sortir", infinitive: "sortir", meaningEn: "to go out / take out", group: "3e groupe (-IR)", illustration: "aller",
    tipFr: "Comme « partir » : le T disparaît avec je/tu (je sors, tu sors, il sort).",
    tipEn: "Like 'partir': drop the T for je/tu ('je sors', 'tu sors', 'il sort').",
    forms: [
      { proFr: "je", verb: "sors", fullFr: "je sors", en: "I go out", exFr: "Je sors mon cahier.", exEn: "I take out my notebook." },
      { proFr: "tu", verb: "sors", fullFr: "tu sors", en: "you go out", exFr: "Tu sors à 16h ?", exEn: "Do you get out at 4 PM?" },
      { proFr: "il / elle / on", verb: "sort", fullFr: "elle sort", en: "he / she goes out", exFr: "Elle sort avec ses amis.", exEn: "She goes out with her friends." },
      { proFr: "nous", verb: "sortons", fullFr: "nous sortons", en: "we go out", exFr: "Nous sortons dans la cour.", exEn: "We go out to the yard." },
      { proFr: "vous", verb: "sortez", fullFr: "vous sortez", en: "you go out", exFr: "Vous sortez vos stylos.", exEn: "You take out your pens." },
      { proFr: "ils / elles", verb: "sortent", fullFr: "ils sortent", en: "they go out", exFr: "Ils sortent du collège.", exEn: "They leave school." }
    ]
  },
  {
    id: "chanter", infinitive: "chanter", meaningEn: "to sing", group: "1er groupe (-ER)", illustration: "sac",
    tipFr: "Verbe régulier en -ER très facile !",
    tipEn: "Very easy regular -ER verb!",
    forms: [
      { proFr: "je", verb: "chante", fullFr: "je chante", en: "I sing", exFr: "Je chante une chanson.", exEn: "I sing a song." },
      { proFr: "tu", verb: "chantes", fullFr: "tu chantes", en: "you sing", exFr: "Tu chantes juste !", exEn: "You sing in tune!" },
      { proFr: "il / elle / on", verb: "chante", fullFr: "elle chante", en: "he / she sings", exFr: "Elle chante en musique.", exEn: "She sings in music class." },
      { proFr: "nous", verb: "chantons", fullFr: "nous chantons", en: "we sing", exFr: "Nous chantons ensemble.", exEn: "We sing together." },
      { proFr: "vous", verb: "chantez", fullFr: "vous chantez", en: "you sing", exFr: "Vous chantez bien.", exEn: "You sing well." },
      { proFr: "ils / elles", verb: "chantent", fullFr: "ils chantent", en: "they sing", exFr: "Les oiseaux chantent.", exEn: "The birds are singing." }
    ]
  },
  {
    id: "demander", infinitive: "demander", meaningEn: "to ask", group: "1er groupe (-ER)", illustration: "parler",
    tipFr: "Faux-ami : « demander » veut dire 'to ask' (et pas 'to demand' !).",
    tipEn: "False friend: 'demander' simply means 'to ask' (not 'to demand'!).",
    forms: [
      { proFr: "je", verb: "demande", fullFr: "je demande", en: "I ask", exFr: "Je demande au professeur.", exEn: "I ask the teacher." },
      { proFr: "tu", verb: "demandes", fullFr: "tu demandes", en: "you ask", exFr: "Tu demandes de l'aide.", exEn: "You ask for help." },
      { proFr: "il / elle / on", verb: "demande", fullFr: "il demande", en: "he / she asks", exFr: "Il demande son chemin.", exEn: "He asks for directions." },
      { proFr: "nous", verb: "demandons", fullFr: "nous demandons", en: "we ask", exFr: "Nous demandons la permission.", exEn: "We ask permission." },
      { proFr: "vous", verb: "demandez", fullFr: "vous demandez", en: "you ask", exFr: "Vous demandez l'heure.", exEn: "You ask the time." },
      { proFr: "ils / elles", verb: "demandent", fullFr: "ils demandent", en: "they ask", exFr: "Ils demandent un stylo.", exEn: "They ask for a pen." }
    ]
  },
  {
    id: "penser", infinitive: "penser", meaningEn: "to think", group: "1er groupe (-ER)", illustration: "classe",
    tipFr: "« Je pense que oui » = I think so !",
    tipEn: "'Je pense que oui' = I think so!",
    forms: [
      { proFr: "je", verb: "pense", fullFr: "je pense", en: "I think", exFr: "Je pense que c'est juste.", exEn: "I think it is right." },
      { proFr: "tu", verb: "penses", fullFr: "tu penses", en: "you think", exFr: "Qu'est-ce que tu penses ?", exEn: "What do you think?" },
      { proFr: "il / elle / on", verb: "pense", fullFr: "elle pense", en: "he / she thinks", exFr: "Elle pense aux vacances.", exEn: "She thinks about the holidays." },
      { proFr: "nous", verb: "pensons", fullFr: "nous pensons", en: "we think", exFr: "Nous pensons pareil.", exEn: "We think the same." },
      { proFr: "vous", verb: "pensez", fullFr: "vous pensez", en: "you think", exFr: "Vous pensez venir ?", exEn: "Do you plan to come?" },
      { proFr: "ils / elles", verb: "pensent", fullFr: "ils pensent", en: "they think", exFr: "Ils pensent à la réponse.", exEn: "They think about the answer." }
    ]
  },
  {
    id: "trouver", infinitive: "trouver", meaningEn: "to find", group: "1er groupe (-ER)", illustration: "sac",
    tipFr: "Régulier en -ER : « Je trouve que c'est super » = I find it great!",
    tipEn: "Regular -ER: 'Je trouve' = I find (also 'I think/find that...').",
    forms: [
      { proFr: "je", verb: "trouve", fullFr: "je trouve", en: "I find", exFr: "Je trouve mon stylo.", exEn: "I find my pen." },
      { proFr: "tu", verb: "trouves", fullFr: "tu trouves", en: "you find", exFr: "Tu trouves ça facile ?", exEn: "Do you find this easy?" },
      { proFr: "il / elle / on", verb: "trouve", fullFr: "il trouve", en: "he / she finds", exFr: "Il trouve la solution.", exEn: "He finds the solution." },
      { proFr: "nous", verb: "trouvons", fullFr: "nous trouvons", en: "we find", exFr: "Nous trouvons la salle.", exEn: "We find the room." },
      { proFr: "vous", verb: "trouvez", fullFr: "vous trouvez", en: "you find", exFr: "Vous trouvez le mot ?", exEn: "Can you find the word?" },
      { proFr: "ils / elles", verb: "trouvent", fullFr: "ils trouvent", en: "they find", exFr: "Ils trouvent le livre.", exEn: "They find the book." }
    ]
  }
];

// ============================================================================
// 90+ ESSENTIAL FRENCH NOUNS (CP to Collège/Lycée)
// ============================================================================
window.NOUN_BANK = [
  // École / School
  { cat: "École / School", art: "le", word: "cahier", plural: "les cahiers", en: "notebook", illus: "classe" },
  { cat: "École / School", art: "le", word: "stylo", plural: "les stylos", en: "pen", illus: "classe" },
  { cat: "École / School", art: "le", word: "crayon", plural: "les crayons", en: "pencil", illus: "classe" },
  { cat: "École / School", art: "la", word: "gomme", plural: "les gommes", en: "rubber / eraser", illus: "classe" },
  { cat: "École / School", art: "la", word: "règle", plural: "les règles", en: "ruler", illus: "classe" },
  { cat: "École / School", art: "la", word: "trousse", plural: "les trousses", en: "pencil case", illus: "sac" },
  { cat: "École / School", art: "le", word: "livre", plural: "les livres", en: "book", illus: "classe" },
  { cat: "École / School", art: "le", word: "sac à dos", plural: "les sacs à dos", en: "backpack", illus: "sac" },
  { cat: "École / School", art: "le", word: "tableau", plural: "les tableaux", en: "chalkboard / board", illus: "classe" },
  { cat: "École / School", art: "la", word: "classe", plural: "les classes", en: "classroom / class", illus: "classe" },
  { cat: "École / School", art: "l'", word: "école", plural: "les écoles", en: "school", illus: "parler" },
  { cat: "École / School", art: "le", word: "professeur", plural: "les professeurs", en: "teacher", illus: "classe" },
  { cat: "École / School", art: "l'", word: "élève", plural: "les élèves", en: "student / pupil", illus: "parler" },
  { cat: "École / School", art: "l'", word: "ordinateur", plural: "les ordinateurs", en: "computer", illus: "sac" },

  // Famille & Personnes / Family & People
  { cat: "Famille / Family", art: "la", word: "mère", plural: "les mères", en: "mother", illus: "maison" },
  { cat: "Famille / Family", art: "le", word: "père", plural: "les pères", en: "father", illus: "maison" },
  { cat: "Famille / Family", art: "le", word: "frère", plural: "les frères", en: "brother", illus: "parler" },
  { cat: "Famille / Family", art: "la", word: "sœur", plural: "les sœurs", en: "sister", illus: "parler" },
  { cat: "Famille / Family", art: "l'", word: "ami", plural: "les amis", en: "friend", illus: "parler" },
  { cat: "Famille / Family", art: "la", word: "famille", plural: "les familles", en: "family", illus: "maison" },
  { cat: "Famille / Family", art: "le", word: "garçon", plural: "les garçons", en: "boy", illus: "jouer" },
  { cat: "Famille / Family", art: "la", word: "fille", plural: "les filles", en: "girl / daughter", illus: "parler" },
  { cat: "Famille / Family", art: "l'", word: "enfant", plural: "les enfants", en: "child", illus: "jouer" },

  // Corps humain (CP) / Human Body
  { cat: "Corps / Body (CP)", art: "la", word: "tête", plural: "les têtes", en: "head", illus: "parler" },
  { cat: "Corps / Body (CP)", art: "la", word: "main", plural: "les mains", en: "hand", illus: "parler" },
  { cat: "Corps / Body (CP)", art: "le", word: "pied", plural: "les pieds", en: "foot", illus: "jouer" },
  { cat: "Corps / Body (CP)", art: "l'", word: "œil", plural: "les yeux", en: "eye", illus: "parler" },
  { cat: "Corps / Body (CP)", art: "le", word: "nez", plural: "les nez", en: "nose", illus: "parler" },
  { cat: "Corps / Body (CP)", art: "la", word: "bouche", plural: "les bouches", en: "mouth", illus: "parler" },
  { cat: "Corps / Body (CP)", art: "l'", word: "oreille", plural: "les oreilles", en: "ear", illus: "sac" },
  { cat: "Corps / Body (CP)", art: "le", word: "bras", plural: "les bras", en: "arm", illus: "jouer" },
  { cat: "Corps / Body (CP)", art: "la", word: "jambe", plural: "les jambes", en: "leg", illus: "jouer" },

  // Animaux / Animals
  { cat: "Animaux / Animals", art: "le", word: "chat", plural: "les chats", en: "cat", illus: "maison" },
  { cat: "Animaux / Animals", art: "le", word: "chien", plural: "les chiens", en: "dog", illus: "maison" },
  { cat: "Animaux / Animals", art: "l'", word: "oiseau", plural: "les oiseaux", en: "bird", illus: "maison" },
  { cat: "Animaux / Animals", art: "le", word: "cheval", plural: "les chevaux", en: "horse", illus: "maison" },
  { cat: "Animaux / Animals", art: "le", word: "poisson", plural: "les poissons", en: "fish", illus: "manger" },
  { cat: "Animaux / Animals", art: "le", word: "lapin", plural: "les lapins", en: "rabbit", illus: "maison" },
  { cat: "Animaux / Animals", art: "la", word: "souris", plural: "les souris", en: "mouse", illus: "maison" },
  { cat: "Animaux / Animals", art: "la", word: "vache", plural: "les vaches", en: "cow", illus: "maison" },

  // Maison / Home
  { cat: "Maison / Home", art: "la", word: "maison", plural: "les maisons", en: "house", illus: "maison" },
  { cat: "Maison / Home", art: "la", word: "chambre", plural: "les chambres", en: "bedroom", illus: "maison" },
  { cat: "Maison / Home", art: "la", word: "cuisine", plural: "les cuisines", en: "kitchen", illus: "manger" },
  { cat: "Maison / Home", art: "la", word: "table", plural: "les tables", en: "table", illus: "classe" },
  { cat: "Maison / Home", art: "la", word: "chaise", plural: "les chaises", en: "chair", illus: "classe" },
  { cat: "Maison / Home", art: "le", word: "lit", plural: "les lits", en: "bed", illus: "maison" },
  { cat: "Maison / Home", art: "la", word: "porte", plural: "les portes", en: "door", illus: "maison" },
  { cat: "Maison / Home", art: "la", word: "fenêtre", plural: "les fenêtres", en: "window", illus: "maison" },
  { cat: "Maison / Home", art: "le", word: "jardin", plural: "les jardins", en: "garden", illus: "maison" },

  // Nourriture / Food
  { cat: "Nourriture / Food", art: "le", word: "pain", plural: "les pains", en: "bread", illus: "manger" },
  { cat: "Nourriture / Food", art: "le", word: "fromage", plural: "les fromages", en: "cheese", illus: "manger" },
  { cat: "Nourriture / Food", art: "la", word: "pomme", plural: "les pommes", en: "apple", illus: "manger" },
  { cat: "Nourriture / Food", art: "la", word: "banane", plural: "les bananes", en: "banana", illus: "manger" },
  { cat: "Nourriture / Food", art: "l'", word: "eau", plural: "les eaux", en: "water", illus: "manger" },
  { cat: "Nourriture / Food", art: "le", word: "lait", plural: "les laits", en: "milk", illus: "manger" },
  { cat: "Nourriture / Food", art: "le", word: "gâteau", plural: "les gâteaux", en: "cake", illus: "manger" },
  { cat: "Nourriture / Food", art: "le", word: "croissant", plural: "les croissants", en: "croissant", illus: "manger" },
  { cat: "Nourriture / Food", art: "la", word: "fraise", plural: "les fraises", en: "strawberry", illus: "manger" },
  { cat: "Nourriture / Food", art: "le", word: "poulet", plural: "les poulets", en: "chicken", illus: "manger" },

  // Nature & Météo / Nature & Weather
  { cat: "Nature / Nature", art: "le", word: "soleil", plural: "les soleils", en: "sun", illus: "aller" },
  { cat: "Nature / Nature", art: "la", word: "lune", plural: "les lunes", en: "moon", illus: "aller" },
  { cat: "Nature / Nature", art: "la", word: "pluie", plural: "les pluies", en: "rain", illus: "aller" },
  { cat: "Nature / Nature", art: "la", word: "neige", plural: "les neiges", en: "snow", illus: "aller" },
  { cat: "Nature / Nature", art: "le", word: "vent", plural: "les vents", en: "wind", illus: "aller" },
  { cat: "Nature / Nature", art: "l'", word: "arbre", plural: "les arbres", en: "tree", illus: "maison" },
  { cat: "Nature / Nature", art: "la", word: "fleur", plural: "les fleurs", en: "flower", illus: "maison" },
  { cat: "Nature / Nature", art: "la", word: "mer", plural: "les mers", en: "sea", illus: "aller" },
  { cat: "Nature / Nature", art: "la", word: "montagne", plural: "les montagnes", en: "mountain", illus: "aller" },

  // Ville, Vêtements & Transports / Town, Clothes & Transport
  { cat: "Ville & Vie / Daily", art: "la", word: "rue", plural: "les rues", en: "street", illus: "aller" },
  { cat: "Ville & Vie / Daily", art: "la", word: "ville", plural: "les villes", en: "city / town", illus: "aller" },
  { cat: "Ville & Vie / Daily", art: "le", word: "vélo", plural: "les vélos", en: "bicycle", illus: "aller" },
  { cat: "Ville & Vie / Daily", art: "la", word: "voiture", plural: "les voitures", en: "car", illus: "aller" },
  { cat: "Ville & Vie / Daily", art: "le", word: "train", plural: "les trains", en: "train", illus: "aller" },
  { cat: "Ville & Vie / Daily", art: "le", word: "bus", plural: "les bus", en: "bus", illus: "aller" },
  { cat: "Ville & Vie / Daily", art: "le", word: "manteau", plural: "les manteaux", en: "coat", illus: "sac" },
  { cat: "Ville & Vie / Daily", art: "la", word: "chaussure", plural: "les chaussures", en: "shoe", illus: "jouer" },
  { cat: "Ville & Vie / Daily", art: "le", word: "ballon", plural: "les ballons", en: "ball", illus: "jouer" },
  { cat: "Ville & Vie / Daily", art: "la", word: "musique", plural: "les musiques", en: "music", illus: "sac" }
];

// ============================================================================
// DYNAMIC NOUN GENERATOR (Endless Vocabulary, Gender & Plural Exercises!)
// ============================================================================
window.generateDynamicNounQuestions = function (count) {
  const bank = [...window.NOUN_BANK];
  for (let i = bank.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bank[i], bank[j]] = [bank[j], bank[i]];
  }

  const out = [];
  const chosen = bank.slice(0, count);

  chosen.forEach((item, idx) => {
    const mode = idx % 4; // 0 = 10-option dropdown, 1 = gender le/la/l', 2 = input spelling, 3 = match 4 nouns
    const fullSing = item.art === "l'" ? `l'${item.word}` : `${item.art} ${item.word}`;

    if (mode === 0) {
      // 10-choice dropdown for translating a noun!
      const opts = new Set([fullSing]);
      for (const other of bank) {
        if (opts.size >= 10) break;
        const f = other.art === "l'" ? `l'${other.word}` : `${other.art} ${other.word}`;
        opts.add(f);
      }
      out.push({
        type: "dropdown",
        illustration: item.illus,
        promptFr: `Nom (${item.cat}) : choisis la bonne traduction dans le menu déroulant (10 choix) :`,
        promptEn: `Noun (${item.cat}): pick the right French word from the 10-option dropdown:`,
        templateFr: `En français, « ${item.en} » se dit : {0}.`,
        questionEn: `${item.en} (singular — plural in French: ${item.plural})`,
        blanks: [{ answer: fullSing, options: Array.from(opts) }],
        explainFr: `${fullSing} = ${item.en} • Au pluriel : ${item.plural}.`,
        explainEn: `'${fullSing}' means '${item.en}' (plural: '${item.plural}').`
      });
    } else if (mode === 1) {
      out.push({
        type: "mcq",
        illustration: item.illus,
        promptFr: `Genre du nom au singulier (${item.cat}) : choisis le bon article (le, la ou l') :`,
        promptEn: `Singular noun gender: choose the right article (le, la, or l'):`,
        questionFr: `___ ${item.word}  (singulier)`,
        questionEn: `${item.en} (singular)`,
        options: ["le", "la", "l'", "les"],
        answer: item.art,
        explainFr: `Au singulier, on dit « ${fullSing} » (pluriel : ${item.plural}).`,
        explainEn: `In the singular, the right article is '${item.art}' → '${fullSing}' (plural: '${item.plural}').`
      });
    } else if (mode === 2) {
      out.push({
        type: "input",
        illustration: item.illus,
        promptFr: `Écris ce nom en français (sans l'article) :`,
        promptEn: `Type the French noun for "${item.en}" (without the article):`,
        questionFr: `${item.art === "l'" ? "l'" : item.art + " "}___`,
        questionEn: `${item.en} (${item.cat})`,
        answer: item.word,
        hintFr: `${item.word.length} lettres, commence par « ${item.word[0]}... »`,
        hintEn: `${item.word.length} letters, starts with '${item.word[0]}...'`,
        explainFr: `Exact : ${fullSing} = ${item.en} !`,
        explainEn: `Correct: '${fullSing}' = ${item.en}!`
      });
    } else {
      const group = [item];
      for (const other of bank) {
        if (group.length >= 4) break;
        if (other.word !== item.word) group.push(other);
      }
      const pairs = group.map(g => ({
        fr: g.art === "l'" ? `l'${g.word}` : `${g.art} ${g.word}`,
        en: g.en
      }));
      out.push({
        type: "match",
        illustration: item.illus,
        promptFr: "Relie ces 4 noms français à leur traduction anglaise :",
        promptEn: "Match these 4 French nouns with their English translation:",
        pairs,
        explainFr: "Bien joué ! Retiens bien l'article (le / la / l') avec chaque nom.",
        explainEn: "Great! Always memorize the article (le / la / l') together with the noun."
      });
    }
  });

  return out;
};
