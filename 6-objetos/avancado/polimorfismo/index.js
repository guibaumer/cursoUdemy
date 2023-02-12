function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log('SALDO: ' + this.saldo)
}
Conta.prototype.sacar = function(valor) {
    if(valor <= this.saldo ) {
        this.saldo -= valor;
    }
    else {
        console.log('Saldo insuficiente');
    }
}
Conta.prototype.mostrarSaldo = function() {
    console.log(`${this.agencia}/${this.conta}: Seu saldo é de ${this.saldo} reais.`);
}
const conta1 = new Conta(11, 22, 100);


function contaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor) {
    if(valor <= (this.saldo + this.limite)) {
        this.saldo -= valor;
    }
    else {
        console.log('Saldo insuficiente');
    }
}
const cc = new contaCorrente(12, 33, 0, 100);
cc.depositar(10)
cc.sacar(110)
console.log(cc)

function contaP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
contaP.prototype = Object.create(Conta.prototype);
contaP.prototype.constructor = contaP;

contaCorrente.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        this.saldo -= valor;
        console.log('SALDO: ' + this.saldo)
    }
    else {
        console.log('Saldo insuficiente') + this.saldo;
    }
}
const cp = new contaP(15, 36, 50);
console.log(cp)
cp.depositar(10)
cp.sacar(110)
