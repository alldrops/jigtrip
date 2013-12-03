module.exports = function(app){
	var alertas = app.controllers.alertas;
	app.get('/alertas', alertas.index);
    app.get('/sair', alertas.logout);
};