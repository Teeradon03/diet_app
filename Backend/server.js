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


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());

app.use(session({
  secret: 'Hoiyaaaaaaaaaa',  // Replace with a strong secret key
  resave: false,
  saveUninitialized: true
}));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
//   });
// const isLoggedIn = require('./middleware/isLoggedIn')
// app.use(isLoggedIn);

connectDB();


// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));


const user = require('./routes/userRoute')
const login = require('./routes/login')
const form = require('./routes/formRoute')

app.use('/api/user', user);
app.use('/api/login', login)
app.use('/api/form',form)



app.post('/login', async(req, res) => {
  try{
        req.session.userId = "Test User";
    res.send(`logged in as ${req.session.userId }`);
  }catch(err){
    console.log(err);
  }
});

app.get('/profile', (req, res) => {
  console.log('UserId Session', req.session.userId);
  if (req.session.userId) {
    // User is logged in, access userId from the session
    const userId = req.session.userId;
    res.send(`Profile page for user ${userId}`);
  } else {
    // User is not logged in
    res.send('Please log in');
  }
});



app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`app listening on port ${process.env.PORT}`);
});
