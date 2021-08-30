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

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SpinnerComponent,
    CalendarComponent,
    DatePickerComponent
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
    SpinnerComponent,
    DatePickerComponent
  ]
})
export class DevproComponentsModule { }
