module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var AlertasController = {
		index: function(req, res){
			res.render('alertas/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return AlertasController;
};