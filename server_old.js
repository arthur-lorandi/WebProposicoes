const http = require("http");
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const url = require('url');

const host = 'localhost';
const port = 8000;

let indexFile;
let faviconPath = path.join(__dirname, 'assets', 'icon.ico');

const showBodyPage = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(function(req, res) {
    fsp.appendFile(__dirname + "/log.txt", `${req.method} : ${req.url}\n`);
    if(req.method == 'GET' && req.url == '/assets/icon.ico'){
        res.setHeader("Content-Type", "image/x-icon");
        fs.createReadStream(faviconPath).pipe(res);
    }else{
        showBodyPage(req, res);
    }
});

fsp.readFile(__dirname + "/assets/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
})
.catch(err => {
    console.error(`Not able to read index.html file: ${err}`);
    fsp.appendFile(__dirname + "/log.txt", `${Date.now()} : ${err}`);
    process.exit(1);
});
