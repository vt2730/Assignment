const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const libraryTransaction = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "books",
    },
    transactionType: {
        type: String,
        default: "borrow",
        enum: ["borrow", "return"],
    },
    dueDate: {
        type: String,
        default: Date.now(),
    }
},{timestamps: true});

libraryTransaction.pre("save", function (next) {
    this.populate("user")
    this.populate("book")
    next()
})

libraryTransaction.pre("find", function (next) {
    this.populate("user")
    this.populate("book")
    next()
})

libraryTransaction.pre("findOne", function (next) {
    this.populate("user")
    this.populate("book")
    next()
})

module.exports = mongoose.model("libraryTransaction", libraryTransaction);
