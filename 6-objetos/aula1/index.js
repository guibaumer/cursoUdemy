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



//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
console.log('atribuição via desestruturação')

const gente = {
    nome: 'gui',
    sobrenome: 'baumer',
    idade: 40,
    address: {
        rua: 'papapa',
        numero: 220310
    }

}
const nome_gente = gente.nome;
console.log(nome_gente)

const { nome: teste = '', sobrenome: sobre1,} = gente;
console.log(teste, sobre1)

const { address: { rua, numero}, address: endereco } = gente;
console.log(rua, numero, endereco)