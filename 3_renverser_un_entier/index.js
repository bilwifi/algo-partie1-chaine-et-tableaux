// --- Orientations
// A partir d'un entier passé en paramètre,retrouner cet entier renversé
//Ici, il faut faire en sorte que la valeur retournée soit aussi un entier
// --- Exemples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reverse = n.toString().split('').reverse();
    if (n<0) {
        reverse.unshift(reverse.pop())
    }
    return parseInt(reverse.join(""));
}

// function reverseInt(n) {
//   const parseStr = n + "";
//   let str = "";
//   for (const el of parseStr.split("")) {
//     if (el !== "-") {
//       str = el + str;
//     }
//   }
//   if (n < 0) {
//       str = '-'.concat(str);
//   }
//   return parseInt(str);
// }
module.exports = reverseInt;


