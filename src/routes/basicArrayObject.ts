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
