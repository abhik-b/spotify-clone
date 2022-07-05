const mongoose = require("mongoose");

const ObjectID = mongoose.Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: ObjectID, ref: 'User', required: true },
    songs: [{ type: ObjectID, ref: 'Song', default: [] }]
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
