import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { RadioGroupDirection } from './radio-group/radio-group.component';

@Injectable()
export class RadioGroupService {

  private _checkedValue$ = new BehaviorSubject<any>(null);
  checkedValue$ = this._checkedValue$.asObservable();

  private _checkDisable$ = new BehaviorSubject<boolean>(null);
  checkDisable$ = this._checkDisable$.asObservable();

  private _checkError$ = new BehaviorSubject<boolean>(null);
  checkError$ = this._checkError$.asObservable();

  private _renderDirection$ = new BehaviorSubject<RadioGroupDirection>(null);
  renderDirection$ = this._renderDirection$.asObservable();

  setValue(value: any): void {
    this._checkedValue$.next(value);
  }

  setRenderDirection(value: RadioGroupDirection): void {
    console.log(value)
    this._renderDirection$.next(value);
  }

  markAsDisabled(disabledState: boolean): void {
    this._checkDisable$.next(disabledState);
  }

  markAsErrored(errorState: boolean): void {
    this._checkError$.next(errorState);
  }
}
