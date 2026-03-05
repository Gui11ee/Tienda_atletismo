import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getAll(): Product[] {
    return PRODUCTS;
  }

  getFeatured(limit = 3): Product[] {
    return PRODUCTS.slice(0, limit);
  }

  getBySlug(slug: string | null): Product | undefined {
    return PRODUCTS.find((product) => product.slug === slug);
  }

  getRelated(currentSlug: string | null, limit = 3): Product[] {
    return PRODUCTS.filter((product) => product.slug !== currentSlug).slice(0, limit);
  }

  getCategories(): string[] {
    return ['Todos', ...Array.from(new Set(PRODUCTS.map((product) => product.category)))];
  }
}
