const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ //name, pass, email, phone number;
    name: {
        type: String,
        required: true,
        trim: true
    },
    pass: {
        type: String,
        required: true,
    },
    passSalt : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isEmailConfirmed: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String
    },
    isActive:{
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('user', userSchema);