const { cpfs, ips } = require('../base');

// console.log(cpfs);
// console.log(ips)

const exp1 = /[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]-[0-9][0-9]/g;
const teste1 = /[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}/g;
const teste2 = /([\d]{3}\.){2}[\d]{3}-[\d]{2}/g; // melhor versão
// console.log(cpfs.match(exp1)); // FUNCIONOU

const exp2 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
const teste3 = /([\d]{1,3}\.){3}[\d]{1,3}/g; // isso é forma diminuida do de cima, parece que funcionou, mas ele não tem limite de valores, então fiz uma validação com js no arquivo "teste"
// console.log(ips.match(exp2)); // PARECE QUE FUNCIONOU

