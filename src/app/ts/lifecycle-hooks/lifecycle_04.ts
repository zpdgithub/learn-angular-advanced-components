import {
  NgModule,
  Component,
  Input,
  SimpleChange,
  IterableDiffers,
  KeyValueDiffers,
  EventEmitter,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'afters',
  template: `
  <div class="ui label">
    <i class="list icon"></i> Counter: {{ counter }}
  </div>

  <button class="ui primary button" (click)="inc()">
    Increment
  </button>
  `
})
class AftersCmp implements OnInit, OnDestroy, DoCheck,
                           OnChanges, AfterContentInit,
                           AfterContentChecked, AfterViewInit,
                           AfterViewChecked {
  counter: number;

  constructor() {
    console.log('AfterCmp --------- [constructor]');
    this.counter = 1;
  }
  inc() {
    console.log('AfterCmp --------- [counter]');
    this.counter += 1;
  }
  ngOnInit() {
    console.log('AfterCmp - OnInit');
  }
  ngOnDestroy() {
    console.log('AfterCmp - OnDestroy');
  }
  ngDoCheck() {
    console.log('AfterCmp - DoCheck');
  }
  ngOnChanges() {
    console.log('AfterCmp - OnChanges');
  }
  ngAfterContentInit() {
    console.log('AfterCmp - AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterCmp - AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterCmp - AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterCmp - AfterViewChecked');
  }
}

@Component({
  selector: 'lifecycle-sample-app',
  template: `
  <h4 class="ui horizontal divider header">
    AfterContentInit, AfterViewInit, AfterContentChecked and AfterViewChecked
  </h4>

  <afters *ngIf="displayAfters"></afters>
  <button class="ui primary button" (click)="toggleAfters()">
    Toggle
  </button>
  `
})
export class LifecycleSampleApp4 {
  displayAfters: boolean;

  constructor() {
    // AfterXXX
    this.displayAfters = true;
  }
  toggleAfters(): void {
    this.displayAfters = !this.displayAfters;
  }
}

@NgModule({
  declarations: [
    LifecycleSampleApp4,
    AftersCmp
  ],
  imports: [ CommonModule ],
  exports: [ LifecycleSampleApp4 ]
})
export class LifecycleSampleApp4Module {}



