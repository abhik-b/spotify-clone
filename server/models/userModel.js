const mongoose = require('mongoose');
const { songSchema } = require('./songModel');

const ObjectID = mongoose.Schema.Types.ObjectId;

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

const accountSchema = mongoose.Schema({
    id_token: {
        type: String, required: [true, 'Token is required'],
    },
    userId: {
        type: ObjectID, ref: 'User', required: true
    }
}, { timestamp: true });

module.exports = { User: mongoose.model('User', userSchema), Accounts: mongoose.model('Accounts', accountSchema) };