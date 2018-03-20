import express = require('express');
var http = require('http');
const app = express();
var serv = http.createServer(app);

app.get('/', (req, res) => {

    res.json({message: "Hello World"});

});


export function getServer() {
    const server = serv.listen(3000, () => {
        console.log(`App listening on port 3000!`);
    });

    return server;
}

getServer();