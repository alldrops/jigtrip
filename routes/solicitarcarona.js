module.exports = function(app){
	var solicitarcarona = app.controllers.solicitarcarona;
	app.get('/solicitar-carona', solicitarcarona.index);
    app.get('/sair', solicitarcarona.logout);
};