import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modulos/Login.js';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

console.log('OK')
