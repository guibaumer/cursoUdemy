const numeros = [7, 2, 3, 4, 5, 6];

// for(let i = 0; i < numeros.length; i++ ){
//     console.log(i, numeros[i])
// }

const numeros2 = [2, 3, 9, 11, 33, 72, 81, 90];

for(valor of numeros2) {

    if(valor === 11 || valor === 3) {
        continue;
    }
    if (valor === 81) {
        break;
    }

    console.log(valor)
}