import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit{

  @Input() appChangeColor: string = '';

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    console.log(elementRef);
  }

  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', this.appChangeColor);
  }

}
