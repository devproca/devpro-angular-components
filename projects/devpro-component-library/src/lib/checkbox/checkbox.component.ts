import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  DoCheck,
  Optional,
  forwardRef,
  Injector,
  HostBinding
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { CheckboxService } from './checkbox.service';


@Component({
  selector: 'dp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
})
export class CheckboxComponent implements OnInit, DoCheck, OnDestroy, ControlValueAccessor {
  private subscriptions: Subscription[] = [];

  @Input() label: string;
  @Input() value: any;
  @HostBinding('attr.disabled') @Input() disabled = false;
  @Output() change = new EventEmitter<any>();

  @HostBinding('attr.checked') isChecked = false;
  @HostBinding('attr.error') error = false;

  constructor(@Optional() private checkService: CheckboxService,
              @Optional() private injector: Injector) {
  }

  onChange: any = () => { }
  onTouch: any = () => { }

  ngOnInit(): void {
    if (this.checkService) {
      this.checkService.add(this);
      this.registerCheckChanges();
      this.registerDisableChanges();
      this.registerErrorChanges();
    }
  }

  ngDoCheck(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.error = !!ngControl.errors;
    }
  }

  ngOnDestroy(): void {
    if (this.checkService) {
      this.checkService.remove(this);
    }
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onClick(): void {
    this.isChecked = !this.isChecked;
    this.notifyChanges();
  }

  writeValue(value: string): void {
    this.isChecked = value === this.value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  private registerCheckChanges(): void {
    this.subscriptions.push(this.checkService.checkedValue$.subscribe(checkedValues => {
      const isChecked = checkedValues.some(value => value === this.value);
      if (isChecked !== this.isChecked) {
        this.isChecked = isChecked;
      }
    }));
  }

  private registerDisableChanges(): void {
    this.subscriptions.push(this.checkService.checkDisable$.subscribe(disableState => {
      this.disabled = disableState === true;
    }));
  }

  private registerErrorChanges(): void {
    this.subscriptions.push(this.checkService.checkError$.subscribe(errorState => {
      this.error = errorState === true;
    }));
  }

  private notifyChanges(): void {
    if (this.isChecked) {
      this.checkService?.markChecked(this);
      this.onChange(this.isChecked);
      this.change.emit(this.isChecked);
    } else {
      this.checkService?.markUnchecked(this);
      this.onChange(this.isChecked);
      this.change.emit(this.isChecked);
    }
  }
}
