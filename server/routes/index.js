const express = require('express')
const router = express.Router();

const bookRoute = require('../books');

router.use('/books', bookRoute);

module.exports = router;