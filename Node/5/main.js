const express = require('express');
const blog = require('./routes/blog');
const shop = require('./routes/shop');
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/blog', blog);
app.use('/shop', shop);

app.get('/', (req, res) => {
    console.log('Get: Request: ')
    res.send('GET: Hellooooooow World!');
});

app.post('/', (req, res) => {
    console.log('Post: Request: ')
    res.send('POST: Hellooooooow World!');
});

app.put('/', (req, res) => {
    console.log('put: Request: ')
    res.send('put: Hellooooooow World!');
});

app.get("/index", (req, res) => {
    console.log('index file h ')
    res.sendFile('templates/index.html', {root: __dirname});
});

app.get("/api", (req, res) => {
    res.json({a: 2, b: 1, c: 123})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});