import { Address, IUser } from './user';

export class AdminUser implements IUser {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<Address[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          {
            street: 'Av Brasil',
            number: 50,
          },
          {
            street: 'Rua A',
            number: 40,
          },
        ]);
      }, 2000);
    });
  }
}
