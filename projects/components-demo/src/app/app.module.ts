import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { DevproComponentsModule } from 'devpro-components';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { DemoAlertComponent } from './demos/demo-alert/demo-alert.component';
import { DemoButtonComponent } from './demos/demo-button/demo-button.component';
import { DemoCheckboxComponent } from './demos/demo-checkbox/demo-checkbox.component';
import { DemoChipComponent } from './demos/demo-chip/demo-chip.component';
import { DemoDatePickerComponent } from './demos/demo-date-picker/demo-date-picker.component';
import { DemoDialogComponent } from './demos/demo-dialog/demo-dialog.component';
import { DemoMultiselectComponent } from './demos/demo-multiselect/demo-multiselect.component';
import { DemoOverflowMenuComponent } from './demos/demo-overflow-menu/demo-overflow-menu.component';
import { DemoRadioButtonComponent } from './demos/demo-radio-button/demo-radio-button.component';
import { DemoSelectComponent } from './demos/demo-select/demo-select.component';
import { DemoSidenavComponent } from './demos/demo-sidenav/demo-sidenav.component';
import { DemoSlideToggleComponent } from './demos/demo-slide-toggle/demo-slide-toggle.component';
import { DemoSpinnerComponent } from './demos/demo-spinner/demo-spinner.component';
import { DemoTabsComponent } from './demos/demo-tabs/demo-tabs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RandomComponentComponent } from './demos/demo-dialog/random-component/random-component.component';
import { SetupComponent } from './setup/setup.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SocialsComponent } from './navigation/socials/socials.component';


@NgModule({
  declarations: [
    AppComponent,
    CodeblockComponent,
    DemoAlertComponent,
    DemoButtonComponent,
    DemoCheckboxComponent,
    DemoChipComponent,
    DemoDatePickerComponent,
    DemoDialogComponent,
    DemoMultiselectComponent,
    DemoOverflowMenuComponent,
    DemoRadioButtonComponent,
    DemoSelectComponent,
    DemoSidenavComponent,
    DemoSlideToggleComponent,
    DemoSpinnerComponent,
    DemoTabsComponent,
    NavigationComponent,
    RandomComponentComponent,
    SetupComponent,
    SidenavComponent,
    FooterComponent,
    SocialsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DevproComponentsModule,
    ReactiveFormsModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      // useValue: { fullLibraryLoader: () => import('highlight.js') } // All Languages
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
