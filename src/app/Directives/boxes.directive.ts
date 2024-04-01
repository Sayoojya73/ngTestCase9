import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoxes]',
  standalone: true
})
export class BoxesDirective {

  constructor(private measure:ElementRef) { 
    this.measure.nativeElement.style.height ='250px';
    this.measure.nativeElement.style.width ='250px';
  }

}
