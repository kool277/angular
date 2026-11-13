import {Component} from '@angular/core';

@Component({
  selector: 'app-grade',
  template: `
    <p>Score: {{ score }}</p>
    @if (score >= 90) {
      <p class="result">Excellent!</p>
    } @else if (score >= 50) {
      <p class="result">You passed.</p>
    } @else {
      <p class="result">Try again.</p>
    }
    <button type="button" (click)="score = score + 10">+10</button>
    <button type="button" (click)="score = score - 30">-30</button>
  `,
})
export class ControlFlowGrade {
  score = 70;
}
