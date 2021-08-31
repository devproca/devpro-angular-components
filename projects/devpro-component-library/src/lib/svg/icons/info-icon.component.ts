import { Component } from "@angular/core";
import { BaseSvgComponent } from "../base-svg.component";

const TAG = "info";

@Component({
  selector: `i-${TAG}`,
     template: `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="info"
     class="svg-inline--fa fa-calendar fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
<path fill="currentColor"
  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9
  11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
</svg>
`
})
export class InfoIconComponent extends BaseSvgComponent {
     static tag = TAG;
}