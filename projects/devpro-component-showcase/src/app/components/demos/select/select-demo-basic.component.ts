import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-demo-basic',
  templateUrl: './select-demo-basic.component.html'
})
export class SelectDemoBasicComponent {
  
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
