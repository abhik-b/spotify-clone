const asyncHandler = require('express-async-handler')
const { Song } = require('../models/songModel')
const mongoose = require('mongoose')

const getSongs = asyncHandler(async (req, res) => {
    const songs = await Song.find().select(`-audio`).limit(req.query?.limit)
    res.json(songs);
})
const getSongsForPlayList = asyncHandler(async (req, res) => {
    const songs = await Song.find().select(`title artist _id`)
    res.json(songs);
})


const postSongs = asyncHandler(async (req, res) => {

    const { title, artist } = req.body;
    const file = req.file;
    if (!title || !artist || !file) {
        res.status(400);
        throw new Error('Please enter all fields');
    }
    const song = await Song.create({
        ...req.body, audio: {
            fileID: file.id,
            filename: file.filename,
            mimetype: file.mimetype
        }
    })
    res.json({ message: `Song:${song.title} added successfully` });
    // }))

})


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


const getFile = asyncHandler(async (req, res) => {

    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'fileuploads'
    });

    gfs.find({ filename: req.params.filename }).toArray((err, files) => {
        if (err) {
            res.status(400);
            throw new Error('File not found');
        }
        console.log(files)
        res.set('Content-Type', files[0].contentType);
        gfs.openDownloadStream(files[0]._id).pipe(res);
    })
})

module.exports = { getSongs, postSongs, updateSongs, getFile, getSongsForPlayList };