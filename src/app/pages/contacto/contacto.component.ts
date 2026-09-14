import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <div class="seccion seccion--clara seccion-contacto">
      <div class="contenedor">
        
        <header class="contacto-encabezado" appReveal="fade-up">
          <span class="etiqueta contacto-encabezado__badge efecto-flotante">Atención B2B</span>
          <h1 class="contacto-encabezado__titulo">Contacto Comercial</h1>
          <p class="contacto-encabezado__subtitulo">
            Ponte en contacto con nuestro equipo comercial para solicitar listas de distribución y dar de alta a tu farmacia como cliente.
          </p>
        </header>

        <div class="contacto-grid">
          
          <!-- Tarjeta Canal Email -->
          <div class="tarjeta contacto-canal" appReveal="fade-up" [revealDelay]="0">
            <div class="contacto-canal__icono">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contacto-canal__info">
              <span class="contacto-canal__etiqueta">Correo Electrónico</span>
              <a href="mailto:contacto@pranalab.cl" class="contacto-canal__valor">contacto&#64;pranalab.cl</a>
              <span class="contacto-canal__desc">Respuesta comercial en menos de 24 hrs hábiles</span>
            </div>
          </div>

          <!-- Tarjeta Canal Teléfono -->
          <div class="tarjeta contacto-canal" appReveal="fade-up" [revealDelay]="150">
            <div class="contacto-canal__icono">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contacto-canal__info">
              <span class="contacto-canal__etiqueta">Teléfono Central</span>
              <a href="tel:+56228994500" class="contacto-canal__valor">+56 2 2899 4500</a>
              <span class="contacto-canal__desc">Lunes a Viernes de 08:30 a 18:00 hrs</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  `,
  styles: [`
    .seccion-contacto {
      padding: 4.5rem 0 6.5rem 0;
      min-height: calc(100vh - 400px);
    }

    .contacto-encabezado {
      text-align: center;
      max-width: 680px;
      margin: 0 auto 3.5rem auto;
    }

    .contacto-encabezado__badge {
      background-color: var(--color-blanco);
      color: var(--color-verde-profundo);
      border: 1px solid var(--color-verde-salvia);
      font-weight: 700;
      margin-bottom: 1rem;
      box-shadow: 0 2px 8px rgba(74, 124, 89, 0.12);
    }

    .contacto-encabezado__titulo {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-verde-profundo);
      margin-bottom: 0.85rem;
    }

    .contacto-encabezado__subtitulo {
      color: var(--color-gris-texto);
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0;
    }

    .contacto-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    @media (min-width: 640px) {
      .contacto-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .contacto-canal {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 2.25rem;
      border-radius: 16px;
      background: var(--color-blanco);
      transition: var(--transicion-suave);
    }

    .contacto-canal:hover {
      transform: translateY(-6px);
      border-color: rgba(74, 124, 89, 0.45);
      box-shadow: 0 16px 32px var(--color-sombra-firme);
    }

    .contacto-canal:hover .contacto-canal__icono {
      background-color: var(--color-verde-salvia);
      color: var(--color-blanco);
      transform: scale(1.08);
    }

    .contacto-canal__icono {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 58px;
      border-radius: 14px;
      background-color: var(--color-verde-claro);
      color: var(--color-verde-salvia);
      border: 1px solid rgba(74, 124, 89, 0.18);
      transition: var(--transicion-suave);
    }

    .contacto-canal__info {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .contacto-canal__etiqueta {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-acento);
    }

    .contacto-canal__valor {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--color-verde-profundo);
      transition: color var(--transicion-base);
    }

    .contacto-canal__valor:hover {
      color: var(--color-verde-salvia);
    }

    .contacto-canal__desc {
      font-size: 0.85rem;
      color: var(--color-gris-texto);
      margin-top: 0.25rem;
    }
  `]
})
export class ContactoComponent {}
