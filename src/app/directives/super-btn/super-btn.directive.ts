import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appSuperBtn]'
})
export class SuperBtnDirective {

  el = inject(ElementRef)

  @HostListener('mouseover') bigger(){
    this.el.nativeElement.style.transform = 'scale(3)'
  }

  @HostListener('mouseleave') smaller(){
    this.el.nativeElement.style.transform = 'scale(1)'
  }

  @Input({alias: 'appSuperBtn'}) set backgroundColor(value: string){
    if (value) {
      this.el.nativeElement.style.backgroundColor = value;
    }
    
  }

  @Input({alias: 'font-color'}) set fontColor(value: string){
    if (value) {
      this.el.nativeElement.style.color = value;
    }
    
  }

  constructor() {
    console.log('ref', this.el)
    this.el.nativeElement.style.backgroundColor = 'lightblue';
  }

}
