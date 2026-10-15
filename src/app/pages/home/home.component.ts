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
    { label: 'Sachets', queryParam: 'Sachets' },
    { label: 'Geles y Cremas', queryParam: 'Geles y Cremas' }
  ];

  readonly recomendaciones: RecomendacionItem[] = [
    {
      id: 1,
      nombre: 'Biotina 150 mcg',
      subtitulo: 'Coenzima esencial que contribuye al metabolismo normal de los macronutrientes y al mantenimiento de la piel, uñas y cabello.',
      imagen: '/assets/images/products/biotina-150mcg.jpg',
      badge: 'Línea Nutricional'
    },
    {
      id: 2,
      nombre: 'Bisglicinato de Magnesio 400 mg',
      subtitulo: 'Alta biodisponibilidad y tolerancia digestiva para el confort muscular, relajación y descanso reparador.',
      imagen: '/assets/images/products/bisglicinato-de-magnesio-400mg.jpg',
      badge: 'Minerales & Descanso'
    },
    {
      id: 3,
      nombre: 'Calciolab Vitamina D3 800 UI',
      subtitulo: 'Formulación sinérgica para el fortalecimiento óseo, dental y el correcto soporte musculoesquelético.',
      imagen: '/assets/images/products/calciolab-calcio-vitamina-d3.jpg',
      badge: 'Salud Ósea'
    },
    {
      id: 4,
      nombre: 'Citrato de Magnesio 400 mg',
      subtitulo: 'Magnesio orgánico de alta solubilidad para el bienestar digestivo, relajación muscular y vitalidad diaria.',
      imagen: '/assets/images/products/citrato-de-magnesio-400mg.jpg',
      badge: 'Digestión & Vitalidad'
    },
    {
      id: 5,
      nombre: 'Colágeno Hidrolizado 500 mg',
      subtitulo: 'Péptidos de alta absorción para el cuidado de articulaciones, elasticidad de la piel y resistencia capilar.',
      imagen: '/assets/images/products/colageno-hidrolizado-500mg.jpg',
      badge: 'Articulaciones & Piel'
    },
    {
      id: 6,
      nombre: 'Colágeno Hidrolizado 300 mg',
      subtitulo: 'Nutrición esencial para la flexibilidad articular, confort muscular, elasticidad de la piel y uñas firmes.',
      imagen: '/assets/images/products/colageno-hidrolizado-300mg.png',
      badge: 'Cuidado Diario'
    },
    {
      id: 7,
      nombre: 'Colágeno Plus + (Biotina - Vitamina C)',
      subtitulo: 'Fórmula integral con Vitamina C y Biotina para estimular la producción de colágeno, nutrición dérmica y cuidado articular.',
      imagen: '/assets/images/products/colageno-plus-biotina-vitamina-c.png',
      badge: 'Fórmula Plus'
    },
    {
      id: 8,
      nombre: 'COLON DETOX',
      subtitulo: 'Sinergia botánica de Manzanilla, Aloe Vera y Bailahuén para el confort digestivo, ligereza y regularidad del tránsito intestinal.',
      imagen: '/assets/images/products/colon-detox.jpg',
      badge: 'Digestión & Detox'
    },
    {
      id: 9,
      nombre: 'Complejo B Multivitamínico',
      subtitulo: '8 vitaminas esenciales del grupo B para activar el metabolismo energético, defensas inmunes y equilibrio del sistema nervioso.',
      imagen: '/assets/images/products/complejo-b-multivitaminico.jpg',
      badge: 'Energía & Vitalidad'
    },
    {
      id: 10,
      nombre: 'Cranberries 500 mg',
      subtitulo: 'Extracto concentrado de Arándano Rojo con proantocianidinas (PACs) para el cuidado urinario y protección antioxidante.',
      imagen: '/assets/images/products/cranberries-500mg.png',
      badge: 'Salud Urinaria'
    },
    {
      id: 11,
      nombre: 'Creatina + Vitamina C',
      subtitulo: 'Monohidrato de Creatina potenciado con Vitamina C para fuerza muscular, rendimiento físico y recuperación.',
      imagen: '/assets/images/products/creatina-vitamina-c.png',
      badge: 'Fuerza & Rendimiento'
    },
    {
      id: 12,
      nombre: 'Espirulina 500 mg',
      subtitulo: 'Superalimento microalgal rico en proteínas, aminoácidos esenciales, hierro y antioxidantes para vitalidad y nutrición.',
      imagen: '/assets/images/products/espirulina-500mg.png',
      badge: 'Superalimento'
    },
    {
      id: 13,
      nombre: 'Fat Burner',
      subtitulo: 'Fórmula termogénica con Guaraná, Cafeína, L-Carnitina y L-Metionina para potenciar el gasto energético y rendimiento.',
      imagen: '/assets/images/products/fat-burner.png',
      badge: 'Termogénico & Energía'
    },
    {
      id: 14,
      nombre: 'KALM-LAB Stress Control',
      subtitulo: 'L-Triptófano, L-Glutamina y Magnesio para el manejo de la tensión, equilibrio emocional y descanso reparador.',
      imagen: '/assets/images/products/kalm-lab.png',
      badge: 'Calma & Descanso'
    },
    {
      id: 15,
      nombre: 'L-Arginina 500 mg',
      subtitulo: 'Precursor de óxido nítrico para favorecer la oxigenación muscular, rendimiento atlético y salud cardiovascular.',
      imagen: '/assets/images/products/l-arginina-500mg.jpg',
      badge: 'Oxigenación Muscular'
    },
    {
      id: 16,
      nombre: 'L-Carnitina',
      subtitulo: 'L-Carnitina Tartrato para optimizar el transporte de ácidos grasos, energía celular y definición muscular.',
      imagen: '/assets/images/products/l-carnitina.png',
      badge: 'Energía & Definición'
    },
    {
      id: 17,
      nombre: 'L-Triptófano 300 mg',
      subtitulo: 'Aminoácido precursor de serotonina y melatonina para favorecer el bienestar emocional y la conciliación del sueño.',
      imagen: '/assets/images/products/l-triptofano-300mg.jpg',
      badge: 'Sueño & Ánimo'
    },
    {
      id: 18,
      nombre: 'Magnesio 300 mg',
      subtitulo: 'Carbonato de magnesio y calcio para el confort gastroduodenal, función muscular y equilibrio del sistema nervioso.',
      imagen: '/assets/images/products/magnesio-300mg.jpg',
      badge: 'Minerales & Confort'
    },
    {
      id: 19,
      nombre: 'Melena de León',
      subtitulo: 'Hongo adaptógeno milenario para la agilidad mental, memoria, defensas inmunes y equilibrio digestivo.',
      imagen: '/assets/images/products/melena-de-leon.jpg',
      badge: 'Memoria & Enfoque'
    },
    {
      id: 20,
      nombre: 'Moringa Oleifera 450 mg',
      subtitulo: 'Superalimento botánico con alta concentración de polifenoles y vitaminas para defensas, vitalidad y protección celular.',
      imagen: '/assets/images/products/moringa-oleifera-450mg.png',
      badge: 'Antioxidante & Vitalidad'
    },
    {
      id: 21,
      nombre: 'Multivitamínico 300 mg',
      subtitulo: 'Vitaminas esenciales A, C, D, E, Complejo B y Calcio para complementar la nutrición diaria, energía e inmunidad.',
      imagen: '/assets/images/products/multivitaminico-300mg.png',
      badge: 'Nutrición Total'
    },
    {
      id: 22,
      nombre: 'Minilab Multivitamínico Jarabe',
      subtitulo: 'Fórmula líquida con vitaminas A, C, D3, E y Complejo B sabor frambuesa y miel para apoyar el desarrollo y defensas.',
      imagen: '/assets/images/products/minilab-multivitaminico-jarabe.jpg',
      badge: 'Infantil & Crecimiento'
    },
    {
      id: 23,
      nombre: 'Multivitamínico Forte 300 mg',
      subtitulo: 'Fórmula avanzada con vitaminas, minerales, 3 cepas probióticas y prebióticos FOS para microbiota, inmunidad y vitalidad.',
      imagen: '/assets/images/products/multivitaminico-forte-300mg.png',
      badge: 'Microbiota & Defensas'
    },
    {
      id: 24,
      nombre: 'Omega 3',
      subtitulo: 'Ácidos grasos esenciales EPA y DHA de aceite de pescado refinado para el cuidado del corazón, función cerebral y visión.',
      imagen: '/assets/images/products/omega-3-30-capsulas.png',
      badge: 'Salud Cardiovascular'
    },
    {
      id: 25,
      nombre: 'Osteolab Plus',
      subtitulo: 'Minerales esenciales Calcio, Magnesio, Potasio, Zinc y vitaminas para fortalecer huesos, articulaciones y músculos.',
      imagen: '/assets/images/products/osteolab-plus-30-capsulas.jpg',
      badge: 'Salud Ósea & Articular'
    },
    {
      id: 26,
      nombre: 'Aceite de Pepa de Calabaza',
      subtitulo: 'Extracto lipídico natural rico en fitoesteroles, ácidos grasos esenciales y vitamina E para confort urinario y protección celular.',
      imagen: '/assets/images/products/aceite-pepa-calabaza-30-capsulas.png',
      badge: 'Salud Prostática & Urinaria'
    },
    {
      id: 27,
      nombre: 'Picolinato de Cromo',
      subtitulo: 'Mineral traza de alta biodisponibilidad para optimizar el metabolismo de nutrientes, control de la glucosa y apetito.',
      imagen: '/assets/images/products/picolinato-de-cromo-30-capsulas.jpg',
      badge: 'Metabolismo & Glucosa'
    },
    {
      id: 28,
      nombre: 'Potasio 500 mg',
      subtitulo: 'Citrato de potasio de alta absorción para el equilibrio electrolítico, función muscular, salud urinaria y presión arterial.',
      imagen: '/assets/images/products/potasio-500mg-30-capsulas.jpg',
      badge: 'Electrolitos & Músculos'
    },
    {
      id: 29,
      nombre: 'Probiolab Defense Forte',
      subtitulo: '25 mil millones de UFC y 4 cepas de Lactobacillus microencapsuladas para reforzar la barrera intestinal y defensas.',
      imagen: '/assets/images/products/probiolab-defense-forte-30-capsulas.png',
      badge: 'Inmunidad & Probióticos'
    },
    {
      id: 30,
      nombre: 'Probiolab Digestive',
      subtitulo: 'Simbiótico de 25 mil millones de UFC con 7 cepas e inulina para el confort digestivo, tránsito y equilibrio de la microbiota.',
      imagen: '/assets/images/products/probiolab-digestive-30-capsulas.png',
      badge: 'Digestión & Simbiótico'
    },
    {
      id: 31,
      nombre: 'Probiolab Woman',
      subtitulo: '25 mil millones de UFC con cepas especializadas, maqui y arándano para flora íntima, tracto urinario y protección celular.',
      imagen: '/assets/images/products/probiolab-woman-30-capsulas.png',
      badge: 'Salud Femenina & Probióticos'
    },
    {
      id: 32,
      nombre: 'Yogurtlab Probióticos',
      subtitulo: 'Fermento probiótico en polvo con 4 cepas microencapsuladas para preparar yogurt casero natural y nutritivo.',
      imagen: '/assets/images/products/yogurlab-probioticos-5-sachets.png',
      badge: 'Cultivo Probiótico'
    },
    {
      id: 33,
      nombre: 'Vitamina B12',
      subtitulo: 'Micronutriente esencial para la formación de glóbulos rojos, metabolismo energético y equilibrio del sistema nervioso.',
      imagen: '/assets/images/products/vitamina-b12-30-capsulas.jpg',
      badge: 'Energía & Glóbulos Rojos'
    },
    {
      id: 34,
      nombre: 'Vitamina C + Zinc',
      subtitulo: 'Sinergia antioxidante de alta potencia para reforzar el sistema inmune, defensas celulares y síntesis de colágeno.',
      imagen: '/assets/images/products/vitamina-c-zinc-60-capsulas.png',
      badge: 'Inmunidad & Antioxidante'
    },
    {
      id: 35,
      nombre: 'Vitamina C 500 mg',
      subtitulo: 'Dosis concentrada de Ácido Ascórbico para defensas inmunológicas, síntesis de colágeno y absorción de hierro.',
      imagen: '/assets/images/products/vitamina-c-500mg-30-capsulas.png',
      badge: 'Defensas & Colágeno'
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
