
// import dotenv from "dotenv"
// import path from "path"

// dotenv.config({ path: path.join(process.cwd(), ".env") })

// const config = {
//     env: process.env.NOD_ENV ? Number(process.env.NOD_ENV) :5000,
//     port:process.env.PORT
// }

// export default config
// export default config

// type Shape = 
//     | { kind: "circle"; radius: number }
//     | { kind: "rectangle"; width: number; height: number };

// function drawShape(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             console.log(`Drawing a Circle with radius ${shape.radius}`);
//             break;
//         case "rectangle":
//             console.log(`Drawing a Rectangle (${shape.width}x${shape.height})`);
//             break;
//     }
// }enum EmployeeType {
//     FullTime = 50000,
//     PartTime = 20000,
//     Contractor = 30000
// }

// class Employee {
//     constructor(public name: string, private type: EmployeeType) {}

//     getSalary(): number {
//         return this.type;
//     }
// }

// // Usage
// const emp1 = new Employee("Alice", EmployeeType.FullTime);
// console.log(`${emp1.name} earns ${emp1.getSalary()}`);







import { readUsers, writeUsers } from "../helpers/fileDb";
import parseBody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, {
    message: "Hello from node js with typescript...",
    path: req.url,
  });
});

addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, {
    message: "Health status ok",
    path: req.url,
  });
});

addRoutes("POST", "/api/users", async (req, res) => {
  const body = await parseBody(req);

  // user json read
  const users = readUsers();

  const newUser = {
    ...body,
  };

  users?.push(newUser);

  writeUsers(users);

  sendJson(res, 201, { success: true, data: body });
});

addRoutes("PUT", "/api/users/:id", async (req, res) => {
  const { id } = (req as any).params;
  const body = await parseBody(req);

  const users = readUsers();

  const index = users.findIndex((user: any) => user.id == id);

  if (index === -1) {
    sendJson(res, 404, {
      success: false,
      message: "user not found",
    });
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  writeUsers(users);

  sendJson(res, 202, {
    success: true,
    message: `id ${id} user updated`,
    data: users[index],
  });
});
import { readUsers, writeUsers } from "../helpers/fileDb";
import parseBody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, {
    message: "Hello from node js with typescript...",
    path: req.url,
  });
});

addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, {
    message: "Health status ok",
    path: req.url,
  });
});

addRoutes("POST", "/api/users", async (req, res) => {
  const body = await parseBody(req);

  // user json read
  const users = readUsers();

  const newUser = {
    ...body,
  };

  users?.push(newUser);

  writeUsers(users);

  sendJson(res, 201, { success: true, data: body });
});

addRoutes("PUT", "/api/users/:id", async (req, res) => {
  const { id } = (req as any).params;
  const body = await parseBody(req);

  const users = readUsers();

  const index = users.findIndex((user: any) => user.id == id);

  if (index === -1) {
    sendJson(res, 404, {
      success: false,
      message: "user not found",
    });
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  writeUsers(users);

  sendJson(res, 202, {
    success: true,
    message: `id ${id} user updated`,
    data: users[index],
  });
});