import http from "http";

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //     res.writeHead(200, { 'content-type': 'text/plain' });
  //     res.end("Hello, I am from Home Page");
  // }
  // else if (req.url === "/about") {
  //     res.writeHead(200, { 'content-type': 'text/plain' });
  //     res.end("Hello, I am from About Page");
  // }

  // Submitting a form data using POST method.
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    // console.log(req);

    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });
    req.on("end", () => {
      console.log(JSON.parse(body));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Form data received successfully!" }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Submission failed" }));
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
