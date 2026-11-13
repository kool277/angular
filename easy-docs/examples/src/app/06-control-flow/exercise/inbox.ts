import {Component} from '@angular/core';

interface Message {
  id: number;
  from: string;
  text: string;
}

@Component({
  selector: 'app-inbox',
  template: `
    <ol>
      @for (message of messages; track message.id) {
        <li>
          {{ message.from }}: {{ message.text }}
          @if ($first) {
            <strong>new</strong>
          }
        </li>
      } @empty {
        <li>No messages.</li>
      }
    </ol>
    @if (messages.length > 0) {
      <button (click)="deleteAll()">Delete all</button>
    }
  `,
})
export class ControlFlowInbox {
  messages: Message[] = [
    {id: 7, from: 'Dilnoza', text: 'See you at six.'},
    {id: 4, from: 'Timur', text: 'Thanks for the book!'},
  ];

  deleteAll() {
    this.messages = [];
  }
}
