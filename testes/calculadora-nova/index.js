function Calculadora() {

    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.clique();
    }

    this.clique = () => {
        document.addEventListener('click', function(e) {
            const el = e.target;
            if(el.classList.contains('btn-numero')) {
                this.btnParaDisplay(el.innerText);
            };
            if(el.classList.contains('btn-eq')) {
                this.calculo();
            }
            if(el.classList.contains('btn-clear')) {
                this.clear();
            }
            if(el.classList.contains('btn-del')) {
                this.delete();
            }

            this.display.focus();
        }.bind(this))
    }


    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }


    this.calculo = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            
            if(conta !== 0 && !conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;

        } catch(e) {
            alert('Conta inválida')
            return
        }
    }

    this.clear = () => {
        this.display.value = '';
    }

    this.delete = () => {
        this.display.value = this.display.value.slice(0, -1);
    }


}


const calc = new Calculadora();
calc.inicia();
