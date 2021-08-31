import { Component, AfterContentInit, ContentChildren, QueryList, ViewEncapsulation, Input } from '@angular/core';

import { TabComponent } from '../tab.component';


@Component({
  selector: 'dp-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupComponent implements AfterContentInit {
  @Input() style: "default" = "default";
  @Input() selectedIndex = 0;
  @Input() stretch = false;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.filter((tab) => tab.isSelected);

    if (selectedTab.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.toArray().forEach(t => t.isSelected = false);
    tab.isSelected = true;
  }
}
