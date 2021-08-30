
import { Component, OnInit } from '@angular/core';
import { DemoRouting } from '../../utilities/demo-routing';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  nav = DemoRouting.groups;

  constructor() { }

  ngOnInit(): void {
  }

}