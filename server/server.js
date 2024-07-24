const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/__databaseName__')
    .then(() => {
        console.log("Connection open!");
    })
    .catch((err) => {
        console.log("ERROR");
    });
  
app.use(express.json())
app.use(cors())

const router = require('./routes/api')
app.use('/api',router)

app.listen(3000, () => {
    console.log("Listening on 3000")
})