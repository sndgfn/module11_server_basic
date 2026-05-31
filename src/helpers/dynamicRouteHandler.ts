// // // // // import { routes } from "./RouteHandler";

// // // // // function findDynamicRoute(method: string, url: string) {
// // // // //   const methodMap = routes.get(method);
// // // // //   if (!methodMap) return null;

// // // // //   for (const [routePath, handler] of methodMap.entries()) {
// // // // //     // "/api/users/:id" --> ["api", "users", ":id"]
// // // // //     const routeParts = routePath.split("/");
// // // // //     // "/api/users/1" --> ["api", "users", "10"]
// // // // //     const urlParts = url.split("/");

// // // // //     if (routeParts.length !== urlParts.length) continue;

// // // // //     const params: any = {}; //{id: 2}
// // // // //     let matched = true;

// // // // //     // "/api/users/:id"
// // // // //     for (let i = 0; i < routeParts.length; i++) {
// // // // //       if (routeParts[i]?.startsWith(":")) {
// // // // //         params[routeParts[i]?.substring(1)!] = urlParts[i]; // {id:1}
// // // // //       } else if (routeParts[i] !== urlParts[i]) {
// // // // //         matched = false;
// // // // //         break;
// // // // //       }
// // // // //     }

// // // // //     if (matched) {
// // // // //       return { handler, params };
// // // // //     }
// // // // //   }

// // // // //   return null;
// // // // // }

// // // // // export default findDynamicRoute;

// // // // import { routes } from "./RouteHandler";

// // // // type DynamicRouteMatch = {
// // // //   handler: Function;
// // // //   params: Record<string, string>;
// // // // };

// // // // function findDynamicRoute(
// // // //   method: string,
// // // //   path: string
// // // // ): DynamicRouteMatch | null {
// // // //   const methodMap = routes.get(method);
// // // //   if (!methodMap) return null;

// // // //   // Normalize path: remove leading/trailing slashes
// // // //   const urlParts = path.split("/").filter(Boolean);

// // // //   for (const [routePath, handler] of methodMap.entries()) {
// // // //     const routeParts = routePath.split("/").filter(Boolean);

// // // //     if (routeParts.length !== urlParts.length) continue;

// // // //     const params: Record<string, string> = {};
// // // //     let matched = true;

// // // //     for (let i = 0; i < routeParts.length; i++) {
// // // //       const routeSegment = routeParts[i];
// // // //       const urlSegment = urlParts[i];

// // // //       if (routeSegment.startsWith(":")) {
// // // //         const paramName = routeSegment.slice(1);


// // // // import { routes } from "./RouteHandler";

// // // // function findDynamicRoute(method: string, url: string) {
// // // //   const methodMap = routes.get(method);
// // // //   if (!methodMap) return null;

// // // //   for (const [routePath, handler] of methodMap.entries()) {
// // // //     // "/api/users/:id" --> ["api", "users", ":id"]
// // // //     const routeParts = routePath.split("/");
// // // //     // "/api/users/1" --> ["api", "users", "10"]
// // // //     const urlParts = url.split("/");

// // // //     if (routeParts.length !== urlParts.length) continue;

// // // //     const params: any = {}; //{id: 2}
// // // //     let matched = true;

// // // //     // "/api/users/:id"
// // // //     for (let i = 0; i < routeParts.length; i++) {
// // // //       if (routeParts[i]?.startsWith(":")) {
// // // //         params[routeParts[i]?.substring(1)!] = urlParts[i]; // {id:1}
// // // //       } else if (routeParts[i] !== urlParts[i]) {
// // // //         matched = false;
// // // //         break;
// // // //       }
// // // //     }

// // // //     if (matched) {
// // // //       return { handler, params };
// // // //     }
// // // //   }

// // // //   return null;
// // // // }

// // // // export default findDynamicRoute;

// // // import { routes } from "./RouteHandler";

// // // type DynamicRouteMatch = {
// // //   handler: Function;
// // //   params: Record<string, string>;
// // // };

// // // function findDynamicRoute(
// // //   method: string,
// // //   path: string
// // // ): DynamicRouteMatch | null {
// // //   const methodMap = routes.get(method);
// // //   if (!methodMap) return null;

// // //   // Normalize path: remove leading/trailing slashes
// // //   const urlParts = path.split("/").filter(Boolean);

// // //   for (const [routePath, handler] of methodMap.entries()) {
// // //     const routeParts = routePath.split("/").filter(Boolean);

// // //     if (routeParts.length !== urlParts.length) continue;

// // //     const params: Record<string, string> = {};
// // //     let matched = true;

// // //     for (let i = 0; i < routeParts.length; i++) {
// // //       const routeSegment = routeParts[i];
// // //       const urlSegment = urlParts[i];

// // //       if (routeSegment.startsWith(":")) {
// // //         const paramName = routeSegment.slice(1);


