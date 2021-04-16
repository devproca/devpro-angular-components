import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SideNavDirection } from './sidenav-direction';
import { SidenavService } from './sidenav.service';


@Component({
  selector: 'dp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isHidden: Observable<boolean>;

  @Input() sideNavTitle: string;
  @Input() sideNavRef: any;
  @Input() sideNavWidth: number = window.innerWidth;
  @Input() openDirection: SideNavDirection = SideNavDirection.Left;
  @Input() duration = 0.25;

  constructor(private navService: SidenavService) { }

  ngOnInit(): void {
    this.isHidden = this.navService.getShowNav();
  }

  onSideNavClose(): void {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean): any {
    const navBarStyle: any = {};

    navBarStyle.transition = this.openDirection + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.sideNavWidth + 'px';
    navBarStyle[this.openDirection] = (showNav ? 0 : (this.sideNavWidth * -1)) + 'px';

    return navBarStyle;
  }
}
