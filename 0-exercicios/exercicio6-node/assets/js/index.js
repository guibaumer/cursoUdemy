const divParagrafos = document.querySelector('.paragrafos');
const paragrafos = divParagrafos.querySelectorAll('p');
console.log(paragrafos)


// paragrafos[0].style.backgroundColor='red'

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log('essa é a cor do fundo: ' + backgroundColorBody)


for (let p in paragrafos) {
    paragrafos[p].style.backgroundColor=backgroundColorBody;
    paragrafos[p].style.color='white';
}

