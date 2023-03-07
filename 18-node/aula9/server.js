const express = require('express');
const app = express();
const route = require('./routes')

// /profiles/?chave1=valor1&chave2=valor2

app.use(express.urlencoded({extended:true}))
app.use(route);



app.listen(3000, () => {
    console.log('servidor on');
    console.log('acessar http://localhost:3000');
});