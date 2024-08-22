import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}
