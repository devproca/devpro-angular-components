import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';


@Component({
  selector: 'dp-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss', '../../../assets/styles/base.scss']
})
export class AlertComponent {
  @HostBinding('attr.type') @Input() type: 'success' | 'info' | 'warning' | 'danger' = 'success';
  @Input() message: string;
  @Input() details: string;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  onClose(): void {
    this.close.emit();
  }
}
