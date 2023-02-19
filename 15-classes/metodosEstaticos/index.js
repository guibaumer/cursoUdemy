//é uma função que fica armazenada na classe. Ela possui o this relacionado a classe, mas não possui aqueles valores.
class controleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //método de instãncia
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    static trocaPilha() {
        console.log('OK, vou trocar.');
    }
}

const controle1 = new controleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1)
controleRemoto.trocaPilha()