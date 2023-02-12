const cpf = document.querySelector('#icpf');
const botao = document.querySelector('.botao');
const lugar = document.querySelector('.place');
const question = document.querySelector('.material-symbols-outlined');
const hidden = document.querySelector('.hidden');

question.addEventListener('click', function() {
    aparecer()
});
botao.addEventListener('click', function() {
    lugar.innerHTML = '';
    validar(cpf.value);
});

function aparecer() {
    if(hidden.style.display === 'block') {
        hidden.style.display = 'none';
    }
    else {
        hidden.style.display = 'block'
    }
}


function validar(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    if(cpfLimpo.length !== 11) alert('errado');
    let arrayCpf = Array.from(cpfLimpo);
    somarEDividir(arrayCpf);
}
function multiplicar(arrayCpf, contador, limite) {
    const multiplicados = [];
    let cont = contador;
    for(let i = 0; i < limite; i++) {
        let valor = Number(arrayCpf[i]) * cont;
        multiplicados.push(valor)
        cont = cont - 1;
    }
    // somar(multiplicados);
    return multiplicados;
}
function somarEDividir(arrayCpf) {
    let novaArray = [...arrayCpf];
    novaArray = novaArray.slice(0, -2);
    let multiplicados1 = multiplicar(arrayCpf, 10, 9);
    let total = multiplicados1.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    let primeiroDigito = 11 - (total % 11);
    if(primeiroDigito > 9) primeiroDigito = 0;

    let multiplicados2 = multiplicar(arrayCpf, 11, 10);
    let total2 = multiplicados2.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    let segundoDigito = 11 - (total2 % 11);
    if(segundoDigito > 9) segundoDigito = 0;
    // console.log(primeiroDigito, segundoDigito);
    juntar(primeiroDigito, segundoDigito, novaArray, arrayCpf);
}
function juntar(digito1, digito2, novaArray, AOriginal) {
    let original = [...AOriginal]
    digito1 = digito1.toString();
    digito2 = digito2.toString();
    let array = [...novaArray];
    array.push(digito1, digito2);
    comparar(array, original);
}
function comparar(nova, original) {
    let novaStringArray = nova.join('');
    let FirstStringArray = original.join('');
    const igual = (FirstStringArray === novaStringArray);
    console.log(novaStringArray, FirstStringArray, igual)
    if(igual) {
    let p = document.createElement('p')
    p.innerHTML = 'CPF correto.'
    lugar.appendChild(p);
} else {
    let p = document.createElement('p');
    let p2 = document.createElement('p')
    p.innerHTML = 'CPF inserido: ' + FirstStringArray;
    p2.innerHTML = 'CPF correto: ' + novaStringArray;
    lugar.appendChild(p);
    lugar.appendChild(p2)
}
}