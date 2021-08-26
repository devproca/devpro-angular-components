import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { createPopper, Instance, Offsets, Placement } from '@popperjs/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'dp-popper',
  templateUrl: './popper.component.html',
  styleUrls: ['./popper.component.scss']
})
export class PopperComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;

  @Input() placement: Placement = 'top';
  @Input() offset: Offsets = { x: 0, y: 0 };
  @Input() hideOnClick = false;
  @Input() matchWidth = false;

  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();

  open = false;
  private reference: HTMLElement;
  private content: HTMLElement;
  private subscriptions: Subscription[] = [];
  private popperInstance: Instance;

  constructor() {
  }

  ngOnInit(): void {
    this.subscribeToWindowClick();
    this.subscribeToWindowResize();
    this.subscribeToWindowBlur();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.popperInstance?.destroy();
  }

  ngAfterViewInit(): void {
    this.reference = this.wrapper.nativeElement.firstElementChild as HTMLElement;
    this.content = this.wrapper.nativeElement.lastElementChild as HTMLElement;
    this.setContentStyleDisplay('none');
  }

  hide(): void {
    if (!this.open) {
      return;
    }

    this.closed.emit();
    this.open = false;
    this.setContentStyleDisplay('none');
  }

  show(): void {
    if (this.open) {
      return;
    }
    if (!this.popperInstance) {
      this.initializePopper();
    }
    this.opened.emit();
    this.open = true;
    this.setContentStyleDisplay('block');
    this.updateContentWidth();
    this.update();

  }

  update(): void {
    this.popperInstance?.update();
  }

  private subscribeToWindowClick(): void {
    this.subscriptions.push(fromEvent<any>(window, 'click')
      .subscribe(event => {
        this.handleWindowClick(event);
      }));
  }

  private subscribeToWindowResize(): void {
    this.subscriptions.push(fromEvent<any>(window, 'resize')
      .pipe(debounceTime(50))
      .subscribe(_ => {
        this.onWindowResize();
      }));
  }

  private subscribeToWindowBlur(): void {
    this.subscriptions.push(fromEvent<any>(window, 'blur')
      .subscribe(_ => {
        this.onWindowHide();
      }));
  }

  private isReferenceClicked(event: MouseEvent): boolean {
    return event.composedPath().some(t => t === this.reference);
  }

  private isContentClicked(event: MouseEvent): boolean {
    return event.composedPath().some(t => t === this.content);
  }

  private handleWindowClick(event: MouseEvent): void {
    if (this.isReferenceClicked(event)) {
      this.show();
    } else if (this.isContentClicked(event)) {
      if (this.hideOnClick) {
        this.hide();
      }
    } else {
      this.hide();
    }
  }

  private onWindowHide(): void {
    this.hide();
  }

  private onWindowResize(): void {
    this.updateContentWidth();
  }

  private updateContentWidth(): void {
    if (this.matchWidth && this.content) {
      const width = this.reference.getBoundingClientRect().width;
      this.css(this.content, { minWidth: `${width}px` });
      this.update();
    }
  }

  private setContentStyleDisplay(value: string): void {
    this.css(this.content, { display: value });
  }

  private initializePopper(): void {
    this.popperInstance = createPopper(this.reference, this.content, {
      placement: this.placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [this.offset.x, this.offset.y],
        },
      }]
    });
  }

  private css(el: HTMLElement, styles: any): void {
    Object.assign(el.style, styles);
  }
}
