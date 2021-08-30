import { DemoRoute } from "../models/demo-route";
import { DemoRouteGroup } from "../models/demo-route-group";


export class DemoRouting {

  public static get groups(): DemoRouteGroup[] {
    return [
      {
        label: 'Form',
        links: [
          {
            label: 'Date Picker',
            link: 'date-picker'
          },
          {
            label: 'Input',
            link: 'input'
          },
          {
            label: 'Select',
            link: 'select'
          },
        ]
      },
      {
        label: 'Layout',
        links: [
          {
            label: 'Button',
            link: 'button'
          },
          {
            label: 'Card',
            link: 'card'
          }
        ]
      },
      {
        label: 'Miscellaneous',
        links: [
          {
            label: 'Calendar',
            link: 'calendar'
          },
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