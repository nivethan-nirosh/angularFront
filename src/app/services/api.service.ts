import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  transferData = signal([]);

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getPerson(){
    return this.http.get('http://localhost:8080/api/person');
  }

  addHashtagToDoor(arr: any){
    return arr.map((obj: any) => ({
      ...obj,
      doorNo: `#${obj.doorNo}`
    })
    )
  }
}
