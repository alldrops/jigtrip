var express = require('express'),
	load 	= require('express-load'),
	app 	= express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
	layout: false
});
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(){
	console.log("JigTrip...");
});