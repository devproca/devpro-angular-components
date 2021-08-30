import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { PopperComponent } from './popper/popper.component';
import { SelectComponent } from './select/select.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopperComponent,
    SelectComponent,
    SvgComponent
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
    SvgComponent
  ]
})
export class DevproComponentsModule { }
