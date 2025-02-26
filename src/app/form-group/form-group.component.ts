import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule, InputTextModule, TextareaModule, InputNumberModule, CheckboxModule, ButtonModule, CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initializeForm();

  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern('^[a-z0-9 ]*')
        ]
      ],
      description: ['', 
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      phoneno: ['',
        [
          Validators.required,
          Validators.pattern('^[7][0-9]{9,10}$')
        ]
      ],
      term: [false, 
        [
          Validators.requiredTrue
        ]]


    })

  }
  onSubmit() {
    console.log(this.registerForm.value)
  }

  getValidateUserError(userRegister: any){
    if(userRegister?.hasError('required')){
      return 'Enter a valid username';
    }
    else if(userRegister?.hasError('pattern')){
      return 'Enter Valid characters';
    }
    else if(userRegister?.hasError('maxlenght')){
      return 'Name length is exceeds';
    }
    else if(userRegister?.hasError('minlenght')){
      return ' Minimum Lenght is 6 ';
    }
    else{
      return '';
    }

  }

}
