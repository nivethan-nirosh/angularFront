import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-teacher',
  imports: [StudentComponent, InputTextModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  @ViewChild('teacherRef') teacherRefCom: ElementRef | undefined
  @ViewChild('teacherInput') teacherInpCom!: ElementRef
  @ViewChild('teacherCheck') teacherChkIn: ElementRef | undefined
  //Have a Look on it
  @ViewChildren('teacherButton') teacherButtonCom : QueryList<ElementRef> | undefined
  @ViewChild(StudentComponent) studentCom : StudentComponent | undefined
  @ViewChildren(StudentComponent) studentComs : QueryList<ElementRef> | undefined

  @ViewChild('primeInput') inputTextCom: ElementRef| undefined

  //Life cycle hook
  ngAfterViewInit(){
    console.log(this.teacherRefCom?.nativeElement.textContent);
    this.teacherRefCom!.nativeElement.style.color = 'red';
    this.teacherRefCom!.nativeElement.textContent = 'Teacher Works hardly to'

    this.teacherInpCom!.nativeElement.value = 'Teacher Request you to type here'
    console.log(this.teacherInpCom?.nativeElement.value);

    this.teacherChkIn!.nativeElement.checked = true;

    this.teacherButtonCom!.forEach((item) => {
      console.log(item.nativeElement.textContent);
    })
    
    this.studentCom?.sayGoodMorningToTeacher();
    console.log(this.studentCom?.name);

    console.log(this.inputTextCom)
  }

  ngAfterViewChecked(){
    console.log('Changes are detected');
    console.log(this.inputTextCom?.nativeElement.value);
  }



}
