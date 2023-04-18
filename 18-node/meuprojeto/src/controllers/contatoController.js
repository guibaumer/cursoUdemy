exports.paginaInicial = (req, res) => {
    res.render('criar')
};

const Contato = require('../models/contatoModel')

exports.register = async (req, res) => {
    try {
    const contato = new Contato(req.body);
    await contato.register()
    if(contato.errors.length > 0) {
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect('/editar'));
        return;
    }
    contato.success.push('Registrado!')
    req.flash('success', contato.success);
    req.session.save(() => res.redirect(`/editar/editar/${contato.contato._id}`));
    return;
    } catch(e) {
        console.log(e)
        return res.render('404')
    }
};

exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.render('404');

    const user = await Contato.prototype.buscaPorId(req.params.id);

    if(!user) return res.render('404');

    res.render('contato', {
        contato: user,
    })
}

exports.edit = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
         
        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect(req.get('referer')));
            return;
        }
        contato.success.push('Editado!')
        req.flash('success', contato.success);
        req.session.save(() => res.redirect(`/editar/editar/${contato.contato._id}`));
        return;
    } catch(e) {
        console.log(e)
        res.render('views/404')
    }
    
}

exports.delete = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const user = await Contato.delete(req.params.id);
    if(!user) return res.render('404');

    req.flash('success', 'Contato apagado!')
    req.session.save(() => res.redirect(req.get('referer')));
    return;
}