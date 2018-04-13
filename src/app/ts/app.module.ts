import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

import { FormsModule } from '@angular/forms';

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


import { ExampleDef } from './app/example';

import { SidebarComponent, SidebarItemComponent } from './app/sidebar';

import { IntroComponent } from './app/intro_component';

import { StyleSampleApp, StyleSampleAppModule } from './styling/styling';

import { HostSampleApp1, HostSampleApp1Module } from './host/steps/host_01';
import { HostSampleApp2, HostSampleApp2Module } from './host/steps/host_02';
import { HostSampleApp3, HostSampleApp3Module } from './host/steps/host_03';
import { HostSampleApp4, HostSampleApp4Module } from './host/steps/host_04';

import { ContentProjectionSampleApp, Message } from './content-projection/content-projection';

import { TabsSampleApp, TabsSampleAppModule } from './tabs/tabs';

import { LifecycleSampleApp1, LifecycleSampleApp1Module } from './lifecycle-hooks/lifecycle_01';
import { LifecycleSampleApp2, LifecycleSampleApp2Module } from './lifecycle-hooks/lifecycle_02';
import { LifecycleSampleApp3, LifecycleSampleApp3Module } from './lifecycle-hooks/lifecycle_03';
import { LifecycleSampleApp4, LifecycleSampleApp4Module } from './lifecycle-hooks/lifecycle_04';

import { IfTemplateSampleApp, IfTemplateSampleAppModule } from './templates/if';
import { ForTemplateSampleApp, ForTemplateSampleAppModule } from './templates/for';


import {
  OnPushChangeDetectionSampleApp,
  DefaultCmp,
  OnPushCmp
} from './change-detection/onpush';

const examples: ExampleDef[] = [  // tslint:disable:max-line-length
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'Styling', name: 'Styling', path: 'styling', component: StyleSampleApp },
  { label: 'Modifying the Host (Step 1)', name: 'Host1', path: 'host-step-1', component: HostSampleApp1, dev: true },
  { label: 'Modifying the Host (Step 2)', name: 'Host2', path: 'host-step-2', component: HostSampleApp2, dev: true },
  { label: 'Modifying the Host (Step 3)', name: 'Host3', path: 'host-step-3', component: HostSampleApp3, dev: true },
  { label: 'Modifying the Host (Step 4)', name: 'Host4', path: 'host-step-4', component: HostSampleApp4, dev: true },
  { label: 'Content Projection', name: 'ContentProjection', path: 'content-projection', component: ContentProjectionSampleApp },
  { label: 'Tabs - Component Querying', name: 'Tabs', path: 'tabs', component: TabsSampleApp },
  { label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1', path: 'lifecycle-hooks-1', component: LifecycleSampleApp1 },
  { label: 'Lifecycle 2 - OnChanges', name: 'Lifecycle2', path: 'lifecycle-hooks-2', component: LifecycleSampleApp2 },
  { label: 'Lifecycle 3 - Differs', name: 'Lifecycle3', path: 'lifecycle-hooks-3', component: LifecycleSampleApp3 },
  { label: 'Lifecycle 4 - Full', name: 'Lifecycle4', path: 'lifecycle-hooks-4', component: LifecycleSampleApp4 },
  { label: 'ngBookIf', name: 'NgBookIf', path: 'ng-book-if', component: IfTemplateSampleApp },
  { label: 'ngBookFor', name: 'NgBookFor', path: 'ng-book-for', component: ForTemplateSampleApp },
  { label: 'Change Detection - OnPush', name: 'ChangeDetectionOnPush', path: 'change-detection-onpush', component: OnPushChangeDetectionSampleApp },
]; // tslint:enable:max-line-length

const routes: Routes = examples // TOCHECK 编译时报错：ERROR in Cannot read property 'loadChildren' of undefined
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
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    ContentProjectionSampleApp,
    Message,
    OnPushChangeDetectionSampleApp,
    DefaultCmp,
    OnPushCmp,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StyleSampleAppModule,
    HostSampleApp1Module,
    HostSampleApp2Module,
    HostSampleApp3Module,
    HostSampleApp4Module,
    TabsSampleAppModule,
    LifecycleSampleApp1Module,
    LifecycleSampleApp2Module,
    LifecycleSampleApp3Module,
    LifecycleSampleApp4Module,
    IfTemplateSampleAppModule,
    ForTemplateSampleAppModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
