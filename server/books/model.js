import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    availabilityStatus: {
        type: Boolean,
    },
    created_at: {
        type: Number,
        default: Date.now(),
    },
    updated_at: {
        type: Number,
        default: Date.now(),
    },
})

export default mongoose.model('books',bookSchema);