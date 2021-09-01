import { Component, OnInit } from '@angular/core';
import { RadioButtonService } from '@dev-pro/devpro-component-library/src/lib/radio-button/radio-button.service';
import { RadioButtonComponent } from '@dev-pro/devpro-component-library/src/public-api';


@Component({
  selector: 'app-radio-demo-basic',
  templateUrl: './radio-demo-basic.component.html'
})
export class RadioDemoBasicComponent implements OnInit {

  constructor(private radioService: RadioButtonService) { }

  ngOnInit(): void {
  }

}
