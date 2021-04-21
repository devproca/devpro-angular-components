import { Component, OnInit } from '@angular/core';

import { DialogComponent } from 'devpro-components';
import { DialogConfig } from 'devpro-components';


@Component({
  selector: 'dp-random-component',
  templateUrl: './random-component.component.html',
  styleUrls: ['./random-component.component.scss']
})
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
}
