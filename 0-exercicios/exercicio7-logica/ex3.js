function fuzz(num) {
    if(isNaN(num)) return num
    if(num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'
    if(num % 3 === 0) return 'fizz'
    if(num % 5 === 0) return 'buzz'
    if(num % 3 !== 0 || num % 5 !== 0) return num
}

function criaAleatorio(min, max) {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r
}

const max = 100;
const min = 0;
let controle = 1;
while (controle < 11) {
    let numeroAleatorio = criaAleatorio(max, min)
    let resposta = fuzz(numeroAleatorio)
    console.log(controle + ': ' + numeroAleatorio + ' => ' + resposta)
    controle++
}

console.log('DE 0 ATÉ 100')
for (let i = 0; i < 100; i++) {
    console.log(i, fuzz(i))
}