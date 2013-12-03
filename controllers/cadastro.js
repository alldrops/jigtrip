module.exports = function(app) {

	var CadastroController = {
		index: function(req, res){
			res.render('cadastro/index');
		}
	};
	return CadastroController;
};