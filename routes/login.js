module.exports = function(app) {
    var login = app.controllers.login;
    app.get('/login', login.index);
};