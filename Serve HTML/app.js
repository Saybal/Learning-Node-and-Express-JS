import http from 'http';
import file from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    
    const filePath = path.join(__dirname, 'index.html');
    const content = file.readFileSync(filePath, "utf-8");

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
});

server.listen(5000, () => {
    console.log("Server is running in port 5000");
    
})