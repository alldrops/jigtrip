module.exports = function(app){
	var editarperfil = app.controllers.editarperfil;
	app.get('/editar-perfil', editarperfil.index);
    app.get('/sair', editarperfil.logout);
};