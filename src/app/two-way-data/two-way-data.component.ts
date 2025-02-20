import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule,  FormGroup, FormControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-two-way-data',
  standalone: true,
  imports: [FormsModule, InputTextModule,  CheckboxModule, RadioButtonModule, SelectModule, ReactiveFormsModule, DatePickerModule],
  templateUrl: './two-way-data.component.html',
  styleUrl: './two-way-data.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class TwoWayDataComponent implements OnInit {
  ngOnInit() {
    this.date = new Date();
    
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    
}


  checked: boolean = false;
  date: Date | undefined;
  value: string = '';
  ingredient!: string;
  formGroup!: FormGroup;
  keyUp(){
    console.log(this.value);
  }

  cities: City[] | undefined;

    selectedCity: City = {name: 'London', code: 'LDN'};

    

}
