import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevproComponentsModule } from '@devpro/devpro-component-library/src/lib/devpro-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDemoComponent } from './components/demos/button-demo/button-demo.component';
import { CardDemoComponent } from './components/demos/card-demo/card-demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { InputDemoComponent } from './components/demos/input-demo/input-demo.component';
import { SelectDemoComponent } from './components/demos/select-demo/select-demo.component';
import { FeaturePreviewComponent } from './components/feature-preview/feature-preview.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

const DEMO_COMPONENTS = [
  InputDemoComponent,
  SelectDemoComponent,
  DemosComponent,
  CardDemoComponent,
  ButtonDemoComponent
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    TopNavComponent,
    DEMO_COMPONENTS,
    FeaturePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DevproComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
