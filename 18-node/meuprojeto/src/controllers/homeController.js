//tudo que é criado aqui será exportado
exports.paginaInicial = (req, res) => {
    // res.send(`
    // <form action='/' method='post'>
    //     Nome: <input type="text"> <br>
    //     <button> Olá mundo </button>
    // </form>
    // `);
    res.render('index');
}
exports.trataPost = (req, res) => {
    res.send('nova rota de post')
}