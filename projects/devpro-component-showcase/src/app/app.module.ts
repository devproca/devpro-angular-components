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
import { IconDemoComponent } from './components/demos/icon/icon-demo.component';
import { SpinnerDemoComponent } from './components/demos/spinner/spinner-demo.component';
import { DatePickerDemoComponent } from './components/demos/date-picker/date-picker-demo.component';
import { IconFeatureDemoComponent } from './components/demos/icon/icon-demo-feature.component';
import { TabDemoComponent } from './components/demos/tab/tab-demo.component';
import { TabDemoBasicComponent } from './components/demos/tab/tab-demo-basic.component';
import { ButtonDemoStylesComponent } from './components/demos/button/button-demo-styles.component';
import { SelectDemoBasicComponent } from './components/demos/select/select-demo-basic.component';
import { DatePickerDemoBasicComponent } from './components/demos/date-picker/date-picker-demo-basic.component';
import { SpinnerDemoBasicComponent } from './components/demos/spinner/spinner-demo-basic.component';

const DEMO_COMPONENTS = [
  InputDemoComponent,
  SelectDemoComponent,
  SelectDemoBasicComponent,
  DemosComponent,
  ButtonDemoComponent,
  ButtonDemoStylesComponent,
  InputDemoBasicComponent,
  IconDemoComponent,
  SpinnerDemoComponent,
  SpinnerDemoBasicComponent,
  DatePickerDemoComponent,
  DatePickerDemoBasicComponent,
  TabDemoComponent,
  TabDemoBasicComponent,
  DatePickerDemoComponent,
  IconFeatureDemoComponent
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
