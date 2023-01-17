const botao = document.querySelector('#botao-tarefas');
const caixa = document.querySelector('#input-tarefas');
const ul = document.querySelector('#lista')
const lis = document.querySelectorAll('.adicionado')

botao.addEventListener('click', function() {
    if(!caixa.value) return;
    adicionarTarefa(caixa.value);
    
})

caixa.addEventListener('keypress', function(e) {
    if(!caixa.value) return;
    if(e.keyCode === 13) {
        adicionarTarefa(caixa.value)
    }
})

document.addEventListener('click', function(e) {
    let el = e.target;
    if(el.classList.contains('adicionado')) {
        //el.style.color = 'red'
        el.parentElement.remove();
        //salvaTarefa()
    }
})



function adicionarTarefa(texto) {
let item = criaItem();
item.innerText = texto;
criaBotao(item)
ul.appendChild(item)
//salvaTarefa()

limpaCaixa();
}

function criaItem() {
    let item = document.createElement('li');
    return item;  
}

function criaBotao(li) {

    let span = criaSpan();

    li.innerHTML += ' ';
  
    li.appendChild(span)
}


function criaSpan() {
    let span = document.createElement('span');
    span.innerHTML = 'delete'
    span.setAttribute('class', 'material-symbols-outlined')
    span.classList.add('adicionado')
    return span;
}

function limpaCaixa() {
    caixa.value = '';
    caixa.focus();
}

////////////////////////////////

/*function salvaTarefa() {
    const liTarefas = ul.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('delete', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

function adicionaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const lista = JSON.parse(tarefas);

    for(let tarefa of lista) {
        adicionarTarefa(tarefa)
    }
}
adicionaSalvas()
*/

