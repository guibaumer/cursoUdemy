function meuEscopo() {
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('#resultado')
    // formulario.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert('oi');
    //     console.log('deu certo');
    // };

    // let contador = 0;
    function recebeEvento(evento){
           evento.preventDefault();
           const pessoas = [];

           const nome = formulario.querySelector('.nome');
           const sobrenome = formulario.querySelector('.sobrenome');
           const peso = formulario.querySelector('.peso');    
           const altura= formulario.querySelector('.altura');

           
            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });
            console.log(pessoas);
            resultado.innerHTML = `${nome.value} ${sobrenome.value}, ${peso.value} kg, ${altura.value} metros.`
                                                                // console.log('Formulário não enviado ' + contador);
                                                                // contador++;
    }
    formulario.addEventListener('submit', recebeEvento);


    

    
}
meuEscopo();