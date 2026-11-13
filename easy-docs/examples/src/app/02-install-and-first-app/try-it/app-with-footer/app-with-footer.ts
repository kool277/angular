import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
// #docregion imports
import {FirstAppWelcome} from '../../welcome/welcome';
import {FirstAppFooter} from '../footer/footer';

@Component({
  imports: [RouterOutlet, FirstAppWelcome, FirstAppFooter],
  // #enddocregion imports
  selector: 'app-app-with-footer',
  templateUrl: './app-with-footer.html',
})
export class FirstAppWithFooter {
  protected readonly title = signal('Amina');
}
