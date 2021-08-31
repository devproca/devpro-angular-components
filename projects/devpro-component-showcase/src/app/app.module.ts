import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevproComponentsModule } from '@dev-pro/devpro-component-library/src/lib/devpro-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDemoStylesComponent } from './components/demos/button/button-demo-styles.component';
import { ButtonDemoComponent } from './components/demos/button/button-demo.component';
import { CheckboxDemoBasicComponent } from './components/demos/checkbox/checkbox-demo-basic.component';
import { CheckboxDemoComponent } from './components/demos/checkbox/checkbox-demo.component';
import { DatePickerDemoBasicComponent } from './components/demos/date-picker/date-picker-demo-basic.component';
import { DatePickerDemoComponent } from './components/demos/date-picker/date-picker-demo.component';
import { DemosComponent } from './components/demos/demos.component';
import { IconDemoBasicComponent } from './components/demos/icon/icon-demo-basic.component';
import { IconDemoSizesComponent } from './components/demos/icon/icon-demo-sizes.component';
import { IconDemoComponent } from './components/demos/icon/icon-demo.component';
import { InputDemoBasicComponent } from './components/demos/input/input-demo-basic.component';
import { InputDemoComponent } from './components/demos/input/input-demo.component';
import { SelectDemoBasicComponent } from './components/demos/select/select-demo-basic.component';
import { SelectDemoComponent } from './components/demos/select/select-demo.component';
import { SpinnerDemoBasicComponent } from './components/demos/spinner/spinner-demo-basic.component';
import { SpinnerDemoComponent } from './components/demos/spinner/spinner-demo.component';
import { TabDemoBasicComponent } from './components/demos/tab/tab-demo-basic.component';
import { TabDemoComponent } from './components/demos/tab/tab-demo.component';
import { FeaturePreviewComponent } from './components/feature-preview/feature-preview.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { PrismPipe } from './pipes/prism.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { AlertDemoComponent } from './components/demos/alert/alert-demo.component';
import { AlertDemoSingleComponent } from './components/demos/alert/alert-demo-single.component';
import { AlertsDemoMultipleComponent } from './components/demos/alerts/alerts-demo-multiple.component';
import { AlertsDemoComponent } from './components/demos/alerts/alerts-demo.component';


const DEMO_COMPONENTS = [
  InputDemoComponent,
  SelectDemoComponent,
  SelectDemoBasicComponent,
  DemosComponent,
  ButtonDemoComponent,
  ButtonDemoStylesComponent,
  InputDemoBasicComponent,
  IconDemoComponent,
  IconDemoBasicComponent,
  SpinnerDemoComponent,
  SpinnerDemoBasicComponent,
  DatePickerDemoComponent,
  DatePickerDemoBasicComponent,
  TabDemoComponent,
  TabDemoBasicComponent,
  DatePickerDemoComponent,
  AlertDemoComponent,
  AlertDemoSingleComponent,
  AlertsDemoComponent,
  AlertsDemoMultipleComponent
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
    SafeHtmlPipe,
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
