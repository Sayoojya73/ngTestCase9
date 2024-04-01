import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]',
  standalone: true
})
export class MouseDirective {

  constructor(private _element:ElementRef) {}
   @HostListener('mouseenter') onMouseEnter(){
   this.bgcolor('white')
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.bgcolor('none')
   }
   bgcolor(color:string){
     this._element.nativeElement.style.opacity =0.7;
     this._element.nativeElement.style.backgroundColor ='#eae0d7';
    //  this._element.nativeElement.style.color ='white'
   }

}
