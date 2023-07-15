const express = require('express')
const router = express.Router();
const {create, deleteBook, getBooks} = require('./services.js')

router.post('/', function(req, res){
    create(req)
    .then((result) =>
            res.status(result.status).send({
                error: result.error,
                result: result.result,
                code: result.code,
                message: result.message,
            })
        )
        .catch((err) =>
            res.status(err.status).send({
                error: err.error,
                err: err.err,
                code: err.code,
                message: err.message,
            })
        );
});


router.delete("/:id", function(req, res) {
    deleteBook(req)
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
    getBooks(req)
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