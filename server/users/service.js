const userModel =require('./model');
const md5 = require('md5');

function createUser(req){
    return new Promise(async (resolve, reject) => {
        try{
            const user = await userModel.findOne({
                email: req.body?.email?.toLowerCase(),
            });
            if(user) {
                return reject({
                    status: 403,
                    error: true,
                    code: "USER_EXISTS",
                    message: "User already exists",
                  });
            } else {
                let hashPass = md5(req.body.password);
                const newUser = new userModel({
                    username: req.body.username,
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPass,
                    phone: req.body.phone,
                    role: req.body.role
                });
                const savedUser = await newUser.save();
                if (!savedUser) {
                    return reject({
                      status: 400,
                      error: true,
                      code: "USER_CREATE_FAILED",
                      message: "User create failed",
                    });
                  } else {
                    return resolve({
                      status: 201,
                      error: false,
                      result: req.body,
                      code: "USER_CREATED",
                      message: "User created successfully",
                    });
                  }
            }
        } catch(error){
            return reject({
                status: 500,
                error: true,
                // err: err,
                code: "INTERNAL_SERVER_ERROR",
                message: "Internal server error",
              });
        }
    })
}

function login(req){
    return new Promise(async (resolve, reject) => {
        try{
            const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({
          email: email,
        });
        if (!user) {
            return reject({
              status: 400,
              error: true,
              code: "USER_NOT_FOUND",
              message: "User not found",
            });
        }
        // Check if password is correct
        if(user?.password !== md5(password)){
            return reject({
                status: 400,
                error: true,
                code: "INCORRECT_PASSWORD",
                message: "Incorrect password",
              });
        }
        return resolve({
            error: false,
            status: 200,
            result: {
                userId: user._id,
                username: user.username,
                name: user.name,
                email: user.email?.toLowerCase(),
                phone: user.phone,
                role: user.role,
            },
            code: "LOGIN_SUCCESSFUL",
            message: "Login successful",    
        });
        }catch(err){
            console.error(err,"login error")
            return reject({
                error: true,
                status: 500,
                err: err,
                code: "INTERNAL_SERVER_ERROR",
                message: "INTERNAL_SERVER_ERROR",
              });
        }
    })
}

function allUsers(req){
    return new Promise(async (resolve, reject) => {
        try{
            const user = await userModel.find();
            if(!user){
                return reject({
                  status: 404,
                  error: true,
                  result: [],
                  code: "USER_NOT_FOUND",
                  message: "User not found"
                })
              }
              return resolve({
                status: 200,
                error: false,
                result: user,
                code: "USER_FOUND",
                message: "User found"
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
    createUser,
    login,
    allUsers
}