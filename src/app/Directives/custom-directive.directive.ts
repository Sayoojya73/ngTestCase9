import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective implements OnInit {
  @Input() customColor!: string;

  constructor(private item:ElementRef) { }
 ngOnInit(): void {
     this.item.nativeElement.style.color=this.customColor;
 }
}
