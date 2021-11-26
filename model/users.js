const mongoose = require('mongoose');

const userObject = {
    name: {
        type: String,
        index: true,
        minlength: 2,
        maxlength: 255
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024
    },
    email: {
        type: String,
        minlength: 2,
        maxlength: 255,
        unique: true
    },
    image: {
        type: String,
        minlength: 2,
        maxlength: 1024
    }
}

const userSchema = mongoose.Schema(userObject);

const user = mongoose.model('User', userSchema);

module.exports = user;