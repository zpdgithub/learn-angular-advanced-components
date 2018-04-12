import {
  NgModule,
  Component,
  QueryList,
  AfterContentInit,
  Input,
  ContentChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tab',
  template: `
  <div class="ui bottom attached tab segment"
       [class.active]="active">

    <ng-content></ng-content>

  </div>
  `
})
class Tab {
  @Input() title: string;
  active: boolean = false;
  name: string;
}

@Component({
  selector: 'tabset',
  template: `
  <div class="ui top attached tabular menu">
    <a *ngFor="let tab of tabs"
       class="item"
       [class.active]="tab.active"
       (click)="setActive(tab)">

      {{ tab.title }}

    </a>
  </div>
  <ng-content></ng-content>
  `
})
class Tabset implements AfterContentInit {  // 一旦子组件的内容初始化，就调用类的方法（ngAfterContentInit）
  @ContentChildren(Tab) tabs: QueryList<Tab>; // 同时使用QueryList和ContentChildren，将匹配查询的组件填充到QueryList，在应用状态变更时保持这些填充项的更新

  constructor() {
  }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: Tab) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
}
