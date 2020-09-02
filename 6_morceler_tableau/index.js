// --- Orientations
//A partir d'un tableau passé en parametre et la taille par morceau
//diviser le tableau en plusieurs sous-tableau(matrice)
//Pour tous les sous-tableau(matrice) est de taille égale que celle définie en paramètre
// --- Exemples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const newArray = []
    for (let index = 0; index < array.length; index+=size) {
        newArray.push(array.slice(index,(index+(size))));
    }
    return newArray;
}

// function chunk(array, size) {
//   const newArray = [];
//   for (let index = 0; index < array.length; index += size) {
//     let tab = [];
//     for (let j = index; j < index + size; j++) {
//       if (!array[j]) break;
//       tab.push(array[j]);
//     }
//     newArray.push(tab);
//   }
//   return newArray;
// }
module.exports = chunk;
