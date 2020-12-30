import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {


 @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor(
  //  private elementRef: ElementRef,
   //private renderer: Renderer2
  ) {}

   @HostListener('focus') aoGanharFoco() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.corDeFundo = 'yellow';
   }

   @HostListener('blur') aoPerderFoco(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.corDeFundo = 'transparent';
   }

}
