import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PopperComponent } from './popper/popper.component';
import { SelectComponent } from './select/select.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SlideToggleComponent
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
    SlideToggleComponent
  ]
})
export class DevproComponentsModule { }
