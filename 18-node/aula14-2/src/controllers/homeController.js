const homeModel = require('../models/homeModel')

homeModel.create({
    titulo: 'testes',
    descricao: 'deecricao teste'
}).then(dados => console.log(dados)).catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index');
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body.cliente);
    return
}