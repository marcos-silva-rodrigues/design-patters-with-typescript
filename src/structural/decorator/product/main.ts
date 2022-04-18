export interface IProduct {
  getPrice(): number;
  getName(): string;
}

export class ProductWithDiscountDecorator implements IProduct {
  constructor(private product: IProduct) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    const priceWithDiscount = this.product.getPrice() * 0.95;
    return parseInt(priceWithDiscount.toFixed(2));
  }
}
