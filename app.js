var express = require('express'),
	load 	= require('express-load'),
	app 	= express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.cookieParser('jigtrip'));
app.use(express.session());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(){
	console.log("JigTrip...");
});