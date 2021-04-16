import { Component, Input } from '@angular/core';


@Component({
  selector: 'dp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss', '../../../assets/styles/base.scss']
})
export class TabComponent {
  @Input() label: string;
  @Input() isSelected = false;
}
