const nomes = ['Maria', 'João', 'Eduardo', 'Júlia'];

const removidos = nomes.splice(0, 2, 'Item1', 'Item2')

// retorna elemento em array





console.log(removidos)


const tirarFinal = nomes.splice(-1, 1);  //Number.MAX_VALUE
console.log(tirarFinal)

nomes.splice(2, 0, 'ItemX', 'ItemW')

console.log(nomes)