var express = require('express');

var app =express();

var bodyParser = require('body-parser');
var mysql      = require('mysql');

 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

app.get('/',function(req,res){
 res.sendFile(__dirname+'/main.html');
});


app.post('/signup', function (req, res) {
var name=req.body.fname;
var passwd=req.body.aa;
});

connection.query('Server.js', function(err, rows, fields) {
if (err)
throw err;
else
res.send("signup done");
});
app.listen(3000);


