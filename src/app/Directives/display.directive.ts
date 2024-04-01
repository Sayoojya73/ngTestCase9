import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplay]',
  standalone: true
})
export class DisplayDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.display='none';
   }

}
