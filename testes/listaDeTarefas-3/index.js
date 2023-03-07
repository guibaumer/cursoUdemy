const input = document.querySelector('#input-tarefas');
const botao = document.querySelector('#botao-tarefas');
const lista = document.querySelector('#lista');
const div = document.querySelector('#inputs');
const elemento = document.querySelector('.red');
const container = document.querySelector('#container');

botao.addEventListener('click', () => {
    for(let erro of container.querySelectorAll('.red')) {
        erro.remove()
    }
    if(!input.value) return erro();
    criaItem(input.value)
    input.value = "";
});
container.addEventListener('click', e => {
    const el = e.target
    if(el.classList.contains('umItem')) {
       
        const valor = el.innerText;
        console.log(valor)

        removerTarefa(valor, el);
    }
})


function erro() {
    const p = document.createElement('p');
    p.innerText = 'Não pode ser enviado vazio.';
    p.classList.add('red');
    div.parentNode.insertBefore(p, div.nextSibling);
}

function criaItem(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.classList.add('umItem')
    lista.appendChild(li);
    salvarTarefa(text);
}

const tarefas = [];

function sohSalva(array) {
    const tarefasJSON = JSON.stringify(array);
    localStorage.clear();
    localStorage.setItem('tarefas', tarefasJSON);
}

function salvarTarefa(tarefa) {
    localStorage.clear();
    tarefas.push(tarefa);
    const tarefasJson = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function removerTarefa(valor, el) {
    let index = tarefas.indexOf(valor);
    for(item of tarefas) {
        if(item === valor) tarefas.splice(index, 1)
    }
    console.log(tarefas)
    sohSalva(tarefas);
    el.parentNode.removeChild(el);
}
function adicionaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const lista = JSON.parse(tarefas);
    for(item of lista) {
        criaItem(item)
    }
}
adicionaSalvas();