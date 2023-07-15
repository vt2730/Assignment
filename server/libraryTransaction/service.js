const transactionModel = require('./model')
const bookModel = require('../books/model')
const userModel = require('../users/model')

function borrowBook(req){
    return new Promise(async (resolve, reject) => {
        try{
            const{ userId, bookId, dueDate} = req.body;

            const user = await userModel.findById(userId);
            const book = await bookModel.findById(bookId);
            if(!user || !book){
                return reject({
                    status: 404,
                    error: true,
                    code: "BOOKS_USER_NOT_FOUND",
                    message: "Books not found"
                  })
            }
            let currDate = new Date()
            const transaction = new transactionModel({
                user: user?._id,
                book: book?._id,
                dueDate: currDate.setDate(currDate.getDate() + dueDate)
            })
            const saveTransaction = await transaction.save();
            if(!saveTransaction){
                return reject({
                    status: 400,
                    error: true,
                    code: "TRANSACTION_CREATE_FAILED",
                    message: "Transaction create failed",
                  });
            }else{
                return resolve({
                    status: 201,
                    error: false,
                    result: saveTransaction,
                    code: "TRANSACTION_CREATED",
                    message: "Transaction created successfully",
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


module.exports = {
    borrowBook
}