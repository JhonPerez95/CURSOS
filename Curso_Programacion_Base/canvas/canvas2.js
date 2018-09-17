var d = document.getElementById("idCanvas");
var lienzo = d.getContext("2d");
var lineas = 15; 
var l = 0;
var xi, yi, xf, yf ;

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, ) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();   
}

dibujarLinea("red", 0, 150, 300, 150);
dibujarLinea("red", 150, 0, 150, 300);

for (var l= 0; l < lineas; l++) {
	yi = 10 * l;
 	dibujarLinea("blue", 150, yi,150+yi, 150);
 	dibujarLinea("blue", 150, yi, 150-yi, 150);
 	dibujarLinea("blue", 150, 150+yi, 300-yi, 150);
 	dibujarLinea("blue", 150, yi+150 , yi, 150);
}
