// // // import { routes } from "./RouteHandler";

// // // function findDynamicRoute(method: string, url: string) {
// // //   const methodMap = routes.get(method);
// // //   if (!methodMap) return null;

// // //   for (const [routePath, handler] of methodMap.entries()) {
// // //     // "/api/users/:id" --> ["api", "users", ":id"]
// // //     const routeParts = routePath.split("/");
// // //     // "/api/users/1" --> ["api", "users", "10"]
// // //     const urlParts = url.split("/");

// // //     if (routeParts.length !== urlParts.length) continue;

// // //     const params: any = {}; //{id: 2}
// // //     let matched = true;

// // //     // "/api/users/:id"
// // //     for (let i = 0; i < routeParts.length; i++) {
// // //       if (routeParts[i]?.startsWith(":")) {
// // //         params[routeParts[i]?.substring(1)!] = urlParts[i]; // {id:1}
// // //       } else if (routeParts[i] !== urlParts[i]) {
// // //         matched = false;
// // //         break;
// // //       }
// // //     }

// // //     if (matched) {
// // //       return { handler, params };
// // //     }
// // //   }

// // //   return null;
// // // }

// // // export default findDynamicRoute;

// // import { routes } from "./RouteHandler";

// // type DynamicRouteMatch = {
// //   handler: Function;
// //   params: Record<string, string>;
// // };

// // function findDynamicRoute(
// //   method: string,
// //   path: string
// // ): DynamicRouteMatch | null {
// //   const methodMap = routes.get(method);
// //   if (!methodMap) return null;

// //   // Normalize path: remove leading/trailing slashes
// //   const urlParts = path.split("/").filter(Boolean);

// //   for (const [routePath, handler] of methodMap.entries()) {
// //     const routeParts = routePath.split("/").filter(Boolean);

// //     if (routeParts.length !== urlParts.length) continue;

// //     const params: Record<string, string> = {};
// //     let matched = true;

// //     for (let i = 0; i < routeParts.length; i++) {
// //       const routeSegment = routeParts[i];
// //       const urlSegment = urlParts[i];

// //       if (routeSegment.startsWith(":")) {
// //         const paramName = routeSegment.slice(1);


// // import { routes } from "./RouteHandler";

// // function findDynamicRoute(method: string, url: string) {
// //   const methodMap = routes.get(method);
// //   if (!methodMap) return null;

// //   for (const [routePath, handler] of methodMap.entries()) {
// //     // "/api/users/:id" --> ["api", "users", ":id"]
// //     const routeParts = routePath.split("/");
// //     // "/api/users/1" --> ["api", "users", "10"]
// //     const urlParts = url.split("/");

// //     if (routeParts.length !== urlParts.length) continue;

// //     const params: any = {}; //{id: 2}
// //     let matched = true;

// //     // "/api/users/:id"
// //     for (let i = 0; i < routeParts.length; i++) {
// //       if (routeParts[i]?.startsWith(":")) {
// //         params[routeParts[i]?.substring(1)!] = urlParts[i]; // {id:1}
// //       } else if (routeParts[i] !== urlParts[i]) {
// //         matched = false;
// //         break;
// //       }
// //     }

// //     if (matched) {
// //       return { handler, params };
// //     }
// //   }

// //   return null;
// // }

// // export default findDynamicRoute;

// import { routes } from "./RouteHandler";

// type DynamicRouteMatch = {
//   handler: Function;
//   params: Record<string, string>;
// };

// function findDynamicRoute(
//   method: string,
//   path: string
// ): DynamicRouteMatch | null {
//   const methodMap = routes.get(method);
//   if (!methodMap) return null;

//   // Normalize path: remove leading/trailing slashes
//   const urlParts = path.split("/").filter(Boolean);

//   for (const [routePath, handler] of methodMap.entries()) {
//     const routeParts = routePath.split("/").filter(Boolean);

//     if (routeParts.length !== urlParts.length) continue;

//     const params: Record<string, string> = {};
//     let matched = true;

//     for (let i = 0; i < routeParts.length; i++) {
//       const routeSegment = routeParts[i];
//       const urlSegment = urlParts[i];

//       if (routeSegment.startsWith(":")) {
//         const paramName = routeSegment.slice(1);


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