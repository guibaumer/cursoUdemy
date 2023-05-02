// g = global (encontre todas)
// i = insensitive (pega maiusculas ou minusculas)
// ()() = fazer grupos
// | = ou 

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

const { texto } = require('./base');

const exp = /(Teve )(5 filhos)/i;
console.log(exp.exec(texto)); // (texto).input mostra no que estou buscando

const exp2 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = exp2.exec(texto);

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}