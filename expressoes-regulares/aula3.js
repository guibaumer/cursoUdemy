// * = 0 ou n vezes. {0,}
// + = 1 ou n vezes. {1,}
// ? = 0 ou 1 vezes. {0,1}
// \ = caractere de escape
// {n, m} minimo de vezes e maximo de vezes; {,10} de zero a dez
const { texto, arquivos } = require('./base');

console.log(texto);
console.log('-');

const exp = /Jo+ão+/gi;
console.log(texto.match(exp));

console.log('-');
console.log('-EXEMPLO NOVO');
console.log('-');
//EXEMPLO NOVO//////////////////////

// const exp2 = /\.(jpg|jpeg)/gi; //FAZ A MESMA COISA QUE A DE BAIXO
const exp2 = /\.jpe?g/gi; //FAZ A MESMA COISA QUE A DE CIMA

/*
for(const arquivo of arquivos) {
    const valido = arquivo.match(exp2);

    if(!valido) continue; // ativa outra volta do laço

    console.log(arquivo, valido)
}
*/

const exp3 = /\.jpe{0,1}g/gi; //isso tem o mesmo funcionamento de um "?"
for(const arquivo of arquivos) {
    const valido = arquivo.match(exp3);

    console.log(arquivo, valido)
}

const exp4 = /\.((jp|JP)(e|E)?(g|G))/g;
for(const arquivo of arquivos) {
    const valido = arquivo.match(exp4);

    console.log(arquivo, valido)
}

