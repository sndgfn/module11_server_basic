// ===============================
// Q1: Vehicle Dynamic Dispatch
// ===============================

class Vehicle {
    start(): void {
        console.log("Vehicle is starting...");
    }
}

class Car extends Vehicle {
    start(): void {
        console.log("Car starts with a key.");
    }
}

class Bike extends Vehicle {
    start(): void {
        console.log("Bike starts with a self button.");
    }
}

console.log("\n--- Q1 Output ---");
let v: Vehicle;

v = new Car();
v.start();

v = new Bike();
v.start();


// ===============================
// Q2: Animal Sounds
// ===============================

class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog says: Woof Woof");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat says: Meow Meow");
    }
}

console.log("\n--- Q2 Output ---");
let animal: Animal;

animal = new Dog();
animal.makeSound();

animal = new Cat();
animal.makeSound();


// ===============================
// Q3: Payment System
// ===============================

class Payment {
    pay(): void {
        console.log("Processing payment...");
    }
}

class CreditCardPayment extends Payment {
    pay(): void {
        console.log("Payment made using Credit Card.");
    }
}

class PayPalPayment extends Payment {
    pay(): void {
        console.log("Payment made using PayPal.");
    }
}

console.log("\n--- Q3 Output ---");
let payment: Payment;

payment = new CreditCardPayment();
payment.pay();

payment = new PayPalPayment();
payment.pay();


// ===============================
// Q4: Abstract Shape
// ===============================

abstract class Shape {
    abstract draw(): void;
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a Circle");
    }
}

class Rectangle extends Shape {
    draw(): void {
        console.log("Drawing a Rectangle");
    }
}

console.log("\n--- Q4 Output ---");
let shape: Shape;

shape = new Circle();
shape.draw();

shape = new Rectangle();
shape.draw();


// ===============================
// Q5: Employee Salary
// ===============================

class Employee {
    calculateSalary(): number {
        return 0;
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary(): number {
        return 50000;
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(): number {
        return 20000;
    }
}

console.log("\n--- Q5 Output ---");
let emp: Employee;

emp = new FullTimeEmployee();
console.log("Full Time Salary:", emp.calculateSalary());

emp = new PartTimeEmployee();
console.log("Part Time Salary:", emp.calculateSalary());


// ===============================
// Q6: Abstract Marks
// ===============================

abstract class Marks {
    abstract getPercentage(): number;
}

class A extends Marks {
    constructor(
        private sub1: number,
        private sub2: number,
        private sub3: number
    ) {
        super();
    }

    getPercentage(): number {
        return (this.sub1 + this.sub2 + this.sub3) / 3;
    }
}

class B extends Marks {
    constructor(
        private sub1: number,
        private sub2: number,
        private sub3: number,
        private sub4: number
    ) {
        super();
    }

    getPercentage(): number {
        return (this.sub1 + this.sub2 + this.sub3 + this.sub4) / 4;
    }
}

console.log("\n--- Q6 Output ---");
let studentA = new A(80, 75, 90);
let studentB = new B(70, 85, 60, 95);

console.log("Percentage of Student A:", studentA.getPercentage());
console.log("Percentage of Student B:", studentB.getPercentage());