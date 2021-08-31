import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'dp-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {

  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: "blue" | "white" = "blue";

  constructor() { }

  get width() {
    switch (this.size) {
      case 'sm':
        return '1.5rem';
      case 'md':
        return '2rem';
      case 'lg':
        return '2.5rem';
      default:
        return this.size;
    }
  }

  get pathClasses() {
    return {
      "white": this.color == 'white',
      "blue": this.color != 'white',
      "path": true
    }
  }

}
