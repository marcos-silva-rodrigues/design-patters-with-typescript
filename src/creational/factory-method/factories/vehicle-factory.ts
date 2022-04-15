import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehivleName: string): Vehicle {
    const car = this.getVehicle(vehivleName);
    car.pickUp(customerName);
    return car;
  }
}
