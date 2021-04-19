import { Component, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'dp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @HostBinding('attr.color') @Input() color: 'basic' | 'primary' | 'secondary' = 'basic';
  @HostBinding('attr.stroked') @Input() stroked = false;
  @HostBinding('attr.raised') @Input() raised = false;
  @HostBinding('attr.disabled') @Input() disabled = false;
}
