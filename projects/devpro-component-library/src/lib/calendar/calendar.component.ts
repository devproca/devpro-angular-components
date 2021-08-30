import { Component, EventEmitter, forwardRef, Inject, Injector, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {DateTime} from 'luxon';
import {isValidDate, isValidForMax, isValidForMin} from '../utils/date.util';

@Component({
  selector: 'dp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements OnInit, ControlValueAccessor {

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private injector: Injector
    ) {
  }

  onChange: any = () => { }
  onTouch: any = () => { }

  @Input() value: string;
  @Output() change = new EventEmitter<string>();
  @Output() calendarMonthChange = new EventEmitter<DateTime>();
  @Output() calendarYearChange = new EventEmitter<DateTime>();
  @Input() minDate: string;
  @Input() maxDate: string;
  @Input() disabled: boolean;
  @Input() error: boolean;

  calendar: CellMetadata[] = [];
  navigationDate: DateTime;

  weekdayLabels = [];

  ngOnInit(): void {
    this.initializeDaysOfWeek();
  }

  ngDoCheck(): void {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.error = !!ngControl.errors;
    }
  }

  writeValue(value: any) {
    const currentDate = DateTime.local();
    let nextNavigationDate = currentDate;

    if (this.value) {
      if (isValidDate(this.value)) {
        nextNavigationDate = DateTime.fromISO(this.value).startOf('month');
      }
    } else {
      if (this.maxDate && this.maxDate < currentDate.toISODate()) {
        nextNavigationDate = DateTime.fromISO(this.maxDate).startOf('month');
      } else if (this.minDate && this.minDate > currentDate.toISODate()) {
        nextNavigationDate = DateTime.fromISO(this.minDate).startOf('month');
      } else {
        nextNavigationDate = currentDate.startOf('month');
      }
    }
    this.updateNavigationDate(nextNavigationDate);
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  changeMonth(num: number): void {
    this.updateNavigationDate(this.navigationDate.plus({months: num}));
    this.calendarMonthChange.emit(this.navigationDate);
  }

  changeYear(num: number): void {
    this.updateNavigationDate(this.navigationDate.plus({years: num}));
    this.calendarYearChange.emit(this.navigationDate);
  }

  selectDate(cell: CellMetadata): void {
    if (!cell.disabled && cell.isoDate) {
      this.value = cell.isoDate;
      this.notifyChanges();
    }
  }

  notifyChanges() {
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  private updateNavigationDate(value: DateTime): void {
    this.navigationDate = value;
    this.refreshCells();
  }

  private refreshCells(): void {
    const firstDay = this.navigationDate.startOf('month');
    const lastDay = this.navigationDate.endOf('month');
    const daysInMonth = lastDay.get('day');
    const firstEmptyCells = firstDay.get('weekday') % 7;
    const lastEmptyCells = 6 - lastDay.get('weekday') < 0 ? 0 : 6 - lastDay.get('weekday');

    const dayOfMonthCells = this.createNCells(daysInMonth, i => {
      const dayIndex = i + 1;
      const isoDate = this.navigationDate.set({day: dayIndex}).toISODate();
      return {
        isoDate,
        day: dayIndex,
        today: isoDate === DateTime.local().toISODate(),
        disabled: (this.maxDate && !isValidForMax(isoDate, this.maxDate)) ||
          (this.minDate && !isValidForMin(isoDate, this.minDate))
      } as CellMetadata;
    }); 

    this.calendar = this.createNEmptyCells(firstEmptyCells)
      .concat(dayOfMonthCells)
      .concat(this.createNEmptyCells(lastEmptyCells));
  }

  private createNCells(numberOfCells: number, cellMapper: (index: number) => CellMetadata): CellMetadata[] {
    return !numberOfCells ? [] : [...Array(numberOfCells)].map((_, i) => cellMapper(i));
  }

  private createNEmptyCells(numberOfCells: number): CellMetadata[] {
    return this.createNCells(numberOfCells, () => {
      return {
        disabled: true
      } as CellMetadata;
    });
  }

  private initializeDaysOfWeek(): void {
    this.weekdayLabels = [0, 1, 2, 3, 4, 5, 6].map(i => DateTime.local().set({weekday: i}).setLocale(this.locale).toFormat('ccc'));
  }

  get navigationMonthName(): string{
    return this.navigationDate.setLocale(this.locale).toFormat("MMM");
  }

  get navigationYear(): string{
    return this.navigationDate.setLocale(this.locale).toFormat("yyyy");
  }

}

class CellMetadata {
  isoDate: string;
  day: number;
  today: boolean;
  disabled: boolean;
}
