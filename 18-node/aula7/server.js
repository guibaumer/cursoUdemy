const express = require('express');
const app = express();

//CRUD CREATE, READ, UPDATE, DELETE
//      POST    GET   PUT    DELETE

//ao pesquisar um link, fazemos um get.

app.get('/', (req, res) => {
    res.send('hello, world!')
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
})
//fazemos requisição e o servidor responde

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('acessar http://localhost:3000')
});