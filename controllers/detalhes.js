module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var DetalhesController = {
		index: function(req, res){
			res.render('detalhes/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return DetalhesController;
};