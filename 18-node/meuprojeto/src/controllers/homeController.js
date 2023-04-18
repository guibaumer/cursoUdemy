const Contato = require('../models/contatoModel');

exports.paginaInicial = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', {contatos});
}
