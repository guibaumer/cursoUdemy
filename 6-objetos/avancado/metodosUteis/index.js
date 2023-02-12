const produto = {
    nome: 'caneca',
    preco: 2.5,
}
const outraCoisa = {...produto};
const outraCoisa2 = Object.assign({}, produto, {material: 'porcelana'});

//os valores estão ligados. Uma mudança em uma altera a outra. Para 
//resolver, usamos o spread operator

outraCoisa.nome = 'xícara';
outraCoisa.preco = 1.4;

console.log(produto)
console.log(outraCoisa)
console.log(outraCoisa2)

console.log('KEYS ABAIXO')
console.log(Object.keys(produto));

Object.defineProperty(produto, 'nome', {
    writable: false, //nao altero mais a propriedade
    configurable: false, //não deleto ela mais 
    value: 'alterado' //só o altero por aqui
});

console.log('PROPRIEDADES ABAIXO');
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log('VALORES')
console.log(Object.values(produto))

console.log(Object.entries(produto))


