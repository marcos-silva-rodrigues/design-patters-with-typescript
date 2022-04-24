import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct(
  { id: '1', name: 'Camiseta', price: 49.9 },
  { id: '2', name: 'Caneta', price: 9.9 },
);

const seller2 = new Seller();
seller2.addProduct(
  { id: '3', name: 'Carro', price: 49000.9 },
  { id: '4', name: 'Lápis', price: 0.9 },
);

mediator.addSeller(seller1, seller2);
mediator.showProducts();

const buyer = new Buyer(mediator);

buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');