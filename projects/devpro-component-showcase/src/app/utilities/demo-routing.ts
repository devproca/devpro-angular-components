import { DemoRoute } from "../models/demo-route";
import { DemoRouteGroup } from "../models/demo-route-group";


export class DemoRouting {

  public static get groups(): DemoRouteGroup[] {
    return [
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
            label: 'Date Picker',
            link: 'components/date-picker'
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
            label: 'Slide Toggle',
            link: 'slide-toggle'
          },
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
            link: 'spinner'
          },
        ]
      }
    ]
  }

  public static get routes(): DemoRoute[] {
    return this.groups.map(g => g.links).reduce((a, b) => [...a, ...b], []);
  }

}