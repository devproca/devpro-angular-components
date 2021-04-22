import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { DemoAlertComponent } from './demos/demo-alert/demo-alert.component';
import { DemoButtonComponent } from './demos/demo-button/demo-button.component';
import { DemoCheckboxComponent } from './demos/demo-checkbox/demo-checkbox.component';
import { DemoChipComponent } from './demos/demo-chip/demo-chip.component';
import { DemoDatePickerComponent } from './demos/demo-date-picker/demo-date-picker.component';
import { DemoDialogComponent } from './demos/demo-dialog/demo-dialog.component';
import { DemoMultiselectComponent } from './demos/demo-multiselect/demo-multiselect.component';
import { DemoOverflowMenuComponent } from './demos/demo-overflow-menu/demo-overflow-menu.component';
import { DemoRadioButtonComponent } from './demos/demo-radio-button/demo-radio-button.component';
import { DemoSelectComponent } from './demos/demo-select/demo-select.component';
import { DemoSlideToggleComponent } from './demos/demo-slide-toggle/demo-slide-toggle.component';
import { DemoSpinnerComponent } from './demos/demo-spinner/demo-spinner.component';
import { DemoTabsComponent } from './demos/demo-tabs/demo-tabs.component';
import { SetupComponent } from './setup/setup.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};

const routes: Routes = [
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: 'setup', component: SetupComponent },
  { path: 'alert', component: DemoAlertComponent },
  { path: 'button', component: DemoButtonComponent },
  { path: 'checkbox', component: DemoCheckboxComponent },
  { path: 'chip', component: DemoChipComponent },
  { path: 'date-picker', component: DemoDatePickerComponent },
  { path: 'dialog', component: DemoDialogComponent },
  { path: 'multi-select', component: DemoMultiselectComponent },
  { path: 'overflow-menu', component: DemoOverflowMenuComponent },
  { path: 'radio-button', component: DemoRadioButtonComponent },
  { path: 'select', component: DemoSelectComponent },
  { path: 'slide-toggle', component: DemoSlideToggleComponent },
  { path: 'spinner', component: DemoSpinnerComponent },
  { path: 'tabs', component: DemoTabsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, routerOptions) ],
  exports: [ RouterModule ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
