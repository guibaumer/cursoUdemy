// const validator = require('validator');
// import validator from 'validator';
class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.email = document.querySelector('.email');
        this.emailBoolean = this.checaEmail(this.email);
        this.divRes = document.querySelector('.res');
        this.divRes.innerHTML = '';
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
        let filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

        if(!this.nome.value || this.nome.value.length > 20) {
            let erro = 'Nome inválido';
            this.erros.push(erro);
            this.mostraErro(this.nome);
        }
        if(this.nome.value && !filter_nome.test(this.nome.value)) {
            this.erros.push('Nome só pode conter letras');
            if(!this.nome.classList.contains('error-input')) {
            this.mostraErro(this.nome);
            }
        }
        if(!this.sobrenome.value || this.sobrenome.value.length > 20) {
            this.erros.push('Sobrenome inválido');
            this.mostraErro(this.sobrenome);
        }
        if(!this.emailBoolean) {
            this.erros.push('Email inválido')
            this.mostraErro(this.email);
        }
        this.concluir();
    }
    checaEmail(email) {
        let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return res.test(email.value);
    }
    mostraErro(campo) {
        campo.classList.add('error-input');
        campo.addEventListener('click', () => {
            campo.classList.remove('error-input');
        });
    }
    concluir() {
        if(this.erros.length > 0) {
        const div = document.createElement('div');
        for(let erro of this.erros) {
            const p = document.createElement('p');
            p.innerText = erro;
            div.appendChild(p);
        }
        this.divRes.appendChild(div);
        this.divRes.style.display = 'block'
    } else {
        console.log('TUDO CERTO');
        this.form.submit();
    }
    }
}

const botao = document.querySelector('.enviar');
if(botao) {
    botao.addEventListener('click', () => {
    const login = new Login('.form-contato');
})
}

