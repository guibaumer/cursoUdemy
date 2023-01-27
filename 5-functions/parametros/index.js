function funcao() { //parametro        //TODA FUNCAO FUNCTION TEM ARGUMENT
    let total = 0;
    for(let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5) //argumento 

function soma(a = 2, b = 4) {  //valores padrão

    console.log(a + b)
}
soma(3)

function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros) 
    console.log('############')
    for(let numero of numeros) {
   if(operador === '+') acumulador += numero;
   if(operador === '-') acumulador -= numero;
   if(operador === '*') acumulador *= numero;
   if(operador === '/') acumulador /= numero;
   

    }
    console.log(acumulador)
}
conta('+', 0, 4, 5, 9)