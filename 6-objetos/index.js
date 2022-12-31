const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',

    fala(nome) {
        console.log(`Meu nome é ${nome}`)
    },
    fala2() {
        console.log(`${this.sobrenome} diz oi`)
    }
};
console.log(pessoa.nome)
pessoa.fala('Gui')
pessoa.fala2()


function criaPessoa(nome, sobrenome) {  //parâmetro
    return {
        nome: nome,
        sobrenome: sobrenome
    };
}
const pessoa1 = criaPessoa('Gui', 'Baumer')  //argumento
console.log(pessoa1.nome)