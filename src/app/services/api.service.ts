import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getPerson(){
    return this.http.get('http://localhost:8080/api/person');
  }
}
