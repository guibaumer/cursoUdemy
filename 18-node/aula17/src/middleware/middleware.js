exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'variavel local'
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('BAD CSRF')
    }
}
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}