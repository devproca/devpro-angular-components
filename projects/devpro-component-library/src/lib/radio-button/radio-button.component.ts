import { Component, EventEmitter, HostBinding, Input, Output, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { RadioGroupService } from './radio-group.service';
import { RadioGroupDirection } from './radio-group/radio-group.component';



@Component({
  selector: 'dp-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  @Input() label: string;
  @Input() value: any;
  @HostBinding('attr.disabled') disabled = false;
  @HostBinding('attr.error') error = false;

  renderDirection =  RadioGroupDirection.Vertical;
  isChecked = false;

  constructor(private radioGroupService: RadioGroupService) { }

  ngOnInit(): void {
    this.registerCheckedChanges();
    this.registerDisableChanges();
    this.registerErrorChanges();
    this.registerRenderDirectionChanges();
  }

  onChecked(): void {
    this.radioGroupService.setValue(this.value);
  }

  private registerCheckedChanges(): void {
    this.subscriptions.push(
      this.radioGroupService.checkedValue$.subscribe(checkedValue => {
        this.isChecked = checkedValue === this.value;
      }));
  }

  private registerDisableChanges(): void {
    this.subscriptions.push(
      this.radioGroupService.checkDisable$.subscribe(disableState => {
        this.disabled = disableState;
      }));
  }

  private registerErrorChanges(): void {
    this.subscriptions.push(
      this.radioGroupService.checkError$.subscribe(errorState => {
        this.error = errorState;
      }));
  }

  private registerRenderDirectionChanges(): void {
    this.subscriptions.push(
      this.radioGroupService.renderDirection$.subscribe(direction => {
        this.renderDirection = direction;
      }));
  }
  
}
