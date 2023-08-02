const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;