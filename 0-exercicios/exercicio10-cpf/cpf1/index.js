const cpf = document.querySelector('#icpf');
const botao = document.querySelector('.botao');
const lugar = document.querySelector('.place');
const question = document.querySelector('.material-symbols-outlined');
const hidden = document.querySelector('.hidden');



question.addEventListener('click', function() {
    aparecer()
})
botao.addEventListener('click', function() {
    multiplicar();
});

function aparecer() {
    if(hidden.style.display === 'block') {
        hidden.style.display = 'none';
    }
    else {
        hidden.style.display = 'block'
    }
}

function multiplicar() {
    if(cpf.value.length < 9) return;
    let cpfLimpo = cpf.value.replace(/\D+/g, '');
    let arrayCpf = Array.from(cpfLimpo)
    console.log(arrayCpf)
    const multiplicados = [];
    let cont = 10;
    for(let i = 0; i < 9; i++) {
        let vl = arrayCpf[i] * cont;
        multiplicados.push(vl)
        cont = cont - 1;
    }
    console.log(multiplicados)




    let total = multiplicados.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    console.log(total)
    totalDividido = 11 - (total % 11);
    if(totalDividido > 9) totalDividido = 0;
    totalDividido = totalDividido.toString();
    console.log(totalDividido);

    let novaArrayCPF = [...arrayCpf];
    novaArrayCPF.push(totalDividido)
    console.log(novaArrayCPF); //'array cpf ->' + 
    const multiplicados2 = [];
    let cont2 = 11;
    for(let i = 0; i < 10; i++) {
        let vl = Number(novaArrayCPF[i]) * cont2;
        multiplicados2.push(vl)
        cont2 = cont2 - 1;
    }
    console.log(multiplicados2)
    
    let total2 = multiplicados2.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
    totalDividido2 = 11 - (total2 % 11);
    if(totalDividido2 > 9) totalDividido2 = 0;
    console.log(total2);
    console.log(totalDividido2);
    novaArrayCPF.push(totalDividido2)


    const resultadoFinal = novaArrayCPF.join('');

    lugar.innerHTML = resultadoFinal






}





//705.484.450-52
//070.987.720

