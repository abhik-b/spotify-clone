const express = require("express");
const router = express.Router();
const { getSongs, postSongs, updateSongs } = require('../controllers/songController');



router.route('/').get(getSongs).post(postSongs)
router.route("/:id").put(updateSongs).delete(updateSongs);;


module.exports = router;