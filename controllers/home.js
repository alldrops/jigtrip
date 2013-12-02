module.exports = function(app) {
    //var Usuario = app.models.usuario;

	var HomeController = {
		index: function(req, res){
			res.render('home/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('http://www.google.com');
        }
	};
	return HomeController;
};