import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
  IFlyweight,
} from './interfaces';
import { DeliveryLocation } from './location';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/gi, ''))
      .join('_')
      .toLowerCase();
  }

  makeLocation(intrinsicState: DeliveryLocationData): IFlyweight {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
