const Contato = require('../models/contatoModel')
exports.index = (req, res) => {
    res.render('includes/contato', {
        contato: {},
    })
};

exports.register = async (req, res) => {
    try {
    const contato = new Contato(req.body);
    await contato.register();
    
    if(contato.errors.length > 0) {
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect('/contato/index'));
        return;
    }

    req.flash('success', 'Contato registrado!');
    req.session.save(() => res.redirect(`/contato/index/`)); //${contato.contato._id}
    return;
    } catch(e) {
        console.log(e);
        return res.render('includes/404')
    }
};

exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.render('includes/404');

    const contato = await Contato.buscaPorId(req.params.id)
    if(!contato) return res.render('includes/404');

    res.render('includes/contato', { contato });
};

exports.edit = async (req, res) => {
    try {
        if(!req.params.id) return res.render('includes/404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
    
        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index'));
            return;
        }
    
        req.flash('success', 'Contato editado!');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    } catch(e) {
        console.log(e);
        res.render('includes/404');
    }
};

exports.delete = async function(req, res) {
    if(!req.params.id) return res.render('includes/404');

    const contato = await Contato.delete(req.params.id)
    if(!contato) return res.render('includes/404');
    
    req.flash('success', 'Contato apagado!');
    req.session.save(() => res.redirect(`/`));
    return
}