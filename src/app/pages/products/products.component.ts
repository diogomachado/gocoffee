import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any;

  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
