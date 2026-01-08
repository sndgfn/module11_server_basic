"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    console.log("server is running");
    if (req.url == '/' && req.method == "get") {
        res.writeHead(200, { "content-type": "apalication/json" });
        res.end(JSON.stringify({
            messege: "hello from nodejs with typeScript.....",
            path: req.url
        }));
    }
});
server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
});
