import { Component, OnInit } from '@angular/core';

import { AlertService } from 'devpro-components';

@Component({
  selector: 'dp-demo-alert',
  templateUrl: './demo-alert.component.html',
  styleUrls: ['./demo-alert.component.scss'],
  providers: [AlertService]
})
export class DemoAlertComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.success('This is a Success', 'This is some subtext for detail.');
    this.alertService.info('This is some Info', 'This is additional useful information.');
    this.alertService.warning('This is a Warning', 'This is a warning to do something.');
    this.alertService.danger('This is Dangerous', 'Something has gone wrong!');
  }

  clear(): void {
    this.alertService.clearAll();
  }

  codeServiceCall = `import { AlertService } from 'devpro-components';
  ...
  constructor(private alertService: AlertService) { ... }
    ...
  this.alertService.success('Message', 'Details');`;

  codeHTML = `<dp-alerts></dp-alerts>
  <dp-button color="primary" (click)="clear()">Clear All</dp-button>`;

  codeTS = `import { AlertService } from 'devpro-components';
  ...
  export class DemoAlertComponent implements OnInit {

    constructor(private alertService: AlertService) { }

    ngOnInit(): void {
      this.alertService.success('This is a Success', 'This is some subtext for detail.');
      this.alertService.info('This is some Info', 'This is additional useful information.');
      this.alertService.warning('This is a Warning', 'This is a warning to do something.');
      this.alertService.danger('This is Dangerous', 'Something has gone wrong!');
    }

    clear(): void {
      this.alertService.clearAll();
    }
  }`;


}
