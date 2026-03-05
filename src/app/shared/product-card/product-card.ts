import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../data/products';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, NgIf],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Input() showBadge = false;
  @Input() showCategory = false;
  @Input() showRating = false;
}
