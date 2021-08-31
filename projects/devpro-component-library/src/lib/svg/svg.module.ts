import { NgModule, Provider } from "@angular/core";
import { AngleLeftIconComponent } from "./icons/angle-left-icon.component";
import { SvgComponent } from "./svg.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { DP_SVG } from "./svg.token";
import { CalendarIconComponent } from "./icons/calendar-icon.component";
import { AngleDownIconComponent } from "./icons/angle-down-icon.component";
import { AngleRightIconComponent } from "./icons/angle-right-icon.component";
import { CheckIconComponent } from "./icons/check-icon.component";
import { CloneIconComponent } from "./icons/clone-icon.component";
import { CodeIconComponent } from "./icons/code-icon.component";
import { EllipsisVIconComponent } from "./icons/ellipsis-v-icon.component";
import { ExclamationIconComponent } from "./icons/exclamation-icon.component";
import { EyeIconComponent } from "./icons/eye-icon.component";
import { GithubIconComponent } from "./icons/github-icon.component";
import { InfoIconComponent } from "./icons/info-icon.component";
import { LinkedinIconComponent } from "./icons/linkedin-icon.component";
import { MenuIconComponent } from "./icons/menu-icon.component";
import { TerminalIconComponent } from "./icons/terminal-icon.component";
import { TimesIconComponent } from "./icons/times-icon.component";
import { TwitterIconComponent } from "./icons/twitter-icon.component";

const SVG_COMPONENTS = [
  AngleRightIconComponent,
  AngleLeftIconComponent,
  AngleDownIconComponent,
  CalendarIconComponent,
  CheckIconComponent,
  CloneIconComponent,
  CodeIconComponent,
  EllipsisVIconComponent,
  ExclamationIconComponent,
  EyeIconComponent,
  GithubIconComponent,
  InfoIconComponent,
  LinkedinIconComponent,
  MenuIconComponent,
  TerminalIconComponent,
  TimesIconComponent,
  TwitterIconComponent
]
@NgModule({
  declarations: [
    SVG_COMPONENTS,
    SvgComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    SvgComponent
  ],
  providers: SVG_COMPONENTS.map(s => {
    return { provide: DP_SVG, multi: true, useValue: { name: s.tag, component: s } } as Provider;
  }) as Provider[]
})
export class SvgModule {
}
