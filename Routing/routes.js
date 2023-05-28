const fs = require('fs');


const fileHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {

        fs.readFile('message.txt', 'utf8', (err, data) => {
            const html = `<html><head><title>Enter Message</title></head><body><pre style="color:blue;">${data}</pre><h2>Enter next message here</h2> <form action="/message" method="post"><input type="text" name="message"><button type="submit">SEND</button></form></body></html>`;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    }

    if (url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)

        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1].split('+').join(' ');
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();

        });

    }
};

module.exports = fileHandler;