import { ICustomer } from '../customer';
import { IVehicle } from '../vehicle';

export interface ICreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicle;
}
