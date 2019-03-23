import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';
  message: string = '';

  employees = [ // Arreglo de objetos, empleados
    {'name': 'Juan', position: 'Manager', email: 'juan@gmail.com'},
    {'name': 'Luis', position: 'Ambientalista', email: 'luis@gmail.com'},
    {'name': 'Diego', position: 'Developer', email: 'diego@gmail.com'}
  ];
  model:any = {};
  model2:any = {};
  updateFrom:boolean = true; 

  // Metodos Del CRUD
  addEmployee():void{ //Agregar Empleado
    this.employees.push(this.model);
    this.message = 'Dato Agregado';
    this.model = {};
  };

  deletEmployee(i):void{ // Eliminar Empleado
    var answer = confirm("Esta seguro que desea eliminarlo ?");
    if (answer) {
      this.employees.splice(i);
    }
  };

  myValue;
  editEmployee(i):void{ // Editar Empleado
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
    this.updateFrom = false;
  };

  updateEmployee():void { // Actualizar Empleado
    let j = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.message = 'Dato Actualizado';
        this.model2 = {};
        this.updateFrom = true;
      }
    }        
  }
  
  closeAlert():void{ // Cerrar alerta
    this.message = '';
  }

}
