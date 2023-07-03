import { Component } from '@angular/core';

interface iStudent {
  nombre: string,
  apellido: string,
  edad: number,
  cuotapendiente: number,
  fechanacimiento?: Date;
 }

class Student implements iStudent {
  constructor(
    public nombre: string,
    public apellido: string,
    public edad: number,
    public cuotapendiente: number,
    public fechanacimiento?: Date, 
  ) {
    
  }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  students: Array<Student> = [
    new Student('Ramiro', 'del Rio', 32, 1022.23, new Date(1991, 4, 29)), 
    new Student('Pedro', 'Sanchez', 78, 60001.20), 
    new Student('Carlos', 'Rivera', 11, 123.45),
    new Student('Juan', 'Sierra', 22, 15000.01),
    new Student('Maximiliano', 'Perez', 33, 12000.12),
];  
}










 /*
 class Student implements iStudent {
  public nombre = '';
  public apellido = '';
  public edad = 12
 
  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.edad = edad; 
  }
}
*/