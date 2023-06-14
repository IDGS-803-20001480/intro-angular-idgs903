import { Component } from '@angular/core'; // importar el decorador Component

@Component({
    selector: 'app-grupo', // nombre de la etiqueta sirve para colocar el componente en el html
    template: '<h1>Grupo IDGS-903</h1>'  
})
export class idgsComponent { // exportar la clase idgsComponent
    constructor() {}
}