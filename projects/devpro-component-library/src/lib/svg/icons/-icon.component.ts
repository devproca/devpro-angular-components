import { Component } from "@angular/core";
import { BaseSvgComponent } from "../base-svg.component";

const TAG = "linkedin";

const TEMPLATE = ``;


@Component({
     selector: `i-${TAG}`,
     template: TEMPLATE
})
export class IconComponent extends BaseSvgComponent {
     static tag = TAG;
}
