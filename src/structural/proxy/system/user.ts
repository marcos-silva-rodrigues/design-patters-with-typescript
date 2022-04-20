export type Address = { street: string; number: number };

export interface IUser {
  firstName: string;
  userName: string;

  getAddresses(): Promise<Address[]>;
}
