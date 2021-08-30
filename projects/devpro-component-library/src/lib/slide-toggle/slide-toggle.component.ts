import { Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dp-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: [
    './slide-toggle.component.scss',
    '../../../assets/styles/input.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true
    }
  ]
})
export class SlideToggleComponent implements ControlValueAccessor{

  constructor(private injector: Injector) { }
  onChange: any = () => {}
  onTouch: any = () => {}

  isChecked = false;

  @Input() disabled: boolean;
  @Input() value: boolean;
  @Input() checked: boolean;
  @Input() error: boolean;
  @Output() change = new EventEmitter<boolean>();


  ngDoCheck(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.error = !!ngControl.errors;
    }
  }

  writeValue(value: any) {
    if (value) {
      this.isChecked = value;
    } else {
      this.isChecked = false;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  onClick(){
    this.isChecked = !this.isChecked;
    this.notifyChanges();
  }

  notifyChanges() {
    this.onChange(this.isChecked);
    this.change.emit(this.isChecked);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}