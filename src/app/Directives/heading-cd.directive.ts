import { Directive, ElementRef } from '@angular/core';
// import { log } from 'console';

@Directive({
  selector: '[appHeadingCD]',
  standalone: true
})
export class HeadingCDDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color='black';
    this.element.nativeElement.style.fontSize= '35px';
    this.element.nativeElement.style.fontFamily='Satisfy','cursive';
    // this.element.nativeElement.style.marginLeft='35px';

    
   }

}
