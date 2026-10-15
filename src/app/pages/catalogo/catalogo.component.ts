import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  signal,
  computed,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../core/products.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Product } from '../../core/models/product.model';

export interface OpcionFiltro {
  valor: string;
  conteo: number;
  deshabilitada: boolean;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RevealDirective],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit, OnDestroy {
  private readonly productsService = inject(ProductsService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private querySub?: Subscription;

  // Lista base de productos y opciones
  readonly todosLosProductos = this.productsService.getAll();
  readonly categorias = this.productsService.getCategorias();
  readonly formasFarmaceuticas = this.productsService.getFormasFarmaceuticas();

  // Signals para el estado de los filtros
  readonly terminoBusqueda = signal<string>('');
  readonly categoriaSeleccionada = signal<string>('');
  readonly formaSeleccionada = signal<string>('');

  // Opciones de categoría con conteos dinámicos basados en la forma y búsqueda actuales
  readonly opcionesCategoria = computed<OpcionFiltro[]>(() => {
    const forma = this.formaSeleccionada();
    const termino = this.terminoBusqueda().trim().toLowerCase();

    return this.categorias.map(cat => {
      const conteo = this.todosLosProductos.filter(p => {
        if (p.categoria !== cat) return false;
        if (forma && p.formaFarmaceutica !== forma) return false;
        if (termino && !this.coincideBusqueda(p, termino)) return false;
        return true;
      }).length;

      return {
        valor: cat,
        conteo,
        deshabilitada: conteo === 0
      };
    });
  });

  // Opciones de forma farmacéutica con conteos dinámicos basados en la categoría y búsqueda actuales
  readonly opcionesForma = computed<OpcionFiltro[]>(() => {
    const categoria = this.categoriaSeleccionada();
    const termino = this.terminoBusqueda().trim().toLowerCase();

    return this.formasFarmaceuticas.map(forma => {
      const conteo = this.todosLosProductos.filter(p => {
        if (p.formaFarmaceutica !== forma) return false;
        if (categoria && p.categoria !== categoria) return false;
        if (termino && !this.coincideBusqueda(p, termino)) return false;
        return true;
      }).length;

      return {
        valor: forma,
        conteo,
        deshabilitada: conteo === 0
      };
    });
  });

  // Verifica si hay al menos un filtro de botón activo
  readonly hayFiltrosBotonesActivos = computed(() => {
    return this.categoriaSeleccionada() !== '' || this.formaSeleccionada() !== '';
  });

  // Signal computado para verificar si hay algún filtro activo (incluyendo búsqueda)
  readonly hayFiltrosActivos = computed(() => {
    return (
      this.hayFiltrosBotonesActivos() ||
      this.terminoBusqueda().trim() !== ''
    );
  });

  // Signal computado principal: combina búsqueda en tiempo real + categoría + forma
  readonly productosFiltrados = computed<Product[]>(() => {
    const termino = this.terminoBusqueda().trim().toLowerCase();
    const categoria = this.categoriaSeleccionada();
    const forma = this.formaSeleccionada();

    return this.todosLosProductos.filter(producto => {
      if (termino && !this.coincideBusqueda(producto, termino)) {
        return false;
      }
      if (categoria && producto.categoria !== categoria) {
        return false;
      }
      if (forma && producto.formaFarmaceutica !== forma) {
        return false;
      }
      return true;
    });
  });

  ngOnInit(): void {
    // Sincronización con queryParams de la URL
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['buscar'] !== undefined) {
        this.terminoBusqueda.set(params['buscar'] || '');
      }
      if (params['categoria'] && params['categoria'] !== 'todas') {
        this.categoriaSeleccionada.set(params['categoria']);
      } else {
        this.categoriaSeleccionada.set('');
      }

      if (params['forma'] && params['forma'] !== 'todas') {
        this.formaSeleccionada.set(params['forma']);
      } else {
        this.formaSeleccionada.set('');
      }
    });
  }

  ngOnDestroy(): void {
    this.querySub?.unsubscribe();
  }

  // Métodos de interacción con el buscador
  onInputBusqueda(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.terminoBusqueda.set(input.value);
    this.actualizarUrl();
  }

  limpiarBusqueda(): void {
    this.terminoBusqueda.set('');
    this.actualizarUrl();
  }

  // Métodos de interacción con los botones de filtro
  toggleCategoria(categoria: string, deshabilitada: boolean): void {
    if (deshabilitada) return;
    this.categoriaSeleccionada.update(actual => actual === categoria ? '' : categoria);
    this.actualizarUrl();
  }

  toggleForma(forma: string, deshabilitada: boolean): void {
    if (deshabilitada) return;
    this.formaSeleccionada.update(actual => actual === forma ? '' : forma);
    this.actualizarUrl();
  }

  // Restablece ambos filtros de botones
  limpiarFiltros(): void {
    this.categoriaSeleccionada.set('');
    this.formaSeleccionada.set('');
    this.actualizarUrl();
  }

  // Restablece todos los filtros incluyendo búsqueda
  limpiarTodosLosFiltros(): void {
    this.terminoBusqueda.set('');
    this.categoriaSeleccionada.set('');
    this.formaSeleccionada.set('');
    this.actualizarUrl();
  }


  private coincideBusqueda(producto: Product, termino: string): boolean {
    const coincideNombre = producto.nombre.toLowerCase().includes(termino);
    const coincidePrincipio = producto.principioActivo?.toLowerCase().includes(termino) ?? false;
    const coincideDesc = producto.descripcionCorta.toLowerCase().includes(termino);
    return coincideNombre || coincidePrincipio || coincideDesc;
  }

  private actualizarUrl(): void {
    const queryParams: Record<string, string | null> = {
      clasificacion: null,
      nuevo: null,
      destacado: null
    };

    if (this.terminoBusqueda().trim()) {
      queryParams['buscar'] = this.terminoBusqueda().trim();
    } else {
      queryParams['buscar'] = null;
    }

    if (this.categoriaSeleccionada()) {
      queryParams['categoria'] = this.categoriaSeleccionada();
    } else {
      queryParams['categoria'] = null;
    }

    if (this.formaSeleccionada()) {
      queryParams['forma'] = this.formaSeleccionada();
    } else {
      queryParams['forma'] = null;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
