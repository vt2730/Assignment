const express = require('express')
const router = express.Router();

const bookRoute = require('../books');
const userRoute = require('../users');

router.use("/users", userRoute);
router.use('/books', bookRoute);

module.exports = router;