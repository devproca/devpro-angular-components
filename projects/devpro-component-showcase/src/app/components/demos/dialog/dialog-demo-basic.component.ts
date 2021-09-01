import { Component } from '@angular/core';
import { DialogService } from '@dev-pro/devpro-component-library/src/lib/dialog/dialog.service';
import { DialogDemoBasicContentComponent } from './dialog-demo-basic-content.component';
@Component({
  selector: 'app-dialog-demo-basic',
  templateUrl: './dialog-demo-basic.component.html'
})
export class DialogDemoBasicComponent {

  constructor(private dialogService: DialogService) { }

  openDialog(){
    this.dialogService.open(DialogDemoBasicContentComponent, {size: 'xs'}).onClosed(result => {
      result
      ? console.log("Confirm pressed")
      : console.log("Cancel pressed");
    });
  }

}
