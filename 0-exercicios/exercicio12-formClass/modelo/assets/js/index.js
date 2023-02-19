class validaFormulario {
    constructor() {
        this.formulario = document.querySelector('#formulario');
        this.nome = document.querySelector('#input1');
        this.usuario = document.querySelector('#input4');
        this.senha = document.querySelector('#input5');
        this.confirmaSenha = document.querySelector('#input6');
        this.cpf = document.querySelector('#input3');
        this.metodos();
    }
    metodos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
            
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.camposValidos()
        if(isValid) this.formulario.submit()
    }
    camposValidos() {
        let valid1 = true;
        let valid2 = true;
        let valid3 = true;
        let valid4 = true;
        let valid5 = true;
        let valid6 = true;


        for(let erro of this.formulario.querySelectorAll('.erro')) {
            erro.remove()
        }
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                this.criaErro(campo, `"${label}" não pode ser deixado vazio.`);
                valid1 = false;
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid2 = false;
            }
            if(campo.classList.contains('usuario')) {
            if(this.usuario.value.length < 3 || this.usuario.value.length > 12) {
                this.criaErro(campo, 'Número de caracteres inválido.');
                valid3 = false;
             } 
             if(this.usuario.value != this.usuario.value.match(/^[a-zA-Z0-9]+$/g)) {
                this.criaErro(campo, 'Caracteres inválidos usados.')
                valid4 = false;
             }
             if(this.senha.value !== this.confirmaSenha.value) {
                valid5 = false;
                this.criaErro(this.senha, 'Senhas diferentes')
             }
             if(this.senha.value.length > 20 || this.senha.value.length < 6) {
                valid6 = false;
                this.criaErro(this.senha, 'Senha deve ter entre 6 e 20 caracteres.');
             }
            }
        }
        const valido = (valid1 === true && valid2 === true && valid3 === true && valid4 === true && valid5 === true && valid6 === true); 
        return valido;
    }
    validaCPF(campo) {
        const cpf = new CPF(campo.value)
        if(!cpf.comparar()) {
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        else {
            return true
        }

    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.classList.add('erro')
        div.innerHTML = msg;
        campo.insertAdjacentElement('afterend', div)
    }
}
const f1 = new validaFormulario()