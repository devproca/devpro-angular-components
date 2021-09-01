import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PopperComponent } from './popper/popper.component';
import { SelectComponent } from './select/select.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab/tab-group/tab-group.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {SvgModule} from "./svg/svg.module";
import { AlertComponent } from './alert/alert.component';
import { AlertsComponent } from './alert/alerts/alerts.component';
import { ChipComponent } from './chip/chip.component';
import { SvgButtonComponent } from './svg-button/svg-button.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioGroupComponent } from './radio-button/radio-group/radio-group.component';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SpinnerComponent,
    CalendarComponent,
    DatePickerComponent,
    TabComponent, 
    TabGroupComponent,
    CheckboxComponent,
    AlertComponent,
    AlertsComponent,
    ChipComponent,
    SvgButtonComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SvgModule
  ],
  exports: [
    SvgModule,
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SpinnerComponent,
    DatePickerComponent,
    TabComponent, 
    TabGroupComponent,
    CheckboxComponent,
    AlertComponent,
    AlertsComponent,
    ChipComponent,
    SvgButtonComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    DialogComponent
  ]
})
export class DevproComponentsModule {
}
