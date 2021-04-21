import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dp-demo-date-picker',
  templateUrl: './demo-date-picker.component.html',
  styleUrls: ['./demo-date-picker.component.scss']
})
export class DemoDatePickerComponent {
  formControl = new FormControl('2016-03-03');

  enable(): void {
    this.formControl.enable();
  }

  disable(): void {
    this.formControl.disable();
  }

  error(): void {
    this.formControl.setErrors({somekey: 'This is an error with your input date.'});
  }

  get errors(): string[] {
    return this.formControl.errors ? Object.values(this.formControl.errors) : null;
  }

  codeGetStarted = `<dp-date-picker [formControl]="formControl"></dp-date-picker>`;

  codeMinMax = `<dp-date-picker minDate="2015-01-01" maxDate="2021-12-31"></dp-date-picker>`;

  codeHTML = `<h4>Date:</h4>
  <dp-date-picker placeholder="YYYY-MM-DD"
                  minDate="2015-01-01"
                  [formControl]="formControl"></dp-date-picker>
  <div class="demo-errors" *ngIf="errors">{{ errors }}</div>

  <div class="demo-btn-group">
    <dp-button color="primary" *ngIf="this.formControl.disabled" (click)="enable()">Enable</dp-button>
    <dp-button color="primary" *ngIf="!this.formControl.disabled" (click)="disable()">Disable</dp-button>
    <dp-button color="secondary" (click)="error()">Error</dp-button>
  </div>

  <div class="demo-value">Value: {{ formControl.value }}</div>`;

  codeTS = `export class DemoDatePickerComponent {
    formControl = new FormControl('2016-03-03');

    enable(): void {
      this.formControl.enable();
    }

    disable(): void {
      this.formControl.disable();
    }

    error(): void {
      this.formControl.setErrors({somekey: 'This is an error with your input date.'});
    }

    get errors(): string[] {
      return this.formControl.errors ? Object.values(this.formControl.errors) : null;
    }
  }`;
}
