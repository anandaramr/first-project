const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    email: {
        type: String,
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('User', user)