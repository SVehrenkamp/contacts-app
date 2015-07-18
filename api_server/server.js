var express = require('express');
var app = express();
var request = require('request');
var config = require('./config.json');
var fs = require('fs');
var oauth = require('./access.json');
var csvjson = require('csvjson');

var base_url = "https://app.box.com/api/";
var authorize_url = base_url+'oauth2/authorize?response_type=code&client_id='+config.client_id+'&state=security_token%3DKnhMJatFipTAnM0nHlZA';

/*Serve Static Assets*/
app.use(express.static('../contactApp/www'));
app.get('/', function (req, res) {
	res.sendFile('../contactApp/www');
});

/*Authorize User*/
app.get('/auth', function(req, res){
	res.redirect(authorize_url);
	
});

/*Get Bearer Token*/
app.get('/box/auth/callback', function(req, res){
	var url = base_url + 'oauth2/token';
	var code = req.query.code;
	var grant = 'authorization_code';

	var options = {
		url: url, 
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		formData: {
			grant_type:grant, 
			code: code, 
			client_id: config.client_id, 
			client_secret: config.client_secret
		}
	};
	
	request(options, function(err, res, body){
		if(err) throw err;
		console.log(body);
		fs.writeFile('./access.json', body, function(err){
			if(err) throw err;
			console.log('Created Oauth file!');
		});
	});
});

/*get all folders*/
app.get('/contacts', function(req, res){
	var id = 0;

	var options = {
		url: base_url+'2.0/files/33506914617/content', 
		headers: {
			'Authorization': 'Bearer '+oauth.access_token
		} 
	};
	request(options, function(err, resp, body){
		if(err) throw err;
		fs.writeFile('./contacts.csv', body, function(er){
			if(err) throw err;
			console.log('created .csv file!');
		var payload = csvjson.toObject('./contacts.csv').output;
		res.json(payload);

		});
	});
});


var server = app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000');
});

