let controle = 0;

while(controle <= 10) {
    console.log(controle)
    controle++
}

console.log('TESTE NOME:')
let nome = 'Guilherme';
controle = 0;

while(controle < nome.length) {
    console.log(nome[controle])
    controle++
}

/////////////////////////

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50
let aleatorio = random(min, max)
console.log(aleatorio)

while (aleatorio !== 10) {
aleatorio = random(min, max);
console.log(aleatorio)
} 

do {
aleatorio = random(min, max);
console.log(aleatorio)
} while(aleatorio !== 1)

