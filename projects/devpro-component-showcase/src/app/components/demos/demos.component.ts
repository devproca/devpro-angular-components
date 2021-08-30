import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent{

  title: string;

  constructor(route: ActivatedRoute) {
    route.url.subscribe(() => {
      this.title = route.snapshot.firstChild.data?.title;
     });
  }
}
