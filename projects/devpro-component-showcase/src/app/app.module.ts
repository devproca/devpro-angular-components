import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevproComponentsModule } from '@dev-pro/devpro-component-library/src/lib/devpro-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDemoComponent } from './components/demos/button/button-demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { InputDemoComponent } from './components/demos/input/input-demo.component';
import { SelectDemoComponent } from './components/demos/select/select-demo.component';
import { FeaturePreviewComponent } from './components/feature-preview/feature-preview.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { PrismPipe } from './pipes/prism.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { InputDemoBasicComponent } from './components/demos/input/input-demo-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerDemoComponent } from './components/demos/spinner/spinner-demo.component';
import { CalendarDemoComponent } from './components/demos/calendar/calendar-demo.component';
import { DatePickerDemoComponent } from './components/demos/date-picker/date-picker-demo.component';

const DEMO_COMPONENTS = [
  InputDemoComponent,
  SelectDemoComponent,
  DemosComponent,
  ButtonDemoComponent,
  InputDemoBasicComponent,
  SpinnerDemoComponent,
  CalendarDemoComponent,
  DatePickerDemoComponent
];
@NgModule({
  declarations: [
    DEMO_COMPONENTS,
    AppComponent,
    SideNavComponent,
    HomeComponent,
    TopNavComponent,
    FeaturePreviewComponent,
    PrismPipe,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DevproComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
