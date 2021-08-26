import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ]
})
export class DevproComponentsModule { }
