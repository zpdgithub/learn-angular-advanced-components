import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

// 内部样式
@Component({
  selector: 'inline-style',
  styles: [`
  .highlight {
    border: 2px solid red;
    background-color: yellow;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    Inline style example
  </h4>

  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `
})
class InlineStyle {
}

// 外部样式
@Component({
  selector: 'external-style',
  styleUrls: ['./external.css'],
  template: `
  <h4 class="ui horizontal divider header">
    External style example
  </h4>

  <div class="highlight">
    This uses component <code>styleUrls</code>
    property
  </div>
  `
})
class ExternalStyle {
}

// Shadow DOM组件，将元素进行封装
@Component({
  selector: `native-encapsulation`,
  styles: [`
  .highlight {
    text-align: center;
    border: 2px solid black;
    border-radius: 3px;
    margin-bottom: 20px;
  }`],
  template: `
  <h4 class="ui horizontal divider header">
    Native encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.Native</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.Native // Shadow Dom
})
class NativeEncapsulation {
}

// ViewEncapsulation.None组件，不进行封装
@Component({
  selector: `no-encapsulation`,
  styles: [`
  .highlight {
    border: 2px dashed red;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    No encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.None</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.None // 不封装，允许样式渗透给页面的其他元素
})
class NoEncapsulation {
}


@Component({
  selector: 'style-sample-app',
  template: `
      <inline-style></inline-style>
      <external-style></external-style>
      <native-encapsulation></native-encapsulation>
      <no-encapsulation></no-encapsulation>
    `
})
export class StyleSampleApp {
}


const components = [
  StyleSampleApp,
  InlineStyle,
  ExternalStyle,
  NativeEncapsulation,
  NoEncapsulation
];

@NgModule({
  declarations: components,
  exports: components
})
export class StyleSampleAppModule {
}
