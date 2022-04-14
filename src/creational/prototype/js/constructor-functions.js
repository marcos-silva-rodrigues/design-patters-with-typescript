function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Marcos',
  lastName: 'Silva',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const person1 = new Person('Marcos', 'Silva', 20);
console.log(person1.fullName());
console.log(person1);
console.log(person1.__proto__ === Person.prototype);
