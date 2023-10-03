const mongoose = require("mongoose");
// How to create a model
// Step 1 :require mongoose
// Step 2 :Create a mongoose schema (structure of a user)
// Step 3 : Create a model

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs: {
        // We will change this to array later
        type: String,
        default: "",
    },
    likedPlaylists: {
        // We will change this to array later
        type: String,
        default: "",
    },
    subscribedArtists: {
        // We will change this to array later
        type: String,
        default: "",
    },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: false,
//     },
//     password: {
//         type: String,
//         required: true,
//         private: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     userName: {
//         type: String,
//         required: true,
//     },
//     likedSongs: {
//         type: String,
//         default: "",
//     },
//     likedPlaylists: {
//         type: String,
//         default: "",
//     },
//     subscribedArtists: {
//         type: String,
//         default: "",
//     },
// });

// const UserModel = mongoose.model('User', UserSchema);

// module.exports = UserModel;