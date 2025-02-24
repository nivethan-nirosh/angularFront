import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm = new FormControl('')

  updateValue(){
    this.reactiveForm.setValue('Nivethan');
  }
  onFocus(){
    console.log('This user has touched the Input name');
  }

  ngOnInit(){
    this.reactiveForm.valueChanges.subscribe({
      next: (data) =>
      {
        console.log(data);
        console.log('Prestine :',this.reactiveForm.pristine);
        console.log('Dirty :',this.reactiveForm.dirty)
      }
    });

    this.reactiveForm.statusChanges.subscribe({
      next: (status) => {
        console.log('Status : ', status);
        if(this.reactiveForm.valid){
          console.log('Hii Nirosh, This looks good');
        }
        else{
          console.log('This is not looking good that much');
        }
      }
    })
  }

}
