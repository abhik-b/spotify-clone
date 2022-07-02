const asyncHandler = require('express-async-handler')



// @desc Get Songs
// @route Get /api/songs
const getSongs = asyncHandler(async (req, res) => {
    res.json({ message: "Welcome to the API" });
})


const postSongs = asyncHandler(async (req, res) => {
    res.json({ message: req.body });
})
const putSongs = asyncHandler(async (req, res) => {
    res.json({ message: `update ${req.params.id}` });
})
const deleteSongs = asyncHandler(async (req, res) => {
    res.json({ message: `delete ${req.params.id}` });
})


module.exports = { getSongs, postSongs, putSongs, deleteSongs };