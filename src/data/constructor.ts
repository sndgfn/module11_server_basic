// ===============================
// 1. Simple Class
// ===============================
class Person {
  constructor(public name: string, public age: number) {}
}

const person1 = new Person("Onik", 22);
console.log(person1.name); // Onik
console.log(person1.age);  // 22


// ===============================
// 2. Default Value
// ===============================
class Car {
  constructor(public brand: string = "Toyota") {}
}

const carDefault = new Car();
console.log(carDefault.brand); // Toyota


// ===============================
// 3. Inheritance
// ===============================
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }
}

const dog1 = new Dog("Tommy", "German Shepherd");
console.log(dog1.name);   // Tommy
console.log(dog1.breed);  // German Shepherd


// ===============================
// 4. Default Constructor Example
// ===============================
class PersonDefault {
  name: string;

  constructor() {
    this.name = "Unknown";
  }
}

const person2 = new PersonDefault();
console.log(person2.name); // Unknown


class CarDefault {
  brand: string;
  price: number;

  constructor() {
    this.brand = "Toyota";
    this.price = 10000;
  }
}

const car1 = new CarDefault();
console.log(car1.brand); // Toyota
console.log(car1.price); // 10000