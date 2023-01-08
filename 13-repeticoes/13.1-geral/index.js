let nome = 'luiz';

console.log('FOR OF ABAIXO')
for (let valor of nome) {
    console.log(valor)
}


console.log('FOR CLÁSSICO ABAIXO')
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


console.log('FOR IN ABAIXO') 
for (let indice in nome) {
    console.log(nome[indice])
}


const nomes = ['gui', 'joão', 'carlos', 'pedro'];
for (let index of nomes) {
    console.log(index)
}

console.log('FOR EACH')
nomes.forEach(function(el, batata, array) {
    console.log(el, batata, array)
})