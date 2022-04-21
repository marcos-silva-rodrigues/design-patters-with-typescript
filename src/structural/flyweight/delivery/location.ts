import { DeliveryLocationData, IFlyweight } from './interfaces';

export class DeliveryLocation implements IFlyweight {
  constructor(private readonly intrisincState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.intrisincState.street, this.intrisincState.city);
    console.log('Número: ', number);
    console.log('####');
  }
}
