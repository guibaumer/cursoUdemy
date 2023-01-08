const pontuacaoUsuario  = 999;

//TERNÁRIA
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)

/*if(pontuacaoUsuario >= 1000) {
    console.log('VIP')
}
else {
    console.log('NORMAL')
}*/

//OS DOIS EXEMPLOS ACIMA FUNCIONAM DA MESMA FORMA, MAS A PRIMEIRA É MAIS SIMPLES.
 

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)