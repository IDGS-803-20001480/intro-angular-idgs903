import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

 alumnoForm!: FormGroup;
 mat!: string;
  nom!: string;
  edad!: number;
  correo!: string;
  pago!: number;
  foto!: string;
  calif!: number;

 constructor(private readonly fb: FormBuilder) { 
  this.alumnoForm = this.initForm()

 }

  onSubmit(): void {
    //console.log('Form -> ',this.alumnoForm.value);
    this.obtenerValores();
  }

 obtenerValores():void {
 /* const mat = this.alumnoForm.get('matricula')?.value;
  const nom = this.alumnoForm.get('nombre')?.value;
  const edad = this.alumnoForm.get('edad')?.value;
  const correo = this.alumnoForm.get('correo')?.value;
  const pago = this.alumnoForm.get('pago')?.value;
  const foto = this.alumnoForm.get('foto')?.value;
  const calif = this.alumnoForm.get('calif')?.value;*/
  this.mat = this.alumnoForm.get('matricula')?.value;
  this.nom = this.alumnoForm.get('nombre')?.value;
  this.edad = this.alumnoForm.get('edad')?.value;
  this.correo = this.alumnoForm.get('correo')?.value;
  this.pago = this.alumnoForm.get('pago')?.value;
  this.foto = this.alumnoForm.get('foto')?.value;
  this.calif = this.alumnoForm.get('calif')?.value;
 }

  

  initForm(): FormGroup {
    return this.fb.group({
      matricula:['',[Validators.required]],
      nombre:['',[Validators.required,Validators.minLength(3)]],
      edad:['',],
      correo:[''],
      pago:[''],
      foto:[''],
      calif:['']
    });
  }

}
