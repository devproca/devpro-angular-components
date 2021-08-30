import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent {

  title: string;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.data['title']);
    this.title = this.route.snapshot.data['title'];
    // console.log(this.title);
  }

}
