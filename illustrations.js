// Hand-drawn Franco-Belgian Ligne Claire & Watercolor Illustration Registry
// Maps every exercise & module theme to its bespoke high-resolution artwork
window.ILLUSTRATIONS = {  
// Conversations, people, être & amis  
parler: { src: "parler.jpg", alt: "Deux élèves qui discutent au collège / Two classmates talking" },  
etre: { src: "parler.jpg", alt: "Deux camarades au collège / Classmates at school" },  
ami: { src: "parler.jpg", alt: "Des amis au collège / Friends at school" },
  // Classroom, writing, reading, grammar & gender  
classe: { src: "classe.jpg", alt: "Bureau d'écolier français et tableau / French classroom desk" },  
ecrire: { src: "classe.jpg", alt: "Cahier ouvert et stylo plume / Open notebook and pen" },  
lire: { src: "classe.jpg", alt: "Livres et cahier sur un bureau / Books and notebook" },  
cahier: { src: "classe.jpg", alt: "Cahier de classe / School notebook" },  
stylo: { src: "classe.jpg", alt: "Stylo plume et règle / Fountain pen and ruler" },  
genre: { src: "classe.jpg", alt: "Fiches de grammaire sur le bureau / French grammar desk" },  
faire: { src: "classe.jpg", alt: "Devoirs et cahier de classe / Homework and notebook" },
  // Food & Canteen  
manger: { src: "manger.jpg", alt: "Croissant, baguette, fromage et pomme / French food spread" },  
cantine: { src: "manger.jpg", alt: "Repas français / French lunch" },  
avoir: { src: "manger.jpg", alt: "Goûter et repas français / French meal" },
  // Backpack, Tech & Audio  
sac: { src: "sac.jpg", alt: "Sac à dos, ordinateur, casque et cahier / School backpack and gear" },  
ordinateur: { src: "sac.jpg", alt: "Ordinateur portable et fournitures / Laptop and school supplies" },  
ecouter: { src: "sac.jpg", alt: "Casque audio et cahier / Headphones and notebook" },
  // Sports & Courtyard  
jouer: { src: "jouer.jpg", alt: "Match de foot dans la cour du collège / Football in the schoolyard" },  
courir: { src: "jouer.jpg", alt: "Sport dans la cour / Sports in the courtyard" },
  // House, Animals & Home  
maison: { src: "maison.jpg", alt: "Maison française avec un chat et un chien / French house with cat and dog" },  
chat: { src: "maison.jpg", alt: "Chat roux devant la maison / Ginger cat in the garden" },  
chien: { src: "maison.jpg", alt: "Chien devant la maison / Friendly dog in the garden" },  
dormir: { src: "maison.jpg", alt: "Maison calme / Cozy house" },
  // Street, Bicycle, Weather & Time  
aller: { src: "aller.jpg", alt: "Vélo rouge dans une rue ensoleillée / Red bicycle on a French street" },  
velo: { src: "aller.jpg", alt: "Vélo rouge / Red bicycle" },  
soleil: { src: "aller.jpg", alt: "Rue française sous le soleil / Sunny French street" },  
pluie: { src: "aller.jpg", alt: "Rue française et météo / French street and sky" },  
temps: { src: "aller.jpg", alt: "Chemin et voyage dans le temps / Journey and timeline" },
  // Final Score Trophy  
trophy: { src: "trophy.jpg", alt: "Trophée de réussite / Achievement trophy" }
};
window.getIllustration = function (key) {  
const item = window.ILLUSTRATIONS[key] || window.ILLUSTRATIONS.parler;  
return `<img src="${item.src}" alt="${item.alt}" loading="lazy" />`;
};
