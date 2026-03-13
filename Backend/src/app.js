const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const dbconnect = require('./db/dbconnect');
const userRoute = require('./routes/user.route');
const songRoute = require('./routes/song.route');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
dbconnect();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/users', userRoute);
app.use('/api/songs', songRoute);

module.exports = app;
