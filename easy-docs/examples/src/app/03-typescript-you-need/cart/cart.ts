// #docregion types
export interface CartItem {
  readonly productId: number;
  name: string;
  price: number;
  quantity: number;
  note?: string;
}

export type CartState = 'empty' | 'filled' | 'ordered';
// #enddocregion types

// #docregion class
export class Cart {
  private items: CartItem[] = [];
  private ordered = false;

  add(productId: number, name: string, price: number, quantity = 1): void {
    const existing = this.find(productId);
    if (existing) {
      existing.quantity = existing.quantity + quantity;
    } else {
      this.items.push({productId, name, price, quantity});
    }
  }

  find(productId: number): CartItem | undefined {
    return this.items.find((item) => item.productId === productId);
  }

  setNote(productId: number, note: string): void {
    const item = this.find(productId);
    if (item) {
      item.note = note;
    }
  }

  noteFor(productId: number): string {
    return this.find(productId)?.note ?? 'no note';
  }

  total(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  itemNames(): string[] {
    return this.items.map((item) => item.name);
  }

  order(): void {
    this.ordered = true;
  }

  state(): CartState {
    if (this.ordered) {
      return 'ordered';
    }
    return this.items.length === 0 ? 'empty' : 'filled';
  }
}
// #enddocregion class
