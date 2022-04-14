export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addresses = this.addresses.map((address) => address.clone());
    return newObject;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
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
