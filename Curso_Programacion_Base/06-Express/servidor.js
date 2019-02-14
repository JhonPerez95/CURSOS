var express = require("express"); // Trayendo informacion del express y guadarlo en la variable
var app = express();              // Se crea una funcion

// colocar la url y lo que se va ejecutar .
app.get("/", inicio);
// req = request = lo que el navegador le pide al servidor
// res = response = lo que el servidor le responde al navegar
function inicio(req, res) {
    res.send("Hola Diego");
}
app.listen(8080);

// Codigo de la pagina npmjs - express
/*
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
*/
