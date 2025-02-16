import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fruitData: any;

  // fruitData = [
  //   {
  //     id: 1,
  //     name: "Apple",
  //     price: 120
  //   },
  //   {
  //     id: 2,
  //     name: "Orange",
  //     price: 110
  //   },
  //   {
  //     id: 3,
  //     name: "Mango",
  //     price: 90
  //   }
  // ]
  constructor(private http: HttpClient, private commonService: CommonService){
    // this.http.get('http://localhost:8080/api/fruits').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.fruitData = data;
    //   }
    // })

  }
  ngOnInit(){
    this.commonService.getFruits().subscribe({
      next: (data) =>
      {
        console.log(data);
        this.fruitData = data;
      }
    })

  }

 
}
