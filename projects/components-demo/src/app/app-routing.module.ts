import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { DemoAlertComponent } from './demo-alert/demo-alert.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoCheckboxComponent } from './demo-checkbox/demo-checkbox.component';
import { DemoChipComponent } from './demo-chip/demo-chip.component';
import { DemoDatePickerComponent } from './demo-date-picker/demo-date-picker.component';
import { DemoDialogComponent } from './demo-dialog/demo-dialog.component';
import { DemoMultiselectComponent } from './demo-multiselect/demo-multiselect.component';
import { DemoOverflowMenuComponent } from './demo-overflow-menu/demo-overflow-menu.component';
import { DemoRadioButtonComponent } from './demo-radio-button/demo-radio-button.component';
import { DemoSelectComponent } from './demo-select/demo-select.component';
import { DemoSlideToggleComponent } from './demo-slide-toggle/demo-slide-toggle.component';
import { DemoSpinnerComponent } from './demo-spinner/demo-spinner.component';
import { DemoTabsComponent } from './demo-tabs/demo-tabs.component';
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
