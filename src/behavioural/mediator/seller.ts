import { Mediator } from './mediator';

export type SellerProduct = {
  id: string;
  name: string;
  price: number;
};

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts() {
    this.products.forEach((product) => console.log(product));
  }

  addProduct(...products: SellerProduct[]): void {
    this.products.push(...products);
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) return;

    const product = this.products.splice(productIndex, 1);
    return product[0];
  }
}
