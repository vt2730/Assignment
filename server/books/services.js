const booksModel = require('./model');

function create(req){
    return new Promise(async (resolve, reject) => {
        try {
          const {name, author,availability, role} = req.body;
          if(role !== 'admin'){
            return reject({
              status: 401,
              error: true,
              code: "UNAUTHORIZED",
              message: "user is not allowed to create book",
            });
          }else{
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
                code: "BOOK_CREATE_FAILED",
                message: "Book creation failed",
              });
            } else {
              return resolve({
                status: 201,
                error: false,
                result: savedItem,
                code: "BOOK_CREATED",
                message: "Book created successfully"
              });
            }
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