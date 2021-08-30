import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dp-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent {
  @HostBinding('attr.disabled') @Input() disabled = false;
  @Input() type: 'primary' | 'secondary' | 'error' = 'secondary';
  @Input() iconBefore: string;
  @Input() iconAfter: string;
}
