// import { IncomingMessage } from "http";

// async function parseBody(req: IncomingMessage): Promise<any> {
//   return new Promise((resolve, reject) => {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString(); // convert buffer to string
//     });

//     req.on("end", () => {
//       try {
//         resolve(body ? JSON.parse(body) : {});
//       } catch (err: any) {
//         reject(err);
//       }
//     });

//     req.on("error", reject);
//   });
// }

// export default parseBody;






// Take input from user
let name: string | null = prompt("Enter your name:");

// Output result
if (name) {
    console.log("Hello, " + name);
} else {
    console.log("No name entered.");
}

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name: string) => {
    console.log("Hello, " + name);
    rl.close();
});


type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number };

function drawShape(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            console.log(`Drawing a Circle with radius ${shape.radius}`);
            break;
        case "rectangle":
            console.log(`Drawing a Rectangle (${shape.width}x${shape.height})`);
            break;
    }
}enum EmployeeType {
    FullTime = 50000,
    PartTime = 20000,
    Contractor = 30000
}

class Employee {
    constructor(public name: string, private type: EmployeeType) {}

    getSalary(): number {
        return this.type;
    }
}

// Usage
const emp1 = new Employee("Alice", EmployeeType.FullTime);
console.log(`${emp1.name} earns ${emp1.getSalary()}`);