let numero = prompt('Digite um número');
numero = Number(numero);

let lugar = document.getElementById('divResposta');
let inteiro = document.getElementById('inteiro');
let AC = document.getElementById('AC');
let AB = document.getElementById('AB');
let duasCasas = document.getElementById('duasCasas');
let NOT = document.getElementById('notAN');
let square = document.getElementById('square');

lugar.innerHTML = `Seu número é ${numero}`;
let booleano = Number.isInteger(numero);
inteiro.innerHTML = booleano;
let raiz = Number(numero ** (1/2));
square.innerHTML = raiz;
NOT.innerHTML = Number.isNaN(numero);
AB.innerHTML = Math.floor(numero);
AC.innerHTML = Math.ceil(numero);
duasCasas.innerHTML = numero.toFixed(2)
