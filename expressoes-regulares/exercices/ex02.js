const text = 'hfhgkdhkjdfshkjd 2 hgj odsfsf24oe9';

const telefones = `
(35) 9 9999-5555
(35)9 9999-5555
(35)99999-5555
9 9999-5555
99999-5555
9999-5555
99995555
999995555
35999994444
11111111111
15455555555555415
35145151345
`;

// À-ú -> tudo de letra

// encontra todas as palavras
palavrasRegEx = /([\wÀ-ú]+)/gm;

// pegar tudo menos números
numerosRegEx = /\D/g;
console.log(text.replace(numerosRegEx, ''));

// valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// formato de cpf
cpf = /(\d{3}\.){2}\d{3}-\d{2}/gm;

//telefone
const tel = /^(\(\d{2}\)\s*)?(\d?\s?)(\d{4}\s?-\d{4})$/gm;
console.log(telefones, telefones.match(tel));

// senhas fortes
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$@)]).{8,}$/gm;

// validar e-mails
const validaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/