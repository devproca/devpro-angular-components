import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { DevproComponentsModule } from 'devpro-components';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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
import { RandomComponentComponent } from './demo-dialog/random-component/random-component.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SetupComponent } from './setup/setup.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoAlertComponent,
    DemoButtonComponent,
    DemoCheckboxComponent,
    DemoChipComponent,
    DemoDatePickerComponent,
    DemoDialogComponent,
    DemoMultiselectComponent,
    DemoOverflowMenuComponent,
    DemoRadioButtonComponent,
    DemoSelectComponent,
    DemoSlideToggleComponent,
    DemoSpinnerComponent,
    DemoTabsComponent,
    RandomComponentComponent,
    NavigationComponent,
    SetupComponent,
    CodeblockComponent,
    SidenavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DevproComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
