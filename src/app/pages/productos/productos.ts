import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductsService } from '../../data/products.service';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../data/products';

@Component({
  selector: 'app-productos',
  imports: [NgFor, ProductCard],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos {
  products: Product[] = [];
  categories: string[] = [];

  constructor(private readonly productsService: ProductsService) {
    this.products = this.productsService.getAll();
    this.categories = this.productsService.getCategories();
  }
}
