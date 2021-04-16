import {Component, Input} from '@angular/core';

@Component({
  selector: 'dp-svg-button',
  templateUrl: './svg-button.component.html',
  styleUrls: ['./svg-button.component.scss', '../../../assets/styles/base.scss']
})
export class SvgButtonComponent {

  @Input() iconName: string;
}
