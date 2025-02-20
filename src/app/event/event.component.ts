import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'] // Corrected
})
export class EventComponent {
  fruitData: any; 

  constructor(private commonService: CommonService){}

  ngOnInit(): void{
    this.commonService.getFruits().subscribe({
      next: (data) => {
        console.log(data);
        this.fruitData = data;
      }
    })
  }
  fruitClick(fruit: string){
    console.log("Fruit:",fruit);

  }
  onClick(){
    alert('Hii! There ');
  }
  press(msg: string){
    console.log("The Brower says :",msg);
  }

  evt(evet: MouseEvent){
    console.log("Event :",evet);
  }

  keyUp(event: KeyboardEvent){
    const value = (event.target  as HTMLInputElement).value;
    console.log(event.key);
    console.log(value);
  }
  keyUp1(event: any){
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  onSelectDate(event: any){
    console.log('Date Entered');
  }
  onFocus(){
    console.log('Focus');
  }
  onBlur(){
    console.log('Blur');
  }

  buttonClick(val: string){
    console.log(val);
  }
}

