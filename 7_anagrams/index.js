// --- Orientations
// Vérifier si 2 chaines passées en paramètre sont des anagrames
// 2 chaines sont des anagrames si elle utilise les mêmes lettre même si c'est
//  dans un ordre différent.
// Donc, on doit avoir les mêmes lettres et en quantité égales
// -Ne pas considérer les espaces/ponctuations seulement les charactères
// -Il n'y a pas de differences entre lettres majuscules et minuscules
//  c'est-à-dire considerer les lettres majuscule comme si c'était des lettre en minuscules
// --- Exemples
//   anagrams('Lisangola', 'Lissangola') --> False
//   anagrams('mbote! NABINO!', 'mbote nabino') --> True
//   anagrams('Salut KDA', 'salUt Kda!') --> True

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  for (const char of stringA.split("")) {
    if (!stringB.includes(char)) return false;
    if (
      compterNombreCaractere(char, stringA) !==
      compterNombreCaractere(char, stringB)
    )
      return false;
  }
  return true;
}
function compterNombreCaractere(char, sentence) {
  let nbr = 0;
  if (!sentence.includes(char)) return nbr;
  for (const el of sentence.split("")) {
    if (el === char) {
      nbr++;
    }
  }
  return nbr;
}

module.exports = anagrams;
