const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const dbconnect = require('./db/dbconnect');
const userRoute = require('./routes/user.route');
const songRoute = require('./routes/song.route');
const cors = require('cors');
const publicDir = path.join(__dirname, 'public');
const allowedOrigins = new Set([
  'http://localhost:5173',
  'https://moodify-ou8b.onrender.com',
]);

app.use(express.static(publicDir));
app.use(cors({
    origin(origin, callback) {
      // Allow same-origin/server requests and approved browser origins.
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
dbconnect();
app.use('/api/users', userRoute);
app.use('/api/songs', songRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});
module.exports = app;
