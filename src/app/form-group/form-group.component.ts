import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule, InputTextModule, TextareaModule, InputNumberModule, CheckboxModule, ButtonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.initializeForm();

  }

  initializeForm(){
    this.registerForm = this.fb.group({
      username : [''],
      description : [''],
      phoneno : [],
      term : [true]


    })

  }
  onSubmit(){
    console.log(this.registerForm.value)
  }

}
