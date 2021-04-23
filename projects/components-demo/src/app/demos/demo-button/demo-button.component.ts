import { Component } from '@angular/core';


@Component({
  selector: 'demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent {

  codeColor = `<dp-button color="primary">Button Label</dp-button>`;
  codeStroked = `<dp-button stroked="true">Button Label</dp-button>`;
  codeRaised = `<dp-button raised="true">Button Label</dp-button>`;
  codeDisabled = `<dp-button disabled="true">Button Label</dp-button>`;

  codeHTML = `<h4>Buttons</h4>
<table>
  <tr>
    <th></th>
    <th>Basic</th>
    <th class="primary">Primary</th>
    <th class="secondary">Secondary</th>
    <th class="disabled">Disabled</th>
  </tr>
  <tr>
    <td class="raised">Raised</td>
    <td><dp-button raised="true">Basic</dp-button></td>
    <td><dp-button raised="true" color="primary">Primary</dp-button></td>
    <td><dp-button raised="true" color="secondary">Secondary</dp-button></td>
    <td><dp-button raised="true" disabled="true">Disabled</dp-button></td>
  </tr>
  <tr>
    <td>Flat</td>
    <td><dp-button>Basic</dp-button></td>
    <td><dp-button color="primary">Primary</dp-button></td>
    <td><dp-button color="secondary">Secondary</dp-button></td>
    <td><dp-button disabled="true" color="primary">Disabled</dp-button></td>
  </tr>
  <tr>
    <td class="stroked">Stroked</td>
    <td><dp-button stroked="true">Basic</dp-button></td>
    <td><dp-button stroked="true" color="primary">Primary</dp-button></td>
    <td><dp-button stroked="true" color="secondary">Secondary</dp-button></td>
    <td><dp-button stroked="true" disabled="true" color="secondary">Disabled</dp-button></td>
  </tr>
</table>

<div class="btn-group">
  <h4>SVGs Within Buttons</h4>
  <div class="btn-example">
    <dp-button color="primary">
      <dp-svg class="svg-example" iconName="info"></dp-svg>
    </dp-button>

    <dp-button color="primary">
      <div class="svg-text-example">
        <dp-svg iconName="menu"></dp-svg>
        <div>SVG and Text</div>
      </div>
    </dp-button>
  </div>

  <div class="btn-group">
    <h4>Spinners Within Buttons</h4>
    <div>
      <dp-button color="primary">
        <dp-spinner size="xs" color="white"></dp-spinner>
      </dp-button>
      <dp-button color="primary">
        <dp-spinner size="xs" spinnerStyle="style2" color="white"></dp-spinner>
      </dp-button>
      <dp-button color="primary">
        <dp-spinner size="xs" spinnerStyle="style3" color="white"></dp-spinner>
      </dp-button>
    </div>
    <div>
      <dp-button color="secondary">
        <dp-spinner size="xs" color="white"></dp-spinner>
      </dp-button>
      <dp-button color="secondary">
        <dp-spinner size="xs" color="white" spinnerStyle="style2"></dp-spinner>
      </dp-button>
      <dp-button color="secondary">
        <dp-spinner size="xs" color="white" spinnerStyle="style3"></dp-spinner>
      </dp-button>
    </div>
  </div>
</div>`;
}
