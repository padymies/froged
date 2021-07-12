import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiRipple]',
})
export class RippleDirective {
  hostEl;

  constructor(private renderer: Renderer2, el: ElementRef) {
    this.hostEl = el.nativeElement;
  }

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    let ripple, d, x, y;
    if (this.hostEl.querySelector('.ripple') === null) {
      ripple = this.renderer.createElement('span');
      this.renderer.addClass(ripple, 'ripple');
      this.renderer.appendChild(this.hostEl, ripple);
    }

    ripple = this.hostEl.querySelector('.ripple');
    this.renderer.appendChild(this.hostEl, ripple);
    this.renderer.removeClass(ripple, 'animate');

    if (!ripple.offsetHeight && !ripple.offsetWidth) {
      d = Math.max(this.hostEl.offsetWidth, this.hostEl.offsetHeight);
      this.renderer.setStyle(ripple, 'width', d + 'px');
      this.renderer.setStyle(ripple, 'height', d + 'px');
    }

    x = e.pageX - this.hostEl.offsetLeft - ripple.offsetWidth / 2;
    y = e.pageY - this.hostEl.offsetTop - ripple.offsetHeight / 2;

    this.renderer.setStyle(ripple, 'top', y + 'px');
    this.renderer.setStyle(ripple, 'left', x + 'px');
    this.renderer.addClass(ripple, 'animate');
  }
}
