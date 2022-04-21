import { DeliveryLocation } from './location';

export interface IFlyweight {
  deliver(name: string, number: string): void;
}

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
