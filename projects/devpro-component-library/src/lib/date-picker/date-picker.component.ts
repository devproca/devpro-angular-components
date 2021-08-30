import { Component, EventEmitter, forwardRef, Inject, Injector, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dp-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: [
    './date-picker.component.scss',
    '../../../assets/styles/input.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private injector: Injector
    ) {
  }

  onChange: any = () => { }
  onTouch: any = () => { }

  ngOnInit(): void {
  }

  selectedOption;

  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() error: boolean;
  @Input() value: string;
  @Output() change = new EventEmitter<string>();
  formControl = new FormControl();

  gDoCheck(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.error = !!ngControl.errors;
    }
  }

  writeValue(value: any) {
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  notifyChanges() {
    this.onChange(this.value);
    this.change.emit(this.value);
  }

}
