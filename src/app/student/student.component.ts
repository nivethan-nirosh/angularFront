import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  name: string = 'Nirosh';
  sayGoodMorningToTeacher(){
    console.log('Hiii from student component');
  }
  @Input() stuItem: number = 6;

}
