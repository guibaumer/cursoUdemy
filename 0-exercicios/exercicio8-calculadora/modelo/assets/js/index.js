function criaCalc() {
    
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.clique();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
            
        },
        
        clearDisplay() {
            this.display.value = "";
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida!');
                return
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clique() {
            document.addEventListener('click', function(e) {
                const el = e.target;
                if(el.classList.contains('btn-numero')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalc();
calculadora.inicia();