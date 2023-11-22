import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = 'https://fakestoreapi.com';
  category$ = new BehaviorSubject<string[]>([]);

  constructor(private _http: HttpClient) {}

  getProducts() {
    return this._http.get<any>(this.apiUrl + '/products');
  }
}
