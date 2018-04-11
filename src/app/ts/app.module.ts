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
import {
  SidebarComponent,
  SidebarItemComponent
} from './app/sidebar';

import { HostSampleApp1, HostSampleApp1Module } from './host/steps/host_01';
import { HostSampleApp2, HostSampleApp2Module } from './host/steps/host_02';


const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'Styling', name: 'Styling', path: 'styling', component: StyleSampleApp },
  { label: 'Modifying the Host (Step 1)', name: 'Host1', path: 'host-step-1', component: HostSampleApp1, dev: true },
  { label: 'Modifying the Host (Step 2)', name: 'Host2', path: 'host-step-2', component: HostSampleApp2, dev: true },
];
const routes: Routes = examples
  .map((example: ExampleDef) => ({
    path: example.path, component: example.component, pathMatch: 'full'
  }));

@Component({
  selector: 'app-root',
  template: `
  <sidebar [items]="examples"></sidebar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  examples: ExampleDef[];

  constructor() {
    this.examples = examples;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    StyleSampleAppModule,
    HostSampleApp1Module,
    HostSampleApp2Module,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
