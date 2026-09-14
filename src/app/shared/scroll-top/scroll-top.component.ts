import { Component, HostListener, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="scroll-top-btn"
      [class.scroll-top-btn--visible]="isVisible()"
      (click)="scrollToTop()"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  `,
  styles: [`
    .scroll-top-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: var(--color-verde-profundo, #2f4a3e);
      color: var(--color-blanco, #ffffff);
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 6px 20px rgba(47, 74, 62, 0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 990;
      opacity: 0;
      visibility: hidden;
      transform: translateY(16px) scale(0.9);
      transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                  visibility 0.35s,
                  background-color 0.2s;
    }

    .scroll-top-btn:hover {
      background-color: var(--color-verde-salvia, #4a7c59);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 24px rgba(47, 74, 62, 0.4);
    }

    .scroll-top-btn:active {
      transform: translateY(0) scale(0.95);
    }

    .scroll-top-btn--visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
  `]
})
export class ScrollTopComponent {
  readonly isVisible = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || 0;
      this.isVisible.set(scrollPos > 320);
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
