import { Component, EventEmitter, HostBinding, Input, Output, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { RadioButtonService } from './radio-button.service';


@Component({
  selector: 'dp-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @Output() checked = new EventEmitter<void>();
  @Input() label: string;
  @Input() value: any;
  @HostBinding('attr.disabled') @Input() disabled = false;
  @HostBinding('attr.error') error = false;

  isChecked = false;

  constructor(private radioService: RadioButtonService) { }

  ngOnInit(): void {
    this.radioService.add(this);
    this.registerCheckedChanges();
    this.registerDisableChanges();
    this.registerErrorChanges();
  }

  ngOnDestroy(): void {
    this.radioService.remove(this);
  }

  onChecked(): void {
    this.radioService.markChecked(this);
    this.checked.emit();
  }

  private registerCheckedChanges(): void {
    this.subscriptions.push(
      this.radioService.checkedValue$.subscribe(checkedValue => {
        this.isChecked = checkedValue === this.value;
      }));
  }

  private registerDisableChanges(): void {
    this.subscriptions.push(
      this.radioService.checkDisable$.subscribe(disableState => {
        this.disabled = disableState === true;
      }));
  }

  private registerErrorChanges(): void {
    this.subscriptions.push(
      this.radioService.checkError$.subscribe(errorState => {
        this.error = errorState === true;
      }));
  }
}
