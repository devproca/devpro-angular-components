
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  nav = [
    {
      links: [
        {
          label: 'Introduction',
          link: ''
        },
      ]
    },
    {
      label: 'Form',
      links: [
        {
          label: 'Input',
          link: 'components/input'
        },
        {
          label: 'Select',
          link: 'components/select'
        },
        {
          label: 'Date Picker',
          link: 'components/date-picker'
        }
      ]
    },
    {
      label: 'Layout',
      links: [
        {
          label: 'Button',
          link: 'components/button'
        },
        {
          label: 'Icons',
          link: 'components/icons'
        }
      ]
    },
    {
      label: 'Miscellaneous',
      links: [
        {
          label: 'Spinner',
          link: 'components/spinner'
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}