import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle-demo',
  templateUrl: './slide-toggle-demo.component.html',
  styleUrls: ['./slide-toggle-demo.component.scss']
})
export class SlideToggleDemoComponent implements OnInit {

  constructor() { 
    this.formControl.valueChanges.subscribe(value => {
      console.log(value);
    });}

  ngOnInit(): void {
  }

  formControl = new FormControl();

}
