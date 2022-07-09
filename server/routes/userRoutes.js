const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getCurrentUser, userExists, editUser } = require('../controllers/userController');
const { protect } = require("../middlewares/authMiddleWare");


router.post('/register/', registerUser)
router.post('/login/', loginUser)
router.get('/me/', protect, getCurrentUser)
router.post("/user-exists/", userExists);
router.put("/edit/", protect, editUser);


module.exports = router;