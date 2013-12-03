module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var OferecerCaronaController = {
		index: function(req, res){
			res.render('oferecercarona/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return OferecerCaronaController;
};