import { IncomingMessage, ServerResponse } from "node:http";

type RouteHandelar = (req: IncomingMessage, res: ServerResponse) => void;

const routes: Map<string, Map<string, RouteHandelar>> = new Map()

function addRoutes(method: string, path: string, handelar: RouteHandelar) {
    if (!routes.has(method)) routes.set(method, new Map())
    routes.get(method)!.set(path, handelar)
}

export default addRoutes