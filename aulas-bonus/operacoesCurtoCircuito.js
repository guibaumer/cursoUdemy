// && -> and -> RETORNA O VALOR FALSO SE EXISITR UMA EXPRESSÃO FALSA NAS EXPRESSÕES
// || ->  or -> primeiro verdadeiro é retornado. É o contrário do outro.


const [a, b, c] = [0, true, 'Olá'];
console.log(a && b && c)
// retorna o ultimo valor verdadeiro checado OU retorn a primeiro valor falso
// zero é falsy

const nome = 'Paul';
const sobrenome = 'McCartney';

function falaNome() {
    console.log(nome + ' ' + sobrenome);
}
nome && sobrenome && falaNome();

//////////////////////////////////////////////////////////////////

const corPadrao = 'black';
const corUsuario = null || corPadrao;

// if(!corUsuario) corUsuario = corPadrao;


