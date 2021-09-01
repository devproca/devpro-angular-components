import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertDemoComponent } from './components/demos/alert/alert-demo.component';
import { ButtonDemoComponent } from './components/demos/button/button-demo.component';
import { CheckboxDemoComponent } from './components/demos/checkbox/checkbox-demo.component';
import { ChipDemoComponent } from './components/demos/chip/chip-demo.component';
import { DatePickerDemoComponent } from './components/demos/date-picker/date-picker-demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { DialogDemoComponent } from './components/demos/dialog/dialog-demo.component';
import { IconDemoComponent } from './components/demos/icon/icon-demo.component';
import { InputDemoComponent } from './components/demos/input/input-demo.component';
import { RadioDemoComponent } from './components/demos/radio/radio-demo.component';
import { SelectDemoComponent } from './components/demos/select/select-demo.component';
import { SpinnerDemoComponent } from './components/demos/spinner/spinner-demo.component';
import { TabDemoComponent } from './components/demos/tab/tab-demo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'components',
    component: DemosComponent,
    children: [
      {
        path: 'input',
        component: InputDemoComponent,
        data: { title: "Input" }
      },
      {
        path: 'select',
        component: SelectDemoComponent,
        data: { title: "Select" }
      },
      {
        path: 'button',
        component: ButtonDemoComponent,
        data: { title: "Button" }
      },
      {
        path: 'icons',
        component: IconDemoComponent,
        data: { title: "Icons" }
      },
      {
        path: 'spinner',
        component: SpinnerDemoComponent,
        data: { title: "Spinner" }
      },
      {
        path: 'date-picker',
        component: DatePickerDemoComponent,
        data: { title: "Date Picker" }
      },
      {
        path: 'tabs',
        component: TabDemoComponent,
        data: { title: "Tabs" }
      },
      {
        path: 'checkbox',
        component: CheckboxDemoComponent,
        data: { title: "Checkbox" }
      },
      {
        path: 'alerts',
        component: AlertDemoComponent,
        data: { title: "Alerts" }
      },
      {
        path: 'chip',
        component: ChipDemoComponent,
        data: { title: "Chip" }
      },
      {
        path: 'radio',
        component: RadioDemoComponent,
        data: { title: "Radio Buttons" }
      },
      {
        path: 'dialog',
        component: DialogDemoComponent,
        data: { title: "Dialog" }
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
