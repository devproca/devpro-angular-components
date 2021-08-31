import { Component } from "@angular/core";
import { BaseSvgComponent } from "../base-svg.component";

const TAG = "angle-down";

@Component({
  selector: `i-${TAG}`,
  template: `<svg aria-hidden="true" class="svg-inline--fa fa-angle-down fa-w-10" data-icon="angle-down" data-prefix="far"
     focusable="false" role="img" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"
        fill="currentColor"></path>
</svg>`
})
export class AngleDownIconComponent extends BaseSvgComponent {
  static tag = TAG;
}