import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[customDirective]'
})
export class CustomDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '24px');
  }
  
}

