import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker-demo-basic',
  templateUrl: './date-picker-demo-basic.component.html'
})
export class DatePickerDemoBasicComponent {
  
  formControl = new FormControl('');

  constructor() { }

  enable(){
    this.formControl.enable();
  }

  disable(){
    this.formControl.disable();
  }

  get disabled() {
    return this.formControl.disabled;
  }
}
