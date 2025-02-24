import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IPersonObject } from '../common.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  transferData = signal<IPersonObject[]>([]);

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getPerson(){
    return this.http.get<IPersonObject[]>('http://localhost:8080/api/person');
  }

  addHashtagToDoor(arr: IPersonObject[]){
    return arr.map((obj: IPersonObject) => ({
      ...obj,
      doorNo: `#${obj.doorNo}`
    })
    )
  }
}
