module.exports = function(app){
	var cadastro2 = app.controllers.cadastro2;
	app.get('/completar-cadastro', cadastro2.index);
    app.get('/sair', cadastro2.logout);
};