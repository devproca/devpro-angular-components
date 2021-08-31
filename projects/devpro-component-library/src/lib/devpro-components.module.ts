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
    CheckboxComponent
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
    CheckboxComponent
  ]
})
export class DevproComponentsModule {
}
