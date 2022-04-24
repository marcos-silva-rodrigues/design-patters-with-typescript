import { TaxVisitor } from './tax-visitor';

export abstract class VisitableProduct {
  constructor(private name: string, protected price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  abstract getPriceWithTaxes(visitor: TaxVisitor): number;
}
