// ( npm init -y ) SEGUIDO DE ( npm i express );
//baixar nodemon para que o servidor atualize sozinho ( npm i nodemon --save-dev)
//próximo passo é usar urlencoded para que o req.body.nomedoelemento não venha undefined 
//agora vá para a página routes. depois de ler as instruções de routes, siga aqui:
//importe as rotas (require routes) e as use (app.use routes)
//pegue o path, linque com a pasta views
//setar o view engine e baixar o ejs com npm i ejs
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);






app.listen(3000, () => {
    console.log('servidor on na porta http://localhost:3000')
});