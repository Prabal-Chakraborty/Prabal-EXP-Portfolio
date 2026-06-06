import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  private initialized = false;

  constructor(@Inject(DOCUMENT) private document: Document, private zone: NgZone) {}

  initEffects(): void {
    if (this.initialized) return;
    this.initialized = true;

    this.zone.runOutsideAngular(() => {
      this.initCursor();
      this.initReveal();
    });
  }

  private initCursor(): void {
    if (window.innerWidth <= 640) return;
    const cursor = this.document.getElementById('cursor');
    const trail = this.document.getElementById('cursor-trail');
    if (!cursor || !trail) return;

    window.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.clientX - 5}px`;
      cursor.style.top = `${event.clientY - 5}px`;
      trail.style.left = `${event.clientX - 18}px`;
      trail.style.top = `${event.clientY - 18}px`;
    });
  }

  private initReveal(): void {
    const elements = Array.from(this.document.querySelectorAll('.reveal'));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
  }
}
