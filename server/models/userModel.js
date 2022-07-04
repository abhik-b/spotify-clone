const mongoose = require('mongoose');
const { songSchema } = require('./songModel');

const userSchema = mongoose.Schema({
    name: {
        type: String, required: [true, 'Name is required'],
    },
    email: {
        type: String, required: [true, 'Email ID is required'], unique: true
    },
    password: {
        type: String, required: [true, 'Password is required'],
    },
    gender: {
        type: String, required: [true, 'Gender is required'],
    },
    likedSongs: {
        type: [songSchema], default: [],
    },
    playlists: {
        type: [String], default: [],
    },
    isAdmin: {
        type: Boolean, default: false,
    },

}, {
    timestamp: true,
});

module.exports = mongoose.model('User', userSchema);