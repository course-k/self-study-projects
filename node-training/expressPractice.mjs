import express, { urlencoded } from "express";

const PORT = 8080;

const app = express();
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`app start http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('response');
});

app.get('/get', (req, res) => {
    console.log(req.query);
    res.send('get request');
});

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('post requset');
})