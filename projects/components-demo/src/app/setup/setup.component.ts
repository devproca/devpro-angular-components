import { Component } from '@angular/core';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  codeInstall = `npm install devpro-components --save`;
  codeImport = `import { DevproComponentsModule } from 'devpro-components';`;
  codeStyles = `"styles": [
...
  "node_modules/devpro-components/assets/styles/base.css"
],`;

  codeAnimations = `import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

  ...

  @NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ...
    ],
  })
export class AppModule { }`;
}
