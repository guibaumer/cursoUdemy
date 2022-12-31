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