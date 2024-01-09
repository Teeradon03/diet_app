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
  secret: 'your-secret-key',  // Replace with a strong secret key
  resave: false,
  saveUninitialized: false
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
const { User } = require("./models/user");
const axios = require("axios");

app.post('/login', async(req, res) => {
  try {
    // const data = req.body;
    // const extractedData = Object.keys(data).map((key) => key.split(":")[0]);
    // const token = extractedData[0];
    //     const params = new URLSearchParams();
    //     params.append('id_token', token);
    //     params.append('client_id', process.env.CHANNELID);
    
    //     const headers = {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     };
    
    //     const decode = await axios.post(
    //       'https://api.line.me/oauth2/v2.1/verify',
    //       params,
    //       { headers }
    //     );
    
    //     const userLineData = {
    //       line_user_id: decode.data.sub,
    //       line_username: decode.data.name,
    //       line_picture_url: decode.data.picture,
    //     };
    
    //     console.log('User Line Data', userLineData);
    
    //     let user = await User.findOne({ line_user_id: decode.data.sub });
    
    //     if (user) {
    //       // Update the existing user data without changing the userId
    //       user = await User.findOneAndUpdate(
    //         { line_user_id: decode.data.sub },
    //         { $set: { ...userLineData } },
    //         { new: true }
    //       );
    //     } else {
    //       // Generate a new userId for a new user
    //       const generateUserId = () => {
    //         const randomNumber = Math.floor(Math.random() * 10000); // Adjust the range as needed
    //         const timestamp = new Date().getTime();
    //         const randomBase36 = randomNumber.toString(36);
    //         const timestampBase36 = timestamp.toString(36);
    //         return `${randomBase36}${timestampBase36}`;
    //       };
    
    //       // Create a new user document
    //       const userId = generateUserId();
    //       user = new User({ ...userLineData, userId });
    //       await user.save();
    //     }
   
        // Set userId in the session
        req.session.userId = '123123';
        console.log(req.session.userId);
        console.log('UserId Session in userController', req.session.userId);
        
        // return res.send({ success: true });
        res.send(`logged in as ${req.session.userId }`);
      } catch (error) {
        console.error('Error:', error);
        return res.status(500).send({ error: 'An unexpected error occurred.' });
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
