import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeologyTree } from '../data/db';
import { GeologyAge } from '../models/interfaces';

@Injectable({providedIn: 'root'})
export class ApiService  {
  url = "http://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{    
    return this.http.get<any[]>(this.url + '/users', )
  }

  getGeologyAgeTree(): Observable<GeologyAge[]>{
    return of(GeologyTree);
  }
}