import { Component } from '@angular/core';
/*interface iStudent {
  nombre: string,
  apellido: string,
  edad: number,
 }
*/
 class Student {
  public nombre = '';
  public apellido = '';
  public edad = 12
 
  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.edad = edad; 
  }
}



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  students: Array<Student> = [new Student('Ramiro', 'del Rio', 32), new Student('Pedro', 'Sanchez', 78), new Student('Christian', 'Steib', 31)];  

}










