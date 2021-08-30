import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'dp-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss'
  ]
})
export class ButtonComponent {
  @HostBinding('attr.disabled') @Input() disabled = false;
  @Input() type: 'primary' | 'secondary' | 'error' = 'secondary';
  @Input() iconBefore: string;
  @Input() iconAfter: string;
}
