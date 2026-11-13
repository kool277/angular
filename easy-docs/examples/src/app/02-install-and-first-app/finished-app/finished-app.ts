// #docregion imports
import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FirstAppWelcome} from '../welcome/welcome';

@Component({
  imports: [RouterOutlet, FirstAppWelcome],
  // #enddocregion imports
  selector: 'app-finished-app',
  styleUrl: './finished-app.css',
  templateUrl: './finished-app.html',
})
export class FirstAppFinished {
  protected readonly title = signal('Amina');
}
