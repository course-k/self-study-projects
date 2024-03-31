import http from 'http';
const server = http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
    res.end('こんにちは');
});
server.listen(8080);
