import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

import {
  StyleSampleApp,
  StyleSampleAppModule,
} from './styling/styling';

import { ExampleDef } from './app/example';

import { IntroComponent } from './app/intro_component';

@Component({
  selector: 'app-root',
  template: `
  <style-sample-app></style-sample-app>
  `
})
export class AppComponent {
}


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    StyleSampleAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
