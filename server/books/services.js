const booksModel = require('./model');

function create(req){
    return new Promise(async (resolve, reject) => {
        try {
          const {name, author,availability} = req.body;
          const newItem = new booksModel({
            name,
            author,
            availability,
          });
  
          const savedItem = await newItem.save();
  
          if (!savedItem) {
            return reject({
              status: 400,
              error: true,
              code: "ITEM_CREATE_FAILED",
              message: "ITEM_CREATE_FAILED",
            });
          } else {
            return resolve({
              status: 201,
              error: false,
              result: savedItem,
              code: "ITEM_CREATED",
              message: "ITEM_CREATED"
            });
          }
        } catch (error) {
          console.error(error, "<<-- error in item create");
          return reject({
            status: 500,
            error: true,
            err: error,
            code: "INTERNAL_SERVER_ERROR",
            message: "INTERNAL_SERVER_ERROR",
          });
        }
      });
}

function deleteBook(req){
  return new Promise(async (resolve, reject) => {
    try{
      await booksModel.findByIdAndDelete(req.params.id);
        return resolve({
          status: 200,
          error: false,
          code: "BOOK_DELETED",
          message: "BOOK_DELETED"
        })
    }catch(error){
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

function getBooks(req){
  return new Promise(async (resolve, reject) => {
    try{
      const books = await booksModel.find();
      if(!books){
        return reject({
          status: 404,
          error: true,
          result: [],
          code: "BOOKS_NOT_FOUND",
          message: "BOOKS_NOT_FOUND"
        })
      }
      return resolve({
        status: 200,
        error: false,
        result: books,
        code: "BOOKS_FOUND",
        message: "BOOKS_FOUND"
      })
    }catch(error){
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
    create,
    deleteBook,
    getBooks
}