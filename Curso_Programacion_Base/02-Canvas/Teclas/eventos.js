var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}
 
var area = document.getElementById("area_dibujo"); 
var lienzo = area.getContext("2d");
var x = 150;
var y = 150; 
var estado = 0;
var colorcito = "red";

// Escuchador de eventos Teclado - Mouse
document.addEventListener("keyup", dibujarTeclado);          // espera a que pase el evento para que se ejecute dicha funcion
document.addEventListener("mousedown", presionarMouse);      // Cuando oprimes el mouse
document.addEventListener("mouseup", soltarMouse);           // Cuando sueltas el mouse
document.addEventListener("mousemove", dibujarMouse);        // cuando mueves el mouse

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal ) {
    lienzo.beginPath();                     // Inicia el trazo
    lienzo.strokeStyle = color;             // Estilo de trazo (color)
    lienzo.lineWidth = 3;                   // Ancho de la linea
    lienzo.moveTo(xInicial, yInicial);      // Donde comienza la linea
    lienzo.lineTo(xFinal, yFinal);          // Traza la linea (ubica punto final)
    lienzo.stroke();                        // Dibuja con el estio de trazo
    lienzo.closePath();                     // Cierra el dibujo
}

function presionarMouse(evento) {
    estado = 1;;
}
function soltarMouse(evento) {
    estado = 0;
}
function dibujarMouse(evento) {             
   if (estado == 1) {

       dibujarLinea(colorcito, x, y , evento.clientX, evento.clientY); 
   }
                                // Guarda la posicion despues de dibujar linea
   x = evento.clientX;          // clientX es una variable donde almacena la posicion de x
   y = evento.clientY;
}


function dibujarTeclado(evento) { // Dibujando con el teclado 
   
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.DOWN: // movimientos abajo
            dibujarLinea(colorcito, x, y, x, y + movimiento);
            y = y + movimiento;
        break;
        case teclas.UP: // movimientos arriba
        dibujarLinea(colorcito, x, y, x, y - movimiento);
        y = y - movimiento;
        break;
        case teclas.LEFT: // movimientos izquierda 
        dibujarLinea(colorcito, x, y, x - movimiento, y );
        x = x - movimiento;
        break;
        case teclas.RIGHT: // movimientos Derecha
        dibujarLinea(colorcito, x, y, x + movimiento, y );
        x = x + movimiento;
        break;
    }
}