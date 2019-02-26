const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");
const routesApi = require("./routes-api");
const app = express();


// req = request = lo que el navegador le pide al servidor
// res = response = lo que el servidor le responde al navegador



//SETTINGS
app.set('appName', 'Mi Primier servidor'); // Se declara variable
app.set('views', __dirname+'/views'); // Le estamos indicando donde encontrara todas Templates 
app.set('view engine', 'ejs'); // Motor de plantillas
 // __dirname muestra la ruta de este arichivo


//MIDDELWARES  - Funciones que se ejecutan en orden
app.use(morgan('short')); // morgan es solo llamada ya que es una funcion, y se debe enviar parametros predeterminados

app.use(function (req, res, next) {
    console.log('Request URL: '+req.url);
    next();
});


//ROUNTING - RUTAS 

app.use(routes);
app.use(routesApi);

app.get('*', function (req, res) {
    res.send("Esta ruta no existe");    
    //console.log("Paso a una ruta que no existe");
});


//////////////////////////////
app.listen(3000, function () {
    console.log("Servidor funcionando");
    console.log("Nombre de la App: "+ app.get('appName'));
});