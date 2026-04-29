// Import the built-in HTTP module from Node.js
// This module allows us to create web servers
const http = require('http');

// Define the port number
const PORT = 3000;

// Create the server
// createServer() takes a callback function with request and response objects
const server = http.createServer((req, res) => {

    // req -> contains information about client request
    // res -> used to send response back to client

    console.log("Request Method:", req.method); // shows GET, POST etc
    console.log("Request URL:", req.url);       // shows which page user requested

    // Set HTTP response header
    // 200 = success status
    // content-type tells browser what type of data we are sending
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response to browser
    res.end("Hello! This is my Tiny HTTP Server using Node.js");
});

// Start the server and listen on given port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});