import {Component, Input, OnChanges} from '@angular/core';
import {forkJoin, Observable, of} from "rxjs";
import { DemoCodeResource, DemoCodeService } from '../../services/demo-code.service';

@Component({
  selector: 'app-feature-preview',
  templateUrl: './feature-preview.component.html'
})
export class FeaturePreviewComponent implements OnChanges {
  @Input() assetName: string;
  @Input() optionalAssetName: string;
  @Input() featureTitle: string;
  @Input() optionalLabel: string;

  html: string;
  typescript: string;
  optionalHtml: string;
  optionalTypescript: string;
  showCode = false;

  constructor(private demoCodeService: DemoCodeService) {
  }

  ngOnChanges() {
    const observables: Observable<DemoCodeResource>[] = [];
    if(this.assetName) observables.push(this.demoCodeService.getResource(this.assetName));
    // this.optionalAssetName
    //   ? observables.push(this.demoCodeService.getResource(this.optionalAssetName))
    //   : observables.push(of(null) as any);

    forkJoin(observables).subscribe(([primary, secondary]) => {
      console.log(primary);
      if(primary) {
        this.html = primary.html;
        this.typescript = primary.typescript;
      }

      if(secondary) {
        this.optionalHtml = secondary.html;
        this.optionalTypescript = secondary.typescript;
      }
    });

  }
  toggleCode(){
    this.showCode = !this.showCode;
  }
}