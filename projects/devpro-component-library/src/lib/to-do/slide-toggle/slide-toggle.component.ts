import { Component, EventEmitter, forwardRef, HostBinding, Injector, Input, Optional, Output } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'dp-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true,
    }
  ]
})
export class SlideToggleComponent {
  private subscriptions: Subscription[] = [];
  private onChange: (_: string) => void;
  private onTouched: () => void;

  @Output() toggled = new EventEmitter<void>();
  @Output() untoggled = new EventEmitter<void>();
  @Input() label: string;
  @Input() value: any;
  @Input() alternateStyling = false;
  @HostBinding('attr.disabled') @Input() disabled = false;
  @HostBinding('attr.error') error = false;

  isChecked = false;

  constructor(@Optional() private injector: Injector) {
  }

  ngDoCheck(): void {
    if (this.injector) {
      const ngControl = this.injector.get(NgControl, null);
      if (ngControl) {
        this.error = !!ngControl.errors;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onClick(): void {
    this.isChecked = !this.isChecked;
    this.notifyChanges();
  }

  writeValue(value: string): void {
    this.isChecked = value === this.value;
  }

  registerOnChange(onChange: (_: string) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouched = onTouch;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  private notifyChanges(): void {
    if (this.isChecked) {
      this.toggled.emit();
    } else {
      this.untoggled.emit();
    }

    if (this.onChange) {
      this.onChange(this.isChecked ? this.value : null);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }
}
