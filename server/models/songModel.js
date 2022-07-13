const mongoose = require('mongoose')
// const songSchema=new mongoose.Schema({
//     "title": String,
//   "artist": String,
//   "album": "album",
//   "genre": "genre",
//   "year": "year",
//   "track": "track",
//   "duration": "duration",
//   "bitrate": "bitrate",
//   "size": "size",
//   "file": "file"
// });
const songSchema = new mongoose.Schema({
    "title": {
        type: String,

    },
    "artist": String,
    "source": {
        file: { type: Buffer, required: true },
        filename: { type: String, required: true },
        mimetype: { type: String, required: true }
    }
}, { timestamps: true });

module.exports = { Song: mongoose.model('Song', songSchema), songSchema };