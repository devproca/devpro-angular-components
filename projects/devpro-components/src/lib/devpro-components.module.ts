import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { AlertsComponent } from './alert/alerts/alerts.component';
import { ButtonComponent } from './button/button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxGroupComponent } from './checkbox/checkbox-group/checkbox-group.component';
import { ChipComponent } from './chip/chip.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogBodyComponent } from './dialog/dialog-body/dialog-body.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFooterComponent } from './dialog/dialog-footer/dialog-footer.component';
import { DialogHeaderComponent } from './dialog/dialog-header/dialog-header.component';
import { OverflowMenuComponent } from './overflow-menu/overflow-menu.component';
import { PopperComponent } from './popper/popper.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioGroupComponent } from './radio-button/radio-group/radio-group.component';
import { ScrollToActiveDirective } from './select/scroll-to-active.directive';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentComponent } from './sidenav/sidenav-content/sidenav-content.component';
import { SidenavHeaderComponent } from './sidenav/sidenav-header/sidenav-header.component';
import { SlideGroupComponent } from './slide-toggle/slide-group/slide-group.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SvgButtonComponent } from './svg-button/svg-button.component';
import { SvgComponent } from './svg/svg.component';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab/tab-group/tab-group.component';


@NgModule({
  declarations: [
    AlertComponent,
    AlertsComponent,
    ButtonComponent,
    CalendarComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ChipComponent,
    DatePickerComponent,
    DialogBodyComponent,
    DialogComponent,
    DialogFooterComponent,
    DialogHeaderComponent,
    OverflowMenuComponent,
    PopperComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    ScrollToActiveDirective,
    SelectComponent,
    SidenavComponent,
    SidenavContentComponent,
    SidenavHeaderComponent,
    SlideGroupComponent,
    SlideToggleComponent,
    SpinnerComponent,
    SvgButtonComponent,
    SvgComponent,
    TabComponent,
    TabGroupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent,
    AlertsComponent,
    ButtonComponent,
    CalendarComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ChipComponent,
    DatePickerComponent,
    DialogBodyComponent,
    DialogComponent,
    DialogFooterComponent,
    DialogHeaderComponent,
    OverflowMenuComponent,
    PopperComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    ScrollToActiveDirective,
    SelectComponent,
    SidenavComponent,
    SidenavContentComponent,
    SidenavHeaderComponent,
    SlideGroupComponent,
    SlideToggleComponent,
    SpinnerComponent,
    SvgButtonComponent,
    SvgComponent,
    TabComponent,
    TabGroupComponent,
  ]
})
export class DevproComponentsModule { }
