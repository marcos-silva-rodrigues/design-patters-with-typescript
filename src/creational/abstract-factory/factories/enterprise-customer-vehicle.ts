import { ICreateVehicleCustomerFactory } from './customer-vehicle';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';

export class EnterpriseCreateVehicleCustomerFactory
  implements ICreateVehicleCustomerFactory
{
  createCustomer(customerName: string): EnterpriseCustomer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): EnterpriseCar {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
