function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        configurable: true,// reconfigurar chave ou apagar ela
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Invalid value');
                return;
            } 
            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('camiseta', 20, 30);
console.log(p1);
p1.estoque = 11;
console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        },
    }
}
const p2 = criaProduto('camiseta')
p2.nome = 'qualquer coisa'
console.log(p2.nome)
