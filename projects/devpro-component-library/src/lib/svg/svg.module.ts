import {NgModule} from "@angular/core";
import {AngleRightComponent} from "./angle-right.component";
import {AngleLeftComponent} from "./angle-left.component";

import {SvgComponent} from "./svg.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {DP_SVG} from "./svg.token";

const SVG_COMPONENTS = [
  AngleRightComponent,
  AngleLeftComponent
]

@NgModule({
  declarations: [
    SVG_COMPONENTS,
    SvgComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    SvgComponent
  ],
  providers: [
    {provide: DP_SVG, multi: true, useValue: {name: "angle-right", component: AngleRightComponent}},
    {provide: DP_SVG, multi: true, useValue: {name: "angle-left", component: AngleLeftComponent}}
  ]
})
export class SvgModule {
}
