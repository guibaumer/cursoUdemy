const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

// const pessoas = [
//     { nome: 'mario' },
//     { nome: 'maria' },
//     { nome: 'carlos' },
//     { nome: 'joão' },
// ];
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados)
}
function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome)) 
}
leArquivo(caminhoArquivo)