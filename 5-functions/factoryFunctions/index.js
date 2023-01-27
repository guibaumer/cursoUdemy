//factory function - cria objetos
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
         get nomeCompleto() {  //isso se chama "getter"
             return this.nome + ' ' + this.sobrenome;
         },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(this.nome);
            console.log(this.sobrenome)
        },
        fala(assunto) {
            return `${nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        get imc() {   //getter  
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

let person = criaPessoa('gui', 'baumer', 1.80, 75);
console.log(person);
console.log(person.fala('falando sobre PHP'));
console.log(person.imc);
console.log(person.nomeCompleto);
person.nomeCompleto = 'Milton Friedman';
