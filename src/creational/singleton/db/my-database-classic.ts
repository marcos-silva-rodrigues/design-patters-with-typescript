import { User } from '../interfaces/user';

class MyDatabaseClassicTS {
  private static instance: MyDatabaseClassicTS | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MyDatabaseClassicTS {
    if (MyDatabaseClassicTS.instance === null) {
      MyDatabaseClassicTS.instance = new MyDatabaseClassicTS();
    }

    return MyDatabaseClassicTS.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    this.users.forEach((user) => console.log(user));
  }
}

class MyDatabaseClassicJS {
  private static _instance: MyDatabaseClassicJS | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassicJS {
    if (MyDatabaseClassicJS._instance === null) {
      MyDatabaseClassicJS._instance = new MyDatabaseClassicJS();
    }

    return MyDatabaseClassicJS._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    this.users.forEach((user) => console.log(user));
  }
}

// export { MyDatabaseClassicTS as MyDatabaseClassic };
export { MyDatabaseClassicJS as MyDatabaseClassic };
