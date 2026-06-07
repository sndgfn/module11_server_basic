// // // // import fs from "fs"
// // // // import path from 'path'
// // // // const filePath = path.join(process.cwd(), "../src/data/users.json")

// // // // export function readUsers() {
// // // //     const data = fs.readFileSync(filePath, "utf-8")
// // // //     return JSON.parse(data)
// // // // }

// // // // export function writeUsers(users: any) {
// // // //     fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
// // // // }








// // // import { readUsers, writeUsers } from "../helpers/fileDb";
// // // import parseBody from "../helpers/parseBody";
// // // import addRoutes from "../helpers/RouteHandler";
// // // import sendJson from "../helpers/sendJson";

// // // addRoutes("GET", "/", (req, res) => {
// // //   sendJson(res, 200, {
// // //     message: "Hello from node js with typescript...",
// // //     path: req.url,
// // //   });
// // // });

// // // addRoutes("GET", "/api", (req, res) => {
// // //   sendJson(res, 200, {
// // //     message: "Health status ok",
// // //     path: req.url,
// // //   });
// // // });

// // // addRoutes("POST", "/api/users", async (req, res) => {
// // //   const body = await parseBody(req);

// // //   // user json read
// // //   const users = readUsers();

// // //   const newUser = {
// // //     ...body,
// // //   };

// // //   users?.push(newUser);

// // //   writeUsers(users);

// // //   sendJson(res, 201, { success: true, data: body });
// // // });

// // // addRoutes("PUT", "/api/users/:id", async (req, res) => {
// // //   const { id } = (req as any).params;
// // //   const body = await parseBody(req);

// // //   const users = readUsers();

// // //   const index = users.findIndex((user: any) => user.id == id);

// // //   if (index === -1) {
// // //     sendJson(res, 404, {
// // //       success: false,
// // //       message: "user not found",
// // //     });
// // //   }

// // //   users[index] = {
// // //     ...users[index],
// // //     ...body,
// // //   };

// // //   writeUsers(users);

// // //   sendJson(res, 202, {
// // //     success: true,
// // //     message: `id ${id} user updated`,
// // //     data: users[index],
// // //   });
// // // });
// // // import { readUsers, writeUsers } from "../helpers/fileDb";
// // // import parseBody from "../helpers/parseBody";
// // // import addRoutes from "../helpers/RouteHandler";
// // // import sendJson from "../helpers/sendJson";

// // // addRoutes("GET", "/", (req, res) => {
// // //   sendJson(res, 200, {
// // //     message: "Hello from node js with typescript...",
// // //     path: req.url,
// // //   });
// // // });

// // // addRoutes("GET", "/api", (req, res) => {
// // //   sendJson(res, 200, {
// // //     message: "Health status ok",
// // //     path: req.url,
// // //   });
// // // });

// // // addRoutes("POST", "/api/users", async (req, res) => {
// // //   const body = await parseBody(req);

// // //   // user json read
// // //   const users = readUsers();

// // //   const newUser = {
// // //     ...body,
// // //   };

// // //   users?.push(newUser);

// // //   writeUsers(users);

// // //   sendJson(res, 201, { success: true, data: body });
// // // });

// // // addRoutes("PUT", "/api/users/:id", async (req, res) => {
// // //   const { id } = (req as any).params;
// // //   const body = await parseBody(req);

// // //   const users = readUsers();

// // //   const index = users.findIndex((user: any) => user.id == id);

// // //   if (index === -1) {
// // //     sendJson(res, 404, {
// // //       success: false,
// // //       message: "user not found",
// // //     });
// // //   }

// // //   users[index] = {
// // //     ...users[index],
// // //     ...body,
// // //   };

// // //   writeUsers(users);

// // //   sendJson(res, 202, {
// // //     success: true,
// // //     message: `id ${id} user updated`,
// // //     data: users[index],
// // //   });
// // // });






// // import http, { IncomingMessage, Server, ServerResponse } from "http";
// // import { parse } from "url";
// // import config from "./config";
// // import { routes, RouteHandler } from "./helpers/RouteHandler";
// // import findDynamicRoute from "./helpers/dynamicRouteHandler";
// // import "./routes"; // Register all routes

