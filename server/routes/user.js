const express = require('express')
const app = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

app.post('/signup', async (req,res) => {
    const password = await bcrypt.hash(req.body.password,10)
    const user = new User({username: req.body.username, password})

    await user.save()
    .then(result => res.status(201).json({ message: "Signed up successfully" }))
    .catch(err => {
        res.status(401).json({ message: err })
    })
})

app.post('/login', async (req,res) => {
    const username = req.body.username
    const user = await User.findOne().where('username').equals(username)
    if(!user) return res.status(400).json({ message: "User not found" });

    if(await bcrypt.compare(req.body.password, user.password)){
        const accessToken = generateAccessToken(username)
        const refreshToken = generateRefreshToken(username)
        res.status(201).json({ accessToken, refreshToken })
    }else{
        res.status(201).json({ message: "Invalid password" })
    }
})

function generateAccessToken(user){
    return jwt.sign({user}, process.env.accessKey)
}

function generateRefreshToken(user){
    return jwt.sign({user}, process.env.refreshKey)
}


module.exports = app