import { CustomerBudget } from '../customer';

export abstract class BudgetHandler {
  protected nextHandler: BudgetHandler | null = null;

  setNextHandler(handler: BudgetHandler): BudgetHandler {
    this.nextHandler = handler;
    return handler;
  }

  handler(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handler(budget);
    return budget;
  }
}
