let tamanho = 10;
const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ";
const matriz = [];
for(let i = 0; i < tamanho; i++) {
    let rand = Number((Math.random() * (25 - 1 + 1) + 1).toFixed(0));
    let valor = caracteres.charAt(rand);
    matriz.push(valor)
    valor = '';
}
console.log(matriz)
let senha = String(matriz)
senha = senha.replace(/,/g,"")
console.log(senha, senha.length)
