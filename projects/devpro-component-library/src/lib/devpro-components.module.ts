import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PopperComponent } from './popper/popper.component';
import { SelectComponent } from './select/select.component';
<<<<<<< HEAD
import { SvgComponent } from './svg/svg.component';
=======
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
>>>>>>> 8773b69... WIP on calendar/ datepicker

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
<<<<<<< HEAD
    SvgComponent
=======
    SpinnerComponent,
    CalendarComponent,
    DatePickerComponent
>>>>>>> 8773b69... WIP on calendar/ datepicker
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
<<<<<<< HEAD
    SvgComponent
=======
    SpinnerComponent,
    DatePickerComponent
<<<<<<< HEAD

>>>>>>> 8773b69... WIP on calendar/ datepicker
=======
>>>>>>> 3f4031d... Stuff
  ]
})
export class DevproComponentsModule { }
