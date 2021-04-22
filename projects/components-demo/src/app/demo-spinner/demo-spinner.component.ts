import { Component } from '@angular/core';


@Component({
  selector: 'dp-demo-spinner',
  templateUrl: './demo-spinner.component.html',
  styleUrls: ['./demo-spinner.component.scss']
})
export class DemoSpinnerComponent {

  codeStyle = `<dp-spinner spinnerStyle="style1"></dp-spinner>`;
  codeSize = `<dp-spinner size="xs"></dp-spinner>`;
  codeColor = `<dp-spinner color="white"></dp-spinner>`;

  codeHTML = `<table>
    <tr>
      <th></th>
      <th>Style 1</th>
      <th>Style 2</th>
      <th>Style 3</th>
    </tr>
    <tr>
      <th>Extra Small</th>
      <td><dp-spinner size="xs" spinnerStyle="style1"></dp-spinner></td>
      <td><dp-spinner size="xs" spinnerStyle="style2"></dp-spinner></td>
      <td><dp-spinner size="xs" spinnerStyle="style3"></dp-spinner></td>
    </tr>
    <tr>
      <th>Small</th>
      <td><dp-spinner size="sm" spinnerStyle="style1"></dp-spinner></td>
      <td><dp-spinner size="sm" spinnerStyle="style2"></dp-spinner></td>
      <td><dp-spinner size="sm" spinnerStyle="style3"></dp-spinner></td>
    </tr>
    <tr>
      <th>Medium</th>
      <td><dp-spinner size="md" spinnerStyle="style1"></dp-spinner></td>
      <td><dp-spinner size="md" spinnerStyle="style2"></dp-spinner></td>
      <td><dp-spinner size="md" spinnerStyle="style3"></dp-spinner></td>
    </tr>
    <tr>
      <th>Large</th>
      <td><dp-spinner size="lg" spinnerStyle="style1"></dp-spinner></td>
      <td><dp-spinner size="lg" spinnerStyle="style2"></dp-spinner></td>
      <td><dp-spinner size="lg" spinnerStyle="style3"></dp-spinner></td>
    </tr>
  </table>`;
}
