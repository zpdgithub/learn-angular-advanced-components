import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import {
  StyleSampleApp,
  StyleSampleAppModule,
} from './styling/styling';

import { ExampleDef } from './app/example';

import { IntroComponent } from './app/intro_component';


const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'Styling', name: 'Styling', path: 'styling', component: StyleSampleApp },
];
const routes: Routes = examples
  .map((example: ExampleDef) => ({
    path: example.path, component: example.component, pathMatch: 'full'
  }));

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
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
    StyleSampleAppModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
