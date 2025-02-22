import { Component, ElementRef, ViewChild } from '@angular/core';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-teacher',
  imports: [StudentComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  @ViewChild('teacherRef') teacherRefCom: ElementRef | undefined
  @ViewChild('teacherInput') teacherInpCom!: ElementRef
  @ViewChild('teacherCheck') teacherChkIn: ElementRef | undefined

  //Life cycle hook
  ngAfterViewInit(){
    console.log(this.teacherRefCom?.nativeElement.textContent);
    this.teacherRefCom!.nativeElement.style.color = 'red';
    this.teacherRefCom!.nativeElement.textContent = 'Teacher Works hardly to'

    this.teacherInpCom!.nativeElement.value = 'Teacher Request you to type here'
    console.log(this.teacherInpCom?.nativeElement.value);

    this.teacherChkIn!.nativeElement.checked = true;

  }

  ngAfterViewChecked(){
    console.log('Changes are detected');
  }

}
