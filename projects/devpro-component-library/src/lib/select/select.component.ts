import {
  Component, DoCheck, EventEmitter, forwardRef, Injector, Input, Output, ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dp-select',
  templateUrl: './select.component.html',
  styleUrls: [
    './select.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements ControlValueAccessor, DoCheck {

  @Input() iconBefore: string;
  @Input() placeholder: string = "Select";
  @Input() options: SelectOption[];
  @Input() disabled: boolean;
  @Input() error: boolean;
  @Output() change = new EventEmitter<any>();

  selectedOption: SelectOption;

  constructor(private injector: Injector) { }

  onChange: any = () => { }
  onTouch: any = () => { }


  ngDoCheck(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.error = !!ngControl.errors;
    }
  }

  writeValue(value: any) {
    if (value) {
      this.selectedOption = this.options.find(o => o.value === value);
    } else {
      this.selectedOption = null;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  setValue(selectedOption: SelectOption) {
    this.selectedOption = selectedOption;
    this.notifyChanges();
  }

  notifyChanges() {
    this.onChange(this.selectedOption.value);
    this.change.emit(this.selectedOption.value);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}

class SelectOption {
  value: any;
  label: string;
}