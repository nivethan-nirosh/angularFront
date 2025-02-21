import { Component, Input } from '@angular/core';
import { INameObject } from '../common.model';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() value!: INameObject[];
  // @Input({required: true}) studentObj!: INameObject; ---> Used this for required one
  @Input({alias: 'std'}) studentObj!: INameObject;
  //@Input() value: number = 50 ( can set the default value like this)
  //@Input() age!: number;

  //Manupulating the Parent Input
  initialValue!: number;
  @Input() set age(ageVal: number){
    this,this.initialValue = ageVal*5;
  }
  get age(){
    return this.initialValue;
  }

  @Input({transform: (val: number) => val * 2}) weight!: number;

  @Input({transform: transformValue}) complexObj!: INameObject[];

}
function transformValue(value: INameObject[]): INameObject[] {

  return value.map((item) => {
    return {
      ...item,
      val : item.value*2
    }
  })
}