const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    const url = req.url;
    if (url === "/home") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Home Page</title></head><body><h1>Hello this is "Home" page body</h1></body></html>');
        return res.end();
    } else if (url === "/about") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>About Page</title></head><body><h1>Hello this is "About" page body</h1></body></html>');
        return res.end();
    } else if (url === "/node") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Node Page</title></head><body><h1>Hello this is "NODE" page body</h1></body></html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Demo Page</title></head><body><h1>Hello this is demo page body</h1></body></html>');
    res.end();
});

server.listen(4000);