const express = require('express');
const router = express.Router();
const songController = require('../controller/song.controller');
const upload = require('../middleware/upload.middleware');

router.post('/uploadsong', upload.single('song'), songController.uploadSong);
router.get('/getsong', songController.getSong);

module.exports = router;
