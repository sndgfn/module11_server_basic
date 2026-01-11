// import http, { IncomingMessage, Server, ServerResponse } from "http";
// import config from "./config";
// import { RouteHandler, routes } from "./helpers/RouteHandler";
// import "./routes";
// import findDynamicRoute from "./helpers/dynamicRouteHandler";

// const server: Server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse) => {
//     const method = req.method?.toUpperCase() || "";
//     const path = req.url || "";

//     const methodMap = routes.get(method);
//     const handler: RouteHandler | undefined = methodMap?.get(path);

//     if (handler) {
//       handler(req, res);
//     } else if (findDynamicRoute(method, path)) {
//       const match = findDynamicRoute(method, path);
//       (req as any).params = match?.params;
//       match?.handler(req, res);
//     } else {
//       res.writeHead(404, { "content-type": "application/json" });
//       res.end(
//         JSON.stringify({
//           success: false,
//           message: "Route not found!!!",
//           path,
//         })
//       );
//     }
//   }
// );

// server.listen(config.port, () => {
//   console.log(`server is running on port ${config.port}`);
// });






import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/RouteHandler";
import "./routes";
import findDynamicRoute from "./helpers/dynamicRouteHandler";
import { parse } from "url";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase() || "";

    // Parse URL to remove query string
    const parsedUrl = parse(req.url || "", true);
    const path = parsedUrl.pathname || "";

    // Static routes
    const methodMap = routes.get(method);
    const staticHandler: RouteHandler | undefined = methodMap?.get(path);

    if (staticHandler) {
      return staticHandler(req, res);
    }

    // Dynamic routes (called ONCE)
    const dynamicMatch = findDynamicRoute(method, path);

    if (dynamicMatch) {
      (req as IncomingMessage & { params?: any }).params =
        dynamicMatch.params;
      return dynamicMatch.handler(req, res);
    }

    // 404 response
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Route not found!",
        path,
      })
    );
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
