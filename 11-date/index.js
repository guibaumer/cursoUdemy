//      const data = new Date(0); //01/01/1970 timestamp unix
//      console.log(data.toString()) //usa milésimos de segundo

//      const datas = new Date(); // a,m,d,h,m,s,ms
//      console.log(datas.toString())

const ddaattaa = new Date('2018-04-20 20:20:59.18');
console.log(ddaattaa.toString())

console.log('hoje é dia', ddaattaa.getDate())
console.log('mês', ddaattaa.getMonth()) // mês começa do zero
console.log('ano', ddaattaa.getFullYear())
console.log('hora', ddaattaa.getHours())
console.log('min', ddaattaa.getMinutes())
console.log('seg', ddaattaa.getSeconds())
console.log('ms', ddaattaa.getMilliseconds())
console.log('dia das semana', ddaattaa.getDay()) // 0 é domingo


console.log(Date.now()) //milisegundos contados desde o inicio da contagem

console.log('teste de função')

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
const minhaData = new Date();
const dataBrasil = formataData(minhaData)
console.log(dataBrasil)