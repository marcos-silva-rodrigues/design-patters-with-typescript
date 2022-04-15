import { ICustomer } from './customer';

export class IndividualCustomer implements ICustomer {
  constructor(public name: string) {}
}
