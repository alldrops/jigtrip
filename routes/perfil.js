module.exports = function(app){
	var perfil = app.controllers.perfil;
	app.get('/perfil', perfil.index);
    app.get('/sair', perfil.logout);
};