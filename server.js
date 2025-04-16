const http = require("http");
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
const host = 'localhost';
const port = process.env.port || 8000;

app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html','css']}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
})