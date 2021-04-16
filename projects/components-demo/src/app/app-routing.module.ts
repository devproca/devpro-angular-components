import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {DemoTabsComponent} from './demo-tabs/demo-tabs.component';
import {DemoCheckboxComponent} from './demo-checkbox/demo-checkbox.component';
import {DemoAlertComponent} from './demo-alert/demo-alert.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};

const routes: Routes = [
  { path: 'alerts', component: DemoAlertComponent },
  { path: 'checkboxes', component: DemoCheckboxComponent },
  { path: 'tabs', component: DemoTabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
