const button = document.querySelector('.button');
const question = document.querySelector('.material-symbols-outlined');
const hidden = document.querySelector('.hidden')
button.addEventListener('click', function() {
    const cpf = new GeradorDeCPF();
})
class GeradorDeCPF {
    constructor() {
        this.lugar = document.querySelector('.lugar');
        // this.criaDigito();
        let aleatorio = this.criaDigito();
        aleatorio = `${aleatorio}`;
        // console.log(aleatorio);
        const meuCpf = this.verificar(aleatorio);
        // console.log('este é o novo cpf gerado: ' + meuCpf);
        const cpfFormatado =  this.formatar(meuCpf);
        // console.log('este é o novo cpf gerado: ' + cpfFormatado);
        this.lugar.innerHTML = cpfFormatado;
    }
    criaDigito(min = 100000000, max = 999999999) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    verificar(num) {
        this.arrayCpf = Array.from(num);

        this.multiplicados = [];
        this.cont = 10;
        for(let i = 0; i < 9; i++) {
            this.valor = Number(this.arrayCpf[i]) * this.cont;
            this.multiplicados.push(this.valor)
            this.cont = this.cont - 1;
        }
        // console.log(this.multiplicados)

        this.total = this.multiplicados.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        }, 0);
        this.primeiroDigito = 11 - (this.total % 11);
        if(this.primeiroDigito > 9) this.primeiroDigito = 0;
        // console.log(this.primeiroDigito)

        this.primeiroDigito = `${this.primeiroDigito}`;
        this.arrayCpf.push(this.primeiroDigito)
        this.cont2 = 11;
        this.multiplicados2 = [];
        for(let i = 0; i < 10; i++) {
            this.valor2 = Number(this.arrayCpf[i]) * this.cont2;
            this.multiplicados2.push(this.valor2)
            this.cont2 = this.cont2 - 1;
        }
        // console.log(this.multiplicados2)
        this.total2 = this.multiplicados2.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        }, 0);
        this.segundoDigito = 11 - (this.total2 % 11);
        if(this.segundoDigito > 9) this.segundoDigito = 0;
        // console.log(this.segundoDigito)

        this.segundoDigito = `${this.segundoDigito}`
        this.arrayCpf.push(this.segundoDigito)
        // console.log(this.arrayCpf)

        this.cpfAcabado = this.arrayCpf.join('');
        // console.log(this.cpfAcabado)
         
        return this.cpfAcabado
        }
        formatar(cpf) {
            return (
                cpf.slice(0, 3) + '.' +
                cpf.slice(3, 6) + '.' +
                cpf.slice(6, 9) + '-' +
                cpf.slice(9, 11) 
            )
        }
}

question.addEventListener('click', () => {
    if(hidden.style.display === 'block') {
        hidden.style.display = 'none';
    } else {
        hidden.style.display = 'block'
    }
})

