// NÚMEROS

let num = 7;
let numDois = 2.5;
let num3 = 10.463849271;
let numErro = 10 * "no"

console.log(num.toString() + numDois.toString()); //transformar em STRING
console.log(num + numDois); //o valor não foi alterado definitivamente
console.log(num.toString(2)); //mostra sua representação binária
console.log(num3.toFixed(2)); //arredonda o valor
console.log(Number.isInteger(num)); //retorna valor booleano. O número é inteiro?
console.log(Number.isNaN(numErro));


let decimal = 0.7;
let decimal2 = 0.1;
let decimais = decimal + decimal2    //o valor fica estranho
console.log(decimais)


decimais = Number(decimais.toFixed(2)); //arredonda de 0.79... para 0.8
console.log(decimais) //mostra o valor
console.log(Number.isInteger(decimais)); //é inteiro?







