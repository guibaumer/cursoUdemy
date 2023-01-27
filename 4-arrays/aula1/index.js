let nomes = ['joão', 'carlos', 'luiza']; //matriz
console.log(nomes);
console.log(nomes.length); //tamanho da matriz
nomes[nomes.length] = 'luiz'; //adiciona
console.log(nomes);
nomes.push('fábio'); //outra forma de adicionar
nomes.unshift('marta'); //adiciona no início
console.log(nomes);
const removido = nomes.pop(); //remove do fim e pode ser armazenado em variável
nomes.shift(); //remove do início
delete nomes[2]; //deleta e mantém
console.log(nomes);
nomes.push('maria');
nomes.push('antônio');
console.log(nomes);
console.log(nomes.slice(0, 2));
console.log(nomes.slice(0, -1));
console.log(typeof nomes)
console.log(nomes instanceof Array)


/*ATRIBUIÇÃO VIA DESESTRUTURAÇÃO*/ console.log('ATRIBUIÇÃO VIA DESESTRUTURAÇÃO')

// let [a, b, c] = [1, 2 , 3]
// console.log(a, b, c)

let a = 'a';
let b = 'b';
let c = 'c';
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a,b,c)

const variosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, , terceiroNumero, ...resto] = variosNumeros; //resto e valores vazios
console.log(primeiroNumero, segundoNumero, terceiroNumero, resto)

const complicado = [[0, 1, 2], [4, 6, 8]];
const [matriz1, matriz2] = complicado;
console.log(matriz2[0])