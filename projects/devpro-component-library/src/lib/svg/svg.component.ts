import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Directive()
export abstract class SvgComponent implements AfterViewInit {

  svg: SafeHtml;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const fontSize = window.getComputedStyle(this.el.nativeElement).fontSize;
    console.log(fontSize);
    const svgElement = this.el.nativeElement.querySelector('svg');
    console.log(svgElement);
    console.log(this.el);
    if (svgElement) {
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid');
      svgElement.setAttribute('width', fontSize);
      svgElement.setAttribute('height', fontSize);
    }
  }
}
