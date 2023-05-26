const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Enter Message</title></head><body><h1>Enter message here</h1> <form action="/message" method="post"><input type="text" name="message"><button type="submit">SEND</button></form></body></html>');
        return res.end();
    }
    if (url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)

        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.text', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });

        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Demo Page</title></head><body><h1>Hello this is demo page body</h1></body></html>');
    res.end();
});

server.listen(4000);