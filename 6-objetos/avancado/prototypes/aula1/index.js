function Pessoa(nome, sobrenome) { //constructor function
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('John', 'F.') //instânciação
console.log(p1)