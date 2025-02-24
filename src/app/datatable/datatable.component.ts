import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IPersonObject } from '../common.model';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent {
  constructor(private apiService: ApiService) {
  }
  person: IPersonObject[] = []


  ngOnInit() {
    this.apiService.getTodos().subscribe({
      next: (data) => {
        console.log('Data :', data);
      }

    });

    this.getAddressFromApiService();
  }

  getAddressFromApiService() {
    this.apiService.getPerson().subscribe({
      next: (result: IPersonObject[]) => {
        console.log('Person : ', result);
        this.person = this.apiService.addHashtagToDoor(result);
      },
      error: (err) => {
        console.error('Error fetching person data', err);
      }
    });
  }

  ngOnDestroy(){
    return this.apiService.transferData.update((value: any) => value.concat(this.person))
  }


}

