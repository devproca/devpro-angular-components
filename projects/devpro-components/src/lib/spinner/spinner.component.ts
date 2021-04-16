import { Component, Input } from '@angular/core';


@Component({
  selector: 'dp-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss' , '../../../assets/styles/base.scss']
})
export class SpinnerComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'xs';
  @Input() spinnerStyle: 'style1' | 'style2' | 'style3' = 'style1';
  @Input() color: 'blue' | 'white' = 'blue';
}
