const nome = 'Gui';

const falaNome = (nome, sobrenome) => {
    console.log(nome + ' ' + sobrenome)
}

// console.log(module)


exports.nome = nome;
exports.falaNome = falaNome;
// console.log(exports) //objeto de exportações

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;