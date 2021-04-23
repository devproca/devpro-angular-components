import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'dp-demo-multiselect',
  templateUrl: './demo-multiselect.component.html',
  styleUrls: ['./demo-multiselect.component.scss']
})
export class DemoMultiselectComponent {

  formControl = new FormControl(['TWO']);

  options = [
    {
      value: 'ONE',
      label: 'One'
    },
    {
      value: 'TWO',
      label: 'Two'
    },
    {
      value: 'THREE',
      label: 'Three'
    },
    {
      value: 'FOUR',
      label: 'Four'
    },
    {
      value: 'FIVE',
      label: 'Five'
    },
    {
      value: 'SIX',
      label: 'Six'
    },
    {
      value: 'SEVEN',
      label: 'Seven'
    },
    {
      value: 'EIGHT',
      label: 'Eight'
    },
    {
      value: 'NINE',
      label: 'Nine'
    },
    {
      value: 'TEN',
      label: 'Ten'
    },
    {
      value: 'ELEVEN',
      label: 'Eleven'
    },
    {
      value: 'TWELVE',
      label: 'Twelve'
    },
    {
      value: 'THIRTEEN',
      label: 'Thirteen'
    },
    {
      value: 'FOURTEEN',
      label: 'Fourteen'
    }
  ];

  enable(): void {
    this.formControl.enable();
  }

  disable(): void {
    this.formControl.disable();
  }

  error(): void {
    this.formControl.setErrors({somekey: 'This is an error with your selection.'});
  }

  get errors(): string[] {
    return this.formControl.errors ? Object.values(this.formControl.errors) : null;
  }

  codeGetStarted = `<dp-select [formControl]="formControl" [multiselect]="true"></dp-select>`;
  codeOptionsAttr = `<dp-select [options]="options" [multiselect]="true"></dp-select>`;
  codeOptions = `options = [
  {
    value: 'ONE',
    label: 'One'
  },
  {
    value: 'TWO',
    label: 'Two'
  },
  ...
];`;

  codeHTML = `<h4>Numbers</h4>
<dp-select placeholder="Please select" [formControl]="formControl" [options]="options" [multiselect]="true"></dp-select>
<div class="demo-errors" *ngIf="errors">{{ errors }}</div>

<div class="demo-btn-group">
  <dp-button color="primary" *ngIf="this.formControl.disabled" (click)="enable()">Enable</dp-button>
  <dp-button color="primary" *ngIf="!this.formControl.disabled" (click)="disable()">Disable</dp-button>
  <dp-button color="secondary" (click)="error()">Error</dp-button>
</div>

<div class="demo-value">Value: {{ formControl.value }}</div>`;

  codeTS = `export class DemoMultiselectComponent {

  formControl = new FormControl(['TWO']);

  options = [
    {
      value: 'ONE',
      label: 'One'
    },
    {
      value: 'TWO',
      label: 'Two'
    },
    {
      value: 'THREE',
      label: 'Three'
    },
    {
      value: 'FOUR',
      label: 'Four'
    },
    {
      value: 'FIVE',
      label: 'Five'
    },
    {
      value: 'SIX',
      label: 'Six'
    },
    {
      value: 'SEVEN',
      label: 'Seven'
    },
    {
      value: 'EIGHT',
      label: 'Eight'
    },
    {
      value: 'NINE',
      label: 'Nine'
    },
    {
      value: 'TEN',
      label: 'Ten'
    },
    {
      value: 'ELEVEN',
      label: 'Eleven'
    },
    {
      value: 'TWELVE',
      label: 'Twelve'
    },
    {
      value: 'THIRTEEN',
      label: 'Thirteen'
    },
    {
      value: 'FOURTEEN',
      label: 'Fourteen'
    }
  ];

  enable(): void {
    this.formControl.enable();
  }

  disable(): void {
    this.formControl.disable();
  }

  error(): void {
    this.formControl.setErrors({somekey: 'This is an error with your selection.'});
  }

  get errors(): string[] {
    return this.formControl.errors ? Object.values(this.formControl.errors) : null;
  }
}`;
}
