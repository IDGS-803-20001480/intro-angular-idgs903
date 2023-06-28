import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnos } from './alumnos';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  //Esto sirve para filtrar los datos de la tabla de alumnos recibiendo como parametro el nombre del alumno
  // y devolviendo el arreglo de alumnos
  transform(value: IAlumnos[], args: string): IAlumnos[] {
    let filter: string = args ? args.toLocaleLowerCase() : '';
    return filter ? value.filter((alumno: IAlumnos) =>
    alumno.nombre.toLocaleLowerCase().indexOf(filter) != -1) : value;

  }

}
