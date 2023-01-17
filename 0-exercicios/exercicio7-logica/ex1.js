 function retornaMaior(n1, n2) {
    if(n1 > n2) {
        return n1;
    }
    else if(n2 > n1) {
        return n2;
    }
    else if(n1 === n2) {
        return 'IGUAIS'
    }
    else {
        return '?'
    }
}


console.log(retornaMaior(0, 9))
 
function retornaMaiorDois(x, y) {  //operador ternário
   return x > y ? x : y;          
}

console.log(retornaMaiorDois(8, 8))