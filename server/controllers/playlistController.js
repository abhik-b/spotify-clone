const asyncHandler = require('express-async-handler')
const Playlist = require('../models/playlistModel')
const User = require('../models/userModel')
const { Song } = require('../models/songModel')

const getPlaylists = asyncHandler(async (req, res) => {
    const playlists = await Playlist.find({ user: req.user._id })
    res.json({ message: `AllPlaylists of user : ${req.user.name}`, playlists });
})

const getPlaylist = asyncHandler(async (req, res) => {
    const playlist = await Playlist.findById(req.params.playlistID)
    const songs = await Song.find({ _id: playlist.songs })
    const user = await User.findOne({ _id: req.user._id })
    if (!playlist) {
        res.status(404)
        throw new Error('Playlist not found')
    }
    res.json({ message: 'Particular Playlist', playlist, playlists: user.playlists, songs });
})


const createPlaylist = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please give a name');
    }
    const playlist = await Playlist.create({ ...req.body, user: req.user._id })
    // const user = await User.findOneAndUpdate({ _id: req.user._id }, { $push: { playlists: playlist._id } }, { new: true })
    res.status(201).json({ message: `Playlist created for ${req.user.name}`, playlist })
})

const deletePlaylist = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please give a name');
    }
    const playlist = await Playlist.findByIdAndDelete(req.params.playlistID)
    // const user = await User.findOneAndUpdate({ _id: req.user._id }, { $push: { playlists: playlist._id } }, { new: true })
    res.status(201).json({ message: `Playlist removed for ${req.user.name}`, playlist })
})


const addSongsToPlaylist = asyncHandler(async (req, res) => {
    const playlist = await Playlist.findById(req.params.playlistID)
    if (!playlist) {
        res.status(404)
        throw new Error('Playlist not found')
    }
    if (!req.body.song || playlist.songs.indexOf(req.body.song) > -1) {
        res.status(400)
        throw new Error('Song already exists in playlist')
    }
    playlist.songs.push(req.body.song)
    await playlist.save()
    res.json({ message: 'Song added to playlist', playlist })
})

const removeSongsFromPlaylist = asyncHandler(async (req, res) => {
    const playlist = await Playlist.findById(req.params.playlistID)
    if (!playlist) {
        res.status(404)
        throw new Error('Playlist not found')
    }
    if (!req.body.song || playlist.songs.indexOf(req.body.song) === -1) {
        res.status(400)
        throw new Error('Song does not exist in playlist')
    }
    let index = playlist.songs.indexOf(req.body.song)
    playlist.songs.splice(index, 1)
    await playlist.save()
    res.json({ message: 'Song removed from playlist', playlist })
})

module.exports = { getPlaylists, getPlaylist, createPlaylist, addSongsToPlaylist, removeSongsFromPlaylist }