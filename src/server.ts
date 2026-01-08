import http, { IncomingMessage, Server, ServerResponse } from "http";

const server: Server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        console.log("server is running");

        if (req.url == '/' && req.method == "get") {
            res.writeHead(200, { "content-type": "apalication/json" });
            res.end(
                JSON.stringify({
                    messege: "hello from nodejs with typeScript.....",
                    path: req.url
                })
            )
        }
    }
)

server.listen(config.port , () => {
    console.log(`server is running on port ${config.port}`);
})