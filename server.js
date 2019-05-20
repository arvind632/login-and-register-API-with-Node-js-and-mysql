var express    = require("express");
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

app.get('/login', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});



//route to handle user registration
 app.post('/api/register',login.register);
 app.post('/api/login',login.login);

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});



app.listen(5000);