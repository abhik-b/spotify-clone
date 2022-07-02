// @desc Get Songs
// @route Get /api/songs
const getSongs = (req, res) => {
    res.json({ message: "Welcome to the API" });
}


const postSongs = (req, res) => {
    res.json({ message: req.body });
}
const putSongs = (req, res) => {
    res.json({ message: `update ${req.params.id}` });
}
const deleteSongs = (req, res) => {
    res.json({ message: `delete ${req.params.id}` });
}


module.exports = { getSongs, postSongs, putSongs, deleteSongs };