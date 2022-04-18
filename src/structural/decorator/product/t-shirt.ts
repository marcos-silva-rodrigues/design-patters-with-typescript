import { IProduct } from './main';

export class TShirt implements IProduct {
  private name = 'Camiseta';
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
