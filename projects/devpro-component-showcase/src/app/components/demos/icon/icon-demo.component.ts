import { Component } from '@angular/core';
import { copy } from '../../../utilities/copy.util'

@Component({
  selector: 'app-icon-demo',
  templateUrl: './icon-demo.component.html'
})
export class IconDemoComponent {

  iconList = [
    'angle-down',
    'angle-right',
    'angle-left',
    'calendar',
    'check',
    'clone',
    'code',
    'ellipsis-v',
    'eye',
    'times',
    'info',
    'exclamation',
    'menu',
    'github',
    'linkedin',
    'terminal',
    'twitter'
  ];

  constructor() { }

  copyIcon(icon: string) {
    let message = `<dp-svg name="${icon}"></dp-svg>`;
    copy(message);
  }
}
