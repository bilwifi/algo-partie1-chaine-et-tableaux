// --- Orientations
// A partir d'une chaine des caractères donnée, retourner la chaine
//renversée
// --- Exemples
//   reverse('claude') === 'edualc'
//   reverse('thesy') === 'yseht'
//   reverse('Bonjour!') === '!ruojnoB'

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

function reverse(str) {
    const chaineReverse = [];
    for (const char of str.split('')) {
        chaineReverse.unshift(char);
    }
    return chaineReverse.join('');
}

module.exports = reverse;
