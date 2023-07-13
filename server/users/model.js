import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    created_at: {
        type: Number,
        default: Date.now(),
    },
    updated_at: {
        type: Number,
        default: Date.now(),
    },
});

export default mongoose.model("users", userSchema);
