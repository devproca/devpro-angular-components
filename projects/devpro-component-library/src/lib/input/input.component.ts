import {
  Component, EventEmitter,
  forwardRef, Input, Output
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dp-input',
  templateUrl: './input.component.html',
  styleUrls: [
    './input.component.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() iconBefore: string;
  @Input() disabled = false;
  @Input() placeholder: string = "";
  @Input() error = false;
  @Output() change = new EventEmitter<any>();

  focused: boolean;

  formControl = new FormControl('');

  onChange: any = () => {}
  onTouch: any = () => {}

  constructor() {
    this.registerValueChanges();
  }

  private registerValueChanges() {
    this.formControl.valueChanges.subscribe(_ => {
      this.notifyChanges();
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.formControl.setValue(value);
    } else {
      this.formControl.reset();
    }
  }

  private notifyChanges(){
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  handleFocus(): void {
    this.focused = true;
  }

  handleUnfocus(): void {
    this.focused = false;
  }

  registerOnChange(onChange: (_: any) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;

    this.disabled
    ? this.formControl.disable()
    : this.formControl.enable();
  }

  get value() {
    return this.formControl.value;
  }
}