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
      console.log('Closed with result: ', result);
    });
  }

  codeService = `import { DialogService } from 'devpro-components';
  import { DialogConfig } from 'devpro-components';
  ...
  constructor(private dialogService: DialogService) { }

  someFunction() {
    this.dialogService.open(SomeComponent, {
      data: { ... },
      size: 'sm'
    } as DialogConfig).onClosed(result => {
      console.log('Closed with result: ', result);
    });
  }`;

  codeConfig = `export class DialogConfig {
    data: any;
    size: 'xs' | 'sm' | 'md' | 'lg';
  }`;

  codeHTML = `<dp-button color="primary" (click)="openDialog()">Open Dialog Example</dp-button>`;
  codeTS = `export class DemoDialogComponent {

    constructor(private dialogService: DialogService) { }

    openDialog(): void {
      this.dialogService.open(RandomComponentComponent, {
        data: {
          userId: 123,
        },
        size: 'sm'
      } as DialogConfig).onClosed(result => {
        console.log('Closed with result: ', result);
      });
  }`;

  codeHTMLRandom = `<dp-dialog-header>A Header</dp-dialog-header>

  <dp-dialog-body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </dp-dialog-body>

  <dp-dialog-footer>
    <div class="button-wrapper">
      <dp-button color="primary" (click)="closeDialog()">Close</dp-button>
    </div>
  </dp-dialog-footer>`;

  codeTSRandom = `import { DialogComponent } from 'devpro-components';
  import { DialogConfig } from 'devpro-components';
  ...
    export class RandomComponentComponent implements OnInit {

      userId: string;

      constructor(private dialogConfig: DialogConfig,
                  private dialogComponent: DialogComponent) {
      }

      ngOnInit(): void {
        this.userId = this.dialogConfig.data.userId;
      }

      closeDialog(): void {
        this.dialogComponent.close('SAVED');
      }
  }`;
}
