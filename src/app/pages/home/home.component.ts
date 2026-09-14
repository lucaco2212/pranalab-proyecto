import { Component, inject, signal, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductsService } from '../../core/products.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Product } from '../../core/models/product.model';

export interface RecomendacionItem {
  id: number;
  nombre: string;
  subtitulo: string;
  imagen: string;
  badge: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, RevealDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly productsService = inject(ProductsService);

  readonly productosDestacados: Product[] = this.productsService.getDestacados();

  readonly filtrosRapidos = [
    { label: 'Cápsulas', queryParam: 'Cápsulas' },
    { label: 'Comprimidos', queryParam: 'Comprimidos' },
    { label: 'Jarabes', queryParam: 'Jarabes' },
    { label: 'Geles y Cremas', queryParam: 'Geles y Cremas' }
  ];

  readonly recomendaciones: RecomendacionItem[] = [
    {
      id: 1,
      nombre: 'Citrato de Magnesio',
      subtitulo: 'Mejora la función muscular, promueve un sueño reparador y reduce el estrés.',
      imagen: '/assets/images/recomendaciones/citrato-de-magnesio.png',
      badge: 'Recomendación Farmacéutica'
    },
    {
      id: 2,
      nombre: 'Kalm-Lab Stress Control',
      subtitulo: 'Reduce el estrés, fomenta la relajación y mejora la calidad del sueño con Triptófano, Glutamina y Magnesio.',
      imagen: '/assets/images/recomendaciones/kalm-lab-stress-control.png',
      badge: 'Control del Estrés'
    },
    {
      id: 3,
      nombre: 'Minilab Multivitaminas',
      subtitulo: 'Aporte nutricional completo y apoyo clave en etapas de crecimiento infantil.',
      imagen: '/assets/images/recomendaciones/minilab-multivitaminas.png',
      badge: 'Línea Pediátrica'
    },
    {
      id: 4,
      nombre: 'Creatina Vitamina C',
      subtitulo: 'Contribuye a la salud cerebral, energía muscular y defensa antioxidante.',
      imagen: '/assets/images/recomendaciones/creatina-vitamina-c.png',
      badge: 'Rendimiento & Vitalidad'
    },
    {
      id: 5,
      nombre: 'Colon Detox',
      subtitulo: 'Previene el colon irritable, combate la inflamación y favorece el bienestar digestivo.',
      imagen: '/assets/images/recomendaciones/colon-detox.png',
      badge: 'Salud Digestiva'
    }
  ];

  readonly indiceActual = signal<number>(0);
  private intervaloAutoplay?: any;
  private isPaused = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    this.iniciarAutoplay();
  }

  ngOnDestroy(): void {
    this.detenerAutoplay();
  }

  siguienteRecomendacion(): void {
    this.indiceActual.update(idx => (idx + 1) % this.recomendaciones.length);
    this.reiniciarTimer();
  }

  anteriorRecomendacion(): void {
    this.indiceActual.update(idx => (idx - 1 + this.recomendaciones.length) % this.recomendaciones.length);
    this.reiniciarTimer();
  }

  irARecomendacion(index: number): void {
    this.indiceActual.set(index);
    this.reiniciarTimer();
  }

  pausarAutoplay(): void {
    this.isPaused = true;
  }

  reanudarAutoplay(): void {
    this.isPaused = false;
  }

  private iniciarAutoplay(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.detenerAutoplay();
    this.intervaloAutoplay = setInterval(() => {
      if (!this.isPaused) {
        this.indiceActual.update(idx => (idx + 1) % this.recomendaciones.length);
      }
    }, 4500);
  }

  private detenerAutoplay(): void {
    if (this.intervaloAutoplay) {
      clearInterval(this.intervaloAutoplay);
      this.intervaloAutoplay = undefined;
    }
  }

  private reiniciarTimer(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.iniciarAutoplay();
    }
  }
}
