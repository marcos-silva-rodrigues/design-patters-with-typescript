import { DefaultDiscount, NewDiscount } from './ecommerce/discount';
import { ECommerceShoppingCart } from './ecommerce/shopping-cart';

const shoppingCart = new ECommerceShoppingCart();

shoppingCart.addProduct(
  { name: 'Prod 1', price: 100 },
  { name: 'Prod 2', price: 100 },
);

// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
