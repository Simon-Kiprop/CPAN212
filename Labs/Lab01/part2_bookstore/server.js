const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'pages', 'homepage.html');  

    if (req.url !== "/") {
        filePath = path.join(__dirname, 'pages', 'homepage.html');  
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error 500 - Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
