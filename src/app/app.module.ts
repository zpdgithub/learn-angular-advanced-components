import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  template: `
  <inline-style></inline-style>
  <external-style></external-style>
  `
})
export class AppComponent {
}


@NgModule({
  declarations: [
    AppComponent,
    InlineStyle,
    ExternalStyle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
