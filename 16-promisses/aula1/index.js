
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Invalid value')
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
// esperaAi('frase1', aleatorio(1, 3)).then((resposta => {
//     console.log(resposta);
//     return esperaAi('frase2', aleatorio(1, 3));
// }))
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('frase3', aleatorio(1, 3));
// }).then(resposta => {
//     console.log(resposta);
// }).then(() => {
//     console.log('fim')
// })
// .catch((e) => {
//     console.log('erro:', e)
// })


/////////////////////////////////////////////////aula2

const promises = [
    // 'primeiro valor',
    esperaAi('promise1', aleatorio(1, 5)),
    esperaAi('promise2', aleatorio(1, 5)),
    esperaAi('promise3', aleatorio(1, 5)),
    // 'outro valor'
];


/*
//resolve todas e as entrega como array na ordem que estão dispostas
 Promise.all(promises).then(function(valor) {
     console.log(valor);
 }).catch(function(erro) {
     console.log(erro);
});
*/


/*
//retorna apenas a primeira a ser resolvida
Promise.race(promises).then(function(valor) {
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
});
*/
