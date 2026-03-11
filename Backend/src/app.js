require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const dbconnect = require('./db/dbconnect');
const userRoute = require('./routes/user.route');
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

module.exports = app;
