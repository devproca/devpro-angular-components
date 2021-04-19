/*
 * Public API Surface of devpro-components.
 */

import '@angular/localize/init';

export * from './lib/devpro-components.module';

// Alert
export { AlertComponent } from './lib/alert/alert.component';
export { AlertsComponent } from './lib/alert/alerts/alerts.component';
export { AlertService } from './lib/alert/alert.service';

// Button
export { ButtonComponent } from './lib/button/button.component';


// Calendar
export { CalendarComponent } from './lib/calendar/calendar.component';

// Checkbox
export { CheckboxComponent } from './lib/checkbox/checkbox.component';
export { CheckboxGroupComponent } from './lib/checkbox/checkbox-group/checkbox-group.component';
export { CheckboxService } from './lib/checkbox/checkbox.service';

// Chip
export { ChipComponent } from './lib/chip/chip.component';

// Date Picker
export { DatePickerComponent } from './lib/date-picker/date-picker.component';

// Dialog Modal
export { DialogComponent} from './lib/dialog/dialog.component';
export { DialogBodyComponent } from './lib/dialog/dialog-body/dialog-body.component';
export { DialogFooterComponent } from './lib/dialog/dialog-footer/dialog-footer.component';
export { DialogHeaderComponent } from './lib/dialog/dialog-header/dialog-header.component';
export { DialogService } from './lib/dialog/dialog.service';
export { DialogConfig } from './lib/dialog/dialog-config.model';
export { DialogInjector } from './lib/dialog/dialog.injector';
export { DialogRef } from './lib/dialog/dialog.ref';

// Overflow Menu
export * from './lib/overflow-menu/overflow-menu.component';

// Popper
export { PopperComponent } from './lib/popper/popper.component';

// Radio Button
export { RadioButtonComponent } from './lib/radio-button/radio-button.component';
export { RadioGroupComponent } from './lib/radio-button/radio-group/radio-group.component';
export { RadioButtonService } from './lib/radio-button/radio-button.service';

// Select
export * from './lib/select/select.component';
export { ScrollToActiveDirective } from './lib/select/scroll-to-active.directive';

// Side Navigation
export { SidenavComponent } from './lib/sidenav/sidenav.component';
export { SidenavService } from './lib/sidenav/sidenav.service';
export { SidenavHeaderComponent } from './lib/sidenav/sidenav-header/sidenav-header.component';
export { SidenavContentComponent } from './lib/sidenav/sidenav-content/sidenav-content.component';

// Slide Toggle
export { SlideToggleComponent } from './lib/slide-toggle/slide-toggle.component';
export { SlideGroupComponent } from './lib/slide-toggle/slide-group/slide-group.component';
export { SlideToggleService } from './lib/slide-toggle/slide-toggle.service';

// Spinner
export { SpinnerComponent } from './lib/spinner/spinner.component';

// SVG(s)
export { SvgComponent } from './lib/svg/svg.component';
export { SvgButtonComponent } from './lib/svg-button/svg-button.component';

// Tabs
export { TabComponent } from './lib/tab/tab.component';
export { TabGroupComponent } from './lib/tab/tab-group/tab-group.component';
