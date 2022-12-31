function calculoUm() {
let valorUm = document.getElementById('inumero1');
let valorDois = document.getElementById('inumero2');
valorUm = Number(valorUm.value);
valorDois = Number(valorDois.value);
let resultadoUm = valorUm + valorDois;
const lugarDeResposta = document.getElementById('respostaUm');
lugarDeResposta.innerHTML = 'Resultado: ' + resultadoUm;
}
function guardarDados() {
    let nomeUsuario = document.getElementById('inome').value;
    let sobrenomeUsuario = document.getElementById('isobre');
    let idadeUsuario = document.getElementById('iidade');
    idadeUsuario = Number(idadeUsuario.value);
    const lugarDeRespostaDois = document.getElementById('respostaDois');
    lugarDeRespostaDois.innerHTML = 'OK!'
}
function esportes() {
   let divEsportes = document.getElementById('esportesDiv');
   let radioEscolhido = document.querySelector('input[name="sport"]:checked').value;
   divEsportes.innerHTML = "OK!"
}
function finalizar() {
    let nomeUsuario = document.getElementById('inome').value;
    let sobrenomeUsuario = document.getElementById('isobre').value;
    let idadeUsuario = document.getElementById('iidade');
    idadeUsuario = Number(idadeUsuario.value);
    let radioEscolhido = document.querySelector('input[name="sport"]:checked').value;
    let valor2 = parseInt(document.querySelector('.corDoRange').value);
    let lugarFinal = document.getElementById('mensagem')

    if(valor2 === 5) {
        lugarFinal.innerHTML = `Você diz que seu esporte favorito é ${radioEscolhido}, e parece gostar demais dele!`;
    }
    else if(valor2 === 4) {
    lugarFinal.innerHTML = `Você diz que seu esporte favorito é ${radioEscolhido}, e parece gostar bastante dele.`;
    }
    else if(valor2 === 3) {
        lugarFinal.innerHTML = `Você diz que seu esporte favorito é ${radioEscolhido}, e parece gostar dele.`;
    }
    else {
        lugarFinal.innerHTML = `Você diz que seu esporte favorito é ${radioEscolhido}, mas parece não gostar muito dele.`;
    }

    let xxx = document.getElementById('acabou');
    xxx.innerHTML = `Seu nome é ${nomeUsuario} ${sobrenomeUsuario} e você tem ${idadeUsuario} anos.`;
}