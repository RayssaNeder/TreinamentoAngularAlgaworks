import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {


 @HostBinding('style.backgroundColor') corDeFundo: string;


  @Input('appCampoColorido') cor = 'gray';

  constructor(
  //  private elementRef: ElementRef,
   //private renderer: Renderer2
  ) {}

   @HostListener('focus') colorir() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.corDeFundo = this.cor;
   }

   @HostListener('blur') descolorir(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.corDeFundo = 'transparent';
   }

}
