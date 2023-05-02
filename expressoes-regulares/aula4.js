// * = 0 ou n vezes. {0,}
// + = 1 ou n vezes. {1,}
// ? = 0 ou 1 vezes. {0,1}
// \ = caractere de escape
// {n, m} minimo de vezes e maximo de vezes; {,10} de zero a dez

const { html, texto } = require('./base');

const exp = /<.+>.+<\/.+>/gi; // greedy - não vê o fechamento de tags

console.log(html.match(exp));

const exp2 = /<.+?>.+?<\/.+?>/gi; // non-greedy  - fecha tags

console.log(html.match(exp2))