require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const dbconnect = require('./db/dbconnect');
const userRoute = require('./routes/user.route');
app.use(express.json());
app.use(cookieParser());
dbconnect();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/users', userRoute);

module.exports = app;
