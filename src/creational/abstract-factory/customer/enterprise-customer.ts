import { ICustomer } from './customer';

export class EnterpriseCustomer implements ICustomer {
  constructor(public name: string) {}
}
