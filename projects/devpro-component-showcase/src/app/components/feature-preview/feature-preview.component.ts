import {Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {forkJoin, Observable, of, Subscription} from "rxjs";
import { DemoCodeResource, DemoCodeService } from '../../services/demo-code.service';

@Component({
  selector: 'app-feature-preview',
  templateUrl: './feature-preview.component.html',
  styleUrls: ['./feature-preview.component.scss']
})
export class FeaturePreviewComponent implements OnChanges, OnDestroy {
  @Input() assetName: string;
  @Input() optionalAssetName: string;
  @Input() featureTitle: string;
  @Input() optionalLabel: string;
  @Input() center: boolean;

  subscription = Subscription.EMPTY;

  html: string;
  typescript: string;
  optionalHtml: string;
  optionalTypescript: string;
  showCode = false;

  constructor(private demoCodeService: DemoCodeService) {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    const observables: Observable<DemoCodeResource>[] = [];

    if(this.assetName){
       observables.push(this.demoCodeService.getResource(this.assetName));
    }

    this.optionalAssetName
      ? observables.push(this.demoCodeService.getResource(this.optionalAssetName))
      : observables.push(of(null) as any);

    this.subscription = forkJoin(observables).subscribe(([primary, secondary]) => {
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
}