const numeros = [1, 5, 7, 8, 10, 48, 22, 50, 14];

//sempre mantem a mesma quantidade de valores do array;

 const numerosDobro = numeros.map(function(valor) {
    return valor * 2;
 });
 console.log(numerosDobro);


 const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Maria', idade: 31 },
    { nome: 'João', idade: 17 },
    { nome: 'Antônio', idade: 88 },
    { nome: 'Paul', idade: 51},
    { nome: 'Amanda', idade: 27}
];
const nome = pessoas.map(valor => valor.nome); 
console.log(nome);



const semNome = pessoas.map(function(valor) {
    delete valor.nome;
    return valor
    /*ou posso fazer assim:
    return { idade: valor.idade }; 
    */
});
console.log(semNome)


const pessoas2 = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Maria', idade: 31 },
    { nome: 'João', idade: 17 },
    { nome: 'Antônio', idade: 88 },
    { nome: 'Paul', idade: 51},
    { nome: 'Amanda', idade: 27}
];
let contador = 0;
const arrayID = pessoas2.map(function(valor) {
contador += 1;
const newObjt = {...valor};
newObjt.id = contador;
return newObjt;
});
console.log(arrayID)