    const botao = document.querySelector('.botao');
    const lugar = document.querySelector('.place');
    const question = document.querySelector('.material-symbols-outlined');
    const hidden = document.querySelector('.hidden');
    const cpf = document.querySelector('#icpf');



class validarCPF {
    constructor(cpf) {
        this.cpfLimpo = cpf.replace(/\D+/g, '');
        if(this.cpfLimpo.length !== 11) return;
        this.array = Array.from(this.cpfLimpo); //ESTE É O ARRAY DE 11 DIGÍTOS/////////////////////////////////
        this.string11 = this.array.toString()
        this.soma();
    }
    calculo(array11, cont) {
        let contador = cont;
        let arrayMultiplicado = [];
        for(let i = 0; i < array11.length; i++) {
            let valor = array11[i] * contador;
            arrayMultiplicado.push(valor)
            contador -= 1;
        }
        return arrayMultiplicado;
    }
    soma() {
        this.arrayNove = this.array.slice(0, -2); //ESTE É O ARRAY DE 9 DÍGITOS////////////////////////////////
        let multiplicado = this.calculo(this.arrayNove, 10);
        multiplicado = multiplicado.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        }, 0);
        let digito1 = 11 - (multiplicado % 11)
        digito1 = digito1 > 9 ? '0' : `${digito1}`;
        const array10 = [...this.arrayNove];
        array10.push(digito1)
        let multiplicados2 = this.calculo(array10, 11)
        
        multiplicados2 = multiplicados2.reduce(function(acumulador, valor) {
            acumulador += valor;
            return acumulador;
        }, 0);
        let digito2 = 11 - (multiplicados2 % 11)
        digito2 = digito2 > 9 ? '0' : `${digito2}`;
        let arrayFinal = [...this.arrayNove];
        arrayFinal.push(digito1, digito2);
        arrayFinal = arrayFinal.toString()
        const iguais = this.string11 === arrayFinal;
        console.log(iguais + ' ARRAY INICIAL: ' + this.string11 + '-' + 'ARRAY FINAL: ' + arrayFinal)

    }
}

botao.addEventListener('click', function() {
    lugar.innerHTML = '';
    const cpf1 = new validarCPF(cpf.value);
});



