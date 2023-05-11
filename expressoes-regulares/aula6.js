const { cpfs, cpfs2 } = require('./base');

// ^ começa com
// $ termina com
// [^negação]
// m = multiline

/*
Se eu for usar inicia com e termina com, o "m" não resolve o 
problema de não achar tudo, pois não podem haver espaços no
início de cada linha de qualquer forma.
*/

const cpf =  '254.224.877-45';
const exp = /^(\d{3}\.){2}\d{3}-\d{2}$/gm; 
/* 
se tiver qualquer coisa antes ou depois, 
essa expressão não acharia o que precisa. Use pra campo de formulário.
*/

// console.log(cpf.match(exp))

console.log(cpfs2.match(exp))

