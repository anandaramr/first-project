const express = require('express')
const app = express.Router()
const User = require('../models/user')
const Token = require('../models/token')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

app.post('/signup', async (req,res) => {
    const password = await bcrypt.hash(req.body.password,10)
    const user = new User({username: req.body.username, password})

    await user.save()
    .then(() => {
        const accessToken = generateAccessToken(user.username)
        const refreshToken = generateRefreshToken(user.username)
        insertNewToken(refreshToken)
        
        res.status(201).json({ success: true, message: "Signed up successfully", accessToken, refreshToken })
    })
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
        
        insertNewToken(refreshToken)
        res.status(201).json({ accessToken, refreshToken })
    }else{
        res.status(201).json({ message: "Invalid password" })
    }
})

app.post('/refresh', async (req,res) => {
    const token = req.body.token
    if(!token) return res.status(400).json({ message: "Token not found" });
    if(!(await deleteToken(token))) return res.status(401).json({ message: "Authorization failed" });

    jwt.verify(token, process.env.refreshKey, (err, result) => {
        if(err) return res.status(401).json({ message: "Authorization failed" });

        const accessToken = generateAccessToken(result.user)
        const refreshToken = generateRefreshToken(result.user)
        insertNewToken(refreshToken)
        res.status(201).json({ accessToken, refreshToken })
    })
})

app.get('/', authenticate, (req,res) => {
    res.status(200).json({ user: res.user.user })
})

function generateAccessToken(user){
    return jwt.sign({user}, process.env.accessKey, { expiresIn: '15s' })
}

function generateRefreshToken(user){
    return jwt.sign({user}, process.env.refreshKey)
}

function authenticate(req,res,next){
    const authHeader = req.headers.authorization?.split(' ')
    const token = authHeader && authHeader[1]
    if(!token) return res.status(200).json({ message: "Token necessary to authorize" });
        
    jwt.verify(token, process.env.accessKey, (err, response) => {
        if(err) return res.status(401).json({ message: err.message });

        res.user = response
        next()
    })
}

async function insertNewToken(token){
    const newToken = new Token({ token })
    await newToken.save()
}

async function deleteToken(token){
    const result = await Token.deleteOne().where('token').equals(token)
    return result.acknowledged && result.deletedCount==1
}

module.exports = app