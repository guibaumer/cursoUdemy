function criar() {
    let nome = document.getElementById('inome').value;
    let sobrenome = document.getElementById('isobrenome').value;
    let idade = document.getElementById('iage').value;
    let peso = document.getElementById('ipeso').value;
    let altura = document.getElementById('ialtura').value;
    let lugar = document.getElementById('lugar');
    lugar.innerHTML = `${nome} ${sobrenome}, ${idade} anos, pesa ${peso} quilos e mede ${altura} metros.`
    let user = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        peso: peso,
        altura: altura,
    }
    console.log(user)
}


// function criarObjeto {
//     let usuario = {

//     }
// }