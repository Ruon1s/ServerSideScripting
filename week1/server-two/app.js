'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/pug', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Frank',
        age: 6,
        weight: 5,
    };
    res.json(cat);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
});
