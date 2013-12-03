module.exports = function(app){
	var mensagens = app.controllers.mensagens;
	app.get('/mensagens', mensagens.index);
    app.get('/sair', mensagens.logout);
};