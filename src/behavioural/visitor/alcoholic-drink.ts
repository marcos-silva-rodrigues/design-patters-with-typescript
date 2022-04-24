import { TaxVisitor } from './tax-visitor';
import { VisitableProduct } from './visible-product';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitor): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
