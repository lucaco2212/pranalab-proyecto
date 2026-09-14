import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/products.service';
import { Product } from '../../core/models/product.model';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  producto?: Product;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.producto = this.productsService.getBySlug(slug);
    } else {
      this.producto = this.productsService.getAll()[0];
    }
  }
}
