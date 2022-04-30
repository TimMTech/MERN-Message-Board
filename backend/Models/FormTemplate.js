const mongoose = require('mongoose')

const formTemplate = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('formtable', formTemplate)