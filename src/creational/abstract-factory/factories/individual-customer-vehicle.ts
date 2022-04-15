import { ICreateVehicleCustomerFactory } from './customer-vehicle';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';

export class IndividualCreateVehicleCustomerFactory
  implements ICreateVehicleCustomerFactory
{
  createCustomer(customerName: string): IndividualCustomer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IndividualCar {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
