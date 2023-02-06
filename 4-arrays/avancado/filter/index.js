const array = [4, 5, 6, 1, 11, 55, 73, 27];


const maiorQueDez = [];
for (let numero of array) {
    if(numero > 10) {
        maiorQueDez.push(numero)
    }
}
console.log(maiorQueDez);


console.log('/////////////método filter/////////////')

function callbackFilter(valor) {
    return valor > 10;
}

const filtrados = array.filter(callbackFilter)
console.log(filtrados);

/* ou pode ser usada uma função anônima dentro do filter.

Esta é uma função anônima feita com arrow function.

const filtrados = array.filter(valor => valor > 10;);
console.log(filtrados);

*/


const segundoArray = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Maria', idade: 31 },
    { nome: 'João', idade: 17 },
    { nome: 'Antônio', idade: 88 },
    { nome: 'Paul', idade: 51},
    { nome: 'Amanda', idade: 27}
];

const array2 = segundoArray.filter((valor, indice) => {
    return segundoArray[indice].nome.length > 5;
});
console.log(array2);

/*
const array2 = segundoArray.filter(obj => obj.nome.length > 5);
console.log(array2);
*/

const maiorQue50 = segundoArray.filter(valor => valor.idade > 50);
console.log(maiorQue50) 

const nomeComA = segundoArray.filter(function(valor) {
    return valor.nome.toLowerCase().endsWith('a');
});

console.log(nomeComA)


//////////////////////////////////////////////////////////



