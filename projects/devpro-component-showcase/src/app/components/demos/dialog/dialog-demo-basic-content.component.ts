import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@dev-pro/devpro-component-library/src/lib/dialog/dialog.ref';

@Component({
  selector: 'app-dialog-demo-basic-content',
  templateUrl: './dialog-demo-basic-content.component.html'
})
export class DialogDemoBasicContentComponent {

  constructor(private dialogRef: DialogRef) { }

  close(value?){
    this.dialogRef.close(value);
  }

}
