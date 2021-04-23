import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'dp-demo-radio-button',
  templateUrl: './demo-radio-button.component.html',
  styleUrls: ['./demo-radio-button.component.scss']
})
export class DemoRadioButtonComponent {
  formControl = new FormControl('ONE');

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

  codeLabel = `<dp-radio-button label="One"></dp-radio-button>`;
  codeGroup = `<dp-radio-group>
  <dp-radio-button label="One"></dp-radio-button>
  <dp-radio-button label="Two"></dp-radio-button>
  ...
</dp-radio-group>`;

  codeValue = `<dp-radio-group [formControl]="formControl">
  <dp-radio-button label="One" value="ONE"></dp-radio-button>
  <dp-radio-button label="Two" value="TWO"></dp-radio-button>
  ...
</dp-radio-group>`;

  codeHTML = `<dp-radio-group [formControl]="formControl">
  <dp-radio-button label="One" value="ONE"></dp-radio-button>
  <dp-radio-button label="Two" value="TWO"></dp-radio-button>
  <dp-radio-button label="Three" value="THREE"></dp-radio-button>
</dp-radio-group>
<div class="demo-errors" *ngIf="errors">{{ errors }}</div>

<div class="demo-btn-group">
  <dp-button color="primary" *ngIf="this.formControl.disabled" (click)="enable()">Enable</dp-button>
  <dp-button color="primary" *ngIf="!this.formControl.disabled" (click)="disable()">Disable</dp-button>
  <dp-button color="secondary" (click)="error()">Error</dp-button>
</div>

<div class="demo-value">Value: {{ formControl.value }}</div>`;

  codeTS = `export class DemoRadioButtonComponent {
  formControl = new FormControl('ONE');

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
