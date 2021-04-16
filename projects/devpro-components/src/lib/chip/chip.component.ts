import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'dp-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss', '../../../assets/styles/base.scss']
})
export class ChipComponent {

  @Input() label: string;
  @Input() disabled = false;

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
