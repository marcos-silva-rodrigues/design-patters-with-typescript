import { ShoppingOrder } from '..';
import { ShoppingOrderState } from './main';
import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }
  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }
  waitPayment(): void {
    console.log('O pedido já está no estado de pagamento pendente.');
  }
  shipOrder(): void {
    console.log('Não posso enviar o pedido com pagamento pendente');
  }
}
