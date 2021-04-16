import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'dp-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent {

  @Input() navItems = [];

  constructor(private router: Router) { }

  handleNavSelection(navItem: any): void {
    this.router.navigate([navItem.route], { fragment: navItem.fragment });
  }
}
