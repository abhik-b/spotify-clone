const express = require("express");
const router = express.Router();
const { getSongs, postSongs, putSongs, deleteSongs } = require('../controllers/songController');



router.route('/').get(getSongs).post(postSongs)
router.route("/:id").put(putSongs).delete(deleteSongs);;


module.exports = router;