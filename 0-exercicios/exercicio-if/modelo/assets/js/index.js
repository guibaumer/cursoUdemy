 function calcular() {
     const altura = document.querySelector('#ialtura').value ;
     const peso = document.querySelector('#ipeso').value;
     const lugar = document.querySelector('#resposta');

     const resultado = (Number(peso) / Number(altura) ** 2).toFixed(2);  
     if(altura.length === 0 && peso.length === 0) {
        lugar.style.backgroundColor = '#f54e4e';
        lugar.innerHTML =  `<p>Preencha os campos!</p>`;
    }
    else if(altura.length === 0 && peso.length > 0) {
        lugar.innerHTML = '<p>Preencha o campo "altura"</p>'
        lugar.style.backgroundColor = '#f54e4e';
    }
    else if(peso.length === 0 && altura.length > 0) {
        lugar.innerHTML = '<p>Preencha o campo "peso"</p>'
        lugar.style.backgroundColor = '#f54e4e';
    }
     else if(resultado < 18.5) {
        lugar.innerHTML =  `<p>Seu IMC é de ${resultado} (abaixo do peso).</p>`
        lugar.style.backgroundColor = '#2bbd0b';
     }
     else if(resultado >= 18.5 && resultado <= 24.9) {
        lugar.innerHTML =  `<p>Seu IMC é de ${resultado} (peso normal).</p>`
        lugar.style.backgroundColor = '#2bbd0b';
     }
     else if(resultado >= 25 && resultado <= 29.9) {
        lugar.innerHTML =  `<p>Seu IMC é de ${resultado} (sobrepeso).</p>`
        lugar.style.backgroundColor = '#2bbd0b';
     }
     else if(resultado >= 30 && resultado <= 34.9) {
        lugar.innerHTML =  `<p>Seu IMC é de ${resultado} (obesidade grau 1).</p>`
        lugar.style.backgroundColor = '#2bbd0b';
     }
     else if(resultado >= 35 && resultado <= 39.9) {
        lugar.innerHTML =  `<p>Seu IMC é de ${resultado} (obesidade grau 2).</p>`
        lugar.style.backgroundColor = '#2bbd0b';
     }
     else {
        lugar.innerHTML =  `<p>Seu IMC é de ${resultado} (obesidade grau 3).</p>`
        lugar.style.backgroundColor = '#2bbd0b';
     }



 }

// dividindo o peso (em kg) pela altura ao quadrado (em metros).

// Menos do que 18,5 - 
// Entre 18,5 e 24,9 -
// Entre 25 e 29,9 -
// Entre 30 e 34.9 -
// Entre 35 e 39,9 - 
// Mais do que 40 -