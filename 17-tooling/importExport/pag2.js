const nome = 'guilherme';
const idade = 99;
function soma(a, b) {
    let s = a + b
    console.log(s)
}
export { nome, idade, soma }
export const data = 26

export default function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome
}