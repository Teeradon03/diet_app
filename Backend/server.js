const express = require("express");
const app = express();
// middleware
const cors = require("cors");
const bodyParser = require("body-parser");
/// ENV
require("dotenv").config();

// sessio
const session = require("express-session");

// mongodb
const connectDB = require("./db/db");

// route
const { readdirSync } = require("fs");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());
// app.use(session({
//     secret: 'something that very secret',
//     resave: false,
//     saveUninitialized: true
// }))

const authSession = require("./middleware/auth");
app.use(authSession);

connectDB();

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log(`app listening on port ${process.env.PORT}`);
});
