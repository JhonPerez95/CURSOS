var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

function prender() {
    var led = new jf.led(13);
    led.blink();
}



/* CODIGO DESDE LA MISMA PAGINA OFICIAL
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});
*/