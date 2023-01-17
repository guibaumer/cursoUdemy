const iniciar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar');
const resetar = document.querySelector('#resetar');
const lugar = document.querySelector('#relogio');
let segundos = 0;
let timer;
let condicao;

iniciar.addEventListener('click', function() {
    iniciarTempo();
});
parar.addEventListener('click', function() {
    pararTempo();
})
resetar.addEventListener('click', function() {
    resetarTempo();
})

function mostraHora(segundos) {
    let time = new Date(segundos * 1000);
    return time = time.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
}

function iniciarTempo() {
    timer = setInterval(function() {
    segundos++;
    condicao = true
    lugar.innerHTML = mostraHora(segundos)
}, 1000)
}

function pararTempo() {
    if(condicao === true) {
         clearInterval(timer)
         condicao = false;
    }
    else {
        iniciarTempo()
        condicao = true;
    }
}

function resetarTempo() {
    segundos = 0;
    clearInterval(timer)
    lugar.innerHTML = '00:00:00'
}