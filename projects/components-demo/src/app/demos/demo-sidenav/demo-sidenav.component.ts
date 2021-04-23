import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-sidenav',
  templateUrl: './demo-sidenav.component.html',
  styleUrls: ['./demo-sidenav.component.scss']
})
export class DemoSidenavComponent {

  navItems = [
    { label: 'Getting Started', route: 'sidenav', fragment: 'getStart' },
    { label: 'Properties', route: 'sidenav', fragment: 'properties' },
    { label: 'Styling', route: 'sidenav', fragment: 'styling' },
    { label: 'Methods', route: 'sidenav', fragment: 'methods' },
    { label: 'Dependencies', route: 'sidenav', fragment: 'dependencies' }
  ];


  codeHeader = `<dp-sidenav-header></dp-sidenav-header>`;
  codeBody = `<dp-sidenav [sideNavRef]="navContent" [sideNavWidth]="280" [sideNavTitle]="'Title'" [openDirection]="'left'" [duration]="0.5"></dp-sidenav>`;

  codeContent = `<ng-template #navContent>
  <dp-sidenav-content [navItems]="navItems"></dp-sidenav-content>
</ng-template>`;
codeContentTS = `navItems = [
  { label: 'One', route: 'one', fragment: '' },
  { label: 'Two', route: 'two', fragment: 'twoHeader' },
  ...
];`;

  codeHTML = `<h4>Open Side Nav</h4>
<dp-sidenav-header></dp-sidenav-header>

<dp-sidenav [sideNavRef]="navContent"
            [sideNavWidth]="280"
            [sideNavTitle]="'Demo Side Nav'"
            [openDirection]="'right'"
            [duration]="0.5"></dp-sidenav>

<ng-template #navContent>
  <dp-sidenav-content [navItems]="navItems"></dp-sidenav-content>
</ng-template>

...

<h3 id="getStart">Getting Started</h3>`;

  codeTS = `export class DemoSidenavComponent {

  navItems = [
    { label: 'Getting Started', route: 'sidenav', fragment: 'getStart' },
    { label: 'Properties', route: 'sidenav', fragment: 'properties' },
    { label: 'Styling', route: 'sidenav', fragment: 'styling' },
    { label: 'Methods', route: 'sidenav', fragment: 'methods' },
    { label: 'Dependencies', route: 'sidenav', fragment: 'dependencies' }
  ];
}`;
}
