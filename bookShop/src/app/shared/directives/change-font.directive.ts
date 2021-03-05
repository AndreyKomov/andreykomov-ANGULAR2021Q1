import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeFont]'
})
export class ChangeFontDirective {
  @Input() appChangeFont: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') onClick() {
    this.changeFontAndAddBorder();
  }

  private changeFontAndAddBorder() {
    this.render.setStyle(this.el.nativeElement, 'color', this.appChangeFont);
    this.render.setStyle(this.el.nativeElement, 'fontSize', '10px');
    console.log(this.appChangeFont);
  }

}
