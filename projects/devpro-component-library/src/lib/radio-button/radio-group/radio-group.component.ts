import { Component, DoCheck, forwardRef, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { RadioGroupService } from '../radio-group.service';


@Component({
  selector: 'dp-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [
    RadioGroupService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    }
  ]
})
export class RadioGroupComponent implements OnInit, DoCheck, OnDestroy, ControlValueAccessor {

  @Input() renderDirection = RadioGroupDirection.Vertical;

  private subscriptions: Subscription[] = [];
  private onChangeCallback: (_: string) => void;
  private onTouchedCallback: () => void;

  constructor(private radioGroupService: RadioGroupService, private injector: Injector) { }

  ngOnInit(): void {
    this.registerCheckedChanges();
    this.radioGroupService.setRenderDirection(this.renderDirection);
  }

  ngDoCheck(): void {
    const ngControl = this.ngControl;
    if (ngControl) {
      this.radioGroupService.markAsErrored(!!ngControl.errors);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  writeValue(value: string): void {
    this.radioGroupService.setValue(value);
  }

  registerOnChange(onChange: (_: string) => void): void {
    this.onChangeCallback = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouchedCallback = onTouch;
  }

  setDisabledState(disabled: boolean): void {
    this.radioGroupService.markAsDisabled(disabled);
  }

  private registerCheckedChanges(): void {
    this.subscriptions.push(this.radioGroupService.checkedValue$.subscribe(value => {
      if (this.onChangeCallback) {
        this.onChangeCallback(value);
      }
      if (this.onTouchedCallback) {
        this.onTouchedCallback();
      }
    }));
  }

  private get ngControl(): NgControl {
    return this.injector.get(NgControl, null);
  }
}

export enum RadioGroupDirection {
  Vertical = "VERTICAL",
  Horizontal = "HORIZONTAL"
}