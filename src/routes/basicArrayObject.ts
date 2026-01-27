//array 
// Array with type
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Onik", "Rahim", "Karim"];


numbers.push(6);

numbers.pop();

const doubled: number[] = numbers.map(num => num * 2);

const evenNumbers: number[] = numbers.filter(num => num % 2 === 0);

const foundNumber: number | undefined = numbers.find(num => num > 3);

names.forEach(name => {
    console.log(name.toUpperCase());
});

const hasOnik: boolean = names.includes("Onik");

const sum: number = numbers.reduce((total, num) => total + num, 0);

console.log({ numbers, doubled, evenNumbers, foundNumber, hasOnik, sum });


// object
type User = {
    id: number;
    name: string;
    isActive: boolean;
};

const users: User[] = [
    { id: 1, name: "Onik", isActive: true },
    { id: 2, name: "Rahim", isActive: false },
    { id: 3, name: "Karim", isActive: true },
];

const activeUsers = users.filter(user => user.isActive);

const userNames = users.map(user => user.name);

const user = users.find(user => user.id === 2);

console.log(activeUsers, userNames, user);


type Person = {
    name: string;
    age: number;
    country?: string;
};

const person: Person = {
    name: "Onik",
    age: 22,
    country: "Bangladesh",
};

console.log(person.name);
console.log(person["age"]);

person.age = 23;

person.country = "BD";

delete person.country;

const keys: string[] = Object.keys(person);

const values: any[] = Object.values(person);

const entries = Object.entries(person);
const copiedPerson = { ...person };

console.log(keys, values, entries, copiedPerson);
