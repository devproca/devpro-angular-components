
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
          label: 'Checkbox',
          link: 'components/checkbox'
        },
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
        },
        {
          label: 'Radio Buttons',
          link: 'components/radio'
        }
      ]
    },
    {
      label: 'Layout',
      links: [
        {
          label: 'Alerts',
          link: 'components/alerts'
        },
        {
          label: 'Button',
          link: 'components/button'
        },
        {
          label: 'Dialog',
          link: 'components/dialog'
        },
        {
          label: 'Tabs',
          link: 'components/tabs'
        }
      ]
    },
    {
      label: 'Miscellaneous',
      links: [
        {
          label: 'Chip',
          link: 'components/chip'
        },
        {
          label: 'Icons',
          link: 'components/icons'
        },
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