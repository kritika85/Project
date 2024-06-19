const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get ('/login', (req,res) => {
    res.send ('<h1>please login with my macbook</h1>')
})

app.get ('/youtube', (req,res) => {
    res.send ("<h2>Kritika Jain</h2>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
