// --- Orientations
// Pour une chaine des caractères données, retouner true si c'est un palindrome
// ou false si ce n'est pas un palindrome.  Les palindromes sont des chaines
// qui forment le même mote si elles sont renversées.Il ne faut *Pas* include les espaces
// et ponctuations pour determiner si une chaine est un palindrome ou pas.
// --- Exemples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const regex = /[\s]{2,}/g
    const strReverse = str.replace(regex,'').split('').reverse().join("");
    return str.replace(regex,'') === strReverse;
}

// function palindrome(str) {
//   const regex = /[\s]{2,}/g;
//   const strTrim = str.replace(regex, "");
//   let strReverse = "";
//   for (const char of strTrim.split("")) {
//     strReverse = char + strReverse;
//   }
//   return strTrim === strReverse;
// }


module.exports = palindrome;
