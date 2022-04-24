import { ShoppingOrder } from '..';
import { ShoppingOrderState } from './main';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento porque o pedido foi recusado.');
  }
  rejectPayment(): void {
    console.log('O pedido já está no estado de pagamento rejeitado.');
  }
  waitPayment(): void {
    console.log('Não mover para pendente porque o pedido foi recusado.');
  }
  shipOrder(): void {
    console.log('Não posso enviar um pedido com pagamento recusado.');
  }
}
