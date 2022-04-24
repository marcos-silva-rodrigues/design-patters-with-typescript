import { CustomerBudget } from '../customer';
import { BudgetHandler } from './base';

export class SellerBudgetHandler extends BudgetHandler {
  handler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('o vendedor tratou o orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handler(budget);
  }
}
