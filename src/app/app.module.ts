import { BrowserModule } from '@angular/platform-browser';
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

// native
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
  encapsulation: ViewEncapsulation.Native
})
class NativeEncapsulation {
}

@Component({
  selector: 'app-root',
  template: `
  <inline-style></inline-style>
  <external-style></external-style>
  <native-encapsulation></native-encapsulation>
  `
})
export class AppComponent {
}


@NgModule({
  declarations: [
    AppComponent,
    InlineStyle,
    ExternalStyle,
    NativeEncapsulation
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
