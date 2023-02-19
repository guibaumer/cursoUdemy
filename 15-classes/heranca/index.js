class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado.')
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado.')
            return;
        }
        this.ligado = false;
    }
}
const d1 = new DispositivoEletronico('TV');
d1.ligar();
console.log(d1);
////////////////////////////////////////
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const s1 = new Smartphone('nokia', 'preto');
s1.ligar()
console.log(s1)