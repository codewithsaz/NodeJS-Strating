const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Saz Cherukat")
});

server.listen(4000);