const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController');
const { protect } = require("../middlewares/authMiddleWare");


router.post('/register/', registerUser)
router.post('/login/', loginUser)
router.get('/me/', protect, getCurrentUser)
// router.route("/:id").put(updateUsers).delete(updateUsers);;


module.exports = router;