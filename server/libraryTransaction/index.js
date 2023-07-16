const express = require('express')
const router = express.Router();
const {borrowBook,getTransaction} = require('./service.js')

router.post('/', function(req, res) {
    borrowBook(req)
    .then((result) => res.status(result.status).send({
        error: result.error,
        result: result.result,
        code: result.code,
        message: result.message
    })).catch((err) => res.status(err.status).send({
        error: err.error,
        err: err.err,
        code: err.code,
        message: err.message
    }))
})

router.get('/', function(req, res) {
    getTransaction(req)
    .then((result) => res.status(result.status).send({
        error: result.error,
        result: result.result,
        code: result.code,
        message: result.message
    })).catch((err) => res.status(err.status).send({
        error: err.error,
        err: err.err,
        code: err.code,
        message: err.message
    }))
})


module.exports = router;

