class Producto{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class Interfaz{
    agregarProducto(product){ //Recibe como parametro el objeto que creamos de la clase Producto
        const productList = document.getElementById("product-list"); // Accedemos al div donde se va mostrar la info
        const elementoHtml = document.createElement("div"); // Estamos creando un Div html para mostrar cada elemento agregado
        elementoHtml.innerHTML =  `
            <div class="card border-info text-center mb-4" id="listElement">
                <div class="card-header">Lista de Productos</div>
                <div class="card-body">
                    <strong class="card-text"> Producto: </strong> ${product.name} - 
                    <strong class="card-text"> Precio: </strong> ${product.price} -
                    <strong class="card-text"> Año: </strong> ${product.year} -
                    <button type="button" class="btn btn-outline-danger" name="btnEliminar">Eliminar</button>
                </div>
            </div>
        `;
        productList.appendChild(elementoHtml); // Llamamos la variable en donde se muetra la info y se manda la info almacenada
        }

    resetList(){
        document.getElementById("product-form").reset();
    }

    eliminarProducto(elemento){
        if (elemento.name === 'btnEliminar') {
           elemento.parentElement.parentElement.remove();
            //document.getElementById("listElement").remove();
        }
    }

    mostrarMensaje(){

    }
}

// Eventos del  DOM

document.getElementById("product-form").addEventListener('submit',
    function (e) {
        //  SE ABSTRAEN LOS VALORES DEL FORMULARIO PARA ENVIARLOS COMO ATRIBUTOS AL CREAR UN OBJETO
        const name = document.getElementById("nameProduct").value;
        const price = document.getElementById("priceProduct").value;
        const year = document.getElementById("yearProduct").value;

        // Creamos un un objeto de la clase Producto.
        const product = new Producto(name, price, year); 
    
        // Creamos un objeto de la clase Interfaz
        const interface = new Interfaz ();

        //Agg un producto a la interfaz
        interface.agregarProducto(product);
        e.preventDefault(); // Se llama funcion para que no se recargue la pagina
});

document.getElementById("product-list").addEventListener('click',
    function (e) {
        const interface = new Interfaz();
        interface.eliminarProducto(e.target);
        e.preventDefault(); // Se llama funcion para que no se recargue la pagina
    }
);