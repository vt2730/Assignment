const express = require('express')
const router = express.Router();
const {createUser, login} = require('./service.js')

router.post('/', function(req,res){
    createUser(req)
    .then((result) => {
        res.status(result.status).send({
            error: result.error,
            result: result.result,
            code: result.code,
            message: result.message
        })
    }).catch((err) => {
        res.status(err.status).send({
            error: err.error,
            err: err.err,
            code: err.code,
            message: err.message
        })
    })
})


router.post('/login', function(req,res){
    login(req)
    .then((result) => {
        res.status(result.status).send({
            error: result.error,
            result: result.result,
            code: result.code,
            message: result.message
        })
    }).catch((err) => {
        res.status(err.status).send({
            error: err.error,
            err: err.err,
            code: err.code,
            message: err.message
        })
    })
})

module.exports = router;