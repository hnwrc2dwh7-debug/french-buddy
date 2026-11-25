// Hand-drawn Franco-Belgian Ligne Claire & Watercolor Illustration Registry
// Maps every exercise & module theme to its bespoke high-resolution artwork in images/

window.ILLUSTRATIONS = {
  // Conversations, people, être & amis
  parler: { src: "images/parler.jpg", alt: "Deux élèves qui discutent au collège / Two classmates talking" },
  etre: { src: "images/parler.jpg", alt: "Deux camarades au collège / Classmates at school" },
  ami: { src: "images/parler.jpg", alt: "Des amis au collège / Friends at school" },

  // Classroom, writing, reading, grammar & gender
  classe: { src: "images/classe.jpg", alt: "Bureau d'écolier français et tableau / French classroom desk" },
  ecrire: { src: "images/classe.jpg", alt: "Cahier ouvert et stylo plume / Open notebook and pen" },
  lire: { src: "images/classe.jpg", alt: "Livres et cahier sur un bureau / Books and notebook" },
  cahier: { src: "images/classe.jpg", alt: "Cahier de classe / School notebook" },
  stylo: { src: "images/classe.jpg", alt: "Stylo plume et règle / Fountain pen and ruler" },
  genre: { src: "images/classe.jpg", alt: "Fiches de grammaire sur le bureau / French grammar desk" },
  faire: { src: "images/classe.jpg", alt: "Devoirs et cahier de classe / Homework and notebook" },

  // Food & Canteen
  manger: { src: "images/manger.jpg", alt: "Croissant, baguette, fromage et pomme / French food spread" },
  cantine: { src: "images/manger.jpg", alt: "Repas français / French lunch" },
  avoir: { src: "images/manger.jpg", alt: "Goûter et repas français / French meal" },

  // Backpack, Tech & Audio
  sac: { src: "images/sac.jpg", alt: "Sac à dos, ordinateur, casque et cahier / School backpack and gear" },
  ordinateur: { src: "images/sac.jpg", alt: "Ordinateur portable et fournitures / Laptop and school supplies" },
  ecouter: { src: "images/sac.jpg", alt: "Casque audio et cahier / Headphones and notebook" },

  // Sports & Courtyard
  jouer: { src: "images/jouer.jpg", alt: "Match de foot dans la cour du collège / Football in the schoolyard" },
  courir: { src: "images/jouer.jpg", alt: "Sport dans la cour / Sports in the courtyard" },

  // House, Animals & Home
  maison: { src: "images/maison.jpg", alt: "Maison française avec un chat et un chien / French house with cat and dog" },
  chat: { src: "images/maison.jpg", alt: "Chat roux devant la maison / Ginger cat in the garden" },
  chien: { src: "images/maison.jpg", alt: "Chien devant la maison / Friendly dog in the garden" },
  dormir: { src: "images/maison.jpg", alt: "Maison calme / Cozy house" },

  // Street, Bicycle, Weather & Time
  aller: { src: "images/aller.jpg", alt: "Vélo rouge dans une rue ensoleillée / Red bicycle on a French street" },
  velo: { src: "images/aller.jpg", alt: "Vélo rouge / Red bicycle" },
  soleil: { src: "images/aller.jpg", alt: "Rue française sous le soleil / Sunny French street" },
  pluie: { src: "images/aller.jpg", alt: "Rue française et météo / French street and sky" },
  temps: { src: "images/aller.jpg", alt: "Chemin et voyage dans le temps / Journey and timeline" },

  // Final Score Trophy
  trophy: { src: "images/trophy.jpg", alt: "Trophée de réussite / Achievement trophy" }
};

window.getIllustration = function (key) {
  const item = window.ILLUSTRATIONS[key] || window.ILLUSTRATIONS.parler;
  return `<img src="${item.src}" alt="${item.alt}" loading="lazy" />`;
};
