import { ECommerceProduct } from './base';
import { DiscountStrategy } from './discount';

export class ECommerceShoppingCart {
  private products: ECommerceProduct[] = [];
  private discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...product: ECommerceProduct[]) {
    this.products.push(...product);
  }

  getProducts(): ECommerceProduct[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => (sum += product.price), 0);
  }

  getTotalWithDiscount(): number {
    return this.discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this.discountStrategy = discount;
  }
}
