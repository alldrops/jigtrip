module.exports = function(app){
	var home = app.controllers.home;
	app.get('/home', home.index);
    app.get('/sair', home.logout);
};