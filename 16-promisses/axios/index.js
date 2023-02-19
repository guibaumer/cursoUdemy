const lugar = document.querySelector('.resultado')
fetch('pessoas.json').then(resposta => resposta.json())
.then(json => carregaElementos(json))


function carregaElementos(json) {
    const table = document.createElement('table');

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);
        
        
        table.appendChild(tr)
    }
    lugar.appendChild(table)
}