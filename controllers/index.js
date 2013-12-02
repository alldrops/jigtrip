module.exports = function(app) {

    var IndexController = {
        index: function(req, res) {
            res.render('index/index');
        }
    }
    return IndexController;
};