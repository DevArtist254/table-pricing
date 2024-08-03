const http = require("http");
const fs = require('fs');
const port = 5050;

http.createServer(function(req, res) {
    console.log(`Server is set at localhost:${port}...`);
    
    fs.readFile("./src/index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    })
    
}).listen(port);



