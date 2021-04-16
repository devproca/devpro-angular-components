import {Component, Input, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {SideNavDirection} from './sidenav-direction';
import {SidenavService} from './sidenav.service';


@Component({
  selector: 'dp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isHidden: Observable<boolean>;

  @Input() sideNavRef: any;
  @Input() openDirection: SideNavDirection = SideNavDirection.Left;

  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;

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
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.openDirection] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }
}
