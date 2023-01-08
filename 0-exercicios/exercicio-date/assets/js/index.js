let data = new Date();
let diaDaSemanaTexto;
let mesTexto;
const diaSemana = data.getDay();
const mes = data.getMonth() + 1;

switch (diaSemana) {
    case 0:
        diaDaSemanaTexto = 'Domingo'
        break;
    case 1:
        diaDaSemanaTexto = 'Segunda'
        break;
    case 2:
        diaDaSemanaTexto = 'Terça'
        break;
    case 3:
        diaDaSemanaTexto = 'Quarta'
        break;
    case 4:
        diaDaSemanaTexto = 'Quinta'
        break;
    case 5:
        diaDaSemanaTexto = 'Sexta'   
        break;
    case 6:
        diaDaSemanaTexto = 'Sábado'
}

switch (mes) {
    case 1:
        mesTexto = 'Janeiro'
        break;
    case 2:
        mesTexto = 'Fevereiro'
        break;
    case 3:
        mesTexto = 'Março'
        break;
    case 4:
        mesTexto = 'Abril'
        break;
    case 5:
        mesTexto = 'Maio'
        break;
    case 6:
        mesTexto = 'Junho'   
        break;
    case 7:
        mesTexto = 'Julho'
        break;
    case 8:
        mesTexto = 'Agosto'
        break;
    case 9:
        mesTexto = 'Setembro'
        break;
    case 10:
        mesTexto = 'Outubro'
        break;
    case 11:
        mesTexto = 'Novembro'
        break;
    case 12:
        mesTexto = 'Dezembro'
        break;
}

function criaData(data) {
    const ano = data.getFullYear();
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    return `${diaDaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}. ${hora}:${minutos}.`
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

//  const resposta = `${diaDaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}. ${hora}:${minutos}.`
 const lugar = document.querySelector('#place');
 lugar.innerHTML = '';
 const h1 = document.createElement('h1');
 h1.innerHTML = criaData(data);
 lugar.appendChild(h1)