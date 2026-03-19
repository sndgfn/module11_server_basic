class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Onik", 22);

console.log(p1.name); // Onik
console.log(p1.age);  // 22


class Car {
  brand: string;

  constructor(brand: string = "Toyota") {
    this.brand = brand;
  }
}

const c1 = new Car();
console.log(c1.brand); // Toyota


class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // must call parent constructor
  }
}

const d1 = new Dog("Tommy", "German Shepherd");
console.log(d1.name);  // Tommy
console.log(d1.breed); // German Shepherd



