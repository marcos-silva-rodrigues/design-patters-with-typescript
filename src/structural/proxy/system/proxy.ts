import { AdminUser } from './admin';
import { Address, IUser } from './user';

export class UserProxy implements IUser {
  private realUser: IUser | null = null;
  private realUserAddresses: Address[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): IUser {
    if (this.realUser === null) {
      return new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<Address[]> {
    this.realUser = this.createUser();

    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }
    return this.realUserAddresses;
  }
}
