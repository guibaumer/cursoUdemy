function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.contructor = Camiseta;
 
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.contructor = Caneca;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camiseta = new Camiseta('polo', 30, 'azul');
const caneca = new Caneca('De café', 10, 'cerâmica', 5)
camiseta.aumento(100)

console.log(camiseta)
console.log(caneca)