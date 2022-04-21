import { deliveryContext } from './delivery/context';
import { DeliveryFactory } from './delivery/factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Marcos', '490', 'Av static types', 'TS');
deliveryContext(factory, 'Fulano', '490', 'Av static types', 'TS');

deliveryContext(factory, 'testeman', '000', 'testeland', 'TDD');
console.log(factory.getLocations());
