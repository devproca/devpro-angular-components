import { Component, OnInit } from '@angular/core';
import { AlertService } from '@dev-pro/devpro-component-library/src/lib/alert/alert.service';

@Component({
  selector: 'app-alert-demo-multiple',
  templateUrl: './alert-demo-multiple.component.html'
})
export class AlertDemoMultipleComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.clearAll();
    this.alertService.success(this.testSuccess, this.successDetails);
  }

  testSuccess = "This is a test success alert";
  successDetails = "This is success details";

  testInfo = "This is a test info alert";
  infoDetails = "This is info details";

  testWarning = "This is a test warning alert";
  warningDetails = "This is warning details";

  testDanger = "This is a test danger alert";
  dangerDetails = "This is danger details";

  addSuccess(){
    this.alertService.success(this.testSuccess, this.successDetails);
  }

  addInfo(){
    this.alertService.info(this.testInfo, this.infoDetails);
  }

  addWarning(){
    this.alertService.warning(this.testWarning, this.warningDetails);
  }

  addDanger(){
    this.alertService.danger(this.testDanger, this.dangerDetails);
  }
}
