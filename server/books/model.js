const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    availability: {
        type: Boolean,
    },   
},{timestamps: true})

module.exports = mongoose.model('books',bookSchema);