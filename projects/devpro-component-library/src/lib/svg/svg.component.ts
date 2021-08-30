import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const SVGS = {
  angleDown: require('!!raw-loader?!../../../assets/svg/angle-down.svg'),
  angleRight: require('!!raw-loader?!../../../assets/svg/angle-right.svg'),
  angleLeft: require('!!raw-loader?!../../../assets/svg/angle-left.svg'),
  calendar: require('!!raw-loader?!../../../assets/svg/calendar.svg'),
  check: require('!!raw-loader?!../../../assets/svg/check.svg'),
  clone: require('!!raw-loader?!../../../assets/svg/clone.svg'),
  code: require('!!raw-loader?!../../../assets/svg/code.svg'),
  ellipsisVertical: require('!!raw-loader?!../../../assets/svg/ellipsis-vertical.svg'),
  eye: require('!!raw-loader?!../../../assets/svg/eye.svg'),
  times: require('!!raw-loader?!../../../assets/svg/times.svg'),
  info: require('!!raw-loader?!../../../assets/svg/info.svg'),
  exclamation: require('!!raw-loader?!../../../assets/svg/exclamation.svg'),
  menu: require('!!raw-loader?!../../../assets/svg/menu.svg'),
  github: require('!!raw-loader?!../../../assets/svg/github.svg'),
  linkedin: require('!!raw-loader?!../../../assets/svg/linkedin.svg'),
  terminal: require('!!raw-loader?!../../../assets/svg/terminal.svg'),
  twitter: require('!!raw-loader?!../../../assets/svg/twitter.svg')
};

@Component({
  selector: 'dp-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SvgComponent implements OnChanges, AfterViewInit {

  @ViewChild('ref') ref: ElementRef;

  @Input() name: string;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  svg: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private el: ElementRef) { }

  ngOnChanges() {
    if (this.name) {
      const icon = SVGS[this.name];
      icon
        ? this.svg = this.sanitizer.bypassSecurityTrustHtml(SVGS[this.name.replace(/-./g, x => x[1].toUpperCase())].default.replace(/data:image\/svg\+xml;base64,/, ''))
        : this.svg = null;
    }
  }

  ngAfterViewInit(): void {
    const fontSize = window.getComputedStyle(this.el.nativeElement).fontSize;
    const svgElement = this.ref.nativeElement.querySelector('svg');
    if (svgElement) {
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid');
      svgElement.setAttribute('width', fontSize);
      svgElement.setAttribute('height', fontSize);
    }
  }
}
