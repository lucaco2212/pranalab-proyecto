import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TipoBadge = 'nuevo' | 'destacado' | 'con-receta' | 'venta-directa';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="etiqueta badge-tipo" [ngClass]="'badge-tipo--' + tipo">
      @switch (tipo) {
        @case ('nuevo') {
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span>Nuevo</span>
        }
        @case ('destacado') {
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span>Destacado</span>
        }
        @case ('con-receta') {
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
          <span>Bajo Receta</span>
        }
        @case ('venta-directa') {
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <span>Venta Directa</span>
        }
      }
    </span>
  `,
  styles: [`
    .badge-tipo {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radio-pildora);
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }

    .badge-tipo--nuevo {
      background-color: #fef3c7;
      color: #92400e;
      border: 1px solid #fcd34d;
    }

    .badge-tipo--destacado {
      background-color: #ecfdf5;
      color: var(--color-verde-salvia);
      border: 1px solid #a7f3d0;
    }

    .badge-tipo--con-receta {
      background-color: #fee2e2;
      color: #991b1b;
      border: 1px solid #fca5a5;
    }

    .badge-tipo--venta-directa {
      background-color: var(--color-verde-claro);
      color: var(--color-verde-profundo);
      border: 1px solid var(--color-gris-borde);
    }
  `]
})
export class BadgeComponent {
  @Input({ required: true }) tipo: TipoBadge = 'venta-directa';
}
