import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chip-demo-basic',
  templateUrl: './chip-demo-basic.component.html'
})
export class ChipDemoBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  label = "This is a test chip";

  onClose(event: any){
    console.log(event);
  }

}
