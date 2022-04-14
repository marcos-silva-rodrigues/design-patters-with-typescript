const personPrototype = {
  firstName: 'Marcos',
  lastName: 'Silva',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson === personPrototype);
console.log(anotherPerson.firstName, personPrototype.firstName);
personPrototype.firstName = 'outro nome';
console.log(anotherPerson.firstName === personPrototype.firstName);
console.log(anotherPerson.__proto__ === personPrototype);
