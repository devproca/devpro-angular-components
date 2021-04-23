import { Component } from '@angular/core';


@Component({
  selector: 'dp-demo-overflow-menu',
  templateUrl: './demo-overflow-menu.component.html',
  styleUrls: ['./demo-overflow-menu.component.scss']
})
export class DemoOverflowMenuComponent {

  options = [
    {
      label: 'View',
      description: 'This is an option label example for viewing.',
      click: () => {
        console.log('View Clicked');
      }
    },
    {
      label: 'Edit',
      description: 'This is an option label example for editing.',
      click: () => {
        console.log('Edit Clicked');
      }
    },
    {
      label: 'Delete',
      description: 'This is an option label example for deleting.',
      click: () => {
        console.log('Delete Clicked');
      }
    }
  ];



  codeOptionsHTML = `<dp-overflow-menu [options]="options"></dp-overflow-menu>`;
  codeOptions = `options = [
  {
    label: 'Option 1',
    click: () => { doSomething() }
  },
  ...
];`;

  codeOptionsTemplatedHTML = `<ng-template #menuTemplate let-option>
  <div>
    <div>{{ option.label }}</div>
    <div>{{ option.labelDescription }}</div>
  </div>
</ng-template>`;

  codeOptionsTemplated = `options = [
  {
    label: 'Option 1',
    labelDescription: 'This is a description for option 1.',
    click: () => { doSomething() }
  },
  ...
];`;

  codeHTML = `<h4>Basic Options Menu</h4>
<dp-overflow-menu [options]="options"></dp-overflow-menu>

<h4>Template Menu</h4>
<dp-overflow-menu [options]="options" [template]="itemTemplate"></dp-overflow-menu>

...

<ng-template #itemTemplate let-option>
  <div>
    <div>{{ option.label }}</div>
    <div class="template-desc">{{ option.description }}</div>
  </div>
</ng-template>`;

  codeTS = `export class DemoOverflowMenuComponent {

  options = [
    {
      label: 'View',
      description: 'This is an option label example for viewing.',
      click: () => {
        console.log('View Clicked');
      }
    },
    {
      label: 'Edit',
      description: 'This is an option label example for editing.',
      click: () => {
        console.log('Edit Clicked');
      }
    },
    {
      label: 'Delete',
      description: 'This is an option label example for deleting.',
      click: () => {
        console.log('Delete Clicked');
      }
    }
  ];
}`;

  codeCSS = `.template-desc {
  color: rgba(107, 114, 128, 1);
  font-size: 0.75rem;
  line-height: 1rem;
}`;

}
