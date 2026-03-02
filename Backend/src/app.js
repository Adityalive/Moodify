const express = require('express');
const app = express();
const dbconnect = require('./db/dbconnect');

app.use(express.json());
dbconnect();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