// // // import { IncomingMessage } from "http";

// // // async function parseBody(req: IncomingMessage): Promise<any> {
// // //   return new Promise((resolve, reject) => {
// // //     let body = "";
// // //     req.on("data", (chunk) => {
// // //       body += chunk.toString(); // convert buffer to string
// // //     });

// // //     req.on("end", () => {
// // //       try {
// // //         resolve(body ? JSON.parse(body) : {});
// // //       } catch (err: any) {
// // //         reject(err);
// // //       }
// // //     });

// // //     req.on("error", reject);
// // //   });
// // // }

// // // export default parseBody;






// // // Take input from user
// // let name: string | null = prompt("Enter your name:");

// // // Output result
// // if (name) {
// //     console.log("Hello, " + name);
// // } else {
// //     console.log("No name entered.");
// // }

// // import * as readline from "readline";

// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // rl.question("Enter your name: ", (name: string) => {
// //     console.log("Hello, " + name);
// //     rl.close();
// // });


// // type Shape = 
// //     | { kind: "circle"; radius: number }
// //     | { kind: "rectangle"; width: number; height: number };

// // function drawShape(shape: Shape) {
// //     switch (shape.kind) {
// //         case "circle":
// //             console.log(`Drawing a Circle with radius ${shape.radius}`);
// //             break;
// //         case "rectangle":
// //             console.log(`Drawing a Rectangle (${shape.width}x${shape.height})`);
// //             break;
// //     }
// // }enum EmployeeType {
// //     FullTime = 50000,
// //     PartTime = 20000,
// //     Contractor = 30000
// // }

// // class Employee {
// //     constructor(public name: string, private type: EmployeeType) {}

// //     getSalary(): number {
// //         return this.type;
// //     }
// // }

// // // Usage
// // const emp1 = new Employee("Alice", EmployeeType.FullTime);
// // console.log(`${emp1.name} earns ${emp1.getSalary()}`);




// // import { IncomingMessage, ServerResponse } from "node:http";

// // type RouteHandelar = (req: IncomingMessage, res: ServerResponse) => void;

// // const routes: Map<string, Map<string, RouteHandelar>> = new Map()

// // function addRoutes(method: string, path: string, handelar: RouteHandelar) {
// //     if (!routes.has(method)) routes.set(method, new Map())
// //     routes.get(method)!.set(path, handelar)
// // }

// // export default addRoutes







// // // Take input from user
// // let name: string | null = prompt("Enter your name:");

// // // Output result
// // if (name) {
// //     console.log("Hello, " + name);
// // } else {
// //     console.log("No name entered.");
// // }

// // import * as readline from "readline";

// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // rl.question("Enter your name: ", (name: string) => {
// //     console.log("Hello, " + name);
// //     rl.close();
// // });


// // type Shape = 
// //     | { kind: "circle"; radius: number }
// //     | { kind: "rectangle"; width: number; height: number };

// // function drawShape(shape: Shape) {
// //     switch (shape.kind) {
// //         case "circle":
// //             console.log(`Drawing a Circle with radius ${shape.radius}`);
// //             break;
// //         case "rectangle":
// //             console.log(`Drawing a Rectangle (${shape.width}x${shape.height})`);
// //             break;
// //     }
// // }enum EmployeeType {
// //     FullTime = 50000,
// //     PartTime = 20000,
// //     Contractor = 30000
// // }

// // class Employee {
// //     constructor(public name: string, private type: EmployeeType) {}

// //     getSalary(): number {
// //         return this.type;
// //     }
// // }

// // // Usage
// // const emp1 = new Employee("Alice", EmployeeType.FullTime);
// // console.log(`${emp1.name} earns ${emp1.getSalary()}`);

// // import dotenv from "dotenv"
// // import path from "path"

// // dotenv.config({ path: path.join(process.cwd(), ".env") })

// // const config = {
// //     env: process.env.NOD_ENV ? Number(process.env.NOD_ENV) :5000,
// //     port:process.env.PORT
// // }

// // export default config
// // export default config

// // type Shape = 
// //     | { kind: "circle"; radius: number }
// //     | { kind: "rectangle"; width: number; height: number };

// // function drawShape(shape: Shape) {
// //     switch (shape.kind) {
// //         case "circle":
// //             console.log(`Drawing a Circle with radius ${shape.radius}`);
// //             break;
// //         case "rectangle":
// //             console.log(`Drawing a Rectangle (${shape.width}x${shape.height})`);
// //             break;
// //     }
// // }enum EmployeeType {
// //     FullTime = 50000,
// //     PartTime = 20000,
// //     Contractor = 30000
// // }

// // class Employee {
// //     constructor(public name: string, private type: EmployeeType) {}

// //     getSalary(): number {
// //         return this.type;
// //     }
// // }

// // // Usage
// // const emp1 = new Employee("Alice", EmployeeType.FullTime);
// // console.log(`${emp1.name} earns ${emp1.getSalary()}`);







