import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-demo-basic',
  templateUrl: './input-demo-basic.component.html'
})
export class InputDemoBasicComponent {
  
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
