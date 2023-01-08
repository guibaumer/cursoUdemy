for (let i = 0; i <= 5; i++) {
    console.log('Linha ' + i)
}

//cria-se variável, condição e incremento. 

for (let t = 500; t >= 400; t -= 10) {
    console.log(t)
}

//PAR E ÍMPAR

for (let y = 0; y <= 10; y++) {
    const par = y % 2 === 0 ? 'par' : 'ímpar';
    console.log(y, par)
}

const frutas = ['maçã', 'morango', 'goiaba']

for (let o = 0; o < frutas.length; o++) {
    console.log('índice ' + o + ' ' + frutas[o])
}

