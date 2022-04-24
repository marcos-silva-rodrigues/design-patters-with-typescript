import { TaxVisitor } from './tax-visitor';
import { VisitableProduct } from './visible-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitor): number {
    return visitor.calculateTaxesForFood(this);
  }
}
