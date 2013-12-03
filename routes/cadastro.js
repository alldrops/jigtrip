module.exports = function(app) {
    var cadastro = app.controllers.cadastro;
    app.get('/cadastro', cadastro.index);
};