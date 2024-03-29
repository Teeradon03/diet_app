const express = require("express");
const app = express();
const RateLimit = require('express-rate-limit');

// middleware
const cors = require("cors");
const bodyParser = require("body-parser");
/// ENV
require("dotenv").config();
// sessio
const session = require('express-session');
// mongodb
const connectDB = require("./db/db");

// route
const user = require('./routes/userRoute')


const form = require('./routes/formRoute');
const http = require('http')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  cors({
    credentials: true,
    origin: [`${process.env.ORIGIN_HOST}`],
  }),
);

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // max 100 requests per windowMs
});


app.use(session({
  secret: 'Hoiyaaaaaa',  
  resave: false,
  saveUninitialized: true
}));

connectDB();

app.use(limiter);

app.use('/api/user', user);

app.use('/api/form',form)

http.createServer({  
}, app).listen(process.env.PORT || 3000, (req, res) => {
  console.log(`app listening on port ${process.env.PORT}`);
});

