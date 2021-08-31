import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-demo-basic',
  templateUrl: './checkbox-demo-basic.component.html'
})
export class CheckboxDemoBasicComponent {

  formControl = new FormControl();

  constructor() {
    this.formControl.valueChanges.subscribe(value => {
      console.log(value);
    });
   }

  enable(){
    this.formControl.enable();
  }

  disable(){
    this.formControl.disable();
  }

  get disabled() {
    return this.formControl.disabled;
  }

  setError(){
    this.formControl.setErrors({'incorrect': true});
  }

  clearError(){
    this.formControl.setErrors(null);
  }

  get error() {
    return this.formControl.errors;
  }
}
