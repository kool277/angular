import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-first-app',
  styleUrl: './first-app.css',
  templateUrl: './first-app.html',
})
export class FirstApp {
  protected readonly title = signal('my-first-app');
}
