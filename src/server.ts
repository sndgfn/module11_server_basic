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
