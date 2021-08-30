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
            link: 'date-picker'
          },
          {
            label: 'Input',
            link: 'components/input'
          },
          {
            label: 'Select',
            link: 'components/select'
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
<<<<<<< HEAD
=======
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
>>>>>>> 8773b69... WIP on calendar/ datepicker
    ]
  }

  public static get routes(): DemoRoute[] {
    return this.groups.map(g => g.links).reduce((a, b) => [...a, ...b], []);
  }

}