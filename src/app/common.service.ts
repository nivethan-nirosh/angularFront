import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonObject } from './common.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private personUrl = 'http://localhost:8080/api/person'

  constructor(private http: HttpClient) { }

  getFruits(){
    return this.http.get('http://localhost:8080/api/fruits');
  }

  getPerson(): Observable<IPersonObject[]> {
    return this.http.get<IPersonObject[]>(this.personUrl);
  }
}
