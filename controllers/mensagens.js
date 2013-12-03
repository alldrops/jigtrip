module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var MensagensController = {
		index: function(req, res){
			res.render('mensagens/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return MensagensController;
};