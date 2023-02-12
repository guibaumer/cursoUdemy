//prototypes são criados automaticamente
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(this.nome + ' está falando.')
    }
}
const p1 = new Pessoa('gui', 'baumer');
console.log(p1.falar())