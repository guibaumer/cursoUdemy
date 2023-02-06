//reduce
const numeros = [1, 5, 4, 7, 9, 11, 12, 28];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);


//filtrando apenas os valores pares da const "numeros"
console.log('Apenas os pares:')
const pares = numeros.filter((valor) => (valor % 2 === 0));
console.log(pares);
//retornar array com os dobros dos mesmos valores
console.log('Valores dobrados:');
const dobros = numeros.map(valor => valor * 2)
console.log(dobros)


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Maria', idade: 31 },
    { nome: 'João', idade: 17 },
    { nome: 'Antônio', idade: 88 },
    { nome: 'Paul', idade: 51},
    { nome: 'Amanda', idade: 27}
];
//retornar mais velho
const older = pessoas.reduce(function(acumulador,valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(older);


//SOMA DO DOBRO DE TODOS OS PARES

const zahlen = [1, 5, 4, 7, 9, 11, 24, 28];

const SDP = zahlen.filter(valor => {
    return valor % 2 === 0
}).map((valor => valor * 2)).reduce((acumulador, valor) => acumulador + valor)
console.log(SDP)
