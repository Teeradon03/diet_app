const express = require("express");
const app = express();
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
const { readdirSync } = require("fs");

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  }),
);

// app.use(cookieParser());

app.use(session({
  secret: 'Hoiyaaa',  // Replace with a strong secret key
  resave: false,
  saveUninitialized: true
}));



connectDB();

// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const user = require('./routes/userRoute')
const login = require('./routes/login')
const form = require('./routes/formRoute');

app.use('/api/user', user);
app.use('/api/login', login)
app.use('/api/form',form)

const { isLoggedIn } = require('./middleware/isLoggedIn');
// app.use(isLoggedIn)



app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`app listening on port ${process.env.PORT}`);
});