// // // Helper function to send JSON response
// // function sendJson(res: ServerResponse, status: number, data: any) {
// //   res.writeHead(status, { "Content-Type": "application/json" });
// //   res.end(JSON.stringify(data));
// // }

// // // Main request handler
// // const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
// //   const method = req.method?.toUpperCase() || "GET";
// //   const parsedUrl = parse(req.url || "", true);
// //   const path = parsedUrl.pathname || "";

// //   console.log(`[${new Date().toISOString()}] ${method} ${path}`);

// //   // 1️⃣ Check static routes
// //   const methodMap = routes.get(method);
// //   const staticHandler: RouteHandler | undefined = methodMap?.get(path);

// //   if (staticHandler) {
// //     try {
// //       return staticHandler(req, res);
// //     } catch (err) {
// //       console.error("Error in static route handler:", err);
// //       return sendJson(res, 500, { success: false, message: "Internal Server Error" });
// //     }
// //   }

// //   // 2️⃣ Check dynamic routes
// //   const dynamicMatch = findDynamicRoute(method, path);

// //   if (dynamicMatch) {
// //     try {
// //       // Attach dynamic params to the request object
// //       (req as IncomingMessage & { params?: any }).params = dynamicMatch.params;
// //       return dynamicMatch.handler(req, res);
// //     } catch (err) {
// //       console.error("Error in dynamic route handler:", err);
// //       return sendJson(res, 500, { success: false, message: "Internal Server Error" });
// //     }
// //   }

// //   // 3️⃣ Route not found (404)
// //   console.warn(`Route not found: ${method} ${path}`);
// //   return sendJson(res, 404, {
// //     success: false,
// //     message: "Route not found!",
// //     path,
// //   });
// // };

// // // Create HTTP server
// // const server: Server = http.createServer(requestHandler);

// // // Start server
// // server.listen(config.port, () => {
// //   console.log(`🚀 Server is running on port ${config.port}`);
// // });












// import http, { IncomingMessage, Server, ServerResponse } from "http";
// import { parse } from "url";
// import config from "./config";
// import { routes, RouteHandler } from "./helpers/RouteHandler";
// import findDynamicRoute from "./helpers/dynamicRouteHandler";
// import "./routes"; // Register all routes

// // Helper function to send JSON response
// function sendJson(res: ServerResponse, status: number, data: any) {
//   res.writeHead(status, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// }

// // Main request handler
// const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
//   const method = req.method?.toUpperCase() || "GET";
//   const parsedUrl = parse(req.url || "", true);
//   const path = parsedUrl.pathname || "";

//   console.log(`[${new Date().toISOString()}] ${method} ${path}`);

//   // 1️⃣ Check static routes
//   const methodMap = routes.get(method);
//   const staticHandler: RouteHandler | undefined = methodMap?.get(path);

//   if (staticHandler) {
//     try {
//       return staticHandler(req, res);
//     } catch (err) {
//       console.error("Error in static route handler:", err);
//       return sendJson(res, 500, { success: false, message: "Internal Server Error" });
//     }
//   }

//   // 2️⃣ Check dynamic routes
//   const dynamicMatch = findDynamicRoute(method, path);

//   if (dynamicMatch) {
//     try {
//       // Attach dynamic params to the request object
//       (req as IncomingMessage & { params?: any }).params = dynamicMatch.params;
//       return dynamicMatch.handler(req, res);
//     } catch (err) {
//       console.error("Error in dynamic route handler:", err);
//       return sendJson(res, 500, { success: false, message: "Internal Server Error" });
//     }
//   }

//   // 3️⃣ Route not found (404)
//   console.warn(`Route not found: ${method} ${path}`);
//   return sendJson(res, 404, {
//     success: false,
//     message: "Route not found!",
//     path,
//   });
// };

// // Create HTTP server
// const server: Server = http.createServer(requestHandler);

// // Start server
// server.listen(config.port, () => {
//   console.log(`🚀 Server is running on port ${config.port}`);
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
