module.exports = function(app){
	var detalhes = app.controllers.detalhes;
	app.get('/detalhes', detalhes.index);
    app.get('/sair', detalhes.logout);
};