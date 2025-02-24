import { Component } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-content-parent',
  imports: [ContentChildComponent],
  standalone: true,
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.scss'
})
export class ContentParentComponent {

  constructor(private apiServices: ApiService){
    const receivedData = this.apiServices.transferData();
    console.log('Reveived Data : ' , receivedData);

  }

}
