import { Component } from '@angular/core';


@Component({
  selector: 'dp-demo-tabs',
  templateUrl: './demo-tabs.component.html',
  styleUrls: ['./demo-tabs.component.scss']
})
export class DemoTabsComponent {

  codeGroup = `<dp-tab-group>
  <dp-tab label="Tab 1">Tab Content</dp-tab>
  <dp-tab label="Tab 2">Tab Content</dp-tab>
  ...
</dp-tab-group>`;

  codeLabel = `<dp-tab label="Tab 1">Tab 1's Content</dp-tab>`;

  codeHTML = `<dp-tab-group>
  <dp-tab label="Tab 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </dp-tab>

  <dp-tab label="Tab 2">
    I accept any content!
    <dp-spinner size="sm"></dp-spinner>
    <dp-checkbox></dp-checkbox>
    <dp-slide-toggle></dp-slide-toggle>
  </dp-tab>

  <dp-tab label="Tab 3">Hello world!</dp-tab>
</dp-tab-group>`;
}
