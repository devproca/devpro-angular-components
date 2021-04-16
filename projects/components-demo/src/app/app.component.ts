import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-demo';

  navItems = [
    { label: 'Alerts', route: '', fragment: 'alerts' },
    { label: 'Checkboxes', route: '', fragment: 'checkboxes' },
    { label: 'Chip', route: '', fragment: 'chip' },
    { label: 'Date Picker', route: '', fragment: 'date-picker' },
    { label: 'Dialog Modal', route: '', fragment: 'dialog' },
    { label: 'Multiselect Input', route: '', fragment: 'multiselect' },
    { label: 'Overflow Menus', route: '', fragment: 'overflow-menu' },
    { label: 'Radio Buttons', route: '', fragment: 'radio-button' },
    { label: 'Select Input', route: '', fragment: 'select' },
    { label: 'Slide Toggles', route: '', fragment: 'slide-toggle' },
    { label: 'Spinners', route: '', fragment: 'spinner' },
    { label: 'Tabs', route: '', fragment: 'tabs' }
  ];
}
