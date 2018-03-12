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
    phoneNumber: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema);