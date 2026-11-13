import {Component} from '@angular/core';

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.html',
  styleUrl: './order-line.css',
})
export class TplOrderLine {
  product = 'Green tea';
  price = 3000;
  stock = 5;
  quantity = 1;
  note = '';

  increase(): void {
    if (this.quantity < this.stock) {
      this.quantity = this.quantity + 1;
    }
  }

  decrease(): void {
    if (this.quantity > 0) {
      this.quantity = this.quantity - 1;
    }
  }

  saveNote(text: string): void {
    this.note = text.trim();
  }
}
