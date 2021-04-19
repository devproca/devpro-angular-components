import { Component, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'dp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @HostBinding('attr.color') @Input() color: 'blue' | 'red' = 'blue';
  @HostBinding('attr.disabled') @Input() disabled = false;
  @HostBinding('attr.inverted') @Input() inverted = false;
}
