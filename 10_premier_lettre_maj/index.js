// --- Orientations
// Ecrire une fonction qui prend en paramètre une phase
// Et met en majuscule toutes les premières lettres de chaque mots
// Et ensuite retourne la nouvelle phrase avec toutes les premières lettres
// de chaque mot en majuscule
// --- Exemples
//   capitalize('je suis dans la joie') --> 'Je Suis Dans La Joie'
//   capitalize('l'homme de la montagne') --> 'L'homme De La Montagne'
//   capitalize('il faut faire très attention') --> 'Il Faut Faire Très Attention'

function capitalize(str) {
  let strCapitalize = "";
  for (const subStr of str.split(" ")) {
    let strSplit = subStr.split("");
    strSplit[0]= strSplit[0].toUpperCase();
    strCapitalize += strSplit.join("") + " ";
  }
  return strCapitalize.trim();
}

module.exports = capitalize;
