import {
  Component,
  Input,
  Directive,
  ElementRef
} from '@angular/core';

// 使用ng-content指令，将宿主元素节点原来的子节点包含到视图中的指定部分
@Component({
  selector: '[message]',
  host: {
    'class': 'ui message'
  },
  template: `
    <div class="header">
      {{ header }}
    </div>
    <p>
      <ng-content></ng-content>
    </p>
  `
})
export class Message {
  @Input() header: string;

  ngOnInit(): void {
    console.log('header', this.header);
  }
}

@Component({
  selector: 'content-projection-sample-app',
  template: `
  <div message header="My Message">
    This is the content of the message
  </div>
  `
})
export class ContentProjectionSampleApp {
}


