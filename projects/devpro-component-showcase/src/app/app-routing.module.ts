import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDemoComponent } from './components/demos/button/button-demo.component';
import { DatePickerDemoComponent } from './components/demos/date-picker/date-picker-demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { IconDemoComponent } from './components/demos/icon/icon-demo.component';
import { InputDemoComponent } from './components/demos/input/input-demo.component';
import { SelectDemoComponent } from './components/demos/select/select-demo.component';
import { SpinnerDemoComponent } from './components/demos/spinner/spinner-demo.component';
import { SlideToggleDemoComponent } from './components/demos/slide-toggle/slide-toggle-demo.component';
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
        component: SelectDemoComponent
      },
      {
        path: 'button',
        component: ButtonDemoComponent
      },
      {
        path: 'slide-toggle',
        component: SlideToggleDemoComponent
      },
      {
        path: 'icons',
        component: IconDemoComponent
      },
      {
        path: 'spinner',
        component: SpinnerDemoComponent
      },
      {
        path: 'date-picker',
        component: DatePickerDemoComponent
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
