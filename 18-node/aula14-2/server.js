require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.emit('pronto')
    console.log('conectei à base de dados')
}).catch(e => console.log(e));


const route = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware.js')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal)
app.use(route);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('servidor on');
        console.log('acessar http://localhost:3000');
    });
});
