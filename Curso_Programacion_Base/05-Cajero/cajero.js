class Billete {
    constructor(v,c){
        this.cantidad = c;
        this.valor = v;
        this.imagen

    }
}
function entregarDinero() {

    var t = document.getElementById("txtDinero");
    dinero = parseInt(t.value);

    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero/bi.valor);
            if (div>bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor*papeles);
        }
    }
    if (dinero>0) {
        resultado.innerHTML = "soy un cajero pobre";
    }else{
        for(var e of entregado){
            resultado.innerHTML +=  e.cantidad + " billetes de $ "+e.imagen+" <br/>"; // Es lo mismo que tener 
            // resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ "+e.valor+" <br/>";
        }
    }
}

var caja=[];
var entregado = [];

caja.push(new Billete(50,3,"./img/billete50.png") );
caja.push(new Billete(20,2,"./img/billete20.png") );
caja.push(new Billete(10,2, "./img/billete10.png") );
var dinero = 0;
var div = 0;
var papeles  = 0;
var resultado = document.getElementById("idResultado");
var b = document.getElementById("btnExtraer");

Billete.imagen = new Image(); // Se crea un objeto (fondo) de la clase Image
Billete.imagen.src = Billete.url;
b.addEventListener("click", entregarDinero);