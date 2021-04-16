import { Component } from '@angular/core';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'dp-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss', '../../../../assets/styles/base.scss']
})
export class DialogHeaderComponent {

  constructor(private dialogComponent: DialogComponent) {
  }

  onClose(): void {
    this.dialogComponent.close();
  }
}
