import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDemoComponent } from './components/demos/button-demo/button-demo.component';
import { CardDemoComponent } from './components/demos/card-demo/card-demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { InputDemoComponent } from './components/demos/input/input-demo.component';
import { SelectDemoComponent } from './components/demos/select-demo/select-demo.component';
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
        path: 'card',
        component: CardDemoComponent
      },
      {
        path: 'button',
        component: ButtonDemoComponent
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