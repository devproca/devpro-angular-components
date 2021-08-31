import { Component } from "@angular/core";
import { BaseSvgComponent } from "../base-svg.component";

const TAG = "angle-right";

@Component({
  selector: `i-${TAG}`,
     template: `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-right"
       class="svg-inline--fa fa-angle-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
    <path fill="currentColor"
          d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"></path>
  </svg>`
})
export class AngleRightIconComponent extends BaseSvgComponent {
  static tag = TAG;
}