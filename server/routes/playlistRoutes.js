const express = require("express");
const router = express.Router();
const { getPlaylists, getPlaylist, getAllPlaylists, createPlaylist, addSongsToPlaylist, removeSongsFromPlaylist } = require('../controllers/playlistController');
const { protect } = require("../middlewares/authMiddleWare");


router.route('/').get(getAllPlaylists).post(protect, createPlaylist);
router.route('/mine/').get(protect, getPlaylists);
router.route("/:playlistID").get(getPlaylist).delete(protect, getPlaylist);
router.post("/addSong/:playlistID", protect, addSongsToPlaylist);
router.post("/removeSong/:playlistID", protect, removeSongsFromPlaylist);




module.exports = router;