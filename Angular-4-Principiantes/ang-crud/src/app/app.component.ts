import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  employess = [ // Arreglo de objetos, empleados
    {'name': 'Juan', position: 'Manager'},
    {'name': 'Luis', position: 'Ambientalista'},
    {'name': 'Diego', position: 'Developer'}
  ];

  // Metodos Del CRUD
  addEmployee():void{ //Agregar Empleado

  };

  deleteEmployee():void{ // Eliminar Empleado

  };

  editEmployee():void{ // Editar Empleado

  };
}
