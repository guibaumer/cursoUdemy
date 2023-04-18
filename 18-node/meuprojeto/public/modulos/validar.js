// const validator = require('validator');
// import validator from 'validator';
class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.nome = document.querySelector('.nome').value;
        this.sobrenome = document.querySelector('.sobrenome').value;
        this.email = document.querySelector('.email').value;
        this.emailBoolean = this.checaEmail(this.email);
        this.erros = [];
        this.prevenir()
    }
    prevenir() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
        });
        this.validar()
    }
    validar() {
        if(!this.nome || this.nome.length > 20) {
            this.erros.push('Nome inválido');
        }
        if(!this.sobrenome || this.sobrenome.length > 20) {
            this.erros.push('Sobrenome inválido');
        }
        if(!this.emailBoolean) {
            this.erros.push('Email inválido')
        }
        this.concluir()
    }
    checaEmail(email) {
        let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return res.test(email);
    }
    mostraErro(campo) {
        campo.classList.add('error-input')
        ////////////////////////////////////////////AQUI////////////////////////
    }
    concluir() {
        // console.log(this.erros)
        for(let erro of this.erros) {
            console.log(erro)
        }
    }
}

const botao = document.querySelector('.enviar');
botao.addEventListener('click', () => {
    const login = new Login('.form-contato');
})
