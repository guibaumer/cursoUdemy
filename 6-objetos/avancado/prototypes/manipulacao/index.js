//new object -> Object.prototype
const obja = {
    chaveA: 'A',
    //__proto__ === Object.prototype
}

const objb = {
    chaveb: 'B',
    //__proto__ === obja
}

const objc = {
    chavec: 'C',
    //__proto__ === objb
}

Object.setPrototypeOf(objb, obja);
Object.setPrototypeOf(objc, objb);
console.log(objc.chavec)

////////////////com funções construtoras/////////////////

function Produto(nome, price) {
    this.nome = nome;
    this.price = price;
}
Produto.prototype.desconto = function(percentual) {
    this.price = this.price - (this.price / percentual)
}

const pessoa1 = new Produto('livro', 50);
pessoa1.desconto(10);
console.log(pessoa1);

////setando prototypes em objetos literais

const literal = {
    nome: 'prato',
    price: 40,
}
Object.setPrototypeOf(literal, Produto.prototype)
literal.desconto(25)
console.log(literal)

const p3 = Object.create(Produto.prototype);
console.log(p3)