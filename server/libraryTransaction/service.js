const transactionModel = require('./model')

function borrowBook(req){
    return new Promise(async (resolve, reject) => {
        try{

        }catch(error){
            return reject({
                status: 500,
                error: true,
                err: error,
                code: "INTERNAL_SERVER_ERROR",
                message: "INTERNAL_SERVER_ERROR",
              });
        }
    })
}


module.exports = {
    borrowBook
}