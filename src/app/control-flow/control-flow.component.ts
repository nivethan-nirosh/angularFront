import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
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

}
