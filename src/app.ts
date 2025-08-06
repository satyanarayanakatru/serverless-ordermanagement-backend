const http = require('http');

const server = http.createServer((req: any, res: any) => {
                res.end("Hello")
})

server.listen(5000, () => {
                console.log("Server is running ");
})