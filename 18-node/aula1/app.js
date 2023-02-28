const mod1 = require('./mod.js');
// const mod1 = require('./mod.js').falaNome;
// const falaNome = mod1.falaNome

// console.log(mod1);
mod1.falaNome('gui', 'baumer')

/////////////////////////////////////////////////

const { Pessoa } = require('./mod.js');
const p1 = new Pessoa('joão');
console.log(p1)