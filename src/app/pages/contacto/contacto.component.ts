import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <div class="seccion seccion-contacto">
      <div class="contenedor">
        
        <header class="contacto-encabezado" appReveal="fade-up">
          <span class="etiqueta contacto-encabezado__badge efecto-flotante">Atención y Consultas</span>
          <h1 class="contacto-encabezado__titulo">Contacto</h1>
          <p class="contacto-encabezado__subtitulo">
            Ponte en contacto con nosotros para consultar información sobre nuestros productos, resolver dudas o coordinar pedidos y distribución.
          </p>
        </header>

        <div class="contacto-grid">
          
          <!-- Tarjeta Canal Teléfono -->
          <div class="tarjeta contacto-canal" appReveal="fade-up" [revealDelay]="0">
            <div class="contacto-canal__icono">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contacto-canal__info">
              <span class="contacto-canal__etiqueta">Teléfono Central</span>
              <a href="tel:+56936264950" class="contacto-canal__valor">+56 9 3626 4950</a>
              <span class="contacto-canal__desc"><strong>Llamadas:</strong> Lunes a Viernes 09:00 a 18:00 Hrs</span>
            </div>
          </div>

          <!-- Tarjeta Canal WhatsApp -->
          <div class="tarjeta contacto-canal" appReveal="fade-up" [revealDelay]="100">
            <div class="contacto-canal__icono contacto-canal__icono--whatsapp">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div class="contacto-canal__info">
              <span class="contacto-canal__etiqueta">WhatsApp Directo</span>
              <a href="https://wa.me/56936264950" target="_blank" rel="noopener noreferrer" class="contacto-canal__valor">+56 9 3626 4950</a>
              <span class="contacto-canal__desc"><strong>Mensajes:</strong> Lunes a Viernes 09:00 a 18:00 Hrs</span>
            </div>
          </div>

          <!-- Tarjeta Canal Email -->
          <div class="tarjeta contacto-canal" appReveal="fade-up" [revealDelay]="200">
            <div class="contacto-canal__icono">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contacto-canal__info">
              <span class="contacto-canal__etiqueta">Correo Electrónico</span>
              <a href="mailto:acerda@biodac.cl" class="contacto-canal__valor">acerda&#64;biodac.cl</a>
              <span class="contacto-canal__desc">Consultas sobre productos, pedidos y distribución</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  `,
  styles: [`
    .seccion-contacto {
      position: relative;
      padding: 5rem 0 7rem 0;
      min-height: calc(100vh - 180px);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.94) 0%,
        rgba(255, 255, 255, 0.82) 40%,
        rgba(255, 255, 255, 0.42) 75%,
        rgba(255, 255, 255, 0.18) 100%
      ), url('/assets/images/contacto-bg.jpg');
      background-size: cover;
      background-position: right center;
      background-repeat: no-repeat;
    }

    @media (max-width: 960px) {
      .seccion-contacto {
        background-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.94) 0%,
          rgba(255, 255, 255, 0.82) 100%
        ), url('/assets/images/contacto-bg.jpg');
      }
    }

    @media (max-width: 600px) {
      .seccion-contacto {
        padding: 2.75rem 0 4rem 0;
        min-height: auto;
      }
    }

    .contacto-encabezado {
      text-align: center;
      max-width: 680px;
      margin: 0 auto 3.5rem auto;
    }

    @media (max-width: 600px) {
      .contacto-encabezado {
        margin-bottom: 2rem;
      }
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

    @media (max-width: 480px) {
      .contacto-encabezado__titulo {
        font-size: 2rem;
      }
    }

    .contacto-encabezado__subtitulo {
      color: var(--color-gris-texto);
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 600px) {
      .contacto-encabezado__subtitulo {
        font-size: 0.95rem;
      }
    }

    .contacto-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
      max-width: 1100px;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      .contacto-grid {
        gap: 1.25rem;
      }
    }

    @media (min-width: 768px) {
      .contacto-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .contacto-canal {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 2.25rem;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid var(--color-gris-borde);
      box-shadow: 0 8px 24px var(--color-sombra-suave);
      transition: var(--transicion-suave);
    }

    @media (max-width: 600px) {
      .contacto-canal {
        padding: 1.5rem 1.25rem;
        gap: 1rem;
        border-radius: 14px;
      }
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

    .contacto-canal:hover .contacto-canal__icono--whatsapp {
      background-color: #25d366;
      border-color: #25d366;
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

    @media (max-width: 480px) {
      .contacto-canal__icono {
        width: 50px;
        height: 50px;
        border-radius: 12px;
      }
    }

    .contacto-canal__icono--whatsapp {
      color: #25d366;
    }

    .contacto-canal__info {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      width: 100%;
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
      word-break: break-word;
    }

    @media (max-width: 480px) {
      .contacto-canal__valor {
        font-size: 1.15rem;
      }
    }

    .contacto-canal__valor:hover {
      color: var(--color-verde-salvia);
    }

    .contacto-canal__desc {
      font-size: 0.85rem;
      color: var(--color-gris-texto);
      margin-top: 0.25rem;
      line-height: 1.45;
    }

    /* Optimización Móvil (<= 767px) */
    @media (max-width: 767px) {
      .seccion-contacto {
        padding: 2rem 0 3rem 0 !important;
        min-height: auto !important;
      }

      .contacto-encabezado {
        margin-bottom: 1.35rem !important;
      }

      .contacto-encabezado__titulo {
        font-size: 1.75rem !important;
        margin-bottom: 0.35rem !important;
      }

      .contacto-encabezado__subtitulo {
        font-size: 0.88rem !important;
        line-height: 1.45 !important;
      }

      .contacto-grid {
        gap: 0.75rem !important;
      }

      .contacto-canal {
        padding: 1.1rem 0.85rem !important;
        border-radius: 12px !important;
      }

      .contacto-canal__icono {
        width: 44px !important;
        height: 44px !important;
      }

      .contacto-canal__icono svg {
        width: 22px !important;
        height: 22px !important;
      }

      .contacto-canal__valor {
        font-size: 1.05rem !important;
        min-height: 44px !important;
        display: inline-flex !important;
        align-items: center !important;
      }

      .contacto-canal__desc {
        font-size: 0.78rem !important;
      }
    }
  `]
})
export class ContactoComponent {}
