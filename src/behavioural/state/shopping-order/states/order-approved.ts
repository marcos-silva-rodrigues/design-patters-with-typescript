import { ShoppingOrder } from '..';
import { ShoppingOrderState } from './main';
import { OrderPending } from './order-pending';
import { OrderRejected } from './order-rejected';

export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('O pedido já está npo estado de pagamento aprovado.');
  }
  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }
  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }
  shipOrder(): void {
    console.log('enviando o pedido ...');
  }
}
