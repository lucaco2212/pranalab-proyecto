import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../core/products.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Product } from '../../core/models/product.model';

export type TipoFiltro = 'vitaminas-y-minerales' | 'jarabes-y-spray' | 'gomitas';

export interface OpcionFiltroLinea {
  id: TipoFiltro;
  label: string;
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
  private querySub?: Subscription;

  // Lista base de productos
  readonly todosLosProductos = this.productsService.getAll();

  // Signals para el estado de los filtros
  readonly terminoBusqueda = signal<string>('');
  readonly filtroSeleccionado = signal<TipoFiltro | ''>('');

  // Configuración de los 3 filtros solicitados
  private readonly filtrosConfig: { id: TipoFiltro; label: string }[] = [
    { id: 'vitaminas-y-minerales', label: 'Vitaminas y Minerales' },
    { id: 'jarabes-y-spray', label: 'Jarabes y Spray' },
    { id: 'gomitas', label: 'Gomitas' }
  ];

  // Opciones de filtro con conteos dinámicos en tiempo real
  readonly opcionesFiltro = computed<OpcionFiltroLinea[]>(() => {
    const termino = this.terminoBusqueda().trim();

    return this.filtrosConfig.map(cfg => {
      const conteo = this.todosLosProductos.filter(p => {
        if (!this.perteneceAFiltro(p, cfg.id)) return false;
        if (termino && !this.coincideBusqueda(p, termino)) return false;
        return true;
      }).length;

      return {
        id: cfg.id,
        label: cfg.label,
        conteo,
        deshabilitada: conteo === 0
      };
    });
  });

  // Signal computado para verificar si hay algún filtro activo (incluyendo búsqueda)
  readonly hayFiltrosActivos = computed(() => {
    return this.filtroSeleccionado() !== '' || this.terminoBusqueda().trim() !== '';
  });

  // Signal computado principal: combina filtro de línea + búsqueda normalizada
  readonly productosFiltrados = computed<Product[]>(() => {
    const termino = this.terminoBusqueda().trim();
    const filtro = this.filtroSeleccionado();

    return this.todosLosProductos.filter(producto => {
      if (filtro && !this.perteneceAFiltro(producto, filtro)) {
        return false;
      }
      if (termino && !this.coincideBusqueda(producto, termino)) {
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

      const filtroParam = (params['filtro'] || params['linea'] || '').toLowerCase();
      if (filtroParam === 'vitaminas-y-minerales' || filtroParam === 'jarabes-y-spray' || filtroParam === 'gomitas') {
        this.filtroSeleccionado.set(filtroParam as TipoFiltro);
      } else if (params['forma']) {
        const formaNorm = params['forma'].toLowerCase();
        if (formaNorm.includes('gomi')) {
          this.filtroSeleccionado.set('gomitas');
        } else if (formaNorm.includes('jara') || formaNorm.includes('spray')) {
          this.filtroSeleccionado.set('jarabes-y-spray');
        } else if (formaNorm.includes('capsul') || formaNorm.includes('sachet')) {
          this.filtroSeleccionado.set('vitaminas-y-minerales');
        } else {
          this.filtroSeleccionado.set('');
        }
      } else {
        this.filtroSeleccionado.set('');
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

  // Métodos de interacción con los 3 botones de filtro
  toggleFiltro(filtro: TipoFiltro, deshabilitada: boolean): void {
    if (deshabilitada) return;
    this.filtroSeleccionado.update(actual => actual === filtro ? '' : filtro);
    this.actualizarUrl();
  }

  limpiarFiltro(): void {
    this.filtroSeleccionado.set('');
    this.actualizarUrl();
  }

  limpiarTodosLosFiltros(): void {
    this.terminoBusqueda.set('');
    this.filtroSeleccionado.set('');
    this.actualizarUrl();
  }

  // Normalizador de texto para omitir tildes y mayúsculas
  private normalizarTexto(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  private coincideBusqueda(producto: Product, termino: string): boolean {
    const terminoNorm = this.normalizarTexto(termino);
    const coincideNombre = this.normalizarTexto(producto.nombre).includes(terminoNorm);
    const coincidePrincipio = producto.principioActivo
      ? this.normalizarTexto(producto.principioActivo).includes(terminoNorm)
      : false;
    const coincideDesc = this.normalizarTexto(producto.descripcionCorta).includes(terminoNorm);
    const coincideCategoria = this.normalizarTexto(producto.categoria).includes(terminoNorm);
    const coincideForma = this.normalizarTexto(producto.formaFarmaceutica).includes(terminoNorm);
    return coincideNombre || coincidePrincipio || coincideDesc || coincideCategoria || coincideForma;
  }

  // Clasificación de productos en los 3 filtros
  private perteneceAFiltro(producto: Product, filtro: TipoFiltro): boolean {
    const forma = producto.formaFarmaceutica.toLowerCase();
    const nombre = producto.nombre.toLowerCase();

    switch (filtro) {
      case 'gomitas':
        return forma === 'gomitas' || nombre.includes('gummies') || nombre.includes('gomitas');
      case 'jarabes-y-spray':
        return forma === 'jarabes' || nombre.includes('jarabe') || nombre.includes('spray');
      case 'vitaminas-y-minerales':
        return (
          forma !== 'gomitas' &&
          forma !== 'jarabes' &&
          !nombre.includes('gummies') &&
          !nombre.includes('gomitas') &&
          !nombre.includes('jarabe') &&
          !nombre.includes('spray')
        );
    }
  }

  private actualizarUrl(): void {
    const queryParams: Record<string, string | null> = {
      categoria: null,
      forma: null,
      clasificacion: null,
      nuevo: null,
      destacado: null,
      linea: null
    };

    if (this.terminoBusqueda().trim()) {
      queryParams['buscar'] = this.terminoBusqueda().trim();
    } else {
      queryParams['buscar'] = null;
    }

    if (this.filtroSeleccionado()) {
      queryParams['filtro'] = this.filtroSeleccionado();
    } else {
      queryParams['filtro'] = null;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
