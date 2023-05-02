const { texto } = require('./base');

const exp = /João|Maria/gi; //dessa forma, acha todos (g)
console.log(texto.match(exp)); //aqui só mostra

console.log(texto.replace(/João/ig, 'Felipe')); //usa uma função do js com expressoes para mudar no texto joão por felipe

/////////////
console.log('-')
console.log('DAQUI PRA BAIXO É OUTRA COISA');
console.log('-')
////////////

console.log(texto.replace(/(João|Maria)/ig, '"$1"')); //adiciona coisas naquilo que foi encontrado, nesse caso add aspas. O cifrão com 1 representa o "texto base"
console.log(texto.replace(/(João|Maria)/ig, function(input) {
    return input.toUpperCase();
}));

// NADA DISSO ALTEROU O TEXTO ORIGINAL
