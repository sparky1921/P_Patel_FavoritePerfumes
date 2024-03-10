import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @HostBinding('style.textDecoration')
  textDecoration!: string;
  @HostBinding('style.fontWeight')
  fontWeight!: string;
  @Input()
  typeStyle!: 'textDecoration';
  @Input()
  tagStyle!: 'fontWeight';

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.typeStyle) {
      this.textDecoration = 'underline';
    }
    if (this.tagStyle) {
      this.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.typeStyle) {
      this.textDecoration = '';
    }
    if (this.tagStyle) {
      this.fontWeight = 'normal';
    }
  }

}
