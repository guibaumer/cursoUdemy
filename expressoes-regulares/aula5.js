const { alfabeto } = require('./base');

// [abc] => conjunto => [^] negação
// [0-9] => range
console.log(alfabeto);

// Se um + for adicionado nas expressões abaixo, será pego os conjuntos.
// Sem o sinal, vem tudo separado.
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/\d+/g)); // shorthand do de cima
console.log(alfabeto.match(/[a-c]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[\w]+/g)); // tudo, até underline, menos sinais
console.log(alfabeto.match(/[\W]+/g)); //negação do de cima
console.log(alfabeto.match(/\s/g)); // pega espaços 