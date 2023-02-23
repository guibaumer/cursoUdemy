const botao = document.querySelector('.button');
const lugar = document.querySelector('.lugar');

botao.addEventListener('click', () => {
    let senha = new Senha() 
});
class Senha {
    constructor() {
        const tamanho = document.querySelector('.input-n').value;
        if(tamanho > 20) {
            alert('Tamanho inválido. MÁXIMO: 20');
            return
        }
        if(tamanho.length < 1) {
            alert('Põe um valor aí');
            return
        }
        //retornam valores booleanos:
        const booNumbers = document.querySelector('.numbers').checked;
        const booUpper = document.querySelector('.upper').checked;
        const booLower = document.querySelector('.lower').checked;
        const booSymbols = document.querySelector('.symbols').checked;
        this.criarSenha(tamanho, booNumbers, booUpper, booLower, booSymbols);
    }
    criarSenha(tamanho, booNumbers, booUpper, booLower, booSymbols) { 
        if(!booNumbers && !booUpper && !booLower && !booSymbols) {
            lugar.innerHTML = '';
            const msg = 'Selecione alguma opção';
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('wrong')
            lugar.appendChild(div);
            return;
        }
        if(booNumbers && !booUpper && !booLower && !booSymbols) {
        /*
        *FORMA INICIAL QUE FUNCIONOU MAS SERIA DIFÍCIL DE USAR*
            function geraAleatorio(tamanho, min = 1.1111111111111111111, max = 10.999999999999999999) {
            return (Math.random() * (max - min + 1) + min).toFixed(tamanho - 1)
        }
        let aleatorio = geraAleatorio(tamanho);
        aleatorio = aleatorio.replace(/\D+/g, '');
        this.criaAdiciona(aleatorio)
        */
        const caracteres = "a0123456789";
            const matriz = [];
            for(let i = 0; i < tamanho; i++) {
                let rand = Number((Math.random() * (10 - 1 + 1) + 1).toFixed(0));
                let valor = caracteres.charAt(rand);
                matriz.push(valor)
                valor = '';
            }
            let senha = String(matriz)
            senha = senha.replace(/,/g,"")
            this.criaAdiciona(senha)
            return
        }
        if(!booNumbers && booUpper && !booLower && !booSymbols) {
            const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const matriz = [];
            for(let i = 0; i < tamanho; i++) {
                let rand = Number((Math.random() * (25 - 1 + 1) + 1).toFixed(0));
                let valor = caracteres.charAt(rand);
                matriz.push(valor)
                valor = '';
            }
            let senha = String(matriz)
            senha = senha.replace(/,/g,"")
            this.criaAdiciona(senha)
            return
            }
            if(!booNumbers && !booUpper && booLower && !booSymbols) {
                const caracteres = "aabcdefghijklmnopqrstuvwxyz";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (25 - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(!booNumbers && !booUpper && !booLower && booSymbols) {
                const caracteres = "a!@#$%&*-=+^~?";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (12 - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(!booNumbers && booUpper && booLower && booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*-=+^~?abcdefghijklmnopqrstuvwxyz";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(booNumbers && booUpper && booLower && booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*-=+^~?abcdefghijklmnopqrstuvwxyz0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(booNumbers && booUpper && !booLower && !booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(booNumbers && !booUpper && booLower && !booSymbols) {
                const caracteres = "aabcdefghijklmnopqrstuvwxyz0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            } 
            if(booNumbers && !booUpper && !booLower && booSymbols) {
                const caracteres = "a!@#$%&*-=+^~?0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(!booNumbers && booUpper && booLower && !booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(!booNumbers && booUpper && !booLower && booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*-=+^~?";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(!booNumbers && !booUpper && booLower && booSymbols) {
                const caracteres = "a!@#$%&*-=+^~?abcdefghijklmnopqrstuvwxyz";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(booNumbers && booUpper && booLower && !booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(booNumbers && !booUpper && booLower && booSymbols) {
                const caracteres = "a!@#$%&*-=+^~?abcdefghijklmnopqrstuvwxyz0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            if(booNumbers && booUpper && !booLower && booSymbols) {
                const caracteres = "AABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*-=+^~?0123456789";
                const matriz = [];
                for(let i = 0; i < tamanho; i++) {
                    let rand = Number((Math.random() * (caracteres.length - 1 + 1) + 1).toFixed(0));
                    let valor = caracteres.charAt(rand);
                    matriz.push(valor)
                    valor = '';
                }
                let senha = String(matriz)
                senha = senha.replace(/,/g,"")
                this.criaAdiciona(senha)
                return
            }
            this.criaAdiciona('Esqueci de adicionar essa combinação')
        }
        criaAdiciona(senha) {
            lugar.innerHTML = '';
            const div = document.createElement('div');
            div.innerHTML = senha;
            lugar.appendChild(div);
        }
    }
   const person = document.querySelector('.mso-person');
   const hidden = document.querySelector('.hidden');
   person.addEventListener('click', () => {
    if(hidden.style.display === 'none') {
        hidden.style.display = 'block'
    } else {
    hidden.style.display = 'none'
    }
   })