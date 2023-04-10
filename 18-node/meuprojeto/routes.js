//crio os controllers para abrigarem minha funções,
//seleciono eles nesta pagina e os uso assim: nomedocontroller.nomedafunção
//por fim subscrevo o module com "route". Assim ele é exportado
const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//ROTAS HOME
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)
//ROTAS CONTATO
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
