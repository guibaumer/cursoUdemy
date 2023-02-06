/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};

const chave = 'nome';
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa[chave]);


const pessoa1 = new Object();
pessoa1.nome = 'Gui';
pessoa1.sobrenome = 'Arthur';
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome`)
}
console.log(pessoa1);
delete pessoa1.sobrenome;
console.log(pessoa1);
pessoa1.falarNome()

for(let chave in pessoa1) {
    console.log(chave)
}

*/

/////////////////////////////////////////////

//ESSA É UMA FACTORY FUNCTION
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('edgard', 'baumer');
console.log(p1.nomeCompleto);


//ESSS É UMA CONSTRUCTOR FUNCTION
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const person = new Pessoa('Luiz', 'Miranda')
console.log(person)