import { ICustomer } from '../customer/customer';
import { IVehicle } from './vehicle';

export class EnterpriseCar implements IVehicle {
  constructor(public name: string, private readonly customer: ICustomer) {}

  pickUp(): void {
    console.log(
      `${this.name} esta buscando ${this.customer.name} (ENTERPRISE)`,
    );
  }
}
