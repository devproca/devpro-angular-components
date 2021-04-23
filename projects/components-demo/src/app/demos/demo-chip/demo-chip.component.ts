import { Component } from '@angular/core';

@Component({
  selector: 'dp-demo-chip',
  templateUrl: './demo-chip.component.html',
  styleUrls: ['./demo-chip.component.scss']
})
export class DemoChipComponent {
  codeLabel = `<dp-chip label="Value"></dp-chip>`;

  codeHTML = `<dp-chip label="Disabled Chip" [disabled]="true"></dp-chip>
<dp-chip label="FirstName LastName"></dp-chip>
<dp-chip label="Value"></dp-chip>`;
}
