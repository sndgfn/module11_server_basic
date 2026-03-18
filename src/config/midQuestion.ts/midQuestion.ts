// // ===============================
// // Q1: Vehicle Dynamic Dispatch
// // ===============================

// class Vehicle {
//     start(): void {
//         console.log("Vehicle is starting...");
//     }
// }

// class Car extends Vehicle {
//     start(): void {
//         console.log("Car starts with a key.");
//     }
// }

// class Bike extends Vehicle {
//     start(): void {
//         console.log("Bike starts with a self button.");
//     }
// }

// console.log("\n--- Q1 Output ---");

// const vehicles: Vehicle[] = [new Car(), new Bike()];
// vehicles.forEach(v => v.start());


// // ===============================
// // Q2: Animal Sounds
// // ===============================

// class Animal {
//     makeSound(): void {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Dog says: Woof Woof");
//     }
// }

// class Cat extends Animal {
//     makeSound(): void {
//         console.log("Cat says: Meow Meow");
//     }
// }

// console.log("\n--- Q2 Output ---");

// const animals: Animal[] = [new Dog(), new Cat()];
// animals.forEach(a => a.makeSound());


// // ===============================
// // Q3: Payment System
// // ===============================

// class Payment {
//     pay(): void {
//         console.log("Processing payment...");
//     }
// }

// class CreditCardPayment extends Payment {
//     pay(): void {
//         console.log("Payment made using Credit Card.");
//     }
// }

// class PayPalPayment extends Payment {
//     pay(): void {
//         console.log("Payment made using PayPal.");
//     }
// }

// console.log("\n--- Q3 Output ---");

// const payments: Payment[] = [new CreditCardPayment(), new PayPalPayment()];
// payments.forEach(p => p.pay());


// // ===============================
// // Q4: Abstract Shape
// // ===============================

// abstract class Shape {
//     abstract draw(): void;
// }

// class Circle extends Shape {
//     draw(): void {
//         console.log("Drawing a Circle");
//     }
// }

// class Rectangle extends Shape {
//     draw(): void {
//         console.log("Drawing a Rectangle");
//     }
// }

// console.log("\n--- Q4 Output ---");

// const shapes: Shape[] = [new Circle(), new Rectangle()];
// shapes.forEach(s => s.draw());


// // ===============================
// // Q5: Employee Salary
// // ===============================

// class Employee {
//     calculateSalary(): number {
//         return 0;
//     }
// }

// class FullTimeEmployee extends Employee {
//     calculateSalary(): number {
//         return 50000;
//     }
// }

// class PartTimeEmployee extends Employee {
//     calculateSalary(): number {
//         return 20000;
//     }
// }

// console.log("\n--- Q5 Output ---");

// const employees: Employee[] = [new FullTimeEmployee(), new PartTimeEmployee()];
// employees.forEach(e => console.log("Salary:", e.calculateSalary()));







////////////complex version 

// ===============================
// Q1: Vehicle System (Advanced)
// ===============================

interface Engine {
    startEngine(): void;
}

class PetrolEngine implements Engine {
    startEngine(): void {
        console.log("Petrol engine started...");
    }
}

class ElectricEngine implements Engine {
    startEngine(): void {
        console.log("Electric motor powered on...");
    }
}

abstract class Vehicle {
    constructor(protected engine: Engine) {}

    start(): void {
        this.engine.startEngine();
        console.log("Vehicle is starting...");
    }

    abstract drive(): void;
}

class Car extends Vehicle {
    start(): void {
        super.start();
        console.log("Car starts with a smart key.");
    }

    drive(): void {
        console.log("Car is driving smoothly...");
    }
}

class Bike extends Vehicle {
    start(): void {
        super.start();
        console.log("Bike starts with self button.");
    }

    drive(): void {
        console.log("Bike is zooming...");
    }
}

console.log("\n--- Q1 Advanced Output ---");

const vehicles: Vehicle[] = [
    new Car(new PetrolEngine()),
    new Bike(new ElectricEngine())
];

vehicles.forEach(v => {
    v.start();
    v.drive();
});


// ===============================
// Q2: Animal System with Behavior
// ===============================

interface Behavior {
    act(): void;
}

class AggressiveBehavior implements Behavior {
    act(): void {
        console.log("Acts aggressively!");
    }
}

class FriendlyBehavior implements Behavior {
    act(): void {
        console.log("Acts friendly!");
    }
}

abstract class Animal {
    constructor(protected behavior: Behavior) {}

    abstract makeSound(): void;

    performBehavior(): void {
        this.behavior.act();
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog: Woof Woof");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat: Meow Meow");
    }
}

console.log("\n--- Q2 Advanced Output ---");

const animals: Animal[] = [
    new Dog(new FriendlyBehavior()),
    new Cat(new AggressiveBehavior())
];

animals.forEach(a => {
    a.makeSound();
    a.performBehavior();
});


// ===============================
// Q3: Payment System (Strategy + Async)
// ===============================

interface PaymentStrategy {
    pay(amount: number): Promise<void>;
}

class CreditCardPayment implements PaymentStrategy {
    async pay(amount: number): Promise<void> {
        await new Promise(res => setTimeout(res, 500));
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    async pay(amount: number): Promise<void> {
        await new Promise(res => setTimeout(res, 500));
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class PaymentProcessor {
    constructor(private strategy: PaymentStrategy) {}

    async process(amount: number) {
        console.log("Processing payment...");
        await this.strategy.pay(amount);
    }
}

console.log("\n--- Q3 Advanced Output ---");

(async () => {
    const payments = [
        new PaymentProcessor(new CreditCardPayment()),
        new PaymentProcessor(new PayPalPayment())
    ];

    for (const p of payments) {
        await p.process(100);
    }
})();


// ===============================
// Q4: Shape System with Area Calculation
// ===============================

abstract class Shape {
    abstract draw(): void;
    abstract area(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    draw(): void {
        console.log("Drawing Circle");
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    draw(): void {
        console.log("Drawing Rectangle");
    }

    area(): number {
        return this.width * this.height;
    }
}

console.log("\n--- Q4 Advanced Output ---");

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(s => {
    s.draw();
    console.log("Area:", s.area());
});


// ===============================
// Q5: Employee System with Bonus + Polymorphism
// ===============================

abstract class Employee {
    constructor(protected name: string) {}

    abstract calculateSalary(): number;

    getDetails(): void {
        console.log(`Employee: ${this.name}`);
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary(): number {
        return 50000 + this.getBonus();
    }

    private getBonus(): number {
        return 10000;
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(): number {
        return 20000;
    }
}

class Freelancer extends Employee {
    constructor(name: string, private hours: number) {
        super(name);
    }

    calculateSalary(): number {
        return this.hours * 500;
    }
}

console.log("\n--- Q5 Advanced Output ---");

const employees: Employee[] = [
    new FullTimeEmployee("Onik"),
    new PartTimeEmployee("Rahim"),
    new Freelancer("Karim", 40)
];

employees.forEach(e => {
    e.getDetails();
    console.log("Salary:", e.calculateSalary());
});