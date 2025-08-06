"use strict";
const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello");
});
server.listen(6000, () => {
    console.log("Server is running ");
});
