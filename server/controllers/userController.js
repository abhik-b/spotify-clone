const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, gender } = req.body;
    if (!name || !email || !password || !gender) {
        res.status(400)
        throw new Error('Please provide all the details')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('Email is registered with a user here')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name, email, password: hashedPassword, gender
    })

    if (user) {
        res.status(201).json({ ...user, token: generateToken(user._id) });
    } else {
        res.status(400);
        throw new Error('Invalid data ')
    }

})


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error('Please provide all the details')
    }

    const user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {
        const { _id, name, gender } = user
        res.json({ user, token: generateToken(user._id) })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
})

const userExists = asyncHandler(async (req, res) => {
    const { email } = req.body.email
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.json({ userExists })
    } else {
        res.json({ userExists: false })

    }
})


const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({ user: req.user });
})

const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

module.exports = { registerUser, loginUser, getCurrentUser, userExists }