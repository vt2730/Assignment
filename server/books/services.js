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

module.exports = {
    create
}