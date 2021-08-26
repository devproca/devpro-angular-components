import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent {

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
