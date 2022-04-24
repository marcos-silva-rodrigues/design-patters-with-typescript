import { CustomerBudget } from '../customer';
import { BudgetHandler } from './base';

export class DirectorBudgetHandler extends BudgetHandler {
  handler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('o diretor tratou o orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handler(budget);
  }
}
