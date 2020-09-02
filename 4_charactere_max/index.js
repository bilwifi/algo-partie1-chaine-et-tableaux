// --- Orientations
// A partir d'une chaine des caracteres donnée, trouver
// celle qui est utilisé la plus souvent
// --- Exemples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
  
// }

function maxChar(str) {
  const chars = {};
  for (const char of str.split("")) {
    if (chars[char]) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  }
  let max = 0;
  let maxChar = "";
  for (const char in chars) {
    if (chars.hasOwnProperty(char)) {
      if (chars[char] > max) {
        maxChar = char;
        max = chars[char];
      }
    }
  }
  return maxChar;
}
module.exports = maxChar;
