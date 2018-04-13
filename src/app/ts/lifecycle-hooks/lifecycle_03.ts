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
  OnChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'do-check-item',
  outputs: ['onRemove'],
  template: `
  <div class="ui feed">
    <div class="event">
      <div class="label" *ngIf="comment.author">
        <img src="/app/images/avatars/{{comment.author.toLowerCase()}}.jpg">
      </div>
      <div class="content">
        <div class="summary">
          <a class="user">
            {{comment.author}}
          </a> posted a comment
          <div class="date">
            1 Hour Ago
          </div>
        </div>
        <div class="extra text">
          {{comment.comment}}
        </div>
        <div class="meta">
          <a class="trash" (click)="remove()">
            <i class="trash icon"></i> Remove
          </a>
          <a class="trash" (click)="clear()">
            <i class="eraser icon"></i> Clear
          </a>
          <a class="like" (click)="like()">
            <i class="like icon"></i> {{comment.likes}} Likes
          </a>
        </div>
      </div>
    </div>
  </div>
  `
})
class DoCheckItem implements DoCheck {
  @Input() comment: any;
  onRemove: EventEmitter<any>;
  differ: any;

  constructor(differs: KeyValueDiffers) { // 接收一个KeyValueDiffers的实例
    // this.differ = differs.find([]).create(null);  // 创建一个键值对differ的实例
    this.differ = differs.find([]).create();  // TOCHECK
    this.onRemove = new EventEmitter();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment); // 检测变更

    if (changes) {
      changes.forEachAddedItem(r => this.logChange('added', r));
      changes.forEachRemovedItem(r => this.logChange('removed', r));
      changes.forEachChangedItem(r => this.logChange('changed', r));
    }
  }

  logChange(action, r) {
    if (action === 'changed') {
      console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
    }
    if (action === 'added') {
      console.log(action, r.key, 'with', r.currentValue);
    }
    if (action === 'removed') {
      console.log(action, r.key, '(was ' + r.previousValue + ')');
    }
  }

  remove(): void {
    this.onRemove.emit(this.comment);
  }

  clear(): void {
    delete this.comment.comment;
  }

  like(): void {
    this.comment.likes += 1;
  }
}

@Component({
  selector: 'do-check',
  template: `
  <do-check-item [comment]="comment"
    *ngFor="let comment of comments" (onRemove)="removeComment($event)">
  </do-check-item>

  <button class="ui primary button" (click)="addComment()">
    Add
  </button>
  `
})
class DoCheckCmp implements DoCheck {
  comments: any[];
  iterable: boolean;
  authors: string[];
  texts: string[];
  differ: any;

  constructor(differs: IterableDiffers) { // 接收一个IterableDiffers的实例
    this.differ = differs.find([]).create(null); // 创建一个迭代differ的实例
    this.comments = [];

    this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
    this.texts = [
      // tslint:disable-next-line:max-line-length
      'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
      'Really cool!',
      'Thanks!'
    ];

    this.addComment();
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  getRandomItem(array: string[]): string {
    const pos: number = this.getRandomInt(array.length - 1);
    return array[pos];
  }

  addComment(): void {
    this.comments.push({
      author: this.getRandomItem(this.authors),
      comment: this.getRandomItem(this.texts),
      likes: this.getRandomInt(20)
    });
  }

  removeComment(comment) {
    const pos = this.comments.indexOf(comment);
    this.comments.splice(pos, 1);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comments); // 检测变更

    if (changes) {
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }
}

@Component({
  selector: 'lifecycle-sample-app',
  template: `
  <h4 class="ui horizontal divider header">
    DoCheck
  </h4>

  <do-check></do-check>
  `
})
export class LifecycleSampleApp3 {
  display: boolean;
  name: string;
  comment: string;

  constructor() {
  }
}

@NgModule({
  declarations: [
    LifecycleSampleApp3,
    DoCheckItem,
    DoCheckCmp
  ],
  imports: [CommonModule],
  exports: [LifecycleSampleApp3]
})
export class LifecycleSampleApp3Module { }



