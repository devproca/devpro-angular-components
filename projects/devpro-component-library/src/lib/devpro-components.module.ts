import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PopperComponent } from './popper/popper.component';
import { SelectComponent } from './select/select.component';
import { SvgComponent } from './svg/svg.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab/tab-group/tab-group.component';
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SvgComponent,
    SpinnerComponent,
    CalendarComponent,
    DatePickerComponent,
    TabComponent, 
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SvgComponent,
    SpinnerComponent,
    DatePickerComponent,
    TabComponent, 
    TabGroupComponent
  ]
})
export class DevproComponentsModule { }
