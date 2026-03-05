import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../data/products';
import { ProductsService } from '../../data/products.service';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-detalle',
  imports: [NgIf, NgFor, RouterLink, ProductCard],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class Detalle {
  product: Product | undefined;
  relatedProducts: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.product = this.productsService.getBySlug(slug);
      this.relatedProducts = this.productsService.getRelated(slug, 3);
    });
  }
}
