import { Pipe, PipeTransform } from '@angular/core';
import * as Prism from 'prismjs';

export type PrismHighlightType = 'html' | 'javascript';

@Pipe({
  name: 'prism'
})
export class PrismPipe implements PipeTransform {
  constructor() {
  }

  public transform(value?: any, type?: PrismHighlightType): string {
    if (type == 'html') {
      return Prism.highlight(value, Prism.languages.html, 'html');
    } else if (type == 'javascript') {
      return Prism.highlight(value, Prism.languages.javascript, 'javascript');
    } else return value;
  }
}