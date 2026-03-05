import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProductsService } from '../../data/products.service';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../data/products';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  featuredProducts: Product[] = [];

  metrics = [
    { value: '+2.500', label: 'Corredores satisfechos' },
    { value: '24h', label: 'Entrega estimada peninsular' },
    { value: '4.8/5', label: 'Valoración media real' }
  ];

  highlights = [
    { title: 'Selección por disciplina', text: 'Equipamiento específico para pista, asfalto y tiradas largas.' },
    { title: 'Asesoría técnica', text: 'Guías de tallaje, drop, tipo de pisada y recomendaciones por distancia.' },
    { title: 'Compra segura', text: 'Flujo completo de e-commerce para práctica académica profesional.' }
  ];

  constructor(private readonly productsService: ProductsService) {
    this.featuredProducts = this.productsService.getFeatured(3);
  }
}
