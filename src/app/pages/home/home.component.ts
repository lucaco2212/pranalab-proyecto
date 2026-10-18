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

  readonly productosDestacados: Product[] = this.productsService.getDestacadosHome();

  readonly filtrosRapidos = [
    { label: 'Vitaminas y Minerales', queryParam: 'vitaminas-y-minerales' },
    { label: 'Jarabes y Spray', queryParam: 'jarabes-y-spray' },
    { label: 'Gomitas', queryParam: 'gomitas' }
  ];

  readonly recomendaciones: RecomendacionItem[] = [
    {
      id: 2,
      nombre: 'Bisglicinato de Magnesio 400 mg',
      subtitulo: 'Alta biodisponibilidad y tolerancia digestiva para el confort muscular, relajación y descanso reparador.',
      imagen: '/assets/images/products/bisglicinato-de-magnesio-400mg.jpg',
      badge: 'Minerales & Descanso'
    },
    {
      id: 7,
      nombre: 'Colágeno Plus + (Biotina - Vitamina C)',
      subtitulo: 'Fórmula integral con Vitamina C y Biotina para estimular la producción de colágeno, nutrición dérmica y cuidado articular.',
      imagen: '/assets/images/products/colageno-plus-biotina-vitamina-c.png',
      badge: 'Fórmula Plus'
    },
    {
      id: 22,
      nombre: 'Minilab Multivitamínico Jarabe 125 ml',
      subtitulo: 'Fórmula líquida multivitamínica de fácil absorción con delicioso sabor frambuesa-miel para apoyar el crecimiento y vitalidad.',
      imagen: '/assets/images/products/minilab-multivitaminico-jarabe.jpg',
      badge: 'Multivitamínico Jarabe'
    },
    {
      id: 34,
      nombre: 'Vitamina C + Zinc',
      subtitulo: 'Sinergia antioxidante de alta potencia para reforzar el sistema inmune, defensas celulares y síntesis de colágeno.',
      imagen: '/assets/images/products/vitamina-c-zinc-60-capsulas.png',
      badge: 'Inmunidad & Antioxidante'
    },
    {
      id: 9,
      nombre: 'Complejo B Multivitamínico',
      subtitulo: '8 vitaminas esenciales del grupo B para activar el metabolismo energético, defensas inmunes y equilibrio del sistema nervioso.',
      imagen: '/assets/images/products/complejo-b-multivitaminico.jpg',
      badge: 'Energía & Vitalidad'
    },
    {
      id: 3,
      nombre: 'Calciolab Vitamina D3 800 UI',
      subtitulo: 'Formulación sinérgica para el fortalecimiento óseo, dental y el correcto soporte musculoesquelético.',
      imagen: '/assets/images/products/calciolab-calcio-vitamina-d3.jpg',
      badge: 'Salud Ósea'
    }
  ];

  readonly indiceActual = signal<number>(0);
  private intervaloAutoplay?: any;
  private isPaused = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

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
