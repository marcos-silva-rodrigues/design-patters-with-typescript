export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 12);
const person1 = new Person('Marcos', 21);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person1);
console.log(person2);
person2.addresses[0].street = 'Bla bla bla';

console.log(person1);
console.log(person2);
console.log(person1 === person2);
