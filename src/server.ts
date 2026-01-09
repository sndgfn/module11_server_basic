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
        //health route
        if (req.url == '/api' && req.method == "GET") {
            res.writeHead(200, { "appalication/json": "apalication/json" });
            res.end(
                JSON.stringify({
                    messege: "health status ok",
                    path: req.url
                })
            )
        }
        if (req.url == "/api/users" && req.method == "POST") {
            // const user={
            //     id:1,
            //     name:"alice"
            // }
            //  res.writeHead(200, { "appalication/json": "apalication/json" });
            // res.end(
            //     JSON.stringify(user)
            // )
            let body = "";

            //listen for data chunk
            req.on("data", chunk => {
                body += chunk.toSting();
            })
            req.on("end", () => {
             try{
                   const parsBody = JSON.parse(body);
                console.log(parsBody);
                console.log('catching current changes');
                res.end(JSON.stringify(parsBody))
                // res.end(body)
             }catch(err:any){
                console.log(err?.messege);
             }
            });
        }
    }
)

server.listen(5000, () => {
    console.log(`server is running on port ${5000}`);
})