import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[copyright]'
  })
  export class CopyrightDirective {
    constructor(private elementRef: ElementRef) {
      this.elementRef.nativeElement.innerHTML = `&copy; ${new Date().getFullYear()} Prueba. Todos los derechos reservados. Wiliam Morales`;
    }
  }
  
  