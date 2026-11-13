import {Component} from '@angular/core';

interface Lesson {
  title: string;
  done: boolean;
  teacher?: {name: string};
}

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.html',
})
export class TplExpressions {
  lessons: Lesson[] = [
    {title: 'Angular', done: true, teacher: {name: 'Ms. Rahimova'}},
    {title: 'TypeScript', done: false},
    {title: 'CSS', done: true},
  ];
  room: string | null = null;
  checks = 0;
}
