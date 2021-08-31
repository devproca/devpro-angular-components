import { AfterViewInit, Directive, DoCheck, ElementRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Directive()
export abstract class BaseSvgComponent {

  svg: SafeHtml;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked(): void {
    this.reload();
  }

  reload(){
    const svgElement = this.el.nativeElement.querySelector('svg');
    const fontSize = window.getComputedStyle(svgElement).fontSize;
    if (svgElement && fontSize) {
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid');
      svgElement.setAttribute('width', fontSize);
      svgElement.setAttribute('height', fontSize);
    }
  }
}
