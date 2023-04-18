const mongoose = require('mongoose');
const validator = require('validator')
const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true, default: ''},
    sobrenome: { type: String, required: false},
    email: { type: String, required: true},
    criadoEm: {type: Date, default: Date.now}
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.success = [];
        this.contato = null;
        
        this.nome = this.body.nome;
        this.sobrenome = this.body.sobrenome;
        this.email = this.body.email;
        // this.register()
        this.valida();
    }
    async register() {
        // this.valida(); 

        if(this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body)
    }
    valida() {
        this.cleanUp();
        if(!this.nome) this.errors.push('Nome é obrigatório')
        if(!this.email) this.errors.push('Email é obrigatório')
        if(this.email && !validator.isEmail(this.email)) this.errors.push('Email-inválido');
    }
    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }
}
Contato.prototype.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);
    return user
}

Contato.prototype.valida = async function() {
    this.cleanUp();
    if(!this.nome) this.errors.push('Nome é obrigatório')
    if(!this.email) this.errors.push('Email é obrigatório')
    if(this.email && !validator.isEmail(this.email)) this.errors.push('Email-inválido');
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    // this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
}

Contato.buscaContatos = async function(id) {
    const contatos = await ContatoModel.find().sort({ criadoEm: -1});
    return contatos;
};

Contato.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete( {_id: id} );
    return contato;
}

module.exports = Contato;
