import { Component } from '@angular/core'; // importar el decorador Component

@Component({
    selector: 'app-ievn', // nombre de la etiqueta sirve para colocar el componente en el html
    template: '<h1>Saludos desde  IEVN</h1>' 
})
export class ievnComponent { // exportar la clase idgsComponent
    constructor() {}
}