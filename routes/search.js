module.exports = function(app){
	var search = app.controllers.search;
	app.get('/busca', search.index);
    app.get('/sair', search.logout);
};