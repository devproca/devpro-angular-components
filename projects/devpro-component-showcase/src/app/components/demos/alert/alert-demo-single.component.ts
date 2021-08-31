import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-demo-single',
  templateUrl: './alert-demo-single.component.html'
})
export class AlertDemoSingleComponent{

  constructor() { }

  testSuccess = "This is a test success alert";
  successDetails = "This is success details";

  testWarning = "This is a test warning alert";
  warningDetails = "This is warning details";

  testDanger = "This is a test danger alert";
  dangerDetails = "This is danger details";

  testInfo = "This is a test info alert";
  infoDetails = "This is info details";

}
