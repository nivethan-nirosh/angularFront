import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common.service';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fruitData: any;
  constructor(private commonService: CommonService) {}

ngOnInit(): void{
  this.commonService.getFruits().subscribe({
    next: (ref) => {
      this.fruitData = ref;
      console.log('this.fruitData :',this.fruitData);
    }
  });
}
}
