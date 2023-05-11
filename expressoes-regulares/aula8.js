const { logs } = require('./base');

// positive look ahead (frases com active)
const exp = /.+(?=[^in]active)/gim;
console.log(logs.match(exp));
// mesma coisa mas acha frases com negative
const exp2 = /.+(?=inactive)/gim;
console.log(logs.match(exp2));
/////////////////////////////////////////////////////

// negative look ahead (frases sem active)
const exp3 = /^(?!.+[^in]active).+$/gim;
console.log(logs.match(exp3));

// positive look behind frases que começam com online
const exp4 = /(?<=ONLINE\s+)\S.*/gim;
console.log(logs.match(exp4));

// negative look behind frases que não começam com online
const exp5 = /^.+(?<!ONLINE.+)$/gim;
console.log(logs.match(exp5));

const cpf = `
012.250.796-10
111.111.111-11
147.125.453-12
`
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));