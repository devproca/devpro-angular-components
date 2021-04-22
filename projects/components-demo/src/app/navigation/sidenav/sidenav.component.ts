import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  navItems = [
    { label: 'Alert', route: 'alert' },
    { label: 'Button', route: 'button' },
    { label: 'Checkbox', route: 'checkbox' },
    { label: 'Chip', route: 'chip' },
    { label: 'Date Picker', route: 'date-picker'},
    { label: 'Dialog Modal', route: 'dialog' },
    { label: 'Multiselect Input', route: 'multi-select' },
    { label: 'Overflow Menus', route: 'overflow-menu' },
    { label: 'Radio Button', route: 'radio-button' },
    { label: 'Select Input', route: 'select' },
    { label: 'Side Nav Bar', route: 'sidenav' },
    { label: 'Slide Toggle', route: 'slide-toggle' },
    { label: 'Spinner', route: 'spinner' },
    { label: 'Tabs', route: 'tabs' },
  ];

  constructor(private router: Router) { }

  handleNavSelection(navItem: any): void {
    this.router.navigate([navItem.route]);
  }

}
