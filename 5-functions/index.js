function saudacao(nome) {
    console.log('Bom dia, ' + nome + '!')
}
saudacao('luiz');


function saudacao2(nome) {
    return 'Boa noite, ' + nome + '!';
}

const saudacaoFeita = saudacao2('carlos');
console.log(saudacaoFeita)

/////////////////////////////////////////

function soma(x, y) {
    const resultado = x + y;
    return resultado
}
console.log(soma(2, 4))

function soma2(x = 2, y) {
    const resultado = x + y;
    return resultado
}
console.log(soma2(3, 1))


//////////////////////////////////////

const raiz = function(n) {
    return n ** 0.5
};
console.log(raiz(144));

//////////////////////////////////////

const potencia = (n) => n ** 2;

console.log(potencia(5))