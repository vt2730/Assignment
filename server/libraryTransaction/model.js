import * as mongoose from "mongoose";

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
        type: Number,
        default: Date.now(),
    }
});

export default mongoose.model("libraryTransaction", libraryTransaction);
