import { ProductWithDiscountDecorator } from './main';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const decoratedTShirt = new ProductWithDiscountDecorator(tShirt);

console.log('camiseta normal', tShirt.getPrice());
console.log('camiseta com desconto', decoratedTShirt.getPrice());
