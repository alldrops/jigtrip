module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var PerfilController = {
		index: function(req, res){
			res.render('perfil/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return PerfilController;
};