import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../core/products.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Product, ClasificacionProducto } from '../../core/models/product.model';

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

  // Lista base de productos y opciones
  readonly todosLosProductos = this.productsService.getAll();
  readonly categorias = this.productsService.getCategorias();
  readonly formasFarmaceuticas = this.productsService.getFormasFarmaceuticas();

  // Signals para el estado de los filtros
  readonly terminoBusqueda = signal<string>('');
  readonly categoriaSeleccionada = signal<string>('todas');
  readonly formaSeleccionada = signal<string>('todas');
  readonly clasificacionSeleccionada = signal<string>('todas');
  readonly soloNuevos = signal<boolean>(false);
  readonly soloDestacados = signal<boolean>(false);

  // Signal computado para verificar si hay algún filtro activo
  readonly hayFiltrosActivos = computed(() => {
    return (
      this.terminoBusqueda().trim() !== '' ||
      this.categoriaSeleccionada() !== 'todas' ||
      this.formaSeleccionada() !== 'todas' ||
      this.clasificacionSeleccionada() !== 'todas' ||
      this.soloNuevos() ||
      this.soloDestacados()
    );
  });

  // Signal computado principal: combina búsqueda en tiempo real + todos los filtros activos
  readonly productosFiltrados = computed<Product[]>(() => {
    const termino = this.terminoBusqueda().trim().toLowerCase();
    const categoria = this.categoriaSeleccionada();
    const forma = this.formaSeleccionada();
    const clasificacion = this.clasificacionSeleccionada();
    const nuevos = this.soloNuevos();
    const destacados = this.soloDestacados();

    return this.todosLosProductos.filter(producto => {
      // Filtro por término de búsqueda (nombre, principio activo o descripción)
      if (termino) {
        const coincideNombre = producto.nombre.toLowerCase().includes(termino);
        const coincidePrincipio = producto.principioActivo?.toLowerCase().includes(termino) ?? false;
        const coincideDesc = producto.descripcionCorta.toLowerCase().includes(termino);
        if (!coincideNombre && !coincidePrincipio && !coincideDesc) {
          return false;
        }
      }

      // Filtro por categoría
      if (categoria !== 'todas' && producto.categoria !== categoria) {
        return false;
      }

      // Filtro por forma farmacéutica
      if (forma !== 'todas' && producto.formaFarmaceutica !== forma) {
        return false;
      }

      // Filtro por clasificación (venta directa vs con receta)
      if (clasificacion !== 'todas' && producto.clasificacion !== clasificacion) {
        return false;
      }

      // Filtro por novedad
      if (nuevos && !producto.nuevo) {
        return false;
      }

      // Filtro por destacado
      if (destacados && !producto.destacado) {
        return false;
      }

      return true;
    });
  });

  ngOnInit(): void {
    // Sincronización con queryParams de la URL (permite enlazar directamente desde home o compartir links)
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['buscar'] !== undefined) {
        this.terminoBusqueda.set(params['buscar']);
      }
      if (params['categoria']) {
        this.categoriaSeleccionada.set(params['categoria']);
      } else if (params['categoria'] === null) {
        this.categoriaSeleccionada.set('todas');
      }

      if (params['forma']) {
        this.formaSeleccionada.set(params['forma']);
      } else if (params['forma'] === null) {
        this.formaSeleccionada.set('todas');
      }

      if (params['clasificacion']) {
        this.clasificacionSeleccionada.set(params['clasificacion']);
      }

      if (params['nuevo'] !== undefined) {
        this.soloNuevos.set(params['nuevo'] === 'true' || params['nuevo'] === true);
      }

      if (params['destacado'] !== undefined) {
        this.soloDestacados.set(params['destacado'] === 'true' || params['destacado'] === true);
      }
    });
  }

  ngOnDestroy(): void {
    this.querySub?.unsubscribe();
  }

  // Métodos de interacción y actualización de filtros
  onInputBusqueda(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.terminoBusqueda.set(input.value);
    this.actualizarUrl();
  }

  limpiarBusqueda(): void {
    this.terminoBusqueda.set('');
    this.actualizarUrl();
  }

  setCategoria(categoria: string): void {
    this.categoriaSeleccionada.set(categoria);
    this.actualizarUrl();
  }

  setForma(forma: string): void {
    this.formaSeleccionada.set(forma);
    this.actualizarUrl();
  }

  setClasificacion(clasificacion: string): void {
    this.clasificacionSeleccionada.set(clasificacion);
    this.actualizarUrl();
  }

  toggleNuevos(): void {
    this.soloNuevos.update(v => !v);
    this.actualizarUrl();
  }

  toggleDestacados(): void {
    this.soloDestacados.update(v => !v);
    this.actualizarUrl();
  }

  limpiarFiltros(): void {
    this.terminoBusqueda.set('');
    this.categoriaSeleccionada.set('todas');
    this.formaSeleccionada.set('todas');
    this.clasificacionSeleccionada.set('todas');
    this.soloNuevos.set(false);
    this.soloDestacados.set(false);
    this.actualizarUrl();
  }

  private actualizarUrl(): void {
    const queryParams: Record<string, string | null> = {};

    if (this.terminoBusqueda().trim()) {
      queryParams['buscar'] = this.terminoBusqueda().trim();
    } else {
      queryParams['buscar'] = null;
    }

    if (this.categoriaSeleccionada() !== 'todas') {
      queryParams['categoria'] = this.categoriaSeleccionada();
    } else {
      queryParams['categoria'] = null;
    }

    if (this.formaSeleccionada() !== 'todas') {
      queryParams['forma'] = this.formaSeleccionada();
    } else {
      queryParams['forma'] = null;
    }

    if (this.clasificacionSeleccionada() !== 'todas') {
      queryParams['clasificacion'] = this.clasificacionSeleccionada();
    } else {
      queryParams['clasificacion'] = null;
    }

    if (this.soloNuevos()) {
      queryParams['nuevo'] = 'true';
    } else {
      queryParams['nuevo'] = null;
    }

    if (this.soloDestacados()) {
      queryParams['destacado'] = 'true';
    } else {
      queryParams['destacado'] = null;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
