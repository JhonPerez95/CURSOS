var d = document.getElementById("idDibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;
var texto = document.getElementById("txt_Lineas");
var boton = document.getElementById("btn_Enviar");
boton.addEventListener("click", dibujoPorClick);
/*
while (l < lineas) {
    yi = 10 * l;
    xf = 10 * (l + 1)
    dibujarLinea("red", 0, yi, xf, 300);
    l = l + 1;

}

for ( l = 0; l < lineas; l++) {
    xi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("blue", xi, 0, 300, xf );
} 
for (let l = 0; l < lineas; l++) {
    xi = 10 * l;
    xf = 10 * (l+1);
    yi = 10 * l;
    dibujarLinea("red", 0, yi, xf, 300);
    dibujarLinea("blue", xi, 0, 300, xf );
}

for (let l = 0; l < lineas; l++) {
    yi = 10*l;
    xf = 300 - (l*10) ;
    dibujarLinea("yellow", 0, yi, xf, 0 );
}
for (let l = 0; l < lineas; l++) {
   xi = 10 *l;
   yf = 300 - (l*10);
    dibujarLinea("green", xi, 300, 300, yf );
} 

for (let l = 0; l < lineas; l++) {
    xi = 10 *l;
    yf = 300 - (l*10);
    yi = 10*l;
    xf = 300 - (l*10) ;
    dibujarLinea("yellow", 0, yi, xf, 0 );
    dibujarLinea("green", xi, 300, 300, yf );
}

for ( l = 0; l < lineas; l++) {
    xi = 10 * l;
    xf = 10 * (l+1);
    yi = 10 * l;
    yf = 300 - (l*10) ;
    dibujarLinea("red", 0, yi, xf, 300);
    dibujarLinea("blue", xi, 0, 300, xf );
    dibujarLinea("yellow", 0, yi, 300-xf, 0 );
    dibujarLinea("green", xi, 300, 300, yf );
} 
*/
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, ) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();   
}
function dibujoPorClick() {
   var lineas = parseInt(texto.value);
   var espacio = ancho/lineas;
    var l = 0;
    var yi, xf, xi, yf;
    for ( l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1)
        dibujarLinea("red", 0, yi, xf, 300);
    }
}
// dibujarLinea("green", 10, 300 ,300, 290);
// dibujarLinea("red", 20, 300, 300, 280);


