falaOi() //function hoisting

function falaOi() {
    console.log('oi')
}

//first-class objects

const falaTchau = function() {
    console.log('tchau')
}
falaTchau()

function executaFuncao(funcao) {
    funcao()
}

executaFuncao(falaOi)

//arrow function

const arrow = () => {console.log('sou uma função')}
arrow()