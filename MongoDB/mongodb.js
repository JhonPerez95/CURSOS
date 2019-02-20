//Crear usuario
db.createUser({
    user: 'jhon',
    pwd: '123',
    roles: ['readWrite', 'dbAdmin']
});

// Para isertar datos , tiene que ser por medio de colecciones.
db.Clientes.insert({
    firstName:'Isaac', 
    lastName:'Asimov'
});

//Mostrar datos
db.Clientes.find();

// Insertar varios datos al tiempo --> Arrays
db.Clientes.insert(
    [
        {firstName: 'Carlos', lastName: 'Uribe'},
        {firstName: 'Camilo', lastName: 'Ortiz'},
        {firstName: 'Juan', lastName: 'Tobon'}
    ]
);

// Buscar datos en especifico
db.Clientes.find({firstName:'Isaac'});

// Actualizar un dato 

db.Clientes.update(
    {firstName:'Carlos'},  // Se busca el dato a actualizar
    {
        firstName:'Jainer',
        lastName: 'Lozano',
        gender: 'Masculino' // Se añade una nueva caracteristica
    }
);

//Mostrar los datos de una manera mas legible
db.Clientes.find().pretty();    

//Buscar por ID
db.Clientes.find({_id: ObjectId("5c6a2042908c07c961191a13")});

//Agregar un dato sin necesidad de reescribir todo
db.Clientes.update(
    {_id: ObjectId("5c6a2042908c07c961191a13")},
    {$set:{age: 45}} // Con esto solo se agrega la caracteristica edad
);
db.Clientes.update(
    {_id: ObjectId("5c6a2270908c07c961191a15")},
    {$set:
        {
            age: 45,
            gender: 'Masculino'
        }
    }
);

//Actualizar un dato Incrementando 
db.Clientes.update(
    {_id: ObjectId('5c6a2270908c07c961191a15')},
    {$inc: {age: 5}
    }
);

//Actualiza dato pero sino existe lo crea , upsert
db.Clientes.update(
    {firstName: 'Luis'},
    {
        firstName: 'Luis',
        lastName: 'Leon',
        age: 22,
        gender: 'Masculino'
    }, 
    {upsert: true}
);

//Actualizar pero Eliminado una dato Caracteristica Age
db.Clientes.update(
    {_id: ObjectId('5c6a2270908c07c961191a15')},
    {$unset: {age: 1}
    }
);

//Actualiza renombrando una caracteristica , rename 
db.Clientes.update(
    {firstName: "Luis"},
    {$rename:
        {gender: "sex"}
    }
);

//Actuliza eliminando un dato con, remove
db.Clientes.remove(
    {firstName: "Camilo"}
);

//Buscar datos juntos con la condicional o , or
db.Clientes.find(
    {$or:
        [ // Son dos objetos se deben enviar como Array
            {firstName: "Jainer"},
            {firstName: "Luis"}
        ]
    }
);

//Insertamos mas datos
db.Clientes.insert(
    [
        {firstName:"Diego", lastName:"Real", age: 22, sex:"Masculino"},
        {firstName:"Diego", lastName:"Diaz", age: 30, sex:"Masculino"},
        {firstName:"Fernando", lastName:"Martinez", age: 80, sex:"Masculino"},
    ]
);

//Buscar datos condicional mayor que , gt
db.Clientes.find(
    {age:
        {$gt: 25}
    }
);

//Buscar datos condicional menor que , lt
db.Clientes.find(
    {age:
        {$lt: 25}
    }
);

// ambos al tiempo , lt , gt
db.Clientes.find(
    {age:
        {$lt: 30, $gt:20}
    }
);

//Insertar datos en lo objetos ingresados
db.Clientes.insert(
    {
        firstName: "Pedro",
        lastName: "Santana",
        addres: {
            city: "London"
        },
        age: 29,
        sex: "Man"
    }
);

// Para buscar este tipo de datos seria;
db.Clientes.find(
    {"addres.city": "London"} //Con formato json se busca
);

//Buscar datos que contengan x cosa 
db.Clientes.find(
    {
        firstName:{$regex:"dro"}
    }
);

//Ordenar en la busqueda con el metodo sort() ,  
// 1 de menor  a mayor A-Z , inversa seria -1
db.Clientes.find().sort(
    {
        lastName: 1
    }
);

//Contador de registros, metodo count
db.Clientes.count();

//Combina meotdos de busqueda y lo cuenta count
db.Clientes.find( {age: {$gt:20}}).count();

// Tambien se puede limitar las busquedas con el metodo , limit
db.Clientes.find().limit(5);

//Combinando funciones de javaScript
db.Clientes.find().forEach(
    function(doc) {
        print("Primer Nombre: " + doc.firstName);
    }
);


//Documentacion de MongoDB
db . inventario . insertMany ([ 
    // MongoDB agrega el campo _id con un ObjectId si _id no está presente 
    { 
        elemento :  "diario" ,
        cantidad :  25 , 
        estado :  "A" , 
        tamaño :  {  h :  14 ,  w :  21 ,  uom unt();:  "cm "  }, 
        tags :  [  " blank " ,  " red "  ]  
    }, 
    {  
        item :  " notebook " ,
        qty : 50 , 
        estado :  "A" , 
        tamaño :  {  h :  8.5 ,  w :  11 ,  uom :  "en"  },
        etiquetas :  [  "rojo" ,  "en blanco"  ]  
    }, 
    {  elemento :  "papel" ,  cantidad :  100 ,  estado :  "D" , 
        tamaño :  {  h :  8.5 ,  w :  11 ,  uom :  "en" },  tags :  [  "red" ,  "blank" ,  "plain"  ]  }, 
    {  item :  "planner" ,  qty :  75 ,  status :  "D" , 
        tamaño :  {  h :  22.85 ,  w :  30 ,  uom :  " cm "  },  tags :  [  " blank " ,  " red "  ]  }, 
    {  
        item :  " postcard " , cantidad :  45,  estado :  "A" , 
        tamaño :  {  h :  10 ,  w :  15.25 ,  uom :  "cm"  },
        etiquetas :  [  "azul"  ]  
    } 
 ]);