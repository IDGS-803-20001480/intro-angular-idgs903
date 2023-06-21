import { Component } from '@angular/core';

@Component({
  selector: 'app-ievn2',
  templateUrl: './ievn2.component.html',
  styleUrls: ['./ievn2.component.css']
})
export class Ievn2Component {

   // alumnos: any[] = [];
   imageWidth: number = 50;
   imageMargin: number = 2;
   muestraImg: boolean = false;
   listFilter: string = '';

  showImage():void {
    this.muestraImg = !this.muestraImg; // Esta funcion cambia el valor de muestraImg a su contrario
  }
    alumnos: any[] = [
      {
        "matricula": 2016630401,
        "nombre": "Mario",
        "edad": 20,
        "correo": "mario@gmail.com",
        "pago": 123.46,
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7j0B9LAKNAbOpfldgo08IRr6mudVXayCDg&usqp=CAU"
      },
      {
        "matricula": 333,
        "nombre": "Dario",
        "edad": 22,
        "correo": "dario@gmail.com",
        "pago": 123.46,
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbD3F5A1iIVAXkJfPo9QS_rJPvZGf-Q5FLjA&usqp=CAU"
      },
      {
        "matricula": 1234,
        "nombre": "Juan",
        "edad": 21,
        "correo": "juan@gmail.com",
        "pago": 129.46,
        "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYjUIj3bo4QcOWXYxuUY-ayX8W18zBdKvTg&usqp=CAU"
      }
    ] 

}
