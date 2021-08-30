import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {
  }

  public transform(value: any): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustHtml(value);
    // if (type) {
    //     switch (type) {
    //         case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
    //         case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
    //         case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
    //         case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
    //         case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    //     }
    // }
  }
}