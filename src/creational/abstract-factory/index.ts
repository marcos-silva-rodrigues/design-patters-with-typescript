import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
