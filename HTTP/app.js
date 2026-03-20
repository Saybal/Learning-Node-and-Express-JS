import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello, I am from server");
})

server.listen(5000, () => {
    console.log("Server is running on port 5000");
})