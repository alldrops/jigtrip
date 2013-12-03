module.exports = function(app) {

	var EditarPerfilController = {
		index: function(req, res){
			res.render('editarperfil/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return EditarPerfilController;
};