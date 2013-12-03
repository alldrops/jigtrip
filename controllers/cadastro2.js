module.exports = function(app) {

	var Cadastro2Controller = {
		index: function(req, res){
			res.render('cadastro2/index');
		},
        logout: function(req, res){
            //req.session.destroy();
            res.redirect('/');
        }
	};
	return Cadastro2Controller;
};