const express = require('express');

var server = express();

server.get('/', async function(req, res) {
    res.send(200);
});
server.post('/', async function(req, res) {
    res.send(200);
});

module.exports = server;

server.listen(80);
console.log('Express started on port 80');