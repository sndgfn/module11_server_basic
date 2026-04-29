// // ===============================
// // 1. Simple Class
// // ===============================
// class Person {
//   constructor(public name: string, public age: number) {}
// }

// const person1 = new Person("Onik", 22);
// console.log(person1.name); // Onik
// console.log(person1.age);  // 22


// // ===============================
// // 2. Default Value
// // ===============================
// class Car {
//   constructor(public brand: string = "Toyota") {}
// }

// const carDefault = new Car();
// console.log(carDefault.brand); // Toyota


// // ===============================
// // 3. Inheritance
// // ===============================
// class Animal {
//   constructor(public name: string) {}
// }

// class Dog extends Animal {
//   constructor(name: string, public breed: string) {
//     super(name);
//   }
// }

// const dog1 = new Dog("Tommy", "German Shepherd");
// console.log(dog1.name);   // Tommy
// console.log(dog1.breed);  // German Shepherd


// // ===============================
// // 4. Default Constructor Example
// // ===============================
// class PersonDefault {
//   name: string;

//   constructor() {
//     this.name = "Unknown";
//   }
// }

// const person2 = new PersonDefault();
// console.log(person2.name); // Unknown


// class CarDefault {
//   brand: string;
//   price: number;

//   constructor() {
//     this.brand = "Toyota";
//     this.price = 10000;
//   }
// }

// const car1 = new CarDefault();
// console.log(car1.brand); // Toyota
// console.log(car1.price); // 10000








// ===============================
// Q1: Vehicle Dynamic Dispatch
// ===============================
class Vehicle {
    start(): void {
        console.log("Vehicle is starting...");
    }
}

class Car extends Vehicle {
    override start(): void {
        console.log("Car starts with a key.");
    }
}

class Bike extends Vehicle {
    override start(): void {
        console.log("Bike starts with a self button.");
    }
}

// ===============================
// Q2: Animal Sounds
// ===============================
class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    override makeSound(): void {
        console.log("Dog says: Woof Woof");
    }
}

class Cat extends Animal {
    override makeSound(): void {
        console.log("Cat says: Meow Meow");
    }
}

// ===============================
// Q3: Payment System
// ===============================
class Payment {
    pay(): void {
        console.log("Processing payment...");
    }
}

class CreditCardPayment extends Payment {
    override pay(): void {
        console.log("Payment made using Credit Card.");
    }
}

class PayPalPayment extends Payment {
    override pay(): void {
        console.log("Payment made using PayPal.");
    }
}

// ===============================
// Q4: Abstract Shape
// ===============================
abstract class ShapeBase {
    abstract draw(): void;
}

class BasicCircle extends ShapeBase {
    draw(): void {
        console.log("Drawing a Circle");
    }
}

class BasicRectangle extends ShapeBase {
    draw(): void {
        console.log("Drawing a Rectangle");
    }
}

// ===============================
// Q5: Employee Salary
// ===============================
class SimpleEmployee {
    calculateSalary(): number {
        return 0;
    }
}

class FullTimeStaff extends SimpleEmployee {
    override calculateSalary(): number {
        return 50000;
    }
}

class PartTimeStaff extends SimpleEmployee {
    override calculateSalary(): number {
        return 20000;
    }
}