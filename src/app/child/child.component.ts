import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { INameObject } from '../common.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-child',
  imports: [ButtonModule],
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



//**************************************************************/
//**************************************************************/
//**************************************************************/
//**************************************************************/
//**************************************************************/
//**************************************************************/

// msg: string = 'Hello from child daa';
msg: string[] = ['Nirosh','Nivethan','Niral'];
@Output("valChild") valFromChild = new EventEmitter<string[]>();

sayParent(){
  //console.log(msg);
  this.valFromChild.emit(this.msg);
}
//@Output("valChild") valFromChild = new EventEmitter<string[]>(); --> Same as below
sendDataToPrent = output<string>();

informParent(message: string){
  console.log(message);
  this.sendDataToPrent.emit(message);


}


}
function transformValue(value: INameObject[]): INameObject[] {

  return value.map((item) => {
    return {
      ...item,
      val : item.value*2
    }
  })
}