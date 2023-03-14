exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        console.log('voce postou um nome')
    }
    next();
};