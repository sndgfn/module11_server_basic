//easy versiopbn 
// ===============================
// 1. Simple Class
// ===============================
class Person {
  constructor(public name: string, public age: number) {}
}

const p1 = new Person("Onik", 22);
console.log(p1.name); // Onik
console.log(p1.age);  // 22


// ===============================
// 2. Default Value
// ===============================
class Car {
  constructor(public brand: string = "Toyota") {}
}

const c1 = new Car();
console.log(c1.brand); // Toyota


// ===============================
// 3. Inheritance
// ===============================
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // call parent
  }
}

const d1 = new Dog("Tommy", "German Shepherd");
console.log(d1.name);   // Tommy
console.log(d1.breed);  // German Shepherd



//default constructor
class Person {
  name: string;

  constructor() {
    this.name = "Unknown";
  }
}

const p1 = new Person();

console.log(p1.name); // Unknownclass Car {
  brand: string;
  price: number;

  constructor() {
    this.brand = "Toyota";
    this.price = 10000;
  }
}

const car1 = new Car();

console.log(car1.brand); // Toyota
console.log(car1.price); // 10000


// ===============================
// ✅ FINAL IDEA (Quick Recap)
// ===============================
// constructor → runs when object is created
// public → shortcut for property + assignment
// default value → used if no value passed
// extends → inherit from another class
// super() → call parent constructor









// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("Onik", 22);

// console.log(p1.name); // Onik
// console.log(p1.age);  // 22


// class Car {
//   brand: string;

//   constructor(brand: string = "Toyota") {
//     this.brand = brand;
//   }
// }

// const c1 = new Car();
// console.log(c1.brand); // Toyota


// class Animal {
//   constructor(public name: string) {}
// }

// class Dog extends Animal {
//   constructor(name: string, public breed: string) {
//     super(name); // must call parent constructor
//   }
// }

// const d1 = new Dog("Tommy", "German Shepherd");
// console.log(d1.name);  // Tommy
// console.log(d1.breed); // German Shepherd






