import { Component } from '@angular/core';

import { SidenavService } from '../sidenav.service';


@Component({
  selector: 'dp-sidenav-header',
  templateUrl: './sidenav-header.component.html',
  styleUrls: ['./sidenav-header.component.scss']
})
export class SidenavHeaderComponent {

  constructor(private navService: SidenavService) { }

  toggleSideNav(): void {
   this.navService.setShowNav(true);
  }
}
