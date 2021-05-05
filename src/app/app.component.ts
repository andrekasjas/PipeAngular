import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localES from '@angular/common/locales/es';

registerLocaleData(localES);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Pepito Perez';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.235;
  salary = 10000;

  students = {
    name : 'Pepito',
    surname : 'Perez',
    age : 20,
    direction:{
      city : 'Pamplona',
      state : 'Norte de santander',
      dir:'calle 1 #1'
    }
  };

  show=true;
  test = 'PePITO pereZ';
  video = '2jYEz66J_J4';


  promise = new Promise<String>( (resolve) => {
    setTimeout(()=>{
      resolve('Time');
    },2000);
  });

  date = new Date();
}