// import { readUsers, writeUsers } from "../helpers/fileDb";
// import parseBody from "../helpers/parseBody";
// import addRoutes from "../helpers/RouteHandler";
// import sendJson from "../helpers/sendJson";

// addRoutes("GET", "/", (req, res) => {
//   sendJson(res, 200, {
//     message: "Hello from node js with typescript...",
//     path: req.url,
//   });
// });

// addRoutes("GET", "/api", (req, res) => {
//   sendJson(res, 200, {
//     message: "Health status ok",
//     path: req.url,
//   });
// });

// addRoutes("POST", "/api/users", async (req, res) => {
//   const body = await parseBody(req);

//   // user json read
//   const users = readUsers();

//   const newUser = {
//     ...body,
//   };

//   users?.push(newUser);

//   writeUsers(users);

//   sendJson(res, 201, { success: true, data: body });
// });

// addRoutes("PUT", "/api/users/:id", async (req, res) => {
//   const { id } = (req as any).params;
//   const body = await parseBody(req);

//   const users = readUsers();

//   const index = users.findIndex((user: any) => user.id == id);

//   if (index === -1) {
//     sendJson(res, 404, {
//       success: false,
//       message: "user not found",
//     });
//   }

//   users[index] = {
//     ...users[index],
//     ...body,
//   };

//   writeUsers(users);

//   sendJson(res, 202, {
//     success: true,
//     message: `id ${id} user updated`,
//     data: users[index],
//   });
// });
// import { readUsers, writeUsers } from "../helpers/fileDb";
// import parseBody from "../helpers/parseBody";
// import addRoutes from "../helpers/RouteHandler";
// import sendJson from "../helpers/sendJson";

// addRoutes("GET", "/", (req, res) => {
//   sendJson(res, 200, {
//     message: "Hello from node js with typescript...",
//     path: req.url,
//   });
// });

// addRoutes("GET", "/api", (req, res) => {
//   sendJson(res, 200, {
//     message: "Health status ok",
//     path: req.url,
//   });
// });

// addRoutes("POST", "/api/users", async (req, res) => {
//   const body = await parseBody(req);

//   // user json read
//   const users = readUsers();

//   const newUser = {
//     ...body,
//   };

//   users?.push(newUser);

//   writeUsers(users);

//   sendJson(res, 201, { success: true, data: body });
// });

// addRoutes("PUT", "/api/users/:id", async (req, res) => {
//   const { id } = (req as any).params;
//   const body = await parseBody(req);

//   const users = readUsers();

//   const index = users.findIndex((user: any) => user.id == id);

//   if (index === -1) {
//     sendJson(res, 404, {
//       success: false,
//       message: "user not found",
//     });
//   }

//   users[index] = {
//     ...users[index],
//     ...body,
//   };

//   writeUsers(users);

//   sendJson(res, 202, {
//     success: true,
//     message: `id ${id} user updated`,
//     data: users[index],
//   });
// });







import http, { IncomingMessage, Server, ServerResponse } from "http";
import { parse } from "url";
import config from "./config";
import { routes, RouteHandler } from "./helpers/RouteHandler";
import findDynamicRoute from "./helpers/dynamicRouteHandler";
import "./routes"; // Register all routes

// Helper function to send JSON response
function sendJson(res: ServerResponse, status: number, data: any) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

// Main request handler
const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method?.toUpperCase() || "GET";
  const parsedUrl = parse(req.url || "", true);
  const path = parsedUrl.pathname || "";

  console.log(`[${new Date().toISOString()}] ${method} ${path}`);

  // 1️⃣ Check static routes
  const methodMap = routes.get(method);
  const staticHandler: RouteHandler | undefined = methodMap?.get(path);

  if (staticHandler) {
    try {
      return staticHandler(req, res);
    } catch (err) {
      console.error("Error in static route handler:", err);
      return sendJson(res, 500, { success: false, message: "Internal Server Error" });
    }
  }

  // 2️⃣ Check dynamic routes
  const dynamicMatch = findDynamicRoute(method, path);

  if (dynamicMatch) {
    try {
      // Attach dynamic params to the request object
      (req as IncomingMessage & { params?: any }).params = dynamicMatch.params;
      return dynamicMatch.handler(req, res);
    } catch (err) {
      console.error("Error in dynamic route handler:", err);
      return sendJson(res, 500, { success: false, message: "Internal Server Error" });
    }
  }

  // 3️⃣ Route not found (404)
  console.warn(`Route not found: ${method} ${path}`);
  return sendJson(res, 404, {
    success: false,
    message: "Route not found!",
    path,
  });
};

// Create HTTP server
const server: Server = http.createServer(requestHandler);

// Start server
server.listen(config.port, () => {
  console.log(`🚀 Server is running on port ${config.port}`);
});
