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
    rres.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Authorization, Accept"
    );
    if (req.method === "OPTIONS") {
        return res.status(204).end();
    }
    console.log('hoge');
    const json = req.body;
    console.log(json);
    res.json({ msg: 'success' });
});

app.listen(PORT, () => {
    console.log(`start localhost:${PORT}`);
});