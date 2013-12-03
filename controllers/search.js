module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var SearchController = {
		index: function(req, res){
			res.render('busca/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return SearchController;
};