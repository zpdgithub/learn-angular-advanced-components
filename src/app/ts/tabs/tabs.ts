import {
  NgModule,
  Component,
  Input
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
