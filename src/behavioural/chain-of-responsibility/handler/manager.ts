import { CustomerBudget } from '../customer';
import { BudgetHandler } from './base';

export class ManagerBudgetHandler extends BudgetHandler {
  handler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('o gerente tratou o orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handler(budget);
  }
}
