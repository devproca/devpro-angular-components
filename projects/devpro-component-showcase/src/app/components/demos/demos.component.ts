import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';
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
