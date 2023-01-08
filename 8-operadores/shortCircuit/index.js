//retorna o valor da última coisa verdadeira
//o que retorna falso: 0, "", '', ``, null, undefined, NaN e false.
//o que é verdadeiro: todo o resto.
console.log('luiz' && 'maria');
console.log(9 && 'fhjç' && 1);
console.log('true' && 'maria' && 0);

    function falaOi() {
        return 'oi';
    }
    const vaiExecutar = true;
    console.log(vaiExecutar && falaOi())

    console.log(false || 'otávio' || null || 0 || true) //retorna o primeiro valor verdadeiro

    let corEscolhida = 'verde';
    let corPadrao = console.log(corEscolhida || 'RED');