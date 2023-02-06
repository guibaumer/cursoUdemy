function Produto(nome, preco, estoque) {
   
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: estoque, 
        writable: true, //alterar o valor
        configurable: true // reconfigurar chave ou apagar ela
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra chave
            value: nome, 
            writable: true, //alterar o valor
            configurable: true // reconfigurar chave ou apagar ela
       
        },
        preco: {
            enumerable: true, //mostra chave
            value: estoque, 
            writable: true, //alterar o valor
            configurable: true // reconfigurar chave ou apagar ela
       
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)
console.log(Object.keys(p1))

for(let chave in p1) {
    console.log(chave)
}