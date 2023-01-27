function Pessoa(nome, sobrenome) {
    const id = 12345;
    //método privado
    const metodoInterno = function() {

    }

    this.nome = nome;
    this.sobrenome = sobrenome;
    //método público
    this.metodo = () => {
        console.log(this.nome + ': Sou um método')
    };

}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Guilherme', 'Arthur');

console.log(p1)


p2.metodo()