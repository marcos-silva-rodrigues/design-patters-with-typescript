import { Mediator } from './mediator';

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void {
    if (!this.mediator) return;
    this.mediator.showProducts();
  }

  buy(id: string): void {
    if (!this.mediator) return;
    this.mediator.buy(id);
  }
}
