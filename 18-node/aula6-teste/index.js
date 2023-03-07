const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<form action="/" method="post">
    <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `);
});
app.post('/', (req, res) => {
    res.send('formulario recebido');
});
app.get('/contato', (req, res) => {
    res.send('CONTATO!');
});
app.listen(3000, () => {
    console.log('servidor on');
    console.log('acessar http://localhost:3000');
});