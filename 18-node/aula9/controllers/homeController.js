exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="post">
    <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('nova rota aqui')
}