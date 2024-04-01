import express from 'express';

const app = express();

const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    const json = {
        message: 'hello',
        id: 10110,
        flag: true,
        array: ['apple', 'banana'],
        child: {
            key: 'hoge',
            val: 'piyo'
        }
    }
    res.send(json)
});

app.post('/json', (req, res) => {
    const json = req.body;
    console.log(json);
});

app.listen(PORT, () => {
    console.log(`start localhost:${PORT}`);
});