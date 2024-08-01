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
    email: String,
    name: String,
    room: {
            active: Boolean,
            startDate: Date,
            endDate: Date
    },
    sports: {
            plan: Boolean,
            time: String,
            startDate: Date,
    }
})

module.exports = mongoose.model('User', user)