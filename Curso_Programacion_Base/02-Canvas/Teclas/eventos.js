var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.DOWN:
            console.log("vamos para abajo");
        break;
        case teclas.UP:
            console.log("vamos para arriba");
        break;
        case teclas.LEFT:
            console.log("vamos para izquierda");
        break;
        case teclas.RIGHT:
            console.log("vamos para derecha");
        break;
    }
}