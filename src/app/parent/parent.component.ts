import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { INameObject } from '../common.model';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  numArr: INameObject[] = [
    {
      id: 1,
      name: 'Nirosh',
      value: 100
    },
    {
      id: 2,
      name: 'Nivethan',
      value: 120
    },
    {
      id: 3,
      name: 'Niral',
      value: 60
    }
  ]
  studentObj: INameObject = {
    id: 4,
    name: 'Hexohen',
    value: 55
  }
  dataFromChild!: string[]

  valueFromChild(msg: string[]){
    console.log(msg);
    this.dataFromChild = msg;
  }

}
