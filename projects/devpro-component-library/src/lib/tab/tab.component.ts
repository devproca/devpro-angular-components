import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'dp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() label: string;
  @Input() isSelected = false;
  @Input() padded = true;
}
