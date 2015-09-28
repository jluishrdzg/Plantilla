// Imports
var http = require('http');
var fs = require('fs');
var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', showIndex);
app.get('/index.html', showIndex);

function showIndex(request, response) {
  response.writeHead(200, {'Context-Type': 'text/html'});
  fs.createReadStream('./index.html').pipe(response);
}

var server = app.listen(8888, function(){
  console.log("Servidor activo en puerto 8888");
});

// Rutas estaticas que se importarán en el proyecto
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/libs', express.static(__dirname + '/libs'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


// Conexion a la base de datos
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'luis',
  database: 'personajes',
  port: '3306'
});

connection.connect(function (error) {
  if(error) throw error;
  else console.log('Conexion correcta.');
});
