
function create() {

    const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
] 

const container = document.getElementById('container');

let div = document.createElement('div');
div.classList = 'minhaDiv';




 for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]
     let p = document.createElement(tag);
     p.innerText = texto;
    

    div.appendChild(p) 
}
container.appendChild(div)
}
