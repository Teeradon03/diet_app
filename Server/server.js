
const express = require('express');
const app = express();
// middleware
const cors = require('cors');
const bodyParser = require('body-parser');
/// ENV
require('dotenv').config();

// mongodb
const connectDB = require('./db/db')



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

connectDB()

app.listen(process.env.PORT || 3000, (req,res)  => {
    console.log(`app listening on port ${process.env.PORT}`)
})