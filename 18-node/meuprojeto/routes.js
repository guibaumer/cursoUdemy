//crio os controllers para abrigarem minha funções,
//seleciono eles nesta pagina e os uso assim: nomedocontroller.nomedafunção
//por fim subscrevo o module com "route". Assim ele é exportado

//MIDDLEWARES: já existem middlewares funcionando. Em route.get/editar há dois middlewares, eles precisam de um next para que o próximo seja chamado.
//depois de feito tudo com os middlewares, npm i dotenv, npm i mongoose
//voltar para server
const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const { middlewareGlobal } = require('./src/middlewares/middleware');


//ROTAS HOME
route.get('/', homeController.paginaInicial);

//ROTAS CRIAÇÃO DE CONTATO PRA LISTA
route.get('/criar', contatoController.paginaInicial);
route.post('/editar/register', contatoController.register)

route.get('/editar/editar/:id', contatoController.editIndex);
route.post('/contato/editar/:id', contatoController.edit);
route.get('/contato/delete/:id', contatoController.delete)

module.exports = route;
