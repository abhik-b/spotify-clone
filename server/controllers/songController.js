const asyncHandler = require('express-async-handler')
const { Song } = require('../models/songModel')
const mongoose = require('mongoose')
const formidable = require('formidable')
const fs = require('fs')
// @desc Get Songs
// @route Get /api/songs
const getSongs = asyncHandler(async (req, res) => {
    const songs = await Song.find()
    res.json(songs);
})


const postSongs = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, asyncHandler(async (err, fields, files) => {
        const { title, artist } = fields;
        const { file } = files;
        if (!title || !artist || !file) {
            res.status(400);
            throw new Error('Please enter all fields');
        }
        const file1 = fs.readFileSync(file.filepath)
        const song = await Song.create({
            title, artist, source: {
                file: file1, filename: file.originalFilename, mimetype: file.mimetype
            }
        })
        res.json({ message: `Song:${song.title} added successfully` });
    }))
}


const updateSongs = asyncHandler(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const song = await Song.findById(req.params.id);
        if (!song) {
            res.status(400);
            throw new Error('ID not found');
        }
        switch (req.method) {
            case 'PUT':
                await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
                res.json({ message: `Song updated  : ${req.params.id}` });
                break;
            case 'DELETE':
                await Song.findByIdAndDelete(req.params.id);
                res.json({ message: `Song deleted  : ${req.params.id}` });
                break;
        }

    } else {
        res.status(400);
        throw new Error('ID invalid');
    }
})




// const putSongs = asyncHandler(async (req, res) => {
//     if (mongoose.Types.ObjectId.isValid(req.params.id)) {
//         const song = await Song.findById(req.params.id);
//         if (!song) {
//             console.log(req.method)
//             res.status(400);
//             throw new Error('ID not found');
//         }
//         await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json({ message: `Song updated  : ${req.params.id}` });
//     } else {
//         res.status(400);
//         throw new Error('ID invalid');
//     }
// })
// const deleteSongs = asyncHandler(async (req, res) => {
//     if (mongoose.Types.ObjectId.isValid(req.params.id)) {
//         const song = await Song.findById(req.params.id);
//         if (!song) {
//             console.log('hi')
//             res.status(400);
//             throw new Error('ID not found');
//         }
//         await Song.findByIdAndDelete(req.params.id);
//         res.json({ message: `Song deleted  : ${req.params.id}` });
//     } else {
//         res.status(400);
//         throw new Error('ID invalid');
//     }
// })
module.exports = { getSongs, postSongs, updateSongs };