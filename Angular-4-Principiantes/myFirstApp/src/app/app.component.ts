import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Declaramos el tipo de dato de cada variable TypeScript
  title: string;
  email: string;
  webSite: string;
  hobbies: string[];
  estado: boolean;

  constructor(){
    this.title = 'Mi Primera App ';
    this.email = 'jhonperez.j95@gmial.com';
    this.webSite = 'https://www.facebook.com/JhonPerez95';
    this.hobbies = ['Hacer ejercicio', 'Estudiar', 'Ir al cine'];
    this.estado = false;
  }
  mostrarHobbies(){
    this.estado = !this.estado; //Cambie el estado al inverso
  }
}

