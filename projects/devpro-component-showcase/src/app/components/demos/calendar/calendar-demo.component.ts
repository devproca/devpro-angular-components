import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.scss']
})
export class CalendarDemoComponent implements OnInit {

  constructor() {
    this.formControl.valueChanges.subscribe(value => {
      console.log(value);
    });
   }

  ngOnInit(): void {
  }

  formControl = new FormControl();

}
