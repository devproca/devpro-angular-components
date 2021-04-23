import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'dp-demo-slide-toggle',
  templateUrl: './demo-slide-toggle.component.html',
  styleUrls: ['./demo-slide-toggle.component.scss']
})
export class DemoSlideToggleComponent {

  formControlGroup = new FormControl();
  formControlSingle = new FormControl();

  enableSingle(): void {
    this.formControlSingle.enable();
  }

  enableGroup(): void {
    this.formControlGroup.enable();
  }

  disableSingle(): void {
    this.formControlSingle.disable();
  }

  disableGroup(): void {
    this.formControlGroup.disable();
  }

  errorSingle(): void {
    this.formControlSingle.setErrors({somekey: 'This is an error with your selection.'});
  }

  errorGroup(): void {
    this.formControlGroup.setErrors({somekey: 'This is an error with your selection.'});
  }

  get errorsSingle(): string[] {
    return this.formControlSingle.errors ? Object.values(this.formControlSingle.errors) : null;
  }

  get errorsGroup(): string[] {
    return this.formControlGroup.errors ? Object.values(this.formControlGroup.errors) : null;
  }



  codeLabel = `<dp-slide-toggle label="One" value="ONE"></dp-slide-toggle>`;

  codeValue = `<dp-slide-group [formControl]="formControl">
  <dp-slide-toggle label="One" value="ONE"></dp-slide-toggle>
  <dp-slide-toggle label="Two" value="TWO"></dp-slide-toggle>
  ...
</dp-slide-group>`;

  codeAltStyle = `<dp-slide-toggle alternateStyling="true"></dp-slide-toggle>`;

  codeHTML = `<h4>Single Slide Toggle (w/ Alternate Styling Enabled)</h4>
<dp-slide-toggle [formControl]="formControlSingle" label="Toggle" value="ON" alternateStyling="true"></dp-slide-toggle>
<div class="demo-errors" *ngIf="errorsSingle">{{ errorsSingle }}</div>

<div class="demo-value">Value: {{ formControlSingle.value }}</div>

<div class="demo-btn-group">
  <dp-button color="primary" *ngIf="this.formControlSingle.disabled" (click)="enableSingle()">Enable</dp-button>
  <dp-button color="primary" *ngIf="!this.formControlSingle.disabled" (click)="disableSingle()">Disable</dp-button>
  <dp-button color="secondary" (click)="errorSingle()">Error</dp-button>
</div>

<h4>Slide Toggle Group</h4>
<dp-slide-group [formControl]="formControlGroup">
  <dp-slide-toggle label="One" value="ONE"></dp-slide-toggle>
  <dp-slide-toggle label="Two" value="TWO"></dp-slide-toggle>
  <dp-slide-toggle label="Three" value="THREE"></dp-slide-toggle>
</dp-slide-group>
<div class="demo-errors" *ngIf="errorsGroup">{{ errorsGroup }}</div>

<div class="demo-value">Value: {{ formControlGroup.value }}</div>

<div class="demo-btn-group">
  <dp-button color="primary" *ngIf="this.formControlGroup.disabled" (click)="enableGroup()">Enable</dp-button>
  <dp-button color="primary" *ngIf="!this.formControlGroup.disabled" (click)="disableGroup()">Disable</dp-button>
  <dp-button color="secondary" (click)="errorGroup()">Error</dp-button>
</div>`;

  codeTS = `export class DemoSlideToggleComponent {

  formControlGroup = new FormControl();
  formControlSingle = new FormControl();

  enableSingle(): void {
    this.formControlSingle.enable();
  }

  enableGroup(): void {
    this.formControlGroup.enable();
  }

  disableSingle(): void {
    this.formControlSingle.disable();
  }

  disableGroup(): void {
    this.formControlGroup.disable();
  }

  errorSingle(): void {
    this.formControlSingle.setErrors({somekey: 'This is an error with your selection.'});
  }

  errorGroup(): void {
    this.formControlGroup.setErrors({somekey: 'This is an error with your selection.'});
  }

  get errorsSingle(): string[] {
    return this.formControlSingle.errors ? Object.values(this.formControlSingle.errors) : null;
  }

  get errorsGroup(): string[] {
    return this.formControlGroup.errors ? Object.values(this.formControlGroup.errors) : null;
  }
}`;
}
