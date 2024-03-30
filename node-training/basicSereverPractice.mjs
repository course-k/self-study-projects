import http from 'http';
const server = http.createServer(function (req, res) {
    console.log(req);
    res.end('response done');
});
server.listen(8080);
