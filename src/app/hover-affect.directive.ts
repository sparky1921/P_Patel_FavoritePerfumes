import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('appHoverAffect') cssProp!: string;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

   @HostListener('mouseenter') onMouseEnter() {
    this.applyCssProp(this.cssProp, true);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyCssProp(this.cssProp, false);

  }

  private applyCssProp(property: string, value: boolean) {
    this.renderer.setStyle(this.elementRef.nativeElement, property, value ? this.findStyleVal(property) : null);
  }

  private findStyleVal(property: string): string {
    switch (property) {
      case 'text-decoration':
        return 'underline';
      case 'font-weight':
        return 'bold';
      default:
        return '';
    }
  }
}
