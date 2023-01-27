const nomes = ['João', 'Maria', 'Luiz'];
nomes[2] = 'Carlos';
delete nomes[2];
console.log(nomes)

//copiar array sem que haja dependência
const novo = [...nomes];

const nomes2 = ['um', 'dois', 'tres']
const removido = nomes2.pop()
const removidoInicio = nomes2.shift()
nomes2.push('quatro');
nomes2.unshift('zero')
console.log(nomes2, removido, removidoInicio)


const nomesDois = ['um', 'dois', 'tres', 'quatro']
const novos = nomesDois.slice(1, 3)
console.log(novos)


const string = 'guilherme arthur';
const separado = string.split(' ');
console.log(separado)

const juntar = separado.join(' ');
console.log(juntar)