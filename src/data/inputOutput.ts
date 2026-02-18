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
