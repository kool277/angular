import {DatePipe, PercentPipe, TitleCasePipe} from '@angular/common';
import {Component, computed, signal} from '@angular/core';
import {FileSizePipe} from './file-size-pipe';

interface Download {
  id: number;
  name: string;
  bytes: number;
  added: Date;
  done: number; // 0 to 1
}

@Component({
  selector: 'app-downloads',
  imports: [DatePipe, PercentPipe, TitleCasePipe, FileSizePipe],
  templateUrl: './downloads.html',
})
export class PipesDownloads {
  readonly files = signal<Download[]>([
    {
      id: 1,
      name: 'holiday photos',
      bytes: 3_450_000, // the _ only makes the number easier to read: 3450000
      added: new Date(Date.UTC(2026, 10, 2, 14, 5)), // month 10 is November (months start at 0)
      done: 1,
    },
    {
      id: 2,
      name: 'lesson video',
      bytes: 1_288_490_189,
      added: new Date(Date.UTC(2026, 10, 12, 8, 0)),
      done: 0.42,
    },
    {id: 3, name: 'notes', bytes: 812, added: new Date(Date.UTC(2026, 10, 13, 19, 45)), done: 0},
  ]);

  readonly totalBytes = computed(() => this.files().reduce((sum, file) => sum + file.bytes, 0));
}
