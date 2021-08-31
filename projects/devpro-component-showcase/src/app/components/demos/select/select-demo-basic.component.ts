import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-demo-basic',
  templateUrl: './select-demo-basic.component.html'
})
export class SelectDemoBasicComponent {
  
  demoOptions = [
    {
      label: "Option 1",
      value: 1,
    },
    {
      label: "Option 2",
      value: 2,
    },
    {
      label: "Option 3",
      value: 3,
    }
  ];

  formControl = new FormControl();

  constructor() {
    this.formControl.valueChanges.subscribe(value => {
      console.log(value);
    });
   }
}
