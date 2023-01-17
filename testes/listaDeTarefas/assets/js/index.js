const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(texto) {
    const li = criaItem();
    li.innerText = texto;
    tarefas.appendChild(li);
    limpa();
    criaBotao(li);
    salvaTarefa();
}

function criaItem() {
    const li = document.createElement('li');
    return li;
} 

function limpa() {
    inputTarefa.value = '';
    inputTarefa.focus()
}

function criaBotao(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'APAGAR';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}


btnTarefa.addEventListener('click', function() {
if(!inputTarefa.value) return;    
criaTarefa(inputTarefa.value)
});

inputTarefa.addEventListener('keypress', function(e) {
    if(!inputTarefa.value) return;
    if(e.keyCode === 13) {
        criaTarefa(inputTarefa.value);
       
    }
})

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa()
    }
})

function salvaTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const lista = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('APAGAR', '').trim();
        lista.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(lista)
    localStorage.setItem('tarefas', tarefasJson)
}

function adicionaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const lista = JSON.parse(tarefas);

    for(let tarefa of lista) {
        criaTarefa(tarefa)
    }
}
adicionaSalvas()