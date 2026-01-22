// 1️⃣ Variables
let username: string = "Onik";
let age: number = 23;
let isStudent: boolean = true;

console.log(`Name: ${username}, Age: ${age}, Student: ${isStudent}`);

// 2️⃣ Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "mango"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// 3️⃣ Function with Types
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(5, 10);
console.log("Sum:", sum);

// 4️⃣ Optional & Default Parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

console.log(greet("Onik"));           // Hello, Onik!
console.log(greet("Onik", "Hi"));     // Hi, Onik!

// 5️⃣ Object Type
let person: { name: string; age: number; isStudent: boolean } = {
    name: "Onik",
    age: 23,
    isStudent: true
};

console.log("Person Name:", person.name);

// 6️⃣ Interface
interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // optional property
}

let student: Person = {
    name: "Onik",
    age: 23
};

console.log("Student:", student);

// 7️⃣ Classes
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user1 = new User("Onik", 23);
user1.greet();

// 8️⃣ Enum
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", favoriteColor); // 1

