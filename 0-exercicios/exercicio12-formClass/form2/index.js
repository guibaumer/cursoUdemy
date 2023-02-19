class validar {
    constructor() {
        this.form = document.querySelector('#formulario');
        this.eventos()
    }
    eventos() {
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const valid = this.ehValido(); //aqui virá a permissão para enviar o formulário
        if(valid) this.form.submit();
    }
    ehValido() {
        for(let erro of this.form.querySelectorAll('.erro')) {
            erro.remove()
        }
        let valido = true;
        for(let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                valido = false;
                this.criaErro(campo, `"${label}" não pode ser deixado vazio.`)
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valido = false;
            }
            if(campo.classList.contains('usuario')) {
                if(campo.value.length < 6 || campo.value.length > 12) {
                    this.criaErro(campo, 'Deve ter entre 6 e 12 caracteres.')
                    valido = false
                }
                if(campo.value != campo.value.match(/^[a-zA-Z0-9]+$/g)) {
                    this.criaErro(campo, 'Caracteres inválidos usados.')
                    valido = false;
                 }
            }
            if(campo.classList.contains('senha')) {
                this.senhaOriginal = campo.value
                if(campo.value.length < 9 || campo.value.length > 20) {
                    this.criaErro(campo, 'Senha deve ter entre 9 e 20 caracteres.')
                    valido = false
                }
            }
            if(campo.classList.contains('confirma-senha')) {
                if(campo.value !== this.senhaOriginal) {
                    this.criaErro(campo, 'Senhas devem ser iguais.')
                    valido = false;
                }
            }
        }
        return valido
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro')
        campo.insertAdjacentElement('afterend', div)
    }
    validaCPF(campo) {
        const cpf = new CPF(campo.value);
        if(!cpf.comparar()) {
            this.criaErro(campo, 'CPF inválido');
            return false
        }
        return true
    }
}
const formulario1 = new validar();