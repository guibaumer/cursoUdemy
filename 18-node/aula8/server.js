const express = require('express');
const app = express();

// /profiles/?chave1=valor1&chave2=valor2

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send(`<form action="/" method="post">
    <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params.idUsuarios);
    console.log(req.query);
    res.send('oi')
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('o nome: ' + req.body.nome);
});
app.listen(3000, () => {
    console.log('servidor on');
    console.log('acessar http://localhost:3000');
});