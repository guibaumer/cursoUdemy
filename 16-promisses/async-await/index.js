
function aleatorio(min = 0.1, max = 3) {
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

///////////////////////////////////////////////

/*
esperaAi('fase 1', aleatorio()).then(valor => {
    console.log(valor)
    return esperaAi('fase 2', aleatorio())
}).then(fase => {
    console.log(fase);
    return esperaAi('fase 3', aleatorio())
}).then(fase => {
    console.log(fase)
}).catch(e => console.log(e));
*/

// async function executa() {
//     try {

//         const fase1 = await esperaAi('fase 1', aleatorio())
//         console.log(fase1);
    
//         const fase2 = await esperaAi('fase 2', aleatorio())
//         console.log(fase2)
    
//         const fase3 = await esperaAi(88, aleatorio())
//         console.log(fase3)
    
//         console.log('Terminamos na fase: ', fase3);

//     } catch(e) {
//         console.log(e)
//     }
// }
// executa();

// esperaAi('f1', aleatorio()).then(resposta => {
//     console.log(resposta)
//     return esperaAi('f2', aleatorio())
// }).then(resposta => {
//     console.log(resposta)
// })


