import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-control-flow',
  imports: [ButtonModule, NgFor],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  dataObject = {
    subData: {
      subData2: {
        firstname: 'Nirosh'
      }
    }
  }

  age: number = 56;
  num: number = 10;

  fruitDetails = [
    {
      id: 1,
      name: 'Apple',
      price: 100      
    },
    {
      id: 2,
      name: 'Banana',
      price: 60      
    },
    {
      id: 3,
      name: 'Cherry',
      price: 50      
    },
    {
      id: 4,
      name: 'Diwul',
      price: 80      
    },
  ];

  showData(){
    this.fruitDetails = [
      {
        id: 1,
        name: 'Apple',
        price: 100      
      },
      {
        id: 2,
        name: 'Banana',
        price: 60      
      },
      {
        id: 3,
        name: 'Cherry',
        price: 50      
      },
      {
        id: 4,
        name: 'Diwul',
        price: 80      
      },
      {
        id: 5,
        name: 'Egg',
        price: 80      
      }
    ]
  }

  //This is and the *ngFor is happend when we are using showData() method
  trackByFn(ind: number, item: any){
    return item.id;
  }

  remove(){
    this.fruitDetails = [];
  }

}
