import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Inject,
  Input,
  OnChanges, Optional,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DP_SVG} from "@dev-pro/devpro-component-library/src/lib/svg/svg.token";
import {SvgModel} from "@dev-pro/devpro-component-library/src/lib/svg/svg.model";

@Component({
  selector: 'dp-svg',
  templateUrl: './svg.component.html'
})
export class SvgComponent implements OnChanges, AfterViewInit {

  @Input() name: string;
  @ViewChild('ref', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  constructor(@Inject(DP_SVG) @Optional() private svgs: SvgModel[],
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnChanges(): void {
    this.reloadSvg();
  }

  ngAfterViewInit(): void {
    this.reloadSvg();
    this.changeDetectorRef.detectChanges();
  }

  private reloadSvg(): void {
    if (!this.viewContainerRef) {
      return;
    }

    if (this.name && this.svgs) {
      const svgModel = this.svgs.find(r => r.name === this.name);
      if (svgModel) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(svgModel.component);
        this.viewContainerRef.createComponent(componentFactory);
      }
    }
  }
}
