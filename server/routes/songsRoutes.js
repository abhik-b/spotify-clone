const express = require("express");
const router = express.Router();
const { getSongs, postSongs, updateSongs, getFile, getSongsForPlayList } = require('../controllers/songController');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')

const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'fileuploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });


router.route('/').get(getSongs).post(upload.single('audio'), postSongs)
router.route("/:id").put(updateSongs).delete(updateSongs);
router.route("/file/:filename").get(getFile)
router.route("/forPlaylists/").get(getSongsForPlayList)


module.exports = router;