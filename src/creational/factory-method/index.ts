import { CarFactory } from './factories/car-factory';
import { Car } from './vehicle/car';

// Sem Factory
const fusca = new Car('Fusca');
fusca.pickUp('Fulano');
fusca.stop();

// Com Factory
const carFactory = new CarFactory();
const fusca1 = carFactory.getVehicle('Fusca');
fusca1.pickUp('fulano');
fusca1.stop();
