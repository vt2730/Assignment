const express = require('express')
const router = express.Router();

const bookRoute = require('../books');
const userRoute = require('../users');
const transactionRoute = require('../libraryTransaction');

router.use("/users", userRoute);
router.use('/books', bookRoute);
router.use('/transactions', transactionRoute)

module.exports = router;