import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') animationType: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade' = 'fade-up';
  @Input() revealDelay = 0; // ms
  @Input() revealDuration = 700; // ms
  @Input() revealThreshold = 0.12;
  @Input() revealOnce = false; // if false, fades out when leaving viewport and fades in when entering

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'reveal-init');
    this.renderer.addClass(element, `reveal--${this.animationType}`);

    if (this.revealDelay > 0) {
      this.renderer.setStyle(element, 'transition-delay', `${this.revealDelay}ms`);
    }

    if (this.revealDuration !== 700) {
      this.renderer.setStyle(element, 'transition-duration', `${this.revealDuration}ms`);
    }

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.addClass(element, 'reveal-visible');
              if (this.revealOnce && this.observer) {
                this.observer.unobserve(element);
              }
            } else if (!this.revealOnce) {
              this.renderer.removeClass(element, 'reveal-visible');
            }
          });
        },
        {
          threshold: this.revealThreshold,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      this.observer.observe(element);
    } else {
      // Fallback
      this.renderer.addClass(element, 'reveal-visible');
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
