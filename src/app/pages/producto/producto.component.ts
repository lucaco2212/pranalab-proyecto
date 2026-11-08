import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../core/products.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, RevealDirective],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  private readonly titleService = inject(Title);
  private paramSub?: Subscription;

  producto?: Product;
  productosRelacionados: Product[] = [];
  imagenSeleccionada?: string;

  get whatsappUrl(): string {
    const texto = this.producto
      ? `Hola equipo de Pranalab, me gustaría consultar por el producto: ${this.producto.nombre}`
      : 'Hola equipo de Pranalab, me gustaría realizar una consulta.';
    return `https://wa.me/56936264950?text=${encodeURIComponent(texto)}`;
  }

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.producto = slug ? this.productsService.getBySlug(slug) : undefined;

      if (this.producto) {
        this.imagenSeleccionada = this.producto.imagenes?.[0];
        this.productosRelacionados = this.productsService.getRelacionados(this.producto);
        this.titleService.setTitle(`${this.producto.nombre} | Pranalab`);
      } else {
        this.imagenSeleccionada = undefined;
        this.productosRelacionados = [];
        this.titleService.setTitle('Producto no encontrado | Pranalab');
      }
    });
  }

  ngOnDestroy(): void {
    this.paramSub?.unsubscribe();
  }

  seleccionarImagen(img: string): void {
    this.imagenSeleccionada = img;
  }
}
