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