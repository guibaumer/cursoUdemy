class CPF {
    constructor(cpf) {
        this.cpfLimpo = cpf.replace(/\D+/g, '');
        if(this.cpfLimpo.length !== 11) alert('errado');
        this.arrayCpf = Array.from(this.cpfLimpo);
        this.somarEDividir()
    }

    somarEDividir() {
        this.novaArray = [...this.arrayCpf];
        this.novaArray = this.novaArray.slice(0, -2);
        this.multiplicados1 = this.multiplicar(10, 9);
        this.total = this.multiplicados1.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        }, 0);
        this.primeiroDigito = 11 - (this.total % 11);
        if(this.primeiroDigito > 9) this.primeiroDigito = 0;
    
        this.multiplicados2 = this.multiplicar(11, 10);
        this.total2 = this.multiplicados2.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        }, 0);
        this.segundoDigito = 11 - (this.total2 % 11);
        if(this.segundoDigito > 9) this.segundoDigito = 0;
        // console.log(primeiroDigito, segundoDigito);
        this.juntar(this.primeiroDigito, this.segundoDigito);
    }
    multiplicar(contador, limite) {
        this.multiplicados = [];
        this.cont = contador;
        for(let i = 0; i < limite; i++) {
            this.valor = Number(this.arrayCpf[i]) * this.cont;
            this.multiplicados.push(this.valor)
            this.cont = this.cont - 1;
        }
        return this.multiplicados;
    }


    juntar(digito1, digito2) {
        this.original = [...this.arrayCpf]
        this.digito1 = digito1.toString();
        this.digito2 = digito2.toString();
        this.array = [...this.novaArray];
        this.array.push(this.digito1, this.digito2);
        this.comparar();
    }
    comparar() {
        this.novaStringArray = this.array.join('');
        this.FirstStringArray = this.original.join('');
        this.igual = (this.FirstStringArray === this.novaStringArray);
        console.log(this.novaStringArray, this.FirstStringArray, this.igual)
    //     if(this.igual) {
    //     // console.log('CPF correto.')
    //     return 'CPF VÁLIDO'
    // } else {
    //     // console.log('CPF incorreto')
    //     return 'CPF INVÁLIDO'
    // }
    }    
}
// const cpf1 = new CPF('705.484.450-51');
