import { CustomerBudget } from './customer';
import { DirectorBudgetHandler } from './handler/director';
import { ManagerBudgetHandler } from './handler/manager';
import { SellerBudgetHandler } from './handler/seller';

const customerBudget = new CustomerBudget(3344);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler());

seller.handler(customerBudget);
console.log(customerBudget);
