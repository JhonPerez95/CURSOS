var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(1,5);

var fondo = {
    url: "./img/tile.png",
    cargaOK: false
}
var vaca = {
    url: "./img/vaca.png",
    cargaOK: false
}
var pollo = {
    url: "./img/pollo.png",
    cargaOK: false
}
var cerdo = {
    url: "./img/cerdo.png",
    cargaOK: false
}


fondo.imagen = new Image(); // Se crea un objeto (fondo) de la clase Image
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", dibujarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", dibujarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", dibujarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", dibujarPollos);





function dibujarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function dibujarVacas() {
    vaca.cargaOK = true;
    dibujar();
}
function dibujarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}
function dibujarPollos() {
    pollo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (let v = 0; v < cantidad; v++) {
            var x  = aleatorio(0,7);
            var y  = aleatorio(0,7);
            x = x * 60;
            y = y * 60; 
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOK) {
        for (let v = 0; v < cantidad; v++) {
            var x  = aleatorio(0,7);
            var y  = aleatorio(0,7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (pollo.cargaOK) {
        for (let v = 0; v < cantidad; v++) {
            var x  = aleatorio(0,7);
            var y  = aleatorio(0,7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    console.log(cantidad);
}



function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random()*(maxi-min))+min;
    return resultado;
} 