/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class IProductComponent {
  abstract getPrice(): number;

  add(product: IProductComponent): void {}
  remove(product: IProductComponent): void {}
}

export class ProductLeaf extends IProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposed extends IProductComponent {
  private children: IProductComponent[] = [];

  add(...product: IProductComponent[]): void {
    this.children.push(...product);
  }

  remove(product: IProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => (sum += child.getPrice()), 0);
  }
}

const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1000);
const tShirt = new ProductLeaf('Camiseta', 40);

const productBox = new ProductComposed();
productBox.add(pen, tShirt, smartphone);
console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
