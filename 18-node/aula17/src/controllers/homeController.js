// const homeModel = require('../models/homeModel')

// homeModel.create({
//     titulo: 'testes dois',
//     descricao: 'é outra coisa'
// }).then(dados => console.log(dados)).catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: 'Luiz', logado: true}
    res.render('index', {
        titulo: 'esse é o titulo',
        numeros: [1,2,3],
    });
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body.cliente);
    return
}