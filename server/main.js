var express = require('express');

var app = new express();
var port = 8686;

app.get('/', function(req, res){
	res.render('./../app/index.ejs', {});
	//res.sendFile('./../app/index.html', {});
})
.listen(port);

console.log("Server is running at "+ port);