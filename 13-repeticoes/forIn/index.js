const frutas = ['uva', 'morango', 'maçã'];

for (let indice in frutas) {
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio',
    idade: 60
}

for (let i in pessoa) {             //pega cada uma das chaves
    console.log(i, pessoa[i])
}