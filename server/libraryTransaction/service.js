const transactionModel = require('./model')
const bookModel = require('../books/model')
const userModel = require('../users/model')

function borrowBook(req){
    return new Promise(async (resolve, reject) => {
        try{
            const{ userId, bookId, dueDate} = req.body;
            const transaction = new transactionModel({
                user: userId,
                book: bookId,
                dueDate: dueDate
            })
            const saveTransaction = await transaction.save();
            if(!saveTransaction){
                return reject({
                    status: 400,
                    error: true,
                    code: "TRANSACTION_CREATE_FAILED",
                    message: "Book borrowed failed",
                  });
            }else{
                const book = await bookModel.updateOne(
                    {_id: bookId},
                    {$set : {"availability" : false}},
                    {upsert: true}
                  )
                  console.log(book,"borrow book")
                return resolve({
                    status: 201,
                    error: false,
                    result: saveTransaction,
                    code: "TRANSACTION_CREATED",
                    message: "Book borrowed successfully",
                  });

            }

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

function getTransaction(req){
    return new Promise(async (resolve, reject) => {
        try{
            const transaction = await transactionModel.find();
            if(!transaction){
                return reject({
                    status: 404,
                    error: true,
                    result: [],
                    code: "TRANSACTION_NOT_FOUND",
                    message: "Transaction not found"
                  })
            }
            return resolve({
                status: 200,
                error: false,
                result: transaction,
                code: "TRANSACTION_FOUND",
                message: "Transaction found successfully"
              })
        }catch(err) {
            return reject({
                status: 500,
                error: true,
                err: error,
                code: "INTERNAL_SERVER_ERROR",
                message: "INTERNAL_SERVER_ERROR"
              })
        }
    })
}


module.exports = {
    borrowBook,
    getTransaction
}