import {
  NgModule,
  Component,
  Input,
  Directive,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[ngBookIf]'
})
class NgBookIf {
  constructor(private viewContainer: ViewContainerRef,  // 视图容器
    private template: TemplateRef<any>) { } // 模板

  @Input() set ngBookIf(condition) {  // 设置器
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template); // 添加指令模板
    } else {
      this.viewContainer.clear(); // 删除视图容器中的所有内容
    }
  }
}

@Component({
  selector: 'template-sample-app',
  template: `
  <button class="ui primary button" (click)="toggle()">
    Toggle
  </button>

  <div *ngBookIf="display">
    The message is displayed
  </div>

  `
})
export class IfTemplateSampleApp {
  display: boolean;

  constructor() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }
}

@NgModule({
  declarations: [
    IfTemplateSampleApp,
    NgBookIf
  ],
  exports: [IfTemplateSampleApp]
})
export class IfTemplateSampleAppModule { }


