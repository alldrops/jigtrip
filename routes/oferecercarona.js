module.exports = function(app){
	var oferecercarona = app.controllers.oferecercarona;
	app.get('/oferecer-carona', oferecercarona.index);
    app.get('/sair', oferecercarona.logout);
};