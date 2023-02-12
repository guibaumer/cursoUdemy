const pessoas = [
    {id:2, nome: 'Luiz2'},
    {id:1, nome: 'Luiz1'},
    {id:3, nome: 'Luiz3'},
];

//const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas)