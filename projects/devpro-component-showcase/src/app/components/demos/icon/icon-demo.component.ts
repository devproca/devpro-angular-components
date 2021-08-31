import { Component, OnInit } from '@angular/core';
import {copy}from '../../../utilities/copy.util'

const ICONS = [
  'angleDown',
  'angleRight',
  'angleLeft',
  'calendar',
  'check',
  'clone',
  'code',
  'ellipsisVertical',
  'eye',
  'times',
  'info',
  'exclamation',
  'menu',
  'github',
  'linkedin',
  'terminal',
  'twitter'
];

@Component({
  selector: 'app-icon-demo',
  templateUrl: './icon-demo.component.html'
})
export class IconDemoComponent implements OnInit{

  iconList: string[];

  constructor() { }

  ngOnInit(){
    this.iconList = ICONS;
  }


  copyIcon(icon: string){
    let message = `<dp-svg name="${icon}"></dp-svg>`;
    copy(message);
  }
}