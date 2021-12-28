import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../models/details';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class PropertiesApiService {

  private url: string = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  public propertiesList(): Observable<List[]>{
    return this.http.get<List[]>(`${this.url}properties`).pipe(
      res => res,
      error => error
    )
  }

  public propertiesDetails(id: number): Observable<Details[]>{
    return this.http.get<Details[]>(`${this.url}details/${id}`).pipe(
      res => res,
      error => error
    )
  }
}
