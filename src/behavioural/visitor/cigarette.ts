import { TaxVisitor } from './tax-visitor';
import { VisitableProduct } from './visible-product';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitor): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
