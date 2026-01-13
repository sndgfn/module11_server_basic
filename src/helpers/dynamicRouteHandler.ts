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


// import { routes } from "./RouteHandler";

// function findDynamicRoute(method: string, url: string) {
//   const methodMap = routes.get(method);
//   if (!methodMap) return null;

//   for (const [routePath, handler] of methodMap.entries()) {
//     // "/api/users/:id" --> ["api", "users", ":id"]
//     const routeParts = routePath.split("/");
//     // "/api/users/1" --> ["api", "users", "10"]
//     const urlParts = url.split("/");

//     if (routeParts.length !== urlParts.length) continue;

//     const params: any = {}; //{id: 2}
//     let matched = true;

//     // "/api/users/:id"
//     for (let i = 0; i < routeParts.length; i++) {
//       if (routeParts[i]?.startsWith(":")) {
//         params[routeParts[i]?.substring(1)!] = urlParts[i]; // {id:1}
//       } else if (routeParts[i] !== urlParts[i]) {
//         matched = false;
//         break;
//       }
//     }

//     if (matched) {
//       return { handler, params };
//     }
//   }

//   return null;
// }

// export default findDynamicRoute;

import { routes } from "./RouteHandler";

type DynamicRouteMatch = {
  handler: Function;
  params: Record<string, string>;
};

function findDynamicRoute(
  method: string,
  path: string
): DynamicRouteMatch | null {
  const methodMap = routes.get(method);
  if (!methodMap) return null;

  // Normalize path: remove leading/trailing slashes
  const urlParts = path.split("/").filter(Boolean);

  for (const [routePath, handler] of methodMap.entries()) {
    const routeParts = routePath.split("/").filter(Boolean);

    if (routeParts.length !== urlParts.length) continue;

    const params: Record<string, string> = {};
    let matched = true;

    for (let i = 0; i < routeParts.length; i++) {
      const routeSegment = routeParts[i];
      const urlSegment = urlParts[i];

      if (routeSegment.startsWith(":")) {
        const paramName = routeSegment.slice(1);
