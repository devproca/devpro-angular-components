import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dp-demo-checkbox',
  templateUrl: './demo-checkbox.component.html',
  styleUrls: ['./demo-checkbox.component.scss']
})
export class DemoCheckboxComponent {

  formControlGroup = new FormControl();
  formControlSingle = new FormControl();

  enableGroup(): void {
    this.formControlGroup.enable();
  }

  enableSingle(): void {
    this.formControlSingle.enable();
  }

  disableGroup(): void {
    this.formControlGroup.disable();
  }

  disableSingle(): void {
    this.formControlSingle.disable();
  }

  errorGroup(): void {
    this.formControlGroup.setErrors({somekey: 'This is an error with your selection.'});
  }

  errorSingle(): void {
    this.formControlSingle.setErrors({somekey: 'You must accept the terms of use to continue.'});
  }

  get errorsGroup(): string[] {
    return this.formControlGroup.errors ? Object.values(this.formControlGroup.errors) : null;
  }

  get errorsSingle(): string[] {
    return this.formControlSingle.errors ? Object.values(this.formControlSingle.errors) : null;
  }

  codeLabel = `<dp-checkbox label="Value 1" value="val1"></dp-checkbox>`;

  codeValue = `<dp-checkbox-group [formControl]="formControl">
    <dp-checkbox label="One" value="ONE"></dp-checkbox>
    <dp-checkbox label="Two" value="TWO"></dp-checkbox>
    ...
  </dp-checkbox-group>`;

  codeHTML = `<h4>Single Checkbox</h4>
  <dp-checkbox [formControl]="formControlSingle" label="I accept the terms of use." value="ACCEPTED"></dp-checkbox>
  <div class="demo-errors" *ngIf="errorsSingle">{{ errorsSingle }}</div>
  <div class="demo-value">Value: {{ formControlSingle.value }}</div>

  <div class="demo-btn-group">
    <dp-button color="primary" *ngIf="this.formControlSingle.disabled" (click)="enableSingle()">Enable</dp-button>
    <dp-button color="primary" *ngIf="!this.formControlSingle.disabled" (click)="disableSingle()">Disable</dp-button>
    <dp-button color="secondary" (click)="errorSingle()">Error</dp-button>
  </div>

  <h4>Checkbox Group</h4>
  <dp-checkbox-group [formControl]="formControlGroup">
    <dp-checkbox label="One" value="ONE"></dp-checkbox>
    <dp-checkbox label="Two" value="TWO"></dp-checkbox>
    <dp-checkbox label="Three" value="THREE"></dp-checkbox>
  </dp-checkbox-group>
  <div class="demo-errors" *ngIf="errorsGroup">{{ errorsGroup }}</div>

  <div class="demo-value">Value: {{ formControlGroup.value }}</div>

  <div class="demo-btn-group">
    <dp-button color="primary" *ngIf="this.formControlGroup.disabled" (click)="enableGroup()">Enable</dp-button>
    <dp-button color="primary" *ngIf="!this.formControlGroup.disabled" (click)="disableGroup()">Disable</dp-button>
    <dp-button color="secondary" (click)="errorGroup()">Error</dp-button>
  </div>`;

  codeTS = `export class DemoCheckboxComponent {

    formControlGroup = new FormControl();
    formControlSingle = new FormControl();

    enableGroup(): void {
      this.formControlGroup.enable();
    }

    enableSingle(): void {
      this.formControlSingle.enable();
    }

    disableGroup(): void {
      this.formControlGroup.disable();
    }

    disableSingle(): void {
      this.formControlSingle.disable();
    }

    errorGroup(): void {
      this.formControlGroup.setErrors({somekey: 'This is an error with your selection.'});
    }

    errorSingle(): void {
      this.formControlSingle.setErrors({somekey: 'You must accept the terms of use to continue.'});
    }

    get errorsGroup(): string[] {
      return this.formControlGroup.errors ? Object.values(this.formControlGroup.errors) : null;
    }

    get errorsSingle(): string[] {
      return this.formControlSingle.errors ? Object.values(this.formControlSingle.errors) : null;
    }
  }`;
}
