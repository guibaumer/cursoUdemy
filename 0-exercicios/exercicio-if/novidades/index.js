const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = e.target.querySelector('#nome').value;
    const sobrenome = e.target.querySelector('#sobrenome').value;

     if(!nome) {
         setResult('Nome inválido', false);
         return;
     }
     if(!sobrenome) {
         setResult('Sobrenome inválido', false);
         return;
     }

    const nomeCompleto = juntar(nome, sobrenome)
    setResult(nomeCompleto, true)
});

function juntar(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;
    return nomeCompleto
}


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const resultado = document.getElementById('lugar');
    resultado.innerHTML = '';
    
    // const h1 = document.createElement('h1');
    // h1.innerHTML = 'Título';
    // resultado.appendChild(h1)

    // const p = document.createElement('p');
    // p.innerHTML = 'Olá, mundo!';
    // resultado.appendChild(p);
    // p.classList.add('paragrafo-resultado')

    const paragrafo = criaP();

    if(isValid) paragrafo.classList.add('valido');
    else paragrafo.classList.add('invalido')

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
}