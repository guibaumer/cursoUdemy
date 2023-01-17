

try {
console.log(naoexisto)
} catch(err) {
    console.log('ERROOOO...')
}

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros')
    }
    return x + y;
}
try {
    console.log(soma(1, 2))
console.log(soma("1", 2))
} catch(err) {
    console.log('deu errado')
}

////////////////


try {
    console.log(a)
} catch(err) {
    console.log('tratando o erro')
} finally {
    console.log('sempre sou executado')
}

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
      throw new TypeError('nao é')
    }
     if(!data) {
        data = new Date();
     }
     return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        
     });
    
}
     const hora = retornaHora();
     console.log(hora)