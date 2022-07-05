const express = require("express");
const router = express.Router();
const { getPlaylists, getPlaylist, createPlaylist, addSongsToPlaylist, removeSongsFromPlaylist } = require('../controllers/playlistController');
const { protect } = require("../middlewares/authMiddleWare");


router.route('/').get(protect, getPlaylists).post(protect, createPlaylist);
router.route("/:playlistID").get(protect, getPlaylist).delete(protect, getPlaylist);
router.post("/addSong/:playlistID", protect, addSongsToPlaylist);
router.post("/removeSong/:playlistID", protect, removeSongsFromPlaylist);




module.exports = router;