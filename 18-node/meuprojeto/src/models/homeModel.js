const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;

//FAZER ISSO AÍ NESSA ORDEM E IR PARA HOMECONTROL
//voltar para server