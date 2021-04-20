import { Component } from '@angular/core';

import { DialogService } from 'devpro-components';
import { DialogConfig } from 'devpro-components';
import { RandomComponentComponent } from './random-component/random-component.component';


@Component({
  selector: 'dp-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.scss']
})
export class DemoDialogComponent {

  constructor(private dialogService: DialogService) { }

  openDialog(): void {
    this.dialogService.open(RandomComponentComponent, {
      data: {
        userId: 123,
      },
      size: 'sm'
    } as DialogConfig).onClosed(result => {
      console.log('closed with result', result);
    });
  }
}
