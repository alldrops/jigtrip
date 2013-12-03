module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var SolicitarCaronaController = {
		index: function(req, res){
			res.render('solicitarcarona/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return SolicitarCaronaController;
};