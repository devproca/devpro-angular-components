import { Component, OnInit } from '@angular/core';
import { DialogService } from '@dev-pro/devpro-component-library/src/lib/dialog/dialog.service';
import { DialogDemoBasicContentComponent } from './dialog-demo-basic-content.component';

@Component({
  selector: 'app-dialog-demo-basic',
  templateUrl: './dialog-demo-basic.component.html'
})
export class DialogDemoBasicComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogService.open(DialogDemoBasicContentComponent).onClosed(result => {
      console.log(result);
    });
  }

}
