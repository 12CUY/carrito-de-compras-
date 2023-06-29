import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customDirective]'
})
export class CustomDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.classList.add('custom-class');
  }
}


