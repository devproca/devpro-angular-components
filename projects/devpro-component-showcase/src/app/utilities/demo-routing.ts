import { CardDemoComponent } from "../components/demos/card-demo/card-demo.component";
import { InputDemoComponent } from "../components/demos/input-demo/input-demo.component";
import { SelectDemoComponent } from "../components/demos/select-demo/select-demo.component";
import { DemoRoute } from "../models/demo-route";
import { DemoRouteGroup } from "../models/demo-route-group";


export class DemoRouting {

  public static get groups(): DemoRouteGroup[] {
    return [
      {
        label: 'Form',
        links: [
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
      }
    ]
  }

  public static get routes(): DemoRoute[] {
    return this.groups.map(g => g.links).reduce((a, b) => [...a, ...b], []);
  }

}