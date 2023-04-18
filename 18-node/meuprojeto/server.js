// ( npm init -y ) SEGUIDO DE ( npm i express );
//baixar nodemon para que o servidor atualize sozinho ( npm i nodemon --save-dev)
//próximo passo é usar urlencoded para que o req.body.nomedoelemento não venha undefined 
//agora vá para a página routes. depois de ler as instruções de routes, siga aqui:
//importe as rotas (require routes) e as use (app.use routes)
//pegue o path, linque com a pasta views
//setar o view engine e baixar o ejs com npm i ejs
//voltar para routes

//pegar mongoose e conectar. Promisse para iniciar no tempo certo. Criar models e ir pra lá

//pegar flash messages

require('dotenv').config()

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conectei à base de dados.');
    app.emit('pronto');
}).catch(e => console.log(e));


const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

app.use(helmet());
app.use(helmet.referrerPolicy({ policy: ["origin", "unsafe-url"] }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'f-nio+qutcm qg9_reeee1',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}) 
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(csrf());

app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);



app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('servidor on na porta http://localhost:3000')
});
})

