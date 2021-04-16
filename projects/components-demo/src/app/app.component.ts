import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'components-demo';

  navItems = [
    { label: 'Alerts', route: '/alerts', fragment: 'alerts'},
    { label: 'Checkboxes', route: '/checkboxes', fragment: 'checkbox'},
    { label: 'Tabs', route: '/tabs', fragment: 'tabs'}
  ];

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
